import React from 'react';
import Menu from './Menu';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Bottom from './Components/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/Login/SignUp';
import Dashboard from './Components/Dashboard/index';
import './App.css';
import Authcontext from './Components/Context/auth-context';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout } from 'antd';

const { Header, Footer,  Content } = Layout;
class App extends React.Component {
  
    state={
      token:null,
      userId:null
    }
 
  
  login=(token,userId,tokenExpiration)=>{
    this.setState({token:token,userId:userId});
  }
  logout=(token, userId)=>{
    this.setState({token:null,userId:null});
  }
  render(){
  return (
    <Router>
    <div className="App">
    <Authcontext.Provider value={{token:this.state.token,userId:this.state.userId,login:this.login,logout:this.logout}}>
    <Layout>
      <Header><Menu/></Header>
      <Switch>
      <Content>
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/Login" component={Login}/>
      <Route path="/signup" component={Signup}/>
       <Route path="/Dashboard" component={Dashboard}/>
      </Content>
      </Switch>
      <Footer><Bottom/></Footer>
    </Layout>
    </Authcontext.Provider>
     
     
     
    </div>
    </Router>
  );
}
}

export default App;
