import React,{useState} from 'react'
import '../assests/SignIn.css';

export const Quiz = () =>{
    const [user,setUser] = useState({
        email:"",pswd:""
    })
    const handleInp = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    return (
    <>
    <div >
        <h3 style={{marginLeft:"11rem"}}>Welcome to wizrdy world!</h3>
        <form className="m-5">
            <label>Who were harry's parents?</label><br/>
            <input type="text" name="q1"/> 
            <br/><br/>
            {/* james and lily potter */}

            <label>Who first shows harry the diary of tom riddle?</label><br/>
            <input type="text" name="q2"></input>   
            <br/><br/>
            {/* moaning myrtle */}

            <label>Who kills dumbledore at the end of "The half blodd prince"?</label><br/>
            <input  type="text" name="q3"></input>  
            {/* snape  */}

              {/* o-3  */}
            <br/><br/>
            <label>Third year students at hogwarts get to do 2 things they were not allowed to do previously, What are they?</label>  <br/>
            <input  type="radio" value="Visits hogsmeade and become prefects" name="q3"/>Visits hogsmeade and become prefects<br/>
            <input  type="radio" value="Become prefects and start new subjects" name="q3"/>Become prefects and start new subjects<br/>
            <input  type="radio" value="Start new elective subjects and visit hogsmeade" name="q3"/>Start new elective subjects and visit hogsmeade<br/>
            
            {/* o-2  */}
            <br/>
            <label>How did harry retrieve sorcerer's stone from the mirror of erised?</label> <br/>  
            <input  type="radio" value="He broke the mirror fighting with quirrell" name="q3"/>He broke the mirror fighting with quirrell<br/>
            <input  type="radio" value="He looked into the mirror and felt the stone drpoped into his pocket" name="q3"/>He looked into the mirror and felt the stone drpoped into his pocket<br/>
            <input  type="radio" value="He distracted quirrell and quickly accessed a small hidden chember in the mirrors lower frame" name="q3"/>He distracted quirrell and quickly accessed a small hidden chember in the mirrors lower frame<br/>
        </form>
    </div>    
    </>
    );
}