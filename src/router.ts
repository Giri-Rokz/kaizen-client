//import { ViewIdeas } from "./components/viewIdeas";
import { Login } from "./internal";

export class Router {
    handleRoute() {
        const currentRoute = this.getRoute();
        switch(currentRoute) {
            case '/viewIdeas':
                //new ViewIdeas("Admin").render();
                break;
            default:
                new Login().render();
                break;
        }
    }
    getRoute() {
        return window.location.pathname;
    }
}