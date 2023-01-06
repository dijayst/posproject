import React,{useState,useEffect, ReactEventHandler} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


//interface istar{
  //id:number;
  //price:number;
  //foodcode:number;
  //foodname:string;
 // image:string;}
 interface iprops{
}


interface istate{
  file:string;
  filepreview:string;
}
interface istae { 
  Foodcode:string;
Foodname:string;
Price:string;
}




interface istar{
  id:number;
  price:number;
  foodcode:number;
  foodname:string;
  //image:string;
}
interface iprops{
   // trigger:boolean;
    trigger:()=>void
    trig:()=>void;
  children:JSX.Element;
    
  // children:JSX.Element |JSX.Element;
   
} 
interface istate{
  count:number;
}
export const Managefoods:React.FC <iprops>= ({trigger,trig,children}:iprops) => {
const[display,setdisplay]=useState<istate>({count:1})
const handlepre=(index:any):void=>{
  setdisplay({count :display.count+ 1})
  console.log(index);
}





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







    
const [userinfo, setuserinfo] = useState<istate>([]
  // file:[],
  //filepreview:null
 );
 
// const [Text, setText] =useState("");

 const saveFile = (e:React.ChangeEvent<HTMLInputElement>,index:number) => {
  const target=e.target as HTMLInputElement
  const files=[...Object.values(target.files!)]
  setuserinfo([...files])

  // setuserinfo({...userinfo,file:e.target.files[0],
   //filepreview:URL.createObjectURL(e.target.files[0]),
   
   });
   console.log(userinfo)
      };










const [forminput, setforminput] = useState<istae>({
  Foodcode:"",
  Foodname:"",
  Price:"",
  
  })
  
console.log({forminput})

const handleChange=(e:React.ChangeEvent<HTMLInputElement>):void=>{
  setforminput({
    ...forminput,
[e.target.id]:e.target.value})
}



  const handledescrip =(e) => {
    e.preventDefault()


    console.log({userinfo});
  console.log({forminput});
  //console.log(e.target.value);

  const formdata = new FormData();
  formdata.append('avatar',userinfo.file);
  formdata.set("FoodCode", forminput.Foodcode)
  formdata.set("foodname", forminput.Foodname)
  formdata.set("price", forminput.Price)

  //console.log(e.target.files);
 // console.log({forminput});
      axios.post("https://eembryo.herokuapp.com/api/insert",formdata,
       /* {headers:{"content-Type":"multipart/form-data"},
      
       productimage:userinfo.file,
        Foodname:forminput.Foodname,
         price:forminput.price,
         domesticshipping:forminput.DOMESTIC,
         internationalshipping:forminput.INTERNATIONAL,
         shipin:forminput.SHIPSIN,
       category:forminput.category,
        subcategory:forminput.subcategory,
         productname:forminput.productname,
        avaliability:forminput.avaliability,
         size:forminput.size,
        Price:forminput.productforminput
     }*/
        

      )
      .then(res=>{console.warn(res)
   //   history("/product");
     console.log(Response)
     console.log("i gotten it")
     //   console.log(Response.data)
   // console.log(Response.forminput)
    console.log("i gotten it")

      })
       .catch(error=>{
     console.log(error)
     console.log("i deny")
   })
  };


    return (
        <div className="popup">
          <div className="mann">
            <p className="man">MANAGE FOOD'S</p>
            <button onClick={trigger} className="cls">
close
            </button>
            </div>

            <div className={display.count===1?"tabs active-tabs":"tabs"}>
            <button onClick={()=>handlepre(1)}> FOODS LIST</button></div> <div className={display.count===2?"tabs active-tabs":"tabs"}><button onClick={()=>handlepre(2)}>MANAGE FOODS</button></div>
            {children}
            <div className="content-tab">
            <div className={display.count===1?"content active-content":"content"}>
              
<form onSubmit={handledescrip}>
<label >Food Code :</label><input value={forminput.Foodcode} onChange={(e)=>{handleChange(e)}} id="forminput.foodcode" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>
<label >Food Name :</label><input value={forminput.Foodname} onChange={(e)=>{handleChange(e)}} id="forminput.foodname" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>
   <label>PRICE (USD)</label><input value={forminput.Price} onChange={(e)=>{handleChange(e)}} id="forminput.Price" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>

<div>
<input type="file" name="upload_file" onChange={(e)=>{saveFile(e)}} />
              <br/>
              <br/>
              
                 {userinfo.filepreview !==null ?<img src={userinfo.filepreview} height="100px" width="100px" alt="uploadimage"/> :null}
       
                 </div>    
<br/>

<button type="submit">ADD</button> 
            </form>
   
            </div>
            <div className={display.count===2?"content active-content":"content"}>
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
               </div></div>
            </div>
    )
}
