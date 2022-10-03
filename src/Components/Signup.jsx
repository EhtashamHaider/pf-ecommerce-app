import React,{useState} from 'react'
import '../Styles/signup.css';
import Joi from 'joi';
import swal from 'sweetalert';
import InputComponent from './InputComponent';

export default function Signup() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [userName,setUsername]=useState('');

    const [error,setError]=useState('');

    const schema=Joi.object({
        userName:Joi.string().min(3).max(50).required().label('Username'),
        email:Joi.string().email({tlds: { allow: false }} ).required().label('Email'),
        password:Joi.string().min(6).max(20).required().label('Password'),
    })
    const submit=(e)=>{
        e.preventDefault();
        const {value,error}=schema.validate({email,password,userName});
        if(!error){
            //submit form
            swal('Congratulations!',"User is Registered successfully!",'success');
            return;
        }
        swal('Error!',error.details[0].message,'error');

    }
  return (
    <div className='signup container'>
            <form action="" className='shadow mx-auto'>
                <h3 className='text-center'>Signup</h3>
                <div className="inputFields mt-2">
                    <InputComponent type='text' label='Name' id="username" value={userName} setValue={setUsername} />
                    <InputComponent type='email' label='Email' id="email" value={email} setValue={setEmail} />
                    <InputComponent type='password' label='Password' id="password" value={password} setValue={setPassword} />
                </div>
                
                <div className="buttons mt-2">
                    <button className="btn btn-primary" onClick={submit}>Signup</button>
                </div>
                <button className="btn btn-success mt-2" onClick={(e)=>e.preventDefault()}>Already have an account?</button>
            </form>
        </div>
  )
}
