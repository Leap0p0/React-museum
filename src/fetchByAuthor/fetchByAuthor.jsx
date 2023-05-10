import axios from "axios";

export class FetchByAuthor {
    static async fetchByAuthor(author) {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=artist:${author}`)
        return resultTest.data;
      }
}
