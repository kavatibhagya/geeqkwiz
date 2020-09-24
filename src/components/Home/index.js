import React from 'react';
import '../../App.css';
import './style.css';
import { Card, Typography } from 'antd';
import Topics from '../Topics';
const { Title } = Typography;

const Home = () => {

  return (
    <>
    <Card className="home-card">
      <Title level={4}>Welcome to Front End Quiz App</Title> 
      <Title level={5}>Please choose the topic to start the test</Title> 
    </Card>
    <Topics/>
    </>
  );
};

export default Home;