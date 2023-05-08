import { FamousArticlesItem } from "../FamousArticlesItem/FamousArticlesItem";
import s from "./../../index.css";


export function FamousArticlesList({highlight}) {
    return (
        <>
        <div className=" bg-black flex flex-wrap justify-center items-center">
            {highlight.map((actual) =>{
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