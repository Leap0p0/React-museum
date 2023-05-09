import s from "./../../index.css";
import { useEffect, useState } from "react";
import { FetchTest } from "../../fetchTest/fetchTest";
import { NavLink, Navigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
  
export function Details(props) {
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
            <div className="relative container cursor-pointer w-[300px]">
                <img className="rounded-[10px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png" alt="test" />
                <div className="title absolute mt-[-40px] h-[40px] w-[300px] pl-[20px] pt-[8px] bg-black bg-opacity-75 rounded-b-[10px] text-ellipsis overflow-hidden text-white whitespace-nowrap">
                    test
                </div>
            </div>
        </>
        );

}
