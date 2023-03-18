import React,{useState} from "react";
/*import './cartForm.css'*/
import axios from 'axios'

export const RegForm=(props)=>{
    const userobj={
        userName:'',
        email:'',
        password:'',
        Passout_date:'',
        Current_organisation:'',
        picture:'',
        Branch:'',
        Name:'',
        Date_of_birth:''
    }
    const[formInput,setformInput]=useState(userobj);

   
    const userNameHandler=(event)=>{
        setformInput((prevState)=>{
            return{
                ...prevState,
            userName:event.target.value
            }
         });
   }
   const userEmailHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        email:event.target.value
        }
     });
}
const userPasswordHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        password:event.target.value
        }
     });
}
const userPassoutDateHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        Passout_date:event.target.value
        }
     });
}
const userCurrentOrganisationHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        Current_organisation:event.target.value
        }
     });
}
const userPictureHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        picture:event.target.value
        }
     });
}
const userBranchHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        Branch:event.target.value
        }
     });
}
const NameHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        Name:event.target.value
        }
     });
}
const userDateOfBirthHandler=(event)=>{
    setformInput((prevState)=>{
        return{
            ...prevState,
        Date_of_birth:event.target.value
        }
     });
}
const addUserHandler=(async(event)=>{
    event.preventDefault();
    saveNewProduct(formInput);
})
const saveNewProduct=async(newUser)=>{
    const user={
       
        userName:newUser.userName,
        email:newUser.email,
        password:newUser.password,
        Passout_date:newUser.Passout_date,
        Current_organisation:newUser.Current_organisation,
        picture:newUser.picture,
        Branch:newUser.Branch,
        Name:newUser.Name,
        Date_of_birth:newUser.Date_of_birth
  }
    const message=await axios.post('http://localhost:5001/signup',user,{
        headers:{
            'Content-Type': 'application/json'
             }
    });
    console.log(message);
    
  }
  console.log(formInput);
    return(
        <div className="cartForm" id="cartForm">
            <form id="cartForm">
                <div className="form-title">Registration Form</div>
               <div className="formInput">
                <input type="text" placeholder="Name of the user" onChange={userNameHandler}/>
               </div>
               <div className="formInput">
                <input type="email" placeholder="user email" onChange={userEmailHandler}/>
               </div>
               <div className="formInput">
                <input type="password" placeholder="password" onChange={userPasswordHandler}/>
               </div>
               <div className="formInput">
                <input type="date" placeholder="pass-out-date" name="pass-out-date" onChange={userPassoutDateHandler}/>
               </div>
               <div className="formInput">
                <input type="text" placeholder="current organisation" onChange={userCurrentOrganisationHandler}/>
               </div>
               <div className="formInput">
                <input type="text" placeholder="picture URL" onChange={userPictureHandler}/>
               </div>
               <div className="formInput">
                <input type="text" placeholder="Branch" onChange={userBranchHandler}/>
               </div>
               <div className="formInput">
                <input type="text" placeholder="Name" onChange={NameHandler}/>
               </div>
               <div className="formInput">
                <input type="date" placeholder="DOB" onChange={userDateOfBirthHandler}/>
               </div>
               <div className="formSubmit">
                <button className="adduser-button" onClick={addUserHandler}>Sign up</button>
               </div>
            </form>
        </div>
    )
}