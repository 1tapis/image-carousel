import React, { useEffect, useRef, useState } from 'react'
import data from "../utils/data.json";

console.log(data);

const DATA_LENGTH = data.length;

const ImageCarousel = () => {
    const [index,setIndex] = useState(0);
    const ref = useRef(null)

    // console.log(ref);

    const handleNext = () =>{
        // console.log(index,"inside handle next");

        setIndex((prevIndex)=>{
            console.log(prevIndex,"updated index");
            if(prevIndex ===DATA_LENGTH-1 ){
                return 0;
            }
            return prevIndex+1;
        })

        // if(index === DATA_LENGTH-1){
        //     setIndex(0)
        // }
        // else{
        //     setIndex(index+1)
        // }
        
    }

    const handlePrev = () =>{
        if(index === 0){
            setIndex(DATA_LENGTH-1);

        }else{
            setIndex(index-1);
        }
    }

    useEffect(()=>{
       ref.current= setInterval(handleNext, 1000);
       return ()=>{
            clearInterval(ref.current);
       }
    },[])
  return (
    <div onMouseEnter={()=>clearInterval(ref.current)}
         onMouseLeave={()=>ref.current= setInterval(handleNext, 1000)}  
         className="container">
        <div onClick={handlePrev} className="left-btn">{"<"}</div>
        <img src= {data[index].download_url} alt="" />
        <div onClick={handleNext} className="right-btn">{">"}</div>
    </div>
  )
}

export default ImageCarousel;
