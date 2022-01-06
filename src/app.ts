import axios from 'axios';
import './styles/index.scss';
import { State } from "./internal";

export class App {
    private state = State.getInstance();
    launchApp() {
        this.state.handleRoute();
    }
}
axios.defaults.baseURL = 'https://kaizenserver.herokuapp.com/';
//axios.defaults.baseURL = 'http://localhost:5000/';
new App().launchApp();