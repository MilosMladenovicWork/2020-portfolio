import React, {useState, useEffect} from 'react'
import {validate} from 'validate.js'
import Button from './button'
import './form.css'

function Form(){

    const [form, setForm] = useState({
      name:'',
      email:'',
      message:'',
      submit:false
    }
    )
  
    const [serverMessage, setServerMessage] = useState(null)
  
    const [notification, setNotification] = useState(false)
    const [loading, setLoading] = useState(false)
  
    const constraints = {
      email:{
        email:true
      },
      name:{
        length:{
          minimum:1
        }
      },
      message:{
        length:{
          minimum:1
        }
      }
    }
  
    const formValidation = () => {
      if(validate({email:form.email, name:form.name, message:form.message}, constraints) === undefined){
        setForm(function(prevState) {
          return {
            ...prevState,
            submit:true
          }
        })
      }else{
        setForm(function(prevState) {
          return {
            ...prevState,
            submit:false
          }
        })
      }
    }
  
    async function postFormData(url, data){
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:'POST',
        mode:'cors',
        body:JSON.stringify({
          name:data.name,
          email:data.email,
          message:data.message
        })
      });
  
      return response.json()
    }
  
    useEffect(()=>{
      formValidation()
    }, [form.email, form.name, form.message])
  
    const changeHandler = (e) => {
      let inputName = e.target.name
      let value = e.target.value
      setForm(function(prevState) {
        return {
          ...prevState,
          [inputName]:value
        }
      })
    }
  
    const clickHandler = (e) => {
      e.preventDefault()
      setLoading(true)
      setNotification(false)
      postFormData('https://server-personal-use.herokuapp.com/contact', form)
        .then((data) => {
          setLoading(false)
          setServerMessage(data.message)
          setNotification(true)
        }).catch(e => console.log(e));
      }

    return(
        <form action='#' method='POST'>
            <input onChange={(e) => changeHandler(e)} type='text' name='name' placeholder='Name'/>
            <input onChange={(e) => changeHandler(e)} type='email' name='email' placeholder='Email'/>
            <textarea onChange={(e) => changeHandler(e)} name='message' placeholder='Message'></textarea>
            <Button onClick={clickHandler} style={{display:form.submit ? 'block': 'none'}}>Submit</Button>
        </form>
    )
}

export default Form