import React from 'react';
import '../../App.css';
import './style.css';
import { Link } from 'react-router-dom';
import { Card, Typography, Button, Row, Col } from 'antd';
const { Title } = Typography;

const Results = ({ topic, questions }) => {

  return (
    <>
    <Title level={4}>{topic} Quiz Test Results</Title> 
      <Title level={5}>Correct Answers: </Title> 
      <Title level={5}>Total questions: </Title> 
      <Title level={5}>Percentage:  </Title> 

      <Row>
        <Col span={24}>
          <Link to="/">
            <Button type="primary" size="large" block>Take Another Test</Button>
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Link>
            <Button type="primary" size="large" block>Review Questions</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Results;