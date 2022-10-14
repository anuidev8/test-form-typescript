import React, { FC, useState,FormEvent } from "react"
import FormLayout from "../../layouts/FormLayout"
import { FormDataProps, RegisterProps } from './types' 
import { Icons } from "../Icons"

import CountrySelect from "../CountrySelect"
import LanguageSelect from "../LanguageSelect"
import styles from './RegisterForm.module.css'
import Link from "next/link"


const RegisterForm:FC<RegisterProps> = ({handleSubmit}) =>{
    const [data,setData] = useState<FormDataProps>({
            email:'',
            password:'',
            repeatPassword:'',
            country:'',
            lang:''
        })

    const [showPassword,setShowPassword] = useState({activate:false,type:1})

    const onSubmit = (e:FormEvent) =>{
        e.preventDefault()
       
        handleSubmit(JSON.stringify({
            email:data.email,
            password:data.password,
            repeatPassword:data.repeatPassword,
            country:data.country,
            lang:data.lang
        }))
    }


    return(
        <FormLayout title="Create your count" bgColor="#f6f7fb">
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
                 onChange={(e)=>setData({...data,email:e.target.value})}  
                   />

               </div>
               <div className="base-input-box base-input-with-icon">
                   <div onClick={()=>setShowPassword({type:1,activate:!showPassword.activate})}>
                   <Icons.EyeOpen size="1.5rem" className="base-input-icon" />
                   </div>
                    <input
                     type={showPassword.activate && showPassword.type === 1 ? 'text' : 'password' }
                     required 
                     className="base-input" 
                     placeholder="Password" 
                     name="password"   
                     aria-label="input-password" 
                     data-testid="input-password" 
                     onChange={(e)=>setData({...data,password:e.target.value})}  
                      />
               </div>
               <div className="base-input-box base-input-with-icon">
                   <div  onClick={()=>setShowPassword({type:2,activate:!showPassword.activate})} className="base-input-icon">
                   <Icons.EyeOpen  size="1.5rem"  />
                   </div>
                    <input
                      type={showPassword.activate && showPassword.type === 2 ? 'text' : 'password' }
                     required 
                     className="base-input" 
                     placeholder="Password" 
                     name="repeatPassword"   
                     aria-label="input-repeat-password" 
                     data-testid="input-repeat-password" 
                     onChange={(e)=>setData({...data,repeatPassword:e.target.value})}  
                      />
               </div>
               <div>
                   <CountrySelect onChange={(e)=>setData({...data,country:e})} idInput="input-countries" idButton="countries-button" />
               </div>
               <div>
                   <LanguageSelect onChange={(e)=>setData({...data,lang:e})} idInput="input-languages" idButton="lang-button" />
               </div>
               <div className={`${styles.policy}`}>
                   <input
                    type={'radio'}
                    aria-label="check-policy" 
                    data-testid="check-policy" 
                   />
                   <label>By continuing i agree to the <Link href="/"> Terms of Services </Link> and <Link href="/"> Privacy Policy </Link> </label>
               </div>
              
              
               <button className="base-btn w-full base-btn-primary" aria-label="submit-button" data-testid="submit-button" > Sign Up </button>
           </form>
        </FormLayout>
    )
}

export default RegisterForm