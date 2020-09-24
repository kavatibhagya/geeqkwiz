import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Divider, Typography } from 'antd';
import Question from '../Question'
const { Title } = Typography;

const Test = () => {
  const { id } = useParams();
  const [questionId, setQuestionId] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState();

  useEffect(() => {
    const getData = async () => {
      let { data } = await import(`../../data/${id}.json`);
      
      setQuestions([...data]);
      setQuestion({ ...data[questionId - 1] });
    }

    getData();
  }, []);

  const selectAnswer = e => {
    console.log(e.target.value);
  }

  return (
    <Card className="main-card">
      {
        question ? <Question question={question} selectAnswer={selectAnswer}></Question> : ''
      }

      <Row justify="center">
        <Col span={16}>
            <Button type="primary" size="large" block>Next</Button>
        </Col>
      </Row>
      <Divider orientation="center"></Divider>
      <Row justify="left">
        <Col span={16}>
          <Title level={5}>Number of questions: {questionId}/{questions.length}</Title>
        </Col>
      </Row>
    </Card>
  )
}

export default Test;

