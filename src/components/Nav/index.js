import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from "react-router-dom";
const { Header } = Layout;

const Nav = () => {

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/topics">Topics</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/aboutus">About us</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default Nav;