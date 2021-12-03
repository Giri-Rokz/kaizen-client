import { Utils } from "../utils";
import {Idea} from '../internal';
import axios from "axios";
import {v4 as uuidv4} from "uuid";
import { Validate } from "../interfaces/validateInterface";

export class SubmitIdea extends Utils{    
    constructor(public userName:string|number) {
        super();
    }
    render() {
        this.cleanUp();
        const submitIdeaTemplate: HTMLTemplateElement = document.createElement('template');
        submitIdeaTemplate.innerHTML = `<div id="submitIdeaContainer">
            <center><h3>Submit your idea</h3></center>
            <div class="inputContainer">
                <div>
                    <center><input type="text" placeholder="Title" name="title" id="title"></center>
                </div>
                <div>
                    <center><textarea placeholder="Description" name="description" id="description"></textarea>
                </div>
                <div class="actionDiv">
                    <center><button class="submit">Submit</button></center>
                    <center><button class="goback">Go Back</button></center>
                </div>
            </div>
        </div>`;    
        this.appendToMain(submitIdeaTemplate);
        this.setupListeners();
    }
    private setupListeners() {
        document.querySelector('.submit')?.addEventListener('click',this.submit.bind(this));
        document.querySelector('.goback')?.addEventListener('click',()=>this.gotoLanding(this.userName));
    }
    private validate():boolean {
        const titleValidation: Validate = {
            value: (document.querySelector('#title')! as HTMLInputElement).value,
            required: true
        }
        const descriptionValidation: Validate = {
            value: (document.querySelector('#description')! as HTMLInputElement).value,
            required: true
        }
        return this.validateData([titleValidation,descriptionValidation]);
    }
    private submit() {
        if(this.validate()) {
            if(document.querySelector('.error')) {
                this.showHideDOM(['.error'],false);
            }
            const payload:Idea<string|number> = {
                title: (<HTMLInputElement>document.querySelector('#title'))?.value,
                description: (<HTMLInputElement>document.querySelector('#description'))?.value,
                submitted_by: this.userName,
                ideaUUID: uuidv4(),
                likes: 0
            }
            axios.post('/submitIdea',payload,{'headers':this.headers})
            .then(()=>{
                this.showModal("Hurray! Your idea has been submitted successfully!");
                (<HTMLInputElement>document.querySelector('#title'))!.value = "";
                (<HTMLInputElement>document.querySelector('#description'))!.value = "";
            })
            .catch(err=>console.log(`Error in submitting idea : ${err}`));
        } else {
          this.printError();
        }
    }
    private printError() {
        if(!document.querySelector('.error')) {
            document.querySelector('.actionDiv')?.insertAdjacentHTML('beforebegin',`<div class="error"><center>Please enter all values</center></div>`);
        }
    }
}