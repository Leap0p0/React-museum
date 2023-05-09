import s from "./../../index.css";
import { useEffect, useState } from "react";
import { FetchTest } from "../../fetchTest/fetchTest";
import { Navigate } from "react-router-dom";
  
export function FamousArticlesItem({id}) {
    const [general, setGeneral] = useState();
    const [image, setImage] = useState();
    const [titlee, setTitlee] = useState();
    const [shouldRedirect, setShouldRedirect] = useState(false);

    
    async function fetchTest(id) {
        const resul = await FetchTest.fetchTest(id);
        setGeneral(resul)
        if(resul.primaryImage) {
            setImage(resul.primaryImage);
        } else {
            setImage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
        }
        setTitlee(resul.title);
    }
    
    useEffect( () => {
        fetchTest(id);
    }, []);
    
    function handleClick() {
        console.log("Le bouton a été cliqué !");
        setShouldRedirect(true);
    }
    if (shouldRedirect) {
        return <Navigate to="/details" state={general}/>;
    }
    return (
            <div onClick={handleClick} className="relative container cursor-pointer w-[300px]">
                <img className="rounded-[10px]" src={image} alt="test" />
                <div className="title absolute mt-[-40px] h-[40px] w-[300px] pl-[20px] pt-[8px] bg-black bg-opacity-75 rounded-b-[10px] text-ellipsis overflow-hidden text-white whitespace-nowrap">
                    {titlee}
                </div>
            </div>
        );

}
