import React, {useState,useEffect} from 'react';

function TrafficLight(){

const[lights,setLights]=useState('red');

useEffect(()=>{

  const interval = setInterval(()=>{
    
    setLights((l)=>{
          if(l==="red"){return "yellow"}
    
          if(l==="yellow"){return "green"}
    
       return "red"
    })
  },3000)
  
  return ()=>clearInterval(interval)



},[])

return(


            <div className="traffic-light-container">
        
        <div className={`light red ${lights==='red'?'active':''}`}></div>
  
      <div className={`light yellow ${lights==='yellow'?'active':''}`}></div>
  
        <div className={`light green ${lights==='green'?'active':''}`}></div>

<style>{`

    
  .traffic-light-container {
    width: 120px;
    padding: 20px;
    background: black;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: center;
    margin-left: 45%;
    margin-top: 45px;
  }

  .light {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #222;
    transition: background 0.5s, box-shadow 0.5s;
  }

  .red.active {
    background: red;
  }

  .yellow.active {
    background: yellow;
  }

  .green.active {
    background: limegreen;
  }
`}</style>
</div>
)
}

export default TrafficLight;
