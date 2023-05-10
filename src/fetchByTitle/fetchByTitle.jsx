import axios from "axios";

export class FetchQuickSearch {
    static async fetchQuickSearch(titre) {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${titre}`)
        return resultTest.data;
      }
}
