import { Router } from "./index";
import axios from 'axios';
import './styles/index.scss';

export class App {
    launchApp() {
        new Router().handleRoute();
    }
}
axios.defaults.baseURL = 'https://kaizenserver.herokuapp.com/';
//axios.defaults.baseURL = 'http://localhost:5000/';
new App().launchApp();
