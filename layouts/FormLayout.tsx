import { FC, useEffect, useState } from "react"
import { FormLayoutProps } from "./types"

import styles from './FormLayout.module.css'
import Image from "next/image"
import { useRouter } from "next/router"
import Link from "next/link"

const FormLayout:FC<FormLayoutProps> = ({
    title,
    bgColor ='#f6f7fb',
    children
}) =>{
    const [route,setRouter] = useState<string>('')
   useEffect(()=>{
    
   setRouter(location?.pathname == '/' ? '/register' : '/')

   },[])
    return(
        <section style={{ backgroundColor:`${bgColor}` }}>
           <div className={`${styles.girdContainer}`}>
                <div className={`${styles.girdItem}`}>
                        <figure>
                            <Image 
                                alt="mercury logo"
                                width={200}
                                height={80}
                                src="/images/logo.png"
                                objectFit="contain"
                            />
                        </figure>
                        <h1 className={`text-title primary-color ${styles.title}`}>{title}</h1>
                        <div className={`${styles.form}`}>
                        {children}
                        </div>

                        <div className={styles.footer}>
                            {
                                route != '/' &&

                                <h3>
                                Dont have an account ? 
                                 <Link href={route}>Sing Up</Link>  instead
                                </h3>  
                            }
                            {
                                route === '/' &&

                                <h3>
                                Have an account ? 
                                 <Link href={route}>Sing In</Link>  instead
                                </h3>  
                            }
                            
                        </div>
                </div>
           </div>
        </section>
    )
}

export default FormLayout