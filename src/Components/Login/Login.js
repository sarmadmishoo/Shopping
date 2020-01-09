import React,{Component} from 'react';
import '../../App.css';
import { withRouter } from 'react-router-dom';
import Authcontext from '../Context/auth-context';
import { Form, Icon, Input, Button } from 'antd';
class Login extends Component{
  
  state={
    islogin : true
  };

   static contextType = Authcontext;
  constructor(props){
    super(props);
    this.emailEl=React.createRef();
    this.passwordEl=React.createRef();

  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
     
        const requestBody={
          query:`mutation{
            login(email:"${values.username}"
              password:"${values.password}"){
              token
              user{
                id
              }
            }
          }
          `
        };
        console.log(values);
        console.log(JSON.stringify(requestBody))
        fetch('http://localhost:3000/graphql',{
          method:'POST',
          body:JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json'
          }
        
        }).then(res =>{
          if(res.status!==200 &&res.status!==201){
            throw new Error('Failed')
          }
          return res.json();
          
        })
        .then(resData =>{
          console.log(resData)
          if (resData.data.login.token){
    
            this.context.login(
              resData.data.login.token,
              resData.data.login.userId,
              resData.data.login.tokenExpiration)
              
          }
          this.props.history.push('/Dashboard');
        })
       
      }
     
    });

  
 
   
  }
 
  
    
render()
{
  const { getFieldDecorator } = this.props.form;
    return(
        
        
  /*<form className="bg-white shadow-md rounded px-8 pb-8 mb-4 pt-6" onSubmit={this.SubmitHandler}>
    {this.errors}
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Username
      </label>
      <input name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label name="password" className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input name="password" className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"  ref={this.passwordEl} placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>*/
 

<div className="w-full max-w-xs mx-auto pt-20 ">
<Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              ref={this.emailEl}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              ref={this.passwordEl}
            />,
          )}
        </Form.Item>
        <Form.Item>
         
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
         
        </Form.Item>
</Form>
</div>
    )
}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default withRouter(WrappedNormalLoginForm);