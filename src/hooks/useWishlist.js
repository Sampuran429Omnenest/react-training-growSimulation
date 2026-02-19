import { useEffect } from "react";
import { useState } from "react";

function useWishlist(){
    const [wishlist,setWishlist]=useState(()=>{
        const saved=localStorage.getItem('wishlist');
        return saved?JSON.parse(saved) :[];
    });
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
    },[wishlist]);
    const toggleWishlist=(productId)=>{
        setWishlist((prevWishlist)=>{
            if(prevWishlist.includes(productId)){
                return prevWishlist.filter(id=>id!=productId);
            }else{
                return [...prevWishlist,productId];
            }
        })
    }
    return{
        wishlist,
        toggleWishlist,
        isWishlisted:(productId)=>wishlist.includes(productId)
    }
}
export default useWishlist;