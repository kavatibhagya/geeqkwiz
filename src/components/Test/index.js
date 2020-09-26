import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useParams, useHistory } from 'react-router-dom';
import { Row, Col, Card, Button, Divider, Typography, Form } from 'antd';
import Question from '../Question'
const { Title, Text } = Typography;

const Test = () => {
  const { id } = useParams();
  const history = useHistory();
  const [questionId, setQuestionId] = useState(1);
  const [userAnswerId, setUserAnswerId] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState();
  const [valid, setValid] = useState(true);

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
    setValid(true);
  }

  const onSubmit = e => {
    if(!userAnswerId) {
      setValid(false);
      return;
    }

    const updatedQuestion = {
      ...question,
      userAnswerId
    };
    const quesData = [...questions];

    setQuestion({ ...updatedQuestion });
    quesData[questionId - 1] = updatedQuestion;
    setQuestions([...quesData]);

    if(questionId === questions.length) {
      history.push("/results");
    } else {
      setQuestionId(questionId + 1);
      setQuestion({...questions[questionId]});
    }
  }

  return (
    <Form onFinish={onSubmit}>
      <Card className="main-card">
        {
          question ? <Question question={question} selectAnswer={selectAnswer}></Question> : ''
        }

        {
          valid ? '' : <Row justify="left"><Col><Text type="danger">Please choose the option</Text></Col></Row> 
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

