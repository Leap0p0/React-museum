import s from "./../../index.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { useState } from "react";
import { AdvancedSearchBar } from "../AdvancedSearchBar/AdvancedSearchBar";
import { FetchByAuthor } from "../../fetchByAuthor/fetchByAuthor";
import { Navigate } from "react-router-dom";
import { FetchByDepartment } from "../../fetchByDepartment/fetchByDepartment";
import { FetchByYear } from "../../fetchByYear/fetchByYear";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";

//Page Recherche avancé (PAS DE RECHERCHE CROISEES)

export function AdvancedSearch(props) {
    const [selectValue, setSelectValue] = useState("author");
    const [advancedsearch, setAdvancedsearch] = useState();
    const [shouldRedirect, setShouldRedirect] = useState(false);

    async function fetchQuickSearch (title) {
        const quick = await FetchQuickSearch.fetchQuickSearch(title);
        setAdvancedsearch(quick.objectIDs.slice(0, 50))
        setShouldRedirect(true);
    }
    async function advancedSearch(title) {
        if (selectValue == "author") {
            const searchAuthor = await FetchByAuthor.fetchByAuthor(title);
            setAdvancedsearch(searchAuthor.objectIDs.slice(0, 30));
            setShouldRedirect(true);
        }
        if (selectValue == "department") {
            const searchDepartment = await FetchByDepartment.fetchByDepartment(title);
            setAdvancedsearch(searchDepartment.objectIDs.slice(0, 30));
            setShouldRedirect(true);
        }
        if (selectValue == "year") {
            const searchYear = await FetchByYear.fetchByYear(title);
            setAdvancedsearch(searchYear.objectIDs.slice(0, 30));
            setShouldRedirect(true);
        }
    }
    if (shouldRedirect) {
        return <Navigate to="/searchresult" state={advancedsearch}/>;
    }
    function labelValue (event) {
        setSelectValue(event.target.value);
    }
  
    return (
    <>
    <div className=" bg-black h-screen">
      <div>
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
              <SearchBar onSubmit={fetchQuickSearch}/>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div class="inline-block relative w-64">
            <select value={selectValue} onChange={labelValue} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="author">Author</option>
                <option value="department">Department</option>
                <option value="year">Year</option>
            </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
    </div>
      </div>
      <div className="pt-[150px] flex justify-center items-center">
        <div className="w-1/2">
            <AdvancedSearchBar onSubmit={advancedSearch}/>
        </div>
      </div>
      </div>
      </div>
    </>
    );
} 