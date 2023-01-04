import React from 'react'

interface iprops{
    // trigger:boolean;
     trigger:()=>void
    // trigger:()=>void;
     children:JSX.Element;
 } 
export const Cancelo:React.FC<iprops> = ({trigger,children}:iprops) => {

    
    
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
  
    return (
        <div className="popup">
             <button onClick={trigger}>
close
            </button>
            <p>fdhgfhjfvh</p>
            {children}
            {range.map((item)=>{
                return
                
      <table key={item} className="table">
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
          <td>hjgjgjk</td>
          <td>hjgjgjk</td>
          <td>hjgjgjk</td>
          <td>hjgjgjk</td>
         
           </tr>
         </tbody>
    </table>
            })}
      
        </div>
    )
}

git remote add origin git@github.com:dijayst/pos-manager.git
