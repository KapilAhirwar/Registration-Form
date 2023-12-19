import axios from "axios";
import { useEffect, useState } from "react";
let url = "http://localhost:5000/api/v1/Show/Users"


function ViewUser(){

    const [user,setuser] = useState('');

    async function getdata(){
        
        try{
            const response = await axios.get(url);
            const usData = response.data.data
            setuser(usData);
            
            
        }catch(error){
            // const st = error.message;
            // const slc = st.slice(31,st.lenght)
            // if(slc == 400){
            //     alert('User Already Exists');
            // }
            // if(slc == 500){
            //     alert('user not created')
            // }
            console.error(error.message);
        } 
    }
    console.log(user)
    useEffect(()=>{
        getdata()
    },[])

    // useEffect( ()=>{
    //     axios.get(url)
    //     .then( (response) => {setuser(response.data)})
    //     .catch( (error)=>{console.error('Error',error.message)})
    // },[]);

    // const data = user.data;
    // console.log(data[1])
    

return(
    <div>
      <div>
      {user.map((usr,index)=>(
        <div key={index} className="flex gap-20">
            <span>{usr.Name}</span>
            <span>{usr.Email}</span>
            <span>{usr.PhoneNo}</span>
            <span>{usr.Gender}</span>
        </div>
))}
      </div>
    </div>
)
}

export default ViewUser;



// {user.data.map((usr,index)=>(
//     <div key={index} className="flex gap-20">
//         <span>{usr.Name}</span>
//         <span>{usr.Email}</span>
//         <span>{usr.PhoneNo}</span>
//         <span>{usr.Gender}</span>

//     </div>
// ))}