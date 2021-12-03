import { Validate } from "./interfaces/validateInterface";
import { LandingPage } from "./internal";

export class Utils {
    headers = {
        'Content-Type': 'application/json'
    }
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
    protected appendToMain(template:HTMLTemplateElement) {
        document.querySelector('#mainContainer')?.appendChild(document.importNode(template.content,true));
    }
    protected validateData(items:Validate[]): boolean {
        let isValid = true;        
        items.forEach((item: Validate)=> {
            if(item.required) {
                isValid = isValid && item.value.trim().length != 0
            }
        })
        return isValid;
    }
    protected gotoLanding(name: string|number) {
        new LandingPage(name).render();
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