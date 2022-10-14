

import type { NextPage } from 'next'
import {useState} from 'react'
import RegisterForm from '../components/RegisterForm';
import Modal from '../components/Modal';

const Register: NextPage = () => {
  const [data,setData] = useState<string|null>(null)
  const handleSubmit = (e:string) =>{
    console.log(e);
    setData(e);
    
  }
  return (
    <main>
        {
          data &&
          <Modal onClose={()=>setData(null)} data={data} />

      }
        <RegisterForm handleSubmit={handleSubmit}  />
    </main>
  )
}

export default Register
