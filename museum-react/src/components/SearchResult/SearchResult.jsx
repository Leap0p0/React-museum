import s from "./../../index.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
import { SearchBar } from "../SearchBar/SearchBar";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
import { useEffect, useState } from "react";
import { ResultList } from "../ResultList/ResultList";

//Page Résultat

export function SearchResult(props) {
    return (
    <>
      <div>
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
              <SearchBar />
            </div>
          </div>
        </div>
        <div>
        {props.testquick && <ResultList searchresult={props.testquick} />}
        </div>
      </div>
    </>
    );
} 