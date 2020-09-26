import React from 'react';
import '../../App.css';
import './style.css';
import { Card, Typography } from 'antd';
import Topics from '../Topics';
const { Title } = Typography;

const Results = ({ topic, data }) => {

  return (
    <>
    <Card className="home-card">
      <Title level={4}>{topic} Quiz Test Results</Title> 
      <Title level={5}></Title> 
    </Card>
    <Topics/>
    </>
  );
};

export default Home;