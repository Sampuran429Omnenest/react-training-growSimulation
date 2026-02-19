import { useState } from "react";

function useToggle(initialValue=false){
    const [value,setValue]=useState(initialValue);
    const toggleDesc=()=>setValue(prev=>!prev);
    return [value,toggleDesc];
}
export default useToggle;