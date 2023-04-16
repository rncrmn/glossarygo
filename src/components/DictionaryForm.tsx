import { Component, createSignal } from "solid-js";
import axios from "axios";
import { setData } from "../userState";

const DictionaryForm: Component = () => {
  const [keyword, setKeyword] = createSignal<string>("");

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword()}`
      );
      setData(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section class="py-2">
      <form onSubmit={handleSubmit}>
        <div class="relative w-full">
          <input
            type="text"
            id="search-dropdown"
            class="block py-3 px-10 w-full font-serif text-gray-900 tracking-widest dark:text-white text-sm bg-white rounded-full shadow-sm dark:bg-stone-900"
            placeholder="press enter after typing the keyword"
            value={keyword()}
            onInput={(e) => setKeyword((e.target as HTMLInputElement).value)}
            required
          />
          <button type="submit" class="absolute top-0 left- p-3.5">
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-violet-700 dark:text-violet-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default DictionaryForm;
