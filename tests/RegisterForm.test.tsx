
import React from 'react'
import { fireEvent, render,cleanup ,screen, waitFor} from '@testing-library/react'


import RegisterForm from '../components/RegisterForm'


  
  // Cast node-fetch as fetchMock so we can access the 
  // `.mock*()` methods

describe('Register Form',()=>{
   

    it("it should render the elements for paint",()=>{
        const mockSubmit = jest.fn()
        const elements = [
            {role:'form',name:'form'},
            {role:'input',name:'input-email'},
            {role:'input',name:'input-password'},
            {role:'input',name:'input-repeat-password'},
            {role:'input',name:'input-countries'},
            {role:'input',name:'input-languages'},
            {role:'input',name:'check-policy'},
            {role:'button',name:'submit-button'},
        ]
       const {getByTestId } =  render(<RegisterForm handleSubmit={mockSubmit} />)
        elements.forEach((element=>{
            expect(getByTestId(`${element.name}`)).toBeTruthy()
        }))

        
    })
    it(' it should return the  values of form',async()=>{
        const mockSubmit = jest.fn()
           
  
       const {queryByRole,getByTestId} = render(<RegisterForm handleSubmit={ mockSubmit} />)
     
 
        fireEvent.change(getByTestId('input-email'),{target:{value:'email@gmail.com'}})
        fireEvent.change(getByTestId('input-password'),{target:{value:'12344'}})
        fireEvent.change(getByTestId('input-repeat-password'),{target:{value:'12344'}})

        //countries

        fireEvent.click(getByTestId('countries-button'))
        const countriesList = getByTestId('select-list')
        await waitFor(()=>countriesList)
        expect(countriesList).toBeInTheDocument()


        const countriesItem = queryByRole('li',{name:'country-item'})
        await waitFor(()=>countriesItem)
        expect(countriesItem)
        fireEvent.change(getByTestId('input-countries'),{target:{value:'Colombia'}})
        //Langs
     
        fireEvent.click(getByTestId('lang-button'))
        const langsList = getByTestId('languages-box')
        await waitFor(()=>langsList)
        expect(langsList).toBeInTheDocument()
        
        const languagesItem = queryByRole({name:'languages-item'})
        await waitFor(()=>languagesItem)
        expect(languagesItem)
       fireEvent.change(getByTestId('input-languages'),{target:{value:'English'}})
       fireEvent.submit(getByTestId('form'))
        //Submit form
        expect(mockSubmit).toHaveBeenCalled()
        expect(mockSubmit.mock.calls).toEqual([[JSON.stringify({email:'email@gmail.com',password:'12344',repeatPassword:'12344',country:'Colombia',lang:'English'})]]) 
        
        
    })   
    
    afterAll(cleanup)
})