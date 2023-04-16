import { Component, createEffect, createSignal } from "solid-js";
import { data } from "../userState";

const KeywordBox: Component = () => {
  const [audio, setAudio] = createSignal<HTMLAudioElement>(new Audio());

  const handleClick = () => {
    setAudio(new Audio(data()?.phonetics[0]?.audio));
    audio().play();
  };

  return (
    <div class="flex justify-between items-center font-serif mb-4">
      <div class="p-2">
        <p class="text-4xl font-bold mb-2 tracking-wider text-gray-900 dark:text-gray-50">
          {data()?.word}
        </p>
        <span class="text-xl font-mono text-violet-700 dark:text-violet-400">
          {data()?.phonetic}
        </span>
      </div>
      <div>
        <button
          onClick={handleClick}
          class="p-3 bg-violet-400 hover:bg-violet-300 transition-colors rounded-full text-center"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="text-violet-700 w-8 h-8"
          >
            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default KeywordBox;
