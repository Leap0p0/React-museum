import s from "./../../index.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { FamousArticlesList } from "../FamousArticlesList/FamousArticlesList";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
import { Navigate } from 'react-router-dom';
import { useState } from "react";

export function MainPage(props) {
  
  const [testquick, setTestquick] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  async function fetchQuickSearch (title) {
    const quick = await FetchQuickSearch.fetchQuickSearch(title);
    setTestquick(quick.objectIDs.slice(0, 50))
    setShouldRedirect(true);
  }
  if (shouldRedirect) {
    return <Navigate to="/searchresult" state={testquick}/>;
  }
  return (
    <>
        <div className=" pt-5 relative">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="">
              <img className="w-[150px] pl-0 md:pl-10 " src="https://i.imgur.com/7gRNUNa.png" alt="logo" />
            </div>
            <div className="pb-[25px] md:pb-0 items-center">
              <ul class="flex">
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="/">Main Page</a>
                </li>
                <li class="mr-6">
                  <a class="text-white hover:text-[#d9d9d96e]" href="/advancedsearch">Advanced Search</a>
                </li>
              </ul>
            </div>
            <div className="">
              <SearchBar onSubmit={fetchQuickSearch} />
            </div>
          </div>
        </div>
        <div>
          <h1 className="bg-black text-center md:text-left font-normal pl-0 md:pl-10 text-[35px] text-white">Famous Articles</h1>
        </div>
        <div className=" bg-black flex">
            {props.highlight && <FamousArticlesList highlight={props.highlight} />}
        </div>
    </>
    );
} 

