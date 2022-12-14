import type { NextPage } from 'next'
import { useState } from 'react';
import LoginComponent from '../components/LoginForm'
import { FormDataProps } from '../components/LoginForm/types';
import Modal from '../components/Modal';


const Home: NextPage = () => {
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
        <LoginComponent handleSubmit={handleSubmit}  />
    </main>
  )
}

export default Home
