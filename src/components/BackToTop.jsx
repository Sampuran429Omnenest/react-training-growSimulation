import useScrollPosition from "../hooks/useScrollPosition";

function BackToTop(){
    const isVisible=useScrollPosition();
    if(!isVisible) return null;
    return(
        <button
        onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            padding: "12px 16px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#0066cc",
            color: "white"
        }}
        > 
        ↑ Back to Top
        </button>
    );
}
export default BackToTop;