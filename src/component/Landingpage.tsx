import React,{useState,useEffect} from 'react'
import logo from '../logo.svg';
import { Footer } from './footer';
import { Nav } from './Nav';
import { image } from './variable';
import { Managefoods } from './Managefoods';
import { Neworder } from './Neworder';
import { Cancelo } from './Cancelo';
import axios from 'axios';

interface istar{
  id:number;
  price:number;
  foodcode:number;
  foodname:string;
  image:string;}
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
    return (
        <div className="headerapp">
        
              <div  className="header">
            <img src={logo} className="logo" alt="logo" />
             <div className="indiv">
             <p className="headerna1">FASTFOOD :{buttonpop.pop}<br/>
             <button onClick={handlemangefood}>click</button>
             <hr/>
           RESTAURANT</p>
           
            </div>
            </div>
   <div className="content">
     <form><div className="trans">
       <label>transitionno</label><br/>
       <input placeholder="enter transaction number" className="input"/>

       <p>Date</p>
       </div>
       <input placeholder="enter transaction number" className="input"/>
       <p className="amt">Amount</p>
    
       </form>
       </div>
     <div className="getimage">
     {
       range.map((item)=>{
         return<div key={item.id}>
           <img src={item.image} height="100px" width="100px" alt="uploadimage"/>
           <p>{item.foodcode}</p>
           <p>{item.foodname}</p>
           <p>{item.price}</p>
           </div>
       })
     }
       <div className="pict1">
       {buttonpop.pop?
             <Managefoods trigger={handlemangefoo} >
<input placeholder="search"/>          
        </Managefoods>:""
}
{orderpop.popp?
<Neworder trigger={handleorde}>
<input placeholder="search"/>
          
</Neworder>:""
}  

{cancellpop.poppy?
<Cancelo trigger={handlecance} >
<input placeholder="search"/>
    
</Cancelo>:""
}
       </div>
       <Nav/>
     </div>
     <div className="footd">
     <Footer cancel={handlecancel} neworder={handleorder} settrigger={handlemangefood}/>
   
     </div>
   
        </div>
    )
}
