import React from 'react';
import { Row, Col, Button } from 'antd';

const Topics = () => {
  return(
  <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
    <Row gutter={[16, 16]}>
      <Col span={6}> <Button type="primary">HTML5</Button> </Col>
      <Col span={6}> <Button type="primary">JavaScript</Button>  </Col>
    </Row>
    <Row gutter={[16, 16]}>
      <Col span={6}> <Button type="primary">React</Button> </Col>
      <Col span={6}> <Button type="primary">CSS3</Button> </Col>
    </Row>
  </div>

);
}
 export default Topics;