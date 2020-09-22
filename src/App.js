import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Row, Col, Button } from 'antd';

import { Link, Route, Switch } from "react-router-dom";
const { Header, Content, Footer } = Layout;

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
);

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/topics">Topics</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/aboutus">About us</Link></Menu.Item>
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
        <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/topics" component={Category} />
        <Route path="/aboutus" component={Products} />
      </Switch>
      <Footer style={{ textAlign: 'center' }}>All rights reserved @geeqkwiz 2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
