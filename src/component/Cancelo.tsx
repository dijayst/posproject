import React,{useState,useEffect} from 'react'
import axios from 'axios';

interface istar{
  id:number;
  price:number;
  foodcode:number;
  foodname:string;
  }
interface iprops{
   // range:istar[];
     trigger:()=>void;
    // trigger:()=>void;
  // children:JSX.Element |JSX.Element;
     children: React.ReactNode;

    } 
export const Cancelo:React.FC<iprops> = ({trigger,children}:iprops) => {

    
  const [range, setrange] = useState<istar[]>([]);
    
  useEffect(()=>{


      axios.get<istar[]>("https://eembryo.herokuapp.com/stack")
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
        <div className="popup">
             <button onClick={trigger}className="cls">
close
            </button>
            <p>fdhgfhjfvh</p>
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

//git remote add origin git@github.com:dijayst/pos-manager.git
