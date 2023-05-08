import s from "./index.css";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FamousArticlesItem } from "./components/FamousArticlesItem/FamousArticlesItem"
import { FetchTest } from "./fetchTest/fetchTest";
import { FetchHighlight } from "./fetchHighlight/fetchHighlight";
import { FamousArticlesList } from "./components/FamousArticlesList/FamousArticlesList";



function App() {
  const [highlight, setHighlight] = useState();

  async function fetchHighlight () {
    const resul = await FetchHighlight.fetchHighlight();
    setHighlight(resul.objectIDs.slice(0, 50 ));
  }

  useEffect( () => {
    fetchHighlight();
  }, []);

  console.log("***", highlight);
  return (
    <div className="bg-black flex flex-col p-[10px] h-screen">
        <div className=" pt-5 relative">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <img className="w-[150px] pl-10 " src="https://i.imgur.com/7gRNUNa.png" alt="logo" />
            </div>
            <div className="items-center mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-normal pl-10 text-[35px] text-white">Famous Articles</h1>
        </div>
        <div className=" bg-black flex">
            {highlight && <FamousArticlesList highlight={highlight} />}
        </div>
    </div>
  );
}

export default App;
