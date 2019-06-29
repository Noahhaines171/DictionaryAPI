export class DictionaryResponse {
    response: {
        searchTerm: string,
        values: [{
            synonyms: string[],
            antonyms: string[],
            isOffensive: boolean,
            wordClass: string,
            definition: string
        }]
    };
}
