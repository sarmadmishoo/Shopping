import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import ProductPage from './Products/Products'
import { Layout } from 'antd';


const { Sider, Content } = Layout;
class Dashboard extends React.Component{
    render(){
        return(
           
            <Layout>
                <Sider>
                    <SideMenu/>
                </Sider>
                <Content>
                    <ProductPage/>
                </Content>
            </Layout>


        )
    }
}

export default Dashboard;