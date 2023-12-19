import { useForm } from "react-hook-form";
import './signup.css';
import axios from "axios";
import { useState } from "react";
import qs from "qs"
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
let url = "http://localhost:5000/api/v1/User_SignUp"

function From(){
    
    const [user,setUser] = useState({Name:'',Email:'',PhoneNo:'',Gender:'',Password:''})
    
    const handleinput = (event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    
    const handleSubmit = async(event) => {
        
        event.preventDefault();
        // console.log(user);
        try{
            const response = await axios.post(url, user);
            console.log(response.data.message);
            // alert(response.data.message)
            toast.success(response.data.message)
            setUser({Name:'',Email:'',PhoneNo:'',Gender:'',Password:''});
            
        }catch(error){
            const st = error.message;
            const slc = st.slice(31,st.lenght)
            if(slc == 400){
                // alert('User Already Exists');
                toast.error('User Already Registared')
            }
            if(slc == 500){
                // alert('user not created')
                toast.error('user not created')

            }
            
        }                        
    };
            
            
            return (
                <div>
            <div className="cont">
                <h2 className="">Registration Form</h2>
                {/* <NavLink to='/Show/Users'>
                    <button >users</button>
                </NavLink> */}
                <div className="main">
                    <form onSubmit={handleSubmit}>
                        
                        <div className="op">
                            {/* <label htmlFor="Name" className="">Name</label> */}
                            <input type="text" placeholder="Enter Full Name" name="Name" onChange={handleinput}
                            value={user.Name}
                            // {...register("Name")} 
                            className=""></input>
                        </div>

                        <div className="op">
                            {/* <label htmlFor="Email" className="">E-mail</label> */}
                            <input type="email" placeholder="Enter Your Email" name="Email" onChange={handleinput}
                            value={user.Email}
                            // {...register("Email")} 
                            className=""></input>    
                        </div>
                        
                        <div className="op">
                            {/* <label htmlFor="PhoneNo" className="">PhoneNo</label> */}
                            <input type="text" placeholder="Enter Phone no" name="PhoneNo" onChange={handleinput}
                            value={user.PhoneNo}
                            // {...register("PhoneNo")} 
                            className=""></input>
                        </div>

                        <div className="op">
                            {/* <label htmlFor="Password" className="">Password</label> */}
                            <input type="password" placeholder="Enter Your Password" name="Password" onChange={handleinput}
                            value={user.Password}
                            // {...register("Password")} 
                            className=""></input>    
                        </div>
                        

                        <div className="gn">
                            <div>Gender: </div>
                            <div className="op-5">
                                <span>
                                    <input type="radio" placeholder="Enter Your Gender" id="male" name="Gender" onChange={handleinput}
                                    value="male"
                                    // {...register("Gender")} 
                                    className=""></input>    {"  "} 
                                    <label htmlFor="male"  className="">Male</label>
                                </span>

                                <span>
                                    <input type="radio" placeholder="Enter Your Gender" id="female" name="Gender" onChange={handleinput}
                                    value="female"
                                    // {...register("Gender")} 
                                    className=""></input>    {"  "} 
                                    <label htmlFor="female" className="">Female</label>
                                </span>

                                <span>
                                    <input type="radio" placeholder="Enter Your Gender" id="other" name="Gender" onChange={handleinput}
                                    value="other"
                                    // {...register("Gender")} 
                                    className=""></input>    {"  "}
                                    <label htmlFor="other" className="">Other</label>
                                </span>
                            </div>

                        </div>

                        <div >
                            <button className="btn" type="submit" >Register</button>
                            <Toaster/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default From;

