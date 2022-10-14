import React, { FC,FormEvent, useState } from "react"
import FormLayout from "../../layouts/FormLayout"
import { Icons } from "../Icons"
import { LoginProps } from "./types"
import styles from './LoginForm.module.css'



const LoginComponent:FC<LoginProps> = ({handleSubmit}) =>{
    const [data,setData] = useState({email:'',password:''})
    const [showPassword,setShowPassword] = useState({activate:false,type:1})
    const onSubmit = (e:FormEvent) =>{
        e.preventDefault()
        handleSubmit(JSON.stringify({
            email:data.email,
            password:data.password
        }))
    }
    return(
       <FormLayout title="Welcome Back" bgColor="white" >
           <form 
           onSubmit={onSubmit} 
          aria-label="form"
           data-testid="form" 
           className="w-full">

               <div className="base-input-box">
               <input 
               type="email"
                aria-label="input-email"  
                data-testid="input-email" 
                name="email" 
                 required 
                 className="base-input"  
                 placeholder="Email" 
                 onChange={(e)=>setData({...data,email:e.target.value})}  />

               </div>
               <div className="base-input-box base-input-with-icon">
                   <div onClick={()=>setShowPassword({type:1,activate:!showPassword.activate})} className="base-input-icon" >
                       {
                           showPassword.activate && showPassword.type === 1 && 
                           <Icons.EyeClose size="1.5rem"  />
                       }
                       {
                           !showPassword.activate  && 
                           <Icons.EyeOpen size="1.5rem"  />
                       }
                   
                   </div>
                    <input
                    type={showPassword.activate && showPassword.type === 1 ? 'text' : 'password' }
                     required 
                     className="base-input" 
                     placeholder="Password" 
                     name="password"   
                     aria-label="input-password" 
                     data-testid="input-password" 
                    onChange={(e)=>setData({...data,password:e.target.value})}     />
               </div>
               <div className={`${styles.forgotLink}`}>
                    <a className="primary-color" aria-label="forgot-password" data-testid="forgot-password">Forgot Password</a>
               </div>
               <div className={`${styles.checkRemember}`}>
                 <input id="check-remember" type="checkbox" aria-label="check-remember" data-testid="check-remember" />
     
                <label htmlFor="check-remember">
                <div className={`${styles.checkRememberBox}`}  >
                     <Icons.CheckMarker size=".8rem" className={`${styles.checkRememberIcon}`} />
                 </div>
                    Remember me
                    </label>   
               </div>
               <button className="base-btn w-full base-btn-primary" aria-label="submit-button" data-testid="submit-button" > Login In </button>
           </form>
       </FormLayout>    
    )
}

export default LoginComponent