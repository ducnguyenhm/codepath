import React from "react";
import '../App.css'


const StoreCard = ({title, description, link}) => {
    return (
        <div className="card"> 
            <h3 className="card-title"> {title} </h3>
            <h4 className="card-de">  {description} </h4>
            <a href={link}> 
                <button className="button"> 
                    View
                </button>    
            </a>   
            
        </div>
    )
}

export default StoreCard;