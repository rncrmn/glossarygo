import { Component } from "solid-js";
import { data } from "../userState";

const SourceBox: Component = () => {
  return (
    <section class="py-3 mt-5 border-t-[1px] border-stone-300 dark:border-stone-700">
      <p class="text-xs text-gray-500 dark:text-gray-400">
        <strong>Source:</strong>{" "}
        <a
          href={data()?.sourceUrls[0]}
          class="text-violet-700 dark:text-violet-400"
          rel="nofollow"
          target="_blank"
        >
          {data()?.sourceUrls[0]}
        </a>
      </p>
    </section>
  );
};

export default SourceBox;
