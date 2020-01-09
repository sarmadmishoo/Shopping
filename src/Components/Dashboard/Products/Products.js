import React from 'react';
import Header from './ProductHeader';
import Product from './Product/Product';
class Products extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1>sarmad</h1>
                <Product/>
            </div>
        )
    }
}

export default Products;