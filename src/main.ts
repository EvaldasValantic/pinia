import { createApp } from "vue"
import App from "./App.vue"

createApp(App).mount("#app")

const last  = <T>(arr: T[]) => {
    return arr[arr.length - 1];
}

const l = last([1,2,3])

const l2 = last(["one", "two", "three"])

console.log(l, l2);

const makeFullName = <T extends {firstName: string, lastName: string}>(obj:T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

const v4 = makeFullName({
    firstName: "Bob",
    lastName: "Junior",
    age: 15,
})

interface Tab<T> {
    id: string;
    position: number;
    data: T;
}

type NumberTab = Tab<number>;
type NumberTab = {
    id: string,
    position: number;
    data: number;
}