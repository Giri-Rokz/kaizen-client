import { Utils,ViewIdeas,SubmitIdea } from "../internal";

export class LandingPage extends Utils {
    constructor(public userName:string|number) {
        super();
    }
    render() {
        this.showHideLoader(false);
        this.cleanUp();
        const landingTemplate: HTMLTemplateElement = document.createElement('template');
        landingTemplate.innerHTML = `<div id="landingContainer">
            <center><h3>Welcome ${this.userName}</h3></center>
            <center><div>What would you like to do today ?</div></center>
            <div class="cardContainer">
                <button class="viewIdeas">View Recent Ideas</button>
                <button class="submitIdea">Submit an Idea</button>
            </div>
        </div>`;
        this.appendToMain(landingTemplate);
        this.setupListeners();
    }
    private setupListeners() {
        document.querySelector('.viewIdeas')?.addEventListener('click',this.goToViewIdeas.bind(this));
        document.querySelector('.submitIdea')?.addEventListener('click',this.submitIdea.bind(this));
    }
    private goToViewIdeas() {
        new ViewIdeas("Agent",this.userName).render({ideas:[]});
    }
    private submitIdea() {
        new SubmitIdea(this.userName).render();
    }
}