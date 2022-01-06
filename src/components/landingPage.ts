import { Utils } from "../internal";

export class LandingPage extends Utils {
    constructor() {
        super();        
    }
    render() {
        this.showHideLoader(false);
        this.cleanUp();
        document.querySelector('header')?.appendChild(document.importNode((document.querySelector('#headerTemplate')! as HTMLTemplateElement).content,true));
        const landingTemplate: HTMLTemplateElement = document.createElement('template');
        landingTemplate.innerHTML = `<div id="landingContainer">
            <center><h3>Welcome ${this.state.getUserName}</h3></center>
            <center><div>What would you like to do today ?</div></center>
            <div class="cardContainer">
                <button class="viewIdeas">View Recent Ideas</button>
                <button class="submitIdea">Submit an Idea</button>
            </div>
        </div>`;
        this.appendToMain(landingTemplate);
        this.setupListeners();
        this.signOutListener();
    }
    private setupListeners() {
        document.querySelector('.viewIdeas')?.addEventListener('click',this.goToViewIdeas.bind(this));
        document.querySelector('.submitIdea')?.addEventListener('click',this.submitIdea.bind(this));
    }
    private goToViewIdeas() {
        this.showHideLoader(true);
        window.history.pushState(this.state,"View Ideas","/#/viewIdeas");
        this.state.handleRoute();
    }
    private submitIdea() {
        window.history.pushState(this.state,"Submit Idea","/#/submitIdea");
        this.state.handleRoute();
    }
}