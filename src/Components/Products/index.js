import React,{Component} from 'react';
import {  List, Card } from 'antd';
import './product.css'
class index extends Component {
    
    render (){
        const data = [
            {
              title: 'Title 1',
            },
            {
              title: 'Title 2',
            },
            {
              title: 'Title 3',
            },
            {
              title: 'Title 4',
            },
            {
              title: 'Title 5',
            },
            {
              title: 'Title 6',
            },
            {
                title: 'Title 2',
              },
              {
                title: 'Title 3',
              },
              {
                title: 'Title 4',
              },
              {
                title: 'Title 5',
              },
              {
                title: 'Title 6',
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
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
          </div>
        )
    }
}

export default index;


