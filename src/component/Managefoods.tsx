import React,{useState,useEffect} from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom';


//interface istar{
  //id:number;
  //price:number;
  //foodcode:number;
  //foodname:string;
 // image:string;}
 interface iprops{
}


//interface istatee{file:string;
  //filepreview:string;}
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
//interface istate{
  //count:number;}
export const Managefoods:React.FC <iprops>= ({trigger,trig,children}:iprops) => {
const[display,setdisplay]=useState(1)
 
       const handlepre=(index: React.SetStateAction<number>)=>{
//  setdisplay({count :display.count+ 1})
setdisplay(index)  
console.log(index);
}
console.log(display)




const [range, setrange] = useState<istar[]>([]);
    
useEffect(()=>{


    axios.get<istar[]>("http://localhost:1150/file")
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







    
const [userinfo, setuserinfo] = useState<string>("");
 

 const saveFile = (files: FileList|null) => {
   if (files){
     const fileRef=files[0]||""
     const fileType:string=fileRef.type||""
     console.log("uploaded already",fileType)
     const reader=new FileReader()
     reader.readAsBinaryString(fileRef)
     reader.onload=(ev:any)=>{
       setuserinfo(`data:${fileType};base64,${btoa(ev.target.result)}`)
     }
   }
   };
   console.log(userinfo)
      



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



  const handledescrip =(e: { preventDefault: () => void; })=> {
    e.preventDefault()


    //console.log({userinfo});
  console.log({forminput});
  //console.log(e.target.value);

  const formdata = new FormData();
  formdata.append('avatar',userinfo);
  formdata.set("FoodCode", forminput.Foodcode)
  formdata.set("foodname", forminput.Foodname)
  formdata.set("price", forminput.Price)

  //console.log(e.target.files);
 // console.log({forminput});
      axios.post("http://localhost:1150/api/insert",formdata,
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
            <div className="box">
              <div className="tabs">
            <div className={display===1?"tab active-tab":"tab"}onClick={()=>handlepre(1)}> FOODS LIST</div> 
            <div className={display===2?"tab active-tab":"tab"} onClick={()=>handlepre(2)}>MANAGE FOODS </div></div>
          
          
            {children}
            <div className="contentt">
            <div className= {display===2?"contents active-contents":"contents"}>
              
<form onSubmit={handledescrip}>
  <div className="data">
    <label >Food Code :</label><input value={forminput.Foodcode} onChange={(e)=>{handleChange(e)}} id="Foodcode" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>
<label >Food Name :</label><input value={forminput.Foodname} onChange={(e)=>{handleChange(e)}} id="Foodname" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>
   <label>PRICE (USD)</label><input value={forminput.Price} onChange={(e)=>{handleChange(e)}} id="Price" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>

<div>
<input type="file" name="upload_file" onChange={(e)=>{saveFile(e.target.files)}} />
              <br/>
              <br/>
              
                 {(userinfo.indexOf("image/")>-1) && <img src={userinfo} height="100px" width="100px" alt="uploadimage"/>}
       
    </div>    
<br/>
</div>
<button type="submit">save</button>  
            </form>
   
            </div>
            <div className= {display===1?"contents active-contents":"contents"}>
           <p>fhgfgh</p>
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
               </div></div>
            </div>
    )
}
