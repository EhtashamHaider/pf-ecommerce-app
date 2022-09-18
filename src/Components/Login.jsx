import React,{useState} from 'react'
import '../Styles/login.css';
import Joi from 'joi';
import swal from 'sweetalert';
import InputComponent from './InputComponent';


export default function Login() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const [error,setError]=useState('');



    const schema=Joi.object({
        email:Joi.string().email({tlds: { allow: false }} ).required().label('Email'),
        password:Joi.string().min(6).max(20).required().label('Password'),
    })
    const submit=(e)=>{
        e.preventDefault();
        console.log(email,password);

        //make validations
        const {value,error}=schema.validate({email,password});
        if(!error){
            //submit form
            swal('Congratulations!',"User is logged in",'success');
            return;
        }
        swal('Error!',error.details[0].message,'error');
        // setError(error.details[0].message);
    }




    return (
        <div className='login container'>
            <form action="" className='shadow mx-auto'>
                <h3 className='text-center'>Login</h3>
                <div className="inputFields mt-2">
                    <InputComponent type='email' label='Email' id="email" value={email} setValue={setEmail} />
                    <InputComponent type='password' label='Password' id="password" value={password} setValue={setPassword} />
                </div>

                <div className="forgetPassLink mt-2">
                    <a href="">forget password?</a>
                </div>
                
                <div className="buttons mt-2">
                    <button className="btn btn-primary" onClick={submit}>Login</button>
                    <button className="btn btn-success mt-2">Create Account</button>
                </div>
            </form>
        </div>
    )
}
