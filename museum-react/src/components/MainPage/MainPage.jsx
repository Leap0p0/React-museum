import s from "./../../index.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { FamousArticlesList } from "../FamousArticlesList/FamousArticlesList";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";

export function MainPage(props) {
  
  const [testquick, setTestquick] = useState([]);

  async function fetchQuickSearch (title) {
    const quick = await FetchQuickSearch.fetchQuickSearch(title);
    setTestquick(quick.objectIDs.slice(0, 50))
  }

    console.log("resultat search : ", testquick);
    return (
    <>
        <div className=" pt-5 relative">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <img className="w-[150px] pl-10 " src="https://i.imgur.com/7gRNUNa.png" alt="logo" />
            </div>
            <div className="items-center">
              <ul class="flex">
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="/">Main Page</a>
                </li>
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="/searchresult">Advanced Search</a>
                </li>
              </ul>
            </div>
            <div className="">
              <SearchBar onSubmit={fetchQuickSearch} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-normal pl-10 text-[35px] text-white">Famous Articles</h1>
        </div>
        <div className=" bg-black flex">
            {props.highlight && <FamousArticlesList highlight={props.highlight} />}
        </div>
    </>
    );
} 

