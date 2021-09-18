import React ,{useState , useEffect } from 'react'



const UseEffect1 = () => {

    useEffect(() => {
        if(incounter !== 0){
        document.title = `Chats (${incounter})`
        }else{
            document.title = `Chats` 
        }
    } , [incounter])

    const [incounter, setincounter] = useState(0);
    const [decounter, setdecounter] = useState(0);

    return (
        <div>
            <h1>{incounter}</h1>
            <button onClick={()=>{ setincounter(incounter + 1 ) }}> click me to increase </button>
            <button onClick={()=>{ setdecounter(decounter - 1 ) }}> click me decrease </button>
        </div>
    )
}

export default UseEffect1
