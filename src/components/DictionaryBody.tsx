import { Component, For, lazy } from "solid-js";
import { data } from "../userState";

const KeywordBox = lazy(() => import("./KeywordBox"));
const MeaningBox = lazy(() => import("./MeaningBox"));

const DictionaryBody: Component = () => {
  return (
    <section class="py-2">
      <KeywordBox />
      <For each={data()?.meanings}>
        {(meaning, index) => <MeaningBox meaning={meaning} />}
      </For>
    </section>
  );
};

export default DictionaryBody;
