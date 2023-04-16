import { createSignal } from "solid-js";
import { ApiResponse } from "./interface/dictionary.interface";

export const [data, setData] = createSignal<ApiResponse | null>(null);
export const [darkMode, setDarkMode] = createSignal<boolean>(false);
