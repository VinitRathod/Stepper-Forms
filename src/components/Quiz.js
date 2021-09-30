import React,{useState} from 'react'
import { Button } from '@material-ui/core';
import '../assests/SignIn.css';

export const Quiz = (prop) =>{
    const [ans,setAns] = useState(0)
    const [user,setUser] = useState({
        q1:"",q2:"",q3:"",q4:"",q5:""
    })
    // const [ans,setAns] = useState(0)
    const handleInp = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
   
    const submitClicked = () =>{
        if(user.q1 === "james and lily potter") setAns(ans+1)
        if(user.q2=== "moaning myrtle") setAns(ans+1)
        if(user.q3 === "snape") setAns(ans+1)
        if(user.q4 === "Start new elective subjects and visit hogsmeade") setAns(ans+1)
        if(user.q5 === "He looked into the mirror and felt the stone drpoped into his pocket") setAns(ans+1)
    }

    return (
    <>
    <div >
        <h3 style={{marginLeft:"11rem"}}>Welcome to wizrdy world!</h3>
        <form className="m-5">
            <label>Who were harry's parents?</label><br/>
            <input type="text" name="q1" onChange={handleInp} value={user.q1}/> 
            <br/><br/>
            {/* james and lily potter */}

            <label>Who first shows harry the diary of tom riddle?</label><br/>
            <input type="text" name="q2" onChange={handleInp} value={user.q2}></input>   
            <br/><br/>
            {/* moaning myrtle */}

            <label>Who kills dumbledore at the end of "The half blodd prince"?</label><br/>
            <input  type="text" name="q3" onChange={handleInp} value={user.q3}></input>  
            {/* snape  */}

              {/* o-3  */}
            <br/><br/>
            <label>Third year students at hogwarts get to do 2 things they were not allowed to do previously, What are they?</label>  <br/>
            <input  type="radio" value="Visits hogsmeade and become prefects" name="q4" onChange={handleInp} />Visits hogsmeade and become prefects<br/>
            <input  type="radio" value="Become prefects and start new subjects" name="q4" onChange={handleInp} />Become prefects and start new subjects<br/>
            <input  type="radio" value="Start new elective subjects and visit hogsmeade" name="q4" onChange={handleInp} />Start new elective subjects and visit hogsmeade<br/>
            
            {/* o-2  */}
            <br/>
            <label>How did harry retrieve sorcerer's stone from the mirror of erised?</label> <br/>  
            <input  type="radio" value="He broke the mirror fighting with quirrell" name="q5" onChange={handleInp} />He broke the mirror fighting with quirrell<br/>
            <input  type="radio" value="He looked into the mirror and felt the stone drpoped into his pocket" name="q5" onChange={handleInp} />He looked into the mirror and felt the stone drpoped into his pocket<br/>
            <input  type="radio" value="He distracted quirrell and quickly accessed a small hidden chember in the mirrors lower frame" name="q5" onChange={handleInp} />He distracted quirrell and quickly accessed a small hidden chember in the mirrors lower frame<br/>
        </form>

        <div style={{marginLeft:"3rem",color:"green"}}>Hey You got {ans} out of 6 </div>
        <Button variant="contained" onClick={submitClicked} color="secondary" style={{marginLeft:"3rem"}}>Check Ans</Button>
    </div>    
    </>
    );
}