import React, { useState, useEffect } from 'react';
import './App.css';
import { useParams } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

const Test = () => {
  const { id } = useParams();

  useEffect(() => {
    let { data } = await import(`../../data/${id}.json`);
    console.log(data);
  }, []);

  return (
    <Card className="main-card">
      <Row>
        <Col>Ready ?</Col>
      </Row>
    </Card>
  )
}

export default Test;

