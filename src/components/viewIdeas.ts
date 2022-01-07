import { Utils } from "../utils";
import axios from "axios";
import {IdeaEditPayload,Idea} from "../internal";

type customIdeas = Idea<string|number>; //custom type

export class ViewIdeas extends Utils {
    ideasArray: customIdeas[] = []; //Generic interface with array type here
    showOverlayLocal = false;
    constructor() { //shorthand initialization used here
        super();
    }
    private async getIdeas():Promise<customIdeas[]> {
        return await (<any>await axios.get("/getIdeas")).data.ideas;
    }
    async render(data:{ideas:customIdeas[]}) {        
        let container: HTMLElement = document.createElement('div');        
        const actionsTemplate: HTMLTemplateElement = document.createElement('template');
        if(!data.ideas.length) {
            this.ideasArray = await this.getIdeas();
        } else {
            this.ideasArray = data.ideas;
        }
        this.ideasArray.forEach((idea:customIdeas) => {
            let viewIterableContainer: HTMLElement = document.createElement('div');
            viewIterableContainer.className = "viewIterableContainer";
            let ideasTemplate: HTMLTemplateElement = document.createElement('template');
            ideasTemplate.innerHTML = `<div class="ideaContainer">
            <div class="ideaTitle">${idea.title}</div>
            <div class="ideaDescription">${idea.description}</div>
            </div>`;                
            viewIterableContainer?.appendChild(document.importNode(ideasTemplate.content,true));
            if(this.state.getRole == "Admin") {
                actionsTemplate.innerHTML = `<div data-id="${idea.ideaUUID}" class="actions">
                    <div>
                        <i class="far fa-thumbs-up fa-lg like"></i><span class="likeCount">${idea.likes}</span>
                    </div>
                    <button type="button" class="approve">Approve</button>
                    <button type="button" class="reject">Reject</button>
                    <button type="button" class="shortlist">Shortlist</button>
                </div>`;                
            }   
            viewIterableContainer?.appendChild(document.importNode(actionsTemplate.content,true));
            container?.append(viewIterableContainer);
        });
        const welcomeText = document.createElement('div');
        welcomeText.innerHTML = `<div class="welcomeHeader">
        <center><h3>Welcome ${this.state.getUserName}</h3></center></div>`;
        this.cleanUp();
        document.querySelector('header')?.appendChild(document.importNode((document.querySelector('#headerTemplate')! as HTMLTemplateElement).content,true));
        document.querySelector('#mainContainer')?.appendChild(welcomeText);
        document.querySelector('.welcomeHeader')?.insertAdjacentElement("afterend",container);
        if(this.state.getRole!= "Admin") {
            const backButton = document.createElement('div');
            backButton.className = "viewIdeasPage";
            backButton.innerHTML = `<center><button type="button" class="back">Go Back</button></center>`;
            document.querySelector('#mainContainer')?.insertAdjacentElement("beforeend",backButton);
        }
        !this.showOverlayLocal && this.showHideLoader(false);
        this.setupListeners();
        this.signOutListener();
    }
    private setupListeners() {
        Array.from(document.querySelectorAll('.approve')).forEach((el:Element)=> {
            el.addEventListener('click',this.approveIdea.bind(this));
        });
        Array.from(document.querySelectorAll('.reject')).forEach((el:Element)=> {
            el.addEventListener('click',this.rejectIdea.bind(this));
        });
        Array.from(document.querySelectorAll('.shortlist')).forEach((el:Element)=> {
            el.addEventListener('click',this.shortlistIdea.bind(this));
        });
        Array.from(document.querySelectorAll('.like')).forEach((el:Element)=> {
            el.addEventListener('click',this.likeIdea.bind(this));
        });
        document.querySelector('.back')?.addEventListener('click',()=>this.gotoLanding());
    }
    private editIdeasRecord(url:string,e:Event,likeCount?:number,like?:boolean) {
        const postBody:IdeaEditPayload = {
            ideaUUID: ((<HTMLElement>e.target)!.parentElement!.getAttribute('data-id')! || (<HTMLElement>e.target)!.parentElement!.parentElement!.getAttribute('data-id')!), //added ! to make sure the element won't return null or undefined
            userName: this.state.getUserName
        }
        if(like) {
            postBody.likes = likeCount;
        } else {
            this.showOverlayLocal = true;
            this.showModal("Your actions have been recorded");
        }
        //typecast axios response type
        axios.put(url,postBody,{'headers':this.headers})
        .then((resp)=>this.render(<unknown>resp.data as {ideas:customIdeas[]})) //change axios response to unknown and then to the desired type
        .catch((err:Error)=>console.log(err));
    }
    private approveIdea(e:Event) {
        this.editIdeasRecord("/approveIdea",e);
    }
    private rejectIdea(e:Event) {
        this.editIdeasRecord("/rejectIdea",e);
    }
    private shortlistIdea(e:Event) {
        this.editIdeasRecord("/shortlistIdea",e);
    }
    private likeIdea(e:Event) {
        let likeCount = Number((<HTMLElement>e.target)?.parentElement?.querySelector('.likeCount')?.innerHTML);
        likeCount++;
        (<HTMLElement>e.target)!.parentElement!.querySelector('.likeCount')!.innerHTML = String(likeCount);
        this.editIdeasRecord("/likeIdea",e,likeCount,true);
    }
}