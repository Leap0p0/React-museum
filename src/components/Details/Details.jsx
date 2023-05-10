import s from "./../../index.css";
import { useEffect, useState } from "react";
import {Navigate } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { FetchQuickSearch } from "../../fetchByTitle/fetchByTitle";
  
export function Details(props) {
    console.log("resultat search : ", props.details);
    const [testquick, setTestquick] = useState([]);
    const [imageBack, setImageBack] = useState([]);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
      if(props.details.primaryImage) {
        setImageBack(props.details.primaryImage);
      } else {
        setImageBack("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
      }
    }, [props.details.primaryImage]);
    
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
        <div className=" bg-black h-screen">
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
            <div className="bg-black flex flex-wrap justify-center items-center pt-[50px]">
              <div>
                <img className=" w-[500px] rounded-[10px]" src={imageBack} alt="test" />
              </div>
              <div className="text-white text-center md:text-left pt-[15px] md:pt-0 font-roboto pl-[25px]"><b>Title</b> : {props.details.title}<br /><b>Artiste</b> : {props.details.artistDisplayName}<br /><b>Department</b> : {props.details.department}<br /><b>Period</b> : {props.details.period}<br /><b>Begin Date</b> : {props.details.artistBeginDate}<br /><b>EndDate</b> : {props.details.artistEndDate}</div>
            </div>
            </div>
        </>
        );
}
