import { Component, For } from "solid-js";
import { Meaning } from "../interface/dictionary.interface";

interface Props {
  meaning: Meaning;
}

const MeaningBox: Component<Props> = (props) => {
  return (
    <div class="p-2 font-serif mb-2">
      <div class="relative mb-3 py-6">
        <div class="w-full h-[1px] bg-stone-300 dark:bg-stone-700"></div>
        <p class="absolute top-0 py-2 pr-4 bg-slate-100 dark:bg-stone-950 font-bold text-lg dark:text-slate-50">
          {props?.meaning?.partOfSpeech}
        </p>
      </div>
      <p class="text-gray-500 text-sm mb-4 dark:text-gray-400">Meaning</p>
      <ul class="list-disc list-inside text-gray-900 dark:text-gray-100 pl-4">
        <For each={props?.meaning?.definitions}>
          {(definition, index) => <li>{definition?.definition}</li>}
        </For>
      </ul>
    </div>
  );
};

export default MeaningBox;
