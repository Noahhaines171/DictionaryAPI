export class DictionaryResponse {
    response: {
        word: string,
        synonyms: string[],
        antonyms: string[],
        isOffensive: boolean,
        wordClass: string,
        definition: string
    };
}
