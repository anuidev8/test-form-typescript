import { LoginProps } from "../LoginForm/types";

export interface FormDataProps {
    email:string
    password:string
    repeatPassword:string
    country:string
    lang:string
} 
export interface RegisterProps  {
    handleSubmit:((e:string)=>void)
}