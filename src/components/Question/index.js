import React from 'react';

import { Row, Col, Radio, Typography } from 'antd';
const { Title } = Typography;

const Question = ({ question }) => {
  return (
    <>
    <Title>{question.id}. {question.question}</Title>

      <Row>
        <Col>
          <Radio.Group>
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