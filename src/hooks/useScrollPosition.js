import { useEffect, useState } from "react";

function useScrollPosition(){
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            window.scrollY>300? setIsVisible(true) : setIsVisible(false);
        };
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    },[])
    return isVisible;
}
export default useScrollPosition;