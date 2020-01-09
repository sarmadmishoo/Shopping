import React,{Component} from 'react';
import Slide from './Slide/Slide';
import Product from './Products/index';



class Home extends Component{
    render(){
        return(
            <div >
                 <Slide/>
                 <Product/> 
            </div>
            
        )
    }
}

export default Home;