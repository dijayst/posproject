import React,{useState,useEffect} from 'react'
import axios from 'axios';

interface istar{
    id:number;
    price:number;
    foodcode:number;
    foodname:string;
    image:string;}
  
interface iprops{
    // trigger:boolean;
     trigger:()=>void
    // trigger:()=>void;
     //children:React.ReactNode;
     children:JSX.Element
 } 
export const Neworder:React.FC<iprops> = ({trigger,children}:iprops) => {
    
    
  const [range, setrange] = useState<istar[]>([]);
    
  useEffect(()=>{


      axios.get<istar[]>("https://stormy-brook-52450.herokuapp.com/stack")
      .then(Response=>{
          setrange(Response.data)
         // setrange({rang:Response.data.range})
          //setproductlist(Response.productimage)
             console.log(Response.data)
            // console.log(Response.productimage)
             console.log("i gotten it")
           })
           .catch(error=>{
             console.log(error)
             console.log("i deny")
           })
          
  })

console.log(range)

    
    return (
        <div  className="popup">
             <button onClick={trigger}className="cls">
close
            </button>
            {children}
            <div>
                
      { range.map((item)=>{
         return<div key={item.id}>
             <table>
             <thead className="thead">
                  <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>TransactionNo</th>
                    <th>Grand Total</th>
                    <th>cancel order</th>
                
                  </tr>
                </thead>
                <tbody className="tbody">
                      <tr >
                    <td>{item.id}</td>
                    <td>{item.foodcode}</td>
                    <td>{item.foodname}</td>
                    <td>{item.price}</td>
                   
                     </tr>
                   </tbody>
             
             </table>
           </div>
       })
     }
            </div>
        </div>
    )
}
