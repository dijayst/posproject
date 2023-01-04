import React,{useState,useEffect} from 'react'
import logo from '../logo.svg';
import { Footer } from './footer';
import { Nav } from './Nav';
//import { pictures } from './variable';
import { Managefoods } from './Managefoods';
import { Neworder } from './Neworder';
import { Cancelo } from './Cancelo';
//import { Footer } from './Footer';
/*interface istate{print:pictures[];}
const [state, setstate] = useState<istate>({
  print:[
    {id:1,
      Foodcode:6768768789789,
      
  FoodName:"pizza",
  title:"Women Red heel sandle",
  price:"$89",
  image:require("../image/images13.jpg")},
    {id:2,
      
  title:"Women Red heel sandle",
 
      Foodcode:6768768789789,
      //Instock :true,
  price:"$89",
  FoodName:"pizza",
  //wishlist:"love",
  image:require("../image/images12.jpg")},
    {id:3,
      Foodcode:6768768789789,
     // Instock :true,
     title:"Women Red heel sandle",
  //wishlist:"love",
  price:"$89",
  FoodName:"pizza",
   image:require("../image/images1.jpg") },
    {id:4,
      Foodcode:6768768789789,
     // Instock :true,
  price:"$89",
  title:"Women Red heel sandle",
  FoodName:"pizza",
  image:require("../image/images4.jpg") },
  {id:5,
    Foodcode:6768768789789,
  price:"$89",
  title:"Women Red heel sandle",
  FoodName:"pizza",
  image:require("../image/images5.jpg")},
  {id:6,
    Foodcode:6768768789789,
  price:"$89",
  title:"Women Red heel sandle",
  FoodName:"pizza",
   image:require("../image/images7.jpg")},
    {id:7,
      Foodcode:6768768789789,
  price:"$89",
  FoodName:"pizza",
  title:"Women Red heel sandle",
     image:require("../image/images8.jpg")},
      {id:8,
        Foodcode:6768768789789,
                    price:"$89",
      FoodName:"pizza",
      title:"Women Red heel sandle",
     
       image:require("../image/images9.jpg")},
        {id:9,
          Foodcode:6768768789789,
                 //  cart:"Add to Cart",
  title:"Women Red heel sandle",
 
          price:"$89",
                  
        FoodName:"pizza",
         
         image:require("../image/images10.jpg")},
          {id:10,
            Foodcode:6768768789789,
                            
  title:"Women Red heel sandle",
  // Instock : true,
            
  // wishlist:"love",
            price:"$89",
                    FoodName:"pizza",
           
           image:require("../image/images11.jpg")}
  ]})


  {state.print.map((item)=>{return(
         <div key={item.id} className="pict">
         <p>{item.id}</p>
         <p>{item.price}</p>
         </div>
       )})}
       
*/


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


  const [range, setrange] = useState([])
    
  useEffect(()=>{
      axios.get("https://eembryo.herokuapp.com/stack")
      .then(Response=>{
          setrange(Response.data)
          setrange(Response.data.range)
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
         return<div key={item}>
           <img src={item} height="100px" width="100px" alt="uploadimage"/>
           <p>fcode</p>
           <p>foodname</p>
           <p>price</p>
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
<Cancelo trigger={handlecance}>
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
