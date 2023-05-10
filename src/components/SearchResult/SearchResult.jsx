import s from "./../../index.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { SearchBar } from "../SearchBar/SearchBar";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
import { useEffect, useState } from "react";
import { ResultList } from "../ResultList/ResultList";

//Page Résultat

export function SearchResult(props) {
  console.log("resultat search : ", props.testquick);
    return (
    <>
     <div className=" bg-black h-screen">
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
              <SearchBar />
            </div>
          </div>
        </div>
        <div className="bg-black">
        {props.testquick && <ResultList searchresult={props.testquick} />}
        </div>
      </div>
    </>
    );
} 