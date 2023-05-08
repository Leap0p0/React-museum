import s from "./index.css";
import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FamousArticlesItem } from "./components/FamousArticlesItem/FamousArticlesItem"
import { FetchTest } from "./fetchTest/fetchTest";
import { FetchHighlight } from "./fetchHighlight/fetchHighlight";
import { FamousArticlesList } from "./components/FamousArticlesList/FamousArticlesList";
import { Routes, Route } from "react-router-dom";



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
        <Routes>
          <Route path="/" element= {<SearchBar />} />
          <Route path="/test" element={highlight && <FamousArticlesList highlight={highlight} />}/>
        </Routes>
        <div className=" pt-5 relative">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <img className="w-[150px] pl-10 " src="https://i.imgur.com/7gRNUNa.png" alt="logo" />
            </div>
            <div className="items-center">
              <ul class="flex">
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="#">Main Page</a>
                </li>
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="/test">Advanced Search</a>
                </li>
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="#">Link</a>
                </li>
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="#">Disabled</a>
                </li>
              </ul>
            </div>
            <div className="">
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
