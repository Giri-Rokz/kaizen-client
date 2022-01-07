import { Validate } from "./interfaces/validateInterface";
import { State } from "./internal";

export class Utils {
    headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
    protected state = State.getInstance();
    protected cleanUp() {
        while (document.querySelector('#mainContainer')?.firstChild) {
            document.querySelector('#mainContainer')?.removeChild(document.querySelector('#mainContainer')?.firstChild!);
        }
        while(document.querySelector('header')?.firstChild) {
            document.querySelector('header')?.removeChild(document.querySelector('header')?.firstChild!);
        }
    }
    protected showHideDOM(selector:string[],changeDom:boolean) {
        for(let i in selector) {
            (<HTMLDivElement>document.querySelector(selector[i])).style.display = changeDom ? 'block' : 'none';
        }
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
    protected signOutListener() {
        document.querySelector('#signOut')?.addEventListener('click',()=>{
            this.state.setLoginState = false;
            this.state.setRole = "";
            this.state.setUserName = "";
            window.history.pushState(this.state,"Login","/");
            this.state.handleRoute();
        });
    }
}