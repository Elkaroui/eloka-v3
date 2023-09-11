import "./assets/main.css";
import "./assets/tailwind.css";

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store"; // Make sure the path is correct

const app = createApp(App);

// Use the store
app.use(store);

app.mount("#app");
