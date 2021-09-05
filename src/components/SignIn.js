import React,{useState} from 'react'
import '../assests/SignIn.css';

export const SignIn = () =>{
    const [user,setUser] = useState({
        email:"",pswd:""
    })
    const handleInp = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    return (
    <>
    <div className="sign_main">
            <h3 className="headdTag">Sign in</h3>
            <form action="/signin">
                <div className="inCol">
                    <label className="inLabel">Email </label>
                    <input type="email" 
                    placeholder="Enter Email" 
                    className="inInp" 
                    name="email"
                    value={user.email}
                    onChange={handleInp}></input> 
                </div>   
                <div className="inCol">
                    <label className="inLabel">Password </label>
                    <input type="password" 
                    placeholder="Enter Password" 
                    className="inInp" 
                    name="pswd"
                    value={user.pswd}
                    onChange={handleInp}></input>
                </div>
                <div className="fpswd">Forgot Password ?</div>
            </form>
            {/* <button type="submit" className="sBtn">Sign in</button>    */}
    </div>    
    </>
    );
}