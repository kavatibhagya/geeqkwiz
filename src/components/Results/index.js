import React from 'react';
import '../../App.css';
import './style.css';
import { Card, Typography } from 'antd';
const { Title } = Typography;

const Results = ({ topic, data }) => {

  return (
    <>
    <Card className="home-card">
      <Title level={4}>{topic} Quiz Test Results</Title> 
      <Title level={5}>Correct Answers: </Title> 
      <Title level={5}>Total questions: </Title> 
      <Title level={5}>Percentage:  </Title> 

      <Link to="/">
        <Button type="primary" size="large" block>Take Another Test</Button>
      </Link>
      <Link>
        <Button type="primary" size="large" block>Review Results</Button>
      </Link>
    </Card>
    <Topics/>
    </>
  );
};

export default Home;