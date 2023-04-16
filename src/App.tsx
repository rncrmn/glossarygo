import { Component, onMount, Show } from "solid-js";
import { Header, DictionaryForm, DictionaryBody } from "./components/";
import { data, darkMode, setDarkMode } from "./userState";

const App: Component = () => {
  onMount(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  });

  return (
    <div class={darkMode() ? "dark" : ""}>
      <div class="bg-slate-100 w-full min-h-screen px-6 flex flex-col justify-center items-center md:px-0 dark:bg-stone-950">
        <div class="max-w-[600px] w-full m-auto py-2">
          <Header />
          <DictionaryForm />
          <Show when={data()}>
            <DictionaryBody />
          </Show>
        </div>
      </div>
    </div>
  );
};

export default App;
