import s from "./index.css";
import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage/MainPage";
import { FetchHighlight } from "./fetchHighlight/fetchHighlight";
import { Routes, Route } from "react-router-dom";
import { SearchResult } from "./components/SearchResult/SearchResult";
import { useLocation } from 'react-router-dom';
import { Details } from "./components/Details/Details";
import { AdvancedSearch } from "./components/AdvancedSearch/AdvancedSearch";



function App() {
  const [highlight, setHighlight] = useState();
  const location = useLocation();

  async function fetchHighlight () {
    const resul = await FetchHighlight.fetchHighlight();
    setHighlight(resul.objectIDs.slice(0, 50 ));
  }

  useEffect( () => {
    fetchHighlight();
  }, []);
  return (
    <div className="bg-black flex flex-col p-[10px]">
        <Routes>
          <Route path="/searchresult" element= {<SearchResult testquick={location.state}/>} />
          <Route path="/details" element= {<Details details={location.state}/>} />
          <Route path="/advancedsearch" element= {<AdvancedSearch/>} />
          <Route path="/" element={ <MainPage  highlight={highlight}/>}/>
        </Routes>
    </div>
  );
}

export default App;
