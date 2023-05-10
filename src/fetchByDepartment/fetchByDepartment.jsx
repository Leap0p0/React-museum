import axios from "axios";

export class FetchByDepartment {
    static async fetchByDepartment(department) {
        const resultTest = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=${department}&q=cat`)
        return resultTest.data;
      }
}
