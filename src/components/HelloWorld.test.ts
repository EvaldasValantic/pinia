import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import Hello from "./HelloWorld.vue";
import {useCounterStore} from "../stores/counter";

it("should mount component", async () => {

  expect(Hello).toBeTruthy();

  const wrapper = mount(Hello, {
    global: {
      plugins: [createTestingPinia({
        stubActions: false,
        initialState: {
          count: 2
        },
      })],
    },
    props: {
      msg: "Hello Vue 3 + TypeScript + Vite",
    },
  });

  const store = useCounterStore() // uses the testing pinia!
  store.increment()
  store.increment()
  expect(store.increment).toHaveBeenCalledTimes(2)

  expect(store.count).toBe(2)


  expect(wrapper.text()).toContain("Hello Vue 3 + TypeScript + Vite");

  // expect(wrapper.html()).toMatchSnapshot();

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('3')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('4')
});
