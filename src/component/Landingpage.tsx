import React,{useState,useEffect} from 'react'
import logo from '../image/download9.jpg';
import { Footer } from './footer';
//import { Nav } from './Nav';
//import { image } from './variable';
import { Managefoods } from './Managefoods';
import { Neworder } from './Neworder';
import { Cancelo } from './Cancelo';
import axios from 'axios';

interface istar{
  id:number;
  Price:number;
  Foodcode:number;
  Foodname:string;
  productimage:string;}
 // rang:image[];}
interface istate{
  pop:boolean;
  //popp:boolean;
  }

  interface istat{
   // pop:boolean;
    popp:boolean;
    }

    interface istaty{
      // pop:boolean;
       poppy:boolean;
       }
       
export const Landingpage:React.FC = () => {
  //const current=new Date();
  //const date='${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}';


  const [range, setrange] = useState<istar[]>([]);
    
  useEffect(()=>{


      axios.get<istar[]>("https://stormy-brook-52450.herokuapp.com/file")
      .then(Response=>{
          setrange(Response.data)
          setrange(range)
         // setrange({rang:Response.data.range})
          //setproductlist(Response.productimage)
             console.log(Response.data)
            // console.log(Response.productimage)
             console.log("i gotte it")
           })
           .catch(error=>{
             console.log(error)
             console.log("i cou deny")
           })
          
  })

console.log(range)
  
  const [buttonpop, setbuttonpop] = useState<istate>({
    pop:false
})
const handlemangefood=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setbuttonpop({pop:true})
  }

  
const handlemangefoo=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setbuttonpop({pop:false})
  }



  
  const [orderpop, setorderpop] = useState<istat>({
    popp:false
})
const handleorder=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setorderpop({popp:true})
  }

  
const handleorde=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setorderpop({popp:false})
  }



  
  const [cancellpop, setcancelpop] = useState<istaty>({
    poppy:false
})
const handlecancel=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setcancelpop({poppy:true})
  }

  
const handlecance=():void=>{
  //  navigate("/Login")
    // alert("/foods")
 setcancelpop({poppy:false})
  }
console.log(buttonpop)
console.log(orderpop)

const [order, setorder] = useState<istar[]>([])
console.log(order)

    return (
        <div className="headerapp">
        
              <div  className="header">
            <img src={logo} className="logo" alt="logo" />
             <div className="indiv">
             <p className="headerna1">FASTFOOD <br/>
             <hr/>
           RESTAURANT</p>
           
            </div>
            </div>
   <div className="content">
     <form><div className="trans">
       <label>transitionno</label><br/>
       <input placeholder="enter transaction number" className="input"/>

       <p className="date">Date:</p>
       </div>
       <input placeholder="enter transaction number" className="input1"/>
       <p className="amt">Amount</p>
    
       </form>
       </div>
     <div className="getimage">
      
     {
       range.map((item)=>{
         return<div key={item.id}>
           <img src={item.productimage} height="100px" width="100px" alt="uploadimage"/>
           <p>Food Code :{item.Foodcode}</p>
           <p>Food Name: {item.Foodname}</p>
           <p>Price : {item.Price}</p>
           <button onClick={()=>setorder([...order,item])}>Add to cart</button>
           </div>
       })
     }
       <div className="pict1">
       {buttonpop.pop?
             <Managefoods trigger={handlemangefoo} trig={handlemangefood} >
 <input style={{backgroundColor:"#272727"}} placeholder="search"/>          

        </Managefoods>:""
}
{orderpop.popp?
<Neworder trigger={handleorde}>
<input style={{backgroundColor:"#272727"}} placeholder="search"/>
          
</Neworder>:""
}  

{cancellpop.poppy?
<Cancelo trigger={handlecance} >
<input style={{backgroundColor:"#272727"}} placeholder="search"/>
    
</Cancelo>:""
}
       </div>
       <div className="di">
           
           <div className="sidebar">
           <table className="table">
                             <thead className="thead">
                               <tr>
                                 <th>ID</th>
                                 <th>food name</th>
                                 <th>price</th>
                                 
                             
                               </tr>
                             </thead>
                             <tbody className="tbody">
                               {order.map((item)=>{return(
                                   <tr >
                                 <td>{item.id}</td>
                                 <td>{item.Foodname}</td>
                                 <td>{item.Price}</td>
                                  </tr>)})}
                                </tbody>
                           </table>
     
             </div>
             <div className="navdivlow">
             <form>
            <label>No of foods</label><br/>
            <label>Recieved amount</label>
            <input style={{backgroundColor:"#1f1f1f"}} placeholder="enter transaction number" />
            <label>Balanced amount</label>
            <input style={{backgroundColor:"#1f1f1f"}} placeholder="enter transaction number" />
            <p>Amount</p>
         
            </form>
             </div>
                 <div className="footerdivr">
                     <button className="button5">PAY</button>
                      </div>
             </div>
    
     </div>
     
     <div className="footd">
     <Footer cancel={handlecancel} neworder={handleorder} settrigger={handlemangefood}/>
   
     </div>
   
        </div>
    )
}
