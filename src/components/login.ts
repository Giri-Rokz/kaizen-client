import { LandingPage,Payload,ViewIdeas } from "../internal";
import { Utils } from "../utils";
import axios from 'axios';
import logo from '../images/kaizen.jpg'

export class Login extends Utils{
    userName!: string | number;
    signUpFlow = false;
    render() {        
        const template: HTMLTemplateElement =  document.createElement('template');
        template.innerHTML = `        
        <div id="loginPage">
            <center>
                <div class="title">                                        
                    <img src="" alt="logo" class="kaizenLogo">
                    <h3>KAIZEN</h3>
                </div>
            </center>
            <div id="signInForm">
                <form> 
                    <div class="formElement">
                        <input type="text" tabindex="0" placeholder="Username" name="username" id="username" value="">
                    </div>
                    <div class="roleContainer formElement">
                        <select name="role" id="role">
                            <option value="0" selected>Select your role</option>
                            <option value="1">Agent</option>    
                            <option value="2">Admin</option>
                        </select>
                    </div>
                    <div class="formElement">
                        <input type="text" placeholder="Password" name="password" id="password" value="">
                    </div>
                    <center><div class="error" style="display:none">Please enter valid credentials</div></center>
                    <button type="button" id="signIn">Sign In</button>
                    <button type="button" id="createAccount">Create New Account</button>
                    <div class="newUser">
                        <center>New User? <a href="javascript:void(0)" id="signUp">Sign Up</a> here</center>
                    </div>
                </form>
            </div>
        </div>`;
        this.appendToMain(template);
        document.querySelector('.kaizenLogo')?.setAttribute("src",logo);        
        this.setFavIcon();
        this.showHideDOM(['.roleContainer','#createAccount'],false);                
        this.setupListeners();
    }
    private setFavIcon() {
        const favicon = document.createElement('link');
        favicon.setAttribute("rel","icon");
        favicon.setAttribute("type","image/jpg");
        favicon.setAttribute("href",logo);
        document.head.append(favicon);
    }
    private setupListeners() {
        document.querySelector('#signUp')?.addEventListener('click',this.signUp.bind(this));
        document.querySelector('#signIn')?.addEventListener('click',this.signIn.bind(this));
        document.querySelector('#createAccount')?.addEventListener('click',this.createAccount.bind(this));
    }
    private createAccount() {
        this.showHideLoader(true);
        const postBody:Payload<string|number> = {
            username: (<HTMLInputElement>document.querySelector('#username'))?.value,
            password: (<HTMLInputElement>document.querySelector('#password'))?.value,
            role: (<HTMLInputElement>document.querySelector('#role'))?.value,
        };
        this.userName = postBody.username;
        axios.post('/signUp',postBody,{'headers':this.headers})
        .then(resp=>{
            this.showHideLoader(false);
            if(resp && resp.data.role=="1") {
                new LandingPage(this.userName).render();
            } else {
                new ViewIdeas("Admin",this.userName).render({ideas:[]});        
            }
        })
        .catch(err=>{
            console.log(err);
            this.showHideLoader(false);
        });
    }
    private signUp() {        
        this.signUpFlow = true;
        this.showHideDOM(['.roleContainer','#createAccount'],true);
        this.showHideDOM(['#signIn','.newUser'],false);
    }
    private signIn() {
        this.showHideLoader(true);
        const postBody:Payload<string|number> = {
            username: (<HTMLInputElement>document.querySelector('#username'))?.value,
            password: (<HTMLInputElement>document.querySelector('#password'))?.value
        };
        axios.post<any>('/signIn',postBody,{'headers':this.headers})//Axios response type would be of type AxiosResponse<any>
        .then(resp=>{
            if(document.querySelector('.error')) {
                this.showHideDOM(['.error'],false);
            }
            this.userName = resp.data.user.username;
            this.showHideLoader(false);
            if(resp && resp.data.user.role=="1") {                
                new LandingPage(this.userName).render();
            } else {
                new ViewIdeas("Admin",this.userName).render({ideas:[]});        
            }
        })
        .catch(err=>{            
            console.log(err);
            this.showHideDOM(['.error'],true);
            this.showHideLoader(false);
        });
    }
}