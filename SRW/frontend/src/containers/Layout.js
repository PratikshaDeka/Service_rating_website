/*import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
            }))}
        />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
            <Breadcrumb.Item>Signup</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            Content
        </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default CustomLayout;
*/

import React from 'react';
import { Breadcrumb, Layout, Menu, Input } from 'antd';
import {HomeFilled} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        // onClick={({key})=>{
        //   if(key === "logout"){
        //     //Signout feature here
        //   }else{
        //     navigate(key);
        //   }
        // }}
        defaultSelectedKeys={['dashboard']}
        items={[
          { label:"Home", key:"home", icon:<HomeFilled></HomeFilled> },
          {label:"Dashboard", key:"dashboard"},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {label: <Input.Search placeholder='Search here...'></Input.Search>, key:"search"}
        ]}
      />
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href='#'>Login</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Signup</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Continue without account</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Hi trying something new</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Contact us at:</Footer>
  </Layout>
);

}

export default CustomLayout;