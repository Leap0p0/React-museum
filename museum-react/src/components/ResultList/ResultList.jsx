import { FamousArticlesItem } from "../FamousArticlesItem/FamousArticlesItem";
import s from "./../../index.css";


export function ResultList({searchresult}) {
    return (
        <>
        <div className=" bg-black flex flex-wrap justify-center items-center">
            {searchresult.map((actual) =>{
                return (
                    <span key={actual.id} className=" p-[25px]">
                        <FamousArticlesItem id={actual} />
                    </span>
                );
            })}
        </div>
        </>
    );
} 