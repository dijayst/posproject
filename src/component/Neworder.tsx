import React from 'react'

interface iprops{
    // trigger:boolean;
     trigger:()=>void
    // trigger:()=>void;
     children:JSX.Element;
 } 
export const Neworder:React.FC<iprops> = ({trigger,children}:iprops) => {
    return (
        <div  className="popup">
             <button onClick={trigger}>
close
            </button>
            {children}
        </div>
    )
}
