import axios from "axios";

export class FetchByYear {
    static async fetchByYear(year) {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?dateBegin=${year}&dateEnd=${year}&q=cat`)
        return resultTest.data;
      }
}
