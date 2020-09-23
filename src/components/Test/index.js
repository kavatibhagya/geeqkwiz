import React, { useState, useEffect } from 'react';
import '../../App.css';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Radio, Button } from 'antd';

const Test = () => {
  const { id } = useParams();
  const [questionId, setQuestionId] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState();

  useEffect(() => {
    const getData = async () => {
      let { data } = await import(`../../data/${id}.json`);
      
      setQuestions([...data]);
      setQuestion(questions[questionId]);
    }

    getData();
  }, [id, questionId, questions, setQuestion, setQuestions]);

  return (
    <Card className="main-card">
      <Row>
        <Col>{questionId}. {question.question}</Col>
      </Row>

      <Row>
        <Col>
          <Radio.Group>
            {
              question.choices.map((choice) => (
                <Row>
                  <Col>
                    <Radio value={id}>
                      {choice.description}
                    </Radio>
                  </Col>
                </Row>
              ))
            }
          </Radio.Group>
        </Col>
      </Row>

      <Row>
        <Col>
            <Button>Next</Button>
        </Col>
      </Row>
    </Card>
  )
}

export default Test;

