import s from "./index.css";
import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage/MainPage";
import { FetchHighlight } from "./fetchHighlight/fetchHighlight";
import { Routes, Route } from "react-router-dom";
import { SearchResult } from "./components/SearchResult/SearchResult";



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
          <Route path="/searchresult" element= {<SearchResult testquick={highlight}/>} />
          <Route path="/" element={ <MainPage  highlight={highlight}/>}/>
        </Routes>
    </div>
  );
}

export default App;
