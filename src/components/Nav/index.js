import React from 'react';
import './style.css';
import { Menu, Layout, Typography } from 'antd';
import { Link } from "react-router-dom";
const { Header } = Layout;
const { Title } = Typography;

const Nav = () => {

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Title level={2} className="title">GeeqKwiz</Title>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/about">About us</Link></Menu.Item>
      </Menu>
    </Header>
  );
};

export default Nav;