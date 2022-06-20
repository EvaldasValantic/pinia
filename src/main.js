import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");
const last = (arr) => {
    return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last(["one", "two", "three"]);
console.log(l, l2);
l.split("");
//# sourceMappingURL=main.js.map