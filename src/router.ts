/*import { Login,ViewIdeas,LandingPage,SubmitIdea,State } from "./internal";

export class Router {
    private state = State.getInstance();
    handleRoute() {
        const currentRoute = this.getRoute();        
        switch(currentRoute) {
            case '/viewIdeas':
                if(this.state.getLoginState) {
                    new ViewIdeas().render({ideas:[]});
                } else {
                    new Login().render();
                }
                break;
            case '/landingPage':
                this.authGuard(new LandingPage().render);
                break;                
            case '/submitIdea':
                this.authGuard(new SubmitIdea().render);
                break;                
            default:
                new Login().render();
                break;
        }
    }
    getRoute() {
        return window.location.pathname;
    }
    authGuard(Component: ()=>void) {
        if(this.state.getLoginState) {
            Component();
        } else {
            new Login().render();
        }
    }
}*/