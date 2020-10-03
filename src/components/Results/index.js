import React from 'react';
import '../../App.css';
import './style.css';
import { Link } from 'react-router-dom';
import { Typography, Button, Row, Col } from 'antd';
const { Title } = Typography;

const Results = ({ topic, questions }) => {

  const correctAnswers = questions.filter((ques) => ques.answerId === ques.userAnswerId) || [];

  return (
    <>
    <Title level={4}>{topic.toUpperCase()} Quiz Test Results</Title> 
      <Title level={5}>Correct Answers: {correctAnswers.length}</Title> 
      <Title level={5}>Total questions: {questions.length}</Title> 
      <Title level={5}>Percentage:  {Math.round((correctAnswers.length / questions.length) * 100)} %</Title> 

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Link to="/">
            <Button type="primary" size="large" block>Take Another Test</Button>
          </Link>
        </Col>
      </Row>
      <h3>Temp value</h3>
    </>
  );
};

export default Results;