import { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { Icons } from "../Icons"
import { CustomSelectProps } from "./types"



const CountrySelect:FC<CustomSelectProps> = ({idButton,idInput,onChange}) =>{
    const [onShow,setOnShow] = useState<boolean>(false)
    const [countries,setCountries] = useState<[]>([])
    const inputRefT = useRef<HTMLInputElement>(null)

    const getCountries = async (name:string) =>{
        if(name && name != ''){
            const countries = await fetch(`https://restcountries.com/v2/name/${name}`)
            const data = await countries.json()
            setCountries(data) 
        }else{

            setCountries([]) 
        }

        
    }

    const onChangeText = (e:ChangeEvent<HTMLInputElement>) =>{
        setOnShow(false)
        let debounce : any = null
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            getCountries(e.target.value)
            setOnShow(true)

        }, 600)
    }
    const onSelectCountry = (country:string) =>{
        inputRefT.current?.value && ( inputRefT.current.value = country )
        onChange(country)
    }
    return(
        <div className={'select-container'}>
            <div className={'select-field'}>
            <Icons.Search size="1.3rem" />
            <input ref={inputRefT} onChange={onChangeText} aria-label={`${idInput}`} data-testid={idInput}  className="w-full h-full" type={'text'} placeholder="Country of Residence"  />
                <button type="button" onClick={()=>setOnShow(!onShow)} aria-label={`${idButton}`} data-testid={idButton}>   
                    <Icons.ArrowDown size="1.2rem" />
                </button>
            
            </div>
            {
                onShow  && countries &&
            <ul className={'select-list'} data-testid="select-list">
               {
                   countries.map((country:any,key)=>(
                    <li onClick={()=>onSelectCountry(country.name)} key={key}>{country.name}</li>
                   ))
               }
               {
                   countries.length === 0 &&
                   <li>Country no found try it again.</li>
               }
             
                
            </ul>

            }
            
                
        </div>
    )
}

export default CountrySelect