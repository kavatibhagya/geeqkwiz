import React, { useState, useEffect } from 'react';
import '../../App.css';
import './style.css';
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from 'antd';

import { topics as topicsData } from '../../data/topics.json';

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setTopics([...topicsData]);
  }, []);

  return(
  <Card className="main-card">
    <Row gutter={[48, 48]}>
      {
        topics.map((topic) => (
          <Col lg={12} xs={24} md={12} key={topic.id}>
            <Card className="topic-card">
              <Link to={`/test/${topic.id}`}>
                <Button type="primary" size="large">{topic.title}</Button>
                </Link>
              </Card>
          </Col>
        ))
      }
      </Row>
  </Card>
);
}
 export default Topics;