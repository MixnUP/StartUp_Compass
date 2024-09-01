import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import JQuery from "jquery";

window.$ = window.JQuery = JQuery;

import "popper.js";
import "./assets/app.scss";

createApp(App).use(router).mount("#app");
