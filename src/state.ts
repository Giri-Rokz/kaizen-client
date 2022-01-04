import { Login,ViewIdeas,LandingPage,SubmitIdea } from "./internal";

export class State {    
    private static instance: State;
    private username: string|number = "";
    private role: string = "";
    private loggedIn: boolean = false;    
    private constructor() { //makes sure that the class remains a singleton
        
    }
    static getInstance() {
        if(this.instance) {
            return this.instance;
        }
        this.instance = new State();
        return this.instance;
    }
    set setLoginState(loginState: boolean) {
        this.loggedIn = loginState;
    }
    get getLoginState() {
        return this.loggedIn;
    }
    set setUserName(name: string|number) {
        this.username = name;
    }    
    get getUserName() {
        return this.username;
    }
    set setRole(role: string) {
        this.role = role;
    }
    get getRole() {
        return this.role;
    }
    handleRoute() {
        const currentRoute = this.getRoute();        
        switch(currentRoute) {
            case '#/viewIdeas':
                if(this.getLoginState) {
                    new ViewIdeas().render({ideas:[]});
                } else {
                    window.history.pushState(this,"Login page","/");
                    new Login().render();
                }
                break;
            case '#/landingPage':
                if(this.getLoginState) {
                    new LandingPage().render();
                } else {
                    window.history.pushState(this,"Login page","/");
                    new Login().render();
                }
                break;                
            case '#/submitIdea':
                if(this.getLoginState) {
                    new SubmitIdea().render();
                } else {
                    window.history.pushState(this,"Login page","/");
                    new Login().render();
                }
                break;                
            default:
                new Login().render();
                break;
        }
    }
    getRoute() {
        return window.location.hash;
    }
    /*authGuard(Component: ()=>void) {
        if(this.getLoginState) {
            Component();
        } else {
            new Login().render();
        }
    }*/
}