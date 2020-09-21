import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Row, Col, Button } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Topics</Menu.Item>
            <Menu.Item key="3">About us</Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            <Row gutter={[16, 16]}>
              <Col span={6}> <Button type="primary">HTML5</Button> </Col>
              <Col span={6}> <Button type="primary">JavaScript</Button>  </Col>
            </Row>
            <Row gutter={[16, 16]}>
              <Col span={6}> <Button type="primary">React</Button> </Col>
              <Col span={6}> <Button type="primary">CSS3</Button> </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default App;
