import React from 'react'
//import {useNavigate} from "react-router-dom";
//import {Link} from 'react-router-dom'
//import {useNavigate} from "react-router-dom";
//import { Managefoods } from './Managefoods';
//import { useState } from 'react'

/*interface istate{
   pop:boolean;
}*/
interface iprops{
    //pop:boolean;
    //trigger:boolean;
    settrigger:()=>void;
    neworder:()=>void;
    cancel:()=>void;
 }
 
export const Footer:React.FC<iprops> = ({settrigger,neworder,cancel}:iprops) => {
     return (
        <div className="footerdiv">
            <div className="footerdivl">
             
            <button onClick={settrigger} className="button">MANAGE FOODS</button>
            <button onClick={cancel} className="button">CANCEL ORDER</button>
       
            </div>
            </div>
    )
}
// <button onClick={neworder} className="button">NEW ORDERS</button>
           
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/native
//npm i react-native-vector-icons
//npm install axios
// npm install react-native-gesture-handler react-native-reanimated




//git init
//git add README.md
//git commit -m "first commit"
//git branch -M master
//git remote add origin git@github.com:dijayst/posproject.git
                            //github.com:dijayst/Spotifyclone.git
//git push -u origin backend


//git remote set-url origin git@github.com:dijayst/Spotifyclone.git