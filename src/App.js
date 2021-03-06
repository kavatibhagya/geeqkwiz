import React from 'react';

import 'antd/dist/antd.css';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Test from './components/Test';
import Results from './components/Results';


import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
const { Footer,Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Nav></Nav>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/test/:id" component={Test} />
          <Route path="/results" component={Results} />
      </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>All rights reserved geeqkwiz@2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
