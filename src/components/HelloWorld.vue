<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import counterDisplay from "./counterDisplay.vue";

defineProps<{ msg: string }>();

const { increment, decrement } = mapActions(useCounterStore, [
  "increment",
  "decrement",
]);

const counter = useCounterStore();

const { count } = storeToRefs(counter);
</script>

<template>
  <h1>{{ msg }}</h1>
  !
  <p>{{ count }}</p>

  <button @click="increment()">INCREMENT TO COUNTER</button>
  <br />
  <br />
  <button @click="decrement()">DECREMENT TO COUNTER</button>

  <br />

  <counterDisplay/>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
