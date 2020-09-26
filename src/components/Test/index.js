import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button, Divider, Typography, Form } from 'antd';
import Question from '../Question'
const { Title } = Typography;

const Test = () => {
  const { id } = useParams();
  const [questionId, setQuestionId] = useState(1);
  const [userAnswerId, setUserAnswerId] = useState(0);
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
    setUserAnswerId(e.target.value);
  }

  const onSubmit = e => {
    if(!userAnswerId) {
      return;
    }

    setQuestion({...question, userAnswerId });
    setQuestionId(questionId++);
    setQuestion({...questions[questionId - 1]});
  }

  return (
    <Form onFinish={onSubmit}>
      <Card className="main-card">
        {
          question ? <Question question={question} selectAnswer={selectAnswer}></Question> : ''
        }

        <Row justify="center">
          <Col span={16}>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                {questionId === questions.length ? 'Finish' : 'Next'}
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="center"></Divider>
        <Row justify="left">
          <Col span={16}>
            <Title level={5}>Number of questions: {questionId}/{questions.length}</Title>
          </Col>
        </Row>
      </Card>
    </Form>
  )
}

export default Test;

