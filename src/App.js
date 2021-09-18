import React , { useState } from 'react'

import "./style.css"
import UseEffect1 from './UseEffect1';
import UseEffect2 from './UseEffect2';
// import ToDoList from './ToDoList'



const App = () => {    
    // const [formData , setformData ] = useState({
    //     username: " " ,
    //     password: " "
    // });
    
    // const handleChange = (e ) => {
    //  const name = e.target.name;
    //  const value = e.target.value;
    
    //  setformData({ ...formData , [name] : value });

    //  console.log(formData);
    // }
 
        return(
            <>
               {/* <div>
                   <label htmlFor="username"></label>
                   <input type="text" name="username" onChange={handleChange} value={formData.username}></input>
                    
                   <label htmlFor="password"></label>
                   <input type="text" name="password" onChange={handleChange} value={formData.password}></input>    
                </div> */}
                
                
            <UseEffect2 />
            </>
        )


}
 export default App