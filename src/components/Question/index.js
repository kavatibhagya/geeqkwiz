import React from 'react';

import { Row, Col, Radio, Typography, Divider } from 'antd';
const { Title } = Typography;

const Question = ({ question }) => {
  
  const onChange = e => {
    console.log(e.target.value);
  }

  return (
    <>
    <Title>{question.id}. {question.question}</Title>
    <Divider orientation="center"></Divider>
      <Row>
        <Col>
          <Radio.Group onChange={onChange}>
            {
              question.choices.map((choice) => (
                <Title level={4} key={choice.id}>
                    <Radio value={choice.id}>
                      {choice.description}
                    </Radio>
                </Title>
              ))
            }
          </Radio.Group>
        </Col>
      </Row>
    </>
  )
}

export default Question;