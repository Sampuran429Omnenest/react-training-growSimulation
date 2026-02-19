import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function useProductSearch(products){
    const [searchTerm,setSearchTerm]=useState('');
    const [filteredProducts,setFilteredProducts]=useState(products);
    const [isSearching,setIsSearching]=useState(false);
    const timer=useRef(null);
    useEffect(()=>{
        if(!searchTerm.trim()){
            setFilteredProducts(products);
            setIsSearching(false);
            return;
        }
        setIsSearching(true);
        if(timer.current) clearTimeout(timer.current);
        timer.current=setTimeout(()=>{
            const lowerTerm=searchTerm.toLowerCase();
            const results=products.filter((product)=>{
                return(
                    product.title.toLowerCase().includes(lowerTerm) ||
                    product.description.toLowerCase().includes(lowerTerm) ||
                    product.category.toLowerCase().includes(lowerTerm)
                );
            });
            setFilteredProducts(results);
            setIsSearching(false);
        },500)
        return ()=>{
            if(timer.current) clearTimeout(timer.current);
        }
    },[searchTerm,products]);
    return{
        searchTerm,
        setSearchTerm,
        filteredProducts,
        setFilteredProducts,
        isSearching
    }
}
export default useProductSearch;