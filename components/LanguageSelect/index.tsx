import { ChangeEvent, FC, useEffect, useRef, useState } from "react"
import { Icons } from "../Icons"
import { CustomSelectProps } from "./types"

import { Languages } from "./data"

const CountrySelect:FC<CustomSelectProps> = ({idInput,idButton,onChange}) =>{
    const [onShowLang,setOnShow] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)


    const onSelectCountry = (country:string) =>{
        inputRef.current?.value && ( inputRef.current.value = country )
        setOnShow(false)
        onChange(country)
    }
    return(
        <div className={'select-container'}>
            <div className={'select-field'}>
            <input ref={inputRef} defaultValue={'English'} readOnly aria-label={`${idInput}`} data-testid={idInput} className="w-full h-full" type={'text'} placeholder="Choose Language"  />
                <button type="button" onClick={()=>setOnShow(!onShowLang)} aria-label={`${idButton}`} data-testid={idButton}>   
                    <Icons.ArrowDown size="1.2rem" />
                </button>
            
            </div>
            {
                onShowLang  && Languages &&
            <ul className={'select-list'} data-testid="languages-box">
               {
                   Languages.map((country:any,key)=>(
                    <li data-testid="languages-item'" onClick={()=>onSelectCountry(country.name)} key={key}>{country.name}</li>
                   ))
               }
                
            </ul>

            }
            
                
        </div>
    )
}

export default CountrySelect