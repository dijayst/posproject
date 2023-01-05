import React ,{useState,useEffect}from 'react'
import axios from 'axios';
interface istar{
  id:number;
  price:number;
  foodcode:number;
  foodname:string;
  //image:string;
}

export const Manage = () => {
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
        <div>
                       
   
        </div>
    )
}
