import axios from "axios";

export class FetchHighlight {
    static async fetchHighlight() {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=isHighlight=true`)
        return resultTest.data;
      }
}
