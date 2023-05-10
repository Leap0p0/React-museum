import s from "./../../index.css";

export function AdvancedSearchBar(props) {
    function submit(event) {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            console.log("***", event.target.value)
            props.onSubmit(event.target.value);
        }
    }
    return (
    <>
        <input onKeyUp={submit} className="rounded-[30px] bg-[#d9d9d96e] text-white h-[30px] font-[100px] text-[20px] w-full border-transparent pt-[18px] pr-[18px] pb-[18px] pl-[50px]" type="text" placeholder="Search"/>
    </>
    );
} 