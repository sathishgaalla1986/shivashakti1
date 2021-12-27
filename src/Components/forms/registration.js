import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/registration.css';
import React,{useState} from "react";

const Registration = ()=>{

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [googleUrl,setGoogleUrl] = useState("");

    const [firstNameErr,setFirstNameErr] = useState({});
    const [lastNameErr,setLastNameErr] = useState({});
    const [phoneNumberErr,setPhoneNumberErr] = useState({});
    const [googleUrlErr,setGoogleUrlErr] = useState({});

    const onSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid)
        {
            //send the data to database
            setFirstNameErr("");
            setLastNameErr("");
            setPhoneNumberErr("");
            setGoogleUrlErr("");
        }
    }

    const formValidation = () =>{
        const firstNameErr = {};
        const lastNameErr = {};
        const phoneNumberErr = {};
        const googleUrlErr = {};

        let isValid = true;

        if(firstName.trim().length == 0)
        {
            firstNameErr.firstNameEmpty = "First name is mandatory";
            isValid = false;
        }
        if(lastName.trim().length == 0)
        {
            lastNameErr.lastNameEmpty = "Last name is mandatory";
            isValid = false;
        }
        if(phoneNumber.trim().length == 0)
        {
            phoneNumberErr.phoneNumberEmpty = "Phone number is mandatory";
            isValid = false;
        }
        if(googleUrl.trim().length == 0)
        {
            googleUrlErr.googleUrlEmpty = "google Url is mandatory";
            isValid = false;
        }

        setFirstNameErr(firstNameErr);
        setLastNameErr(lastNameErr);
        setPhoneNumberErr(phoneNumberErr);
        setGoogleUrlErr(googleUrlErr);

        return isValid;

    }

    const GetAll = () => {
        // get all entities - GET
      }
      const Create = (e) => {
        // add entity - POST
        e.preventDefault();
      }
      const Update = (e) => {
        // update entity - PUT
        e.preventDefault();
      }
      const Delete = (e) => {
        // delete entity - DELETE
        e.preventDefault();
      }

    return (
       <div className="container mt-30">
           <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} 
                            className="form-control form-control-lg" placeholder="First name" />
                            {Object.keys(firstNameErr).map((key)=>{
                                return <div style={{color:"red"}}>{firstNameErr[key]}</div>
                            })}
                         </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="text" onChange={(e)=>{setLastName(e.target.value)}} 
                            className="form-control form-control-lg" placeholder="Last name" />
                              {Object.keys(lastNameErr).map((key)=>{
                                return <div style={{color:"red"}}>{lastNameErr[key]}</div>
                            })}
                         </div>
                    </div>             
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}} 
                            className="form-control form-control-lg" placeholder="Phone number" />
                            {Object.keys(phoneNumberErr).map((key)=>{
                                return <div style={{color:"red"}}>{phoneNumberErr[key]}</div>
                            })}
                         </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                            <input type="text" onChange={(e)=>{setGoogleUrl(e.target.value)}} 
                            className="form-control form-control-lg" placeholder="Google URL" />
                            {Object.keys(googleUrlErr).map((key)=>{
                                return <div style={{color:"red"}}>{googleUrlErr[key]}</div>
                            })}
                         </div>
                    </div>             
                </div>
                <div className="row">
                    <div className="col-md-12 mb-8 pb-4">
                        <div className="form-outline">
                            <textarea className="form-control form-control-lg" placeholder="Type your text here"></textarea>
                         </div>
                    </div>
                               
                </div>
                <div className="row">
                    <div className="col-md-12 mb-8 pb-4">
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                               
                </div>
           </form>
       </div>
    )
}

export default Registration;