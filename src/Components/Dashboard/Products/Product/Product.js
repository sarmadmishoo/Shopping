import React from 'react';
import {  List, Card } from 'antd';
class Product extends React.Component{
    render(){
        const data = [
            {
              title: 'Title 1',
              price:16
            },
            {
              title: 'Title 1',
              price:16
            },
            {
              title: 'Title 1',
              price:16
            },

          ];
        return(
            <div className="p24">
            <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 6,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content
                {item.price}
                </Card>
                
              </List.Item>
            )}
          />
          </div>
        )
    }
} 

export default Product;