import React,{Component} from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';

class SignUp extends Component{
    dashboard=()=>{
        
        this.props.history.push('/Dashboard');
    }
    constructor(props){
      super(props);
      this.FirstnameEl=React.createRef();
      this.LastnameEl=React.createRef();
      this.AgeEl=React.createRef();
      this.CountryEl=React.createRef();
      this.EmailEl=React.createRef();
      this.PassworEl=React.createRef();
      
    }
    SignupHandler = event => {
      event.preventDefault();
      const firstname = this.FirstnameEl.current.value;
      const lastname = this.LastnameEl.current.value;
      const age = this.AgeEl.current.value;
      const country = this.CountryEl.current.value;
      const email = this.EmailEl.current.value;
      const password= this.PassworEl.current.value;
      if (email.trim().length===0 || password.trim().length===0){
        return;
      }
      const requestBody={
        query:`mutation{
          createUser(input:{
            firstName:"${firstname}"
            lastName:"${lastname}"
            age:${age}
            country:"${country}"
            email:"${email}"
            password:"${password}"
          }){
            id
            password
            firstName
          }
        }`
      };
      console.log(JSON.stringify(requestBody))
      fetch('http://localhost:3000/graphql',{
        method:'POST',
        body:JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res =>{
        console.log(res)
        if(res.status!==200 &&res.status!==201){
          throw new Error('Failed')
        }
        return res.json();
        
      })
      .then(resData =>{
        console.log(resData)
        this.props.history.push('/');
      })
   
    };
render()
{
    return(
        
        <div className="w-full max-w-xs mx-auto pt-20 ">
  <form className="bg-white shadow-md rounded px-8 pb-8 mb-4 pt-6" onSubmit={this.SignupHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
        First Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={this.FirstnameEl} id="firstname" type="text" placeholder="First name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
        Last Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={this.LastnameEl} id="lastname" type="text" placeholder="Last name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
        Age
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={this.AgeEl} id="age" type="text" placeholder="21"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
        Country
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ref={this.CountryEl} id="country" type="text" placeholder="21"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={this.EmailEl} id="email" type="text" placeholder="test@gmail.com"/>
      
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ref={this.PassworEl} id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Register
      </button>
      
    </div>
  </form>
 
</div>

    )
}
}

export default withRouter(SignUp);