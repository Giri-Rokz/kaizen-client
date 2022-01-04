import axios from 'axios';
import './styles/index.scss';
import { State } from "./internal";

export class App {
    private state = State.getInstance();
    launchApp() {
        this.setupListeners();
        this.state.handleRoute();
    }
    setupListeners() {
        document.querySelector('#signOut')?.addEventListener('click',()=>{
            this.state.setLoginState = false;
            window.history.pushState(this.state,"Login","/");
            this.state.handleRoute();
        });
    }
}
axios.defaults.baseURL = 'https://kaizenserver.herokuapp.com/';
//axios.defaults.baseURL = 'http://localhost:5000/';
new App().launchApp();