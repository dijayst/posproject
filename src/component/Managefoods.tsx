import React,{useState,useEffect, ReactEventHandler} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


interface iprops{
   // trigger:boolean;
    trigger:()=>void
   // trigger:()=>void;
  children:JSX.Element;
    
  // children:JSX.Element |JSX.Element;
   
} 
export const Managefoods:React.FC <iprops>= ({trigger,children}:iprops) => {

    return (
        <div className="popup">
          <div className="mann">
            <p className="man">MANAGE FOOD'S</p>
            <button onClick={trigger} className="cls">
close
            </button>
            </div>

            <div className="btn">
              <button><Link to="/f">FOODS LIST</Link></button><button><Link to="/m">MANAGE FOODS</Link></button></div>
            {children}
            </div>
    )
}
