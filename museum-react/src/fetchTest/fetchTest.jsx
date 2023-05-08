import axios from "axios";

export class FetchTest {
    static async fetchTest(id) {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
        return resultTest.data;
      }
}
