
import React from 'react'
import { fireEvent, render,cleanup ,screen} from '@testing-library/react'

import LoginForm from '../components/LoginForm'

describe('Login component',()=>{
    const mockSubmit = jest.fn()
    it("it should render the elements for paint",()=>{
        const elements = [
            {role:'form',name:'form'},
            {role:'input',name:'input-email'},
            {role:'input',name:'input-password'},
            {role:'button',name:'submit-button'},
            {role:'a',name:'forgot-password'},
            {role:'input',name:'check-remember'},
        ]
       const {getByTestId} =  render(<LoginForm handleSubmit={ mockSubmit} />)
        elements.forEach((element=>{
            expect(getByTestId(`${element.name}`)).toBeTruthy()
        }))

        
    })
    it("it should return the  values of form", async()=>{
       
        const { getByTestId } = render(<LoginForm handleSubmit={mockSubmit} />)
         fireEvent.change(getByTestId('input-email'),{target:{value:'email@gmail.com'}})
            fireEvent.change(getByTestId('input-password'),{target:{value:'12344'}})
        fireEvent.submit(getByTestId('form'))
        expect(mockSubmit).toHaveBeenCalled()
        expect(mockSubmit.mock.calls).toEqual([[JSON.stringify({email:'email@gmail.com',password:'12344'})]])
    })
    afterAll(cleanup)
})