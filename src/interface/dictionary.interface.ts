interface Definition {
  definition: string;
}

interface Phonetic {
  audio: string;
}

export interface Meaning {
  definitions: Definition[];
  partOfSpeech: string;
}

export interface ApiResponse {
  title: string;
  body?: string;
  meanings: Meaning[];
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  pronunciation?: string;
  sourceUrls: string[];
}
