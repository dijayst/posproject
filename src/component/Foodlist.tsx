import React,{useEffect,useState} from 'react'

export const Foodlist = () => {

    
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
        <div>
            {range.map((item)=>{
                return
                
      <table key={item} className="table">
      <thead className="thead">
        <tr>
          <th>ID</th>
          <th>FOOD CODE</th>
          <th>FOOD NAME</th>
          <th>PRICE</th>
      
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
