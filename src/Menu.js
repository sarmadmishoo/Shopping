import React,{Component} from 'react';
import {withRouter} from "react-router-dom";
import Authcontext from '../../shopping/src/Components/Context/auth-context'
class Menu extends Component{
     LoginPage = () => {
        this.props.history.push('/Login')
       };
       static contextType = Authcontext;
       Logout = () => {
        console.log(this.context)
        this.context.logout()
        this.props.history.push('/')
       };
       SignupPage = () => {
        this.props.history.push('/signup')
       };
    render(){
        
        return(
          <Authcontext.Consumer>
            {()=>{
              return(
                <nav className="flex items-center justify-between flex-wrap bg-blue-1000 ">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                  <span className="font-semibold text-xl tracking-tight">Shopping</span>
                </div>
                <div className="block lg:hidden">
                  <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className="text-sm lg:flex-grow">
                    <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                      Home
                    </a>
                    <a href="About" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                      About
                    </a>
                    <a href="Contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white">
                      Contact
                    </a>
                  </div>
                  <div>
                  {!this.context.token &&<button onClick={this.LoginPage} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0" >Sign In</button>}
                  {!this.context.token && <button onClick={this.SignupPage} className="inline-block bg-green-800 ml-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0" >Register</button>}
                  {this.context.token && <button onClick={this.Logout.bind()} className="inline-block bg-green-800 ml-2 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0" >Logout</button>}
                  </div>
                </div>
              </nav>
        )
            }}
           
          </Authcontext.Consumer>
        )
    }
};
export default withRouter(Menu);