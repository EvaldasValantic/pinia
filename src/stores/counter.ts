import { defineStore, acceptHMRUpdate } from "pinia"
import { Counter } from "./counter.d"

export const useCounterStore = defineStore("counter", {
    state: () : Counter => {
        return {
            count: 0
        }
    },
    getters: {
        amount: (state) => state.count
    },
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    }
})

if(import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}