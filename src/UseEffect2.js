import React , {useState , useEffect} from 'react'

const UseEffect2 = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    const actualSize = () => {
        setwindowWidth(window.innerWidth);
    }
    
    useEffect( () => {
        window.addEventListener("resize" , actualSize )

        return () =>{
        window.removeEventListener("resize" , actualSize )

        }
    })
    return (
        <div>
            <h1>The current window width</h1>
            {windowWidth}

        </div>
    )
}

export default UseEffect2
