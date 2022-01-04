import { Validate } from "./interfaces/validateInterface";
import { State } from "./internal";

export class Utils {
    headers = {
        'Content-Type': 'application/json'
    }
    protected state = State.getInstance();
    protected cleanUp() {
        while (document.querySelector('#mainContainer')?.firstChild) {
            document.querySelector('#mainContainer')?.removeChild(document.querySelector('#mainContainer')?.firstChild!);
        }
    }
    protected showHideDOM(selector:string[],changeDom:boolean) {
        for(let i in selector) {
            (<HTMLDivElement>document.querySelector(selector[i])).style.display = changeDom ? 'block' : 'none';
        }
    }
    protected showHideHeader(selector:string,changeDom:boolean) {
        (<HTMLDivElement>document.querySelector(selector)).style.display = changeDom ? 'flex' : 'none';
    }
    protected appendToMain(template:HTMLTemplateElement) {
        document.querySelector('#mainContainer')?.appendChild(document.importNode(template.content,true));
    }
    protected validateData(items:Validate[]): boolean {
        let isValid = true;        
        items.forEach((item: Validate)=> {
            if(item.required) {
                isValid = isValid && item.value.trim().length != 0
            }
            if(item.selectValueCheck) {
                isValid = isValid && item.value.trim() != "0";
            }
        })
        return isValid;
    }
    protected printError(selector: string) {
        if(!document.querySelector('.error')) {
            document.querySelector(selector)?.insertAdjacentHTML('beforebegin',`<div class="error"><center>Please enter all values</center></div>`);
        }
    }
    protected gotoLanding() {
        window.history.pushState(this.state,"Landing Page","/#/landingPage");
        this.state.handleRoute();
    }
    protected showModal(content: string) {
        document.querySelector('.modal-content')!.innerHTML = content;
        document.querySelector('.closeModal')?.addEventListener('click',()=>{
            this.showHideDOM(['#modal','#overlay'],false);
        });
        this.showHideDOM(['#modal','#overlay'],true);
    }
    protected showHideLoader(val: boolean) {
        if(val) {
            this.showHideDOM(['.fa-3x','#overlay'],true);
        } else {
            if(document.querySelector('.fa-3x') && document.querySelector('#overlay')) {
                this.showHideDOM(['.fa-3x','#overlay'],false);
            }
        }
    }
}