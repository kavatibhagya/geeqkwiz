import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';
import Question from '../Question'

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

  return (
    <Card className="main-card">
      {
        question ? <Question question={question}></Question> : ''
      }
      <Row>
        <Col>
            <Button>Next</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Test;

