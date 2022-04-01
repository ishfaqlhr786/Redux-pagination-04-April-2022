import React ,{useState,useEffect} from 'react'

export const Pagination = ({total,limit,onPageChange,showPerPage}) => {
    console.log("totla procutds are",total)
    const [counter,setCouter]= useState(1)
    const [numberOfButtons,setNUmberOfButtons]=useState(Math.ceil(total/showPerPage))
    console.log(numberOfButtons)
    useEffect(()=>{
       
        console.log(counter)
        const value= showPerPage * counter;
        console.log(value)
        console.log("start value", value - showPerPage)
        console.log("end value", value)
        onPageChange(value-showPerPage,value)
    },[counter,limit])
    useEffect(()=>{
        console.log("limit is",limit)
       // onPageChange(0,limit)
       setCouter(1)

    },[limit])
   
    const onButtonClick=(type)=>{
        console.log(total)
        console.log(counter)
        if(type ==="prev"){
            if(counter ===1){
                setCouter(1)
            }else{
                setCouter(counter -1)
            }

        } else if(type==="next"){
  // if(numberOfButtons === counter){
      
   if(Math.ceil(total/showPerPage) === counter){
            console.log(counter)
            console.log(numberOfButtons)
       setCouter(counter )
    // setCouter(counter + 1)

     }else{
        // setCouter(counter)
       setCouter(counter +1)
     }
        }
       // setCouter(counter+1)
    }
  
    return (
        <div>
            <nav aria-label="...">
  <ul className="pagination d-flex ">
    <li className={`page-item`}><a className="page-link"  onClick={()=> onButtonClick('prev')}>Previous</a></li>
    
   {
  new Array(Math.ceil(total/showPerPage)).fill("").map((el,index)=>{
   // new Array({numberOfButtons}).fill("").map((el,index)=>{
           return(<>
           <li className={`page-item ${index+1===counter ? 'active':null}`}>
               <button class="page-link"  onClick={()=> setCouter(index+1)}>
            {index +1}</button></li>
           </>)
        

        } )
          
   }
    <li class="page-item"><a class="page-link"  onClick={()=> onButtonClick("next")}>Next</a></li>
  </ul>
</nav>
        </div>
    )
}
