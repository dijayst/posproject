import React from 'react'

//import{HashLink as Link} from 'react-router-hash-link';
//import ster from './ster.jpeg';
//import { GrClose } from 'react-icons/gr'
//import{GiHamburgerMenu} from 'react-icons/gi'



interface istar{
  id:number;
  price:number;
  foodcode:number;
  foodname:string;
  //image:string;
}
interface iprops{
 // id:number;
  //price:number;
  //foodcode:number;
 // foodname:string;
  //image:string;
  order:istar[]
}
export const Nav:React.FC<iprops> = ({order}) => {
    
//const [click, setClick] = useState(false);

//const handleClick = () => setClick(!click);

// const closeMobileMenu = () => setClick(false);

//console.log({click})
    return (
        <div className="di">
           
      <div className="sidebar">
      <table className="table">
                        <thead className="thead">
                          <tr>
                            <th>ID</th>
                            <th>customers name</th>
                            <th>email</th>
                            <th>message</th>
                        
                          </tr>
                        </thead>
                        <tbody className="tbody">
                          
                              <tr >
                            <td>hjgjgjk</td>
                            <td>hjgjgjk</td>
                            <td>hjgjgjk</td>
                            <td>hjgjgjk</td>
                           
                             </tr>
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
        </div>)
}





// <button className="button6">ExIT</button>
          