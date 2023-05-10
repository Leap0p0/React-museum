import s from "./../../index.css";
import { useEffect, useState } from "react";
import { FetchTest } from "../../fetchTest/fetchTest";
import { NavLink, Navigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
  
export function Details(props) {
    console.log("resultat search : ", props.details);
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
            <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="">
              <img className="w-[150px] pl-0 md:pl-10" src="https://i.imgur.com/7gRNUNa.png" alt="logo" />
            </div>
            <div className="pb-[25px] md:pb-0 items-center">
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
            <div className="flex items-center justify-start w-[500px]">
                <img className="rounded-[10px]" src={props.details.primaryImage} alt="test" />
                <h1 className="text-white">{props.details.title}</h1>
          </div>
        </>
        );
}
