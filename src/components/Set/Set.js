import React from "react";
import { Row, Col, Divider, Button } from "antd";

function Set() {
  return (
    <div>
      <Row>
        <Col span={24}>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>col1</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12}>col2</Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>col3</Col>
      </Row>
      <Divider />
      <Row>
        <Col xs={{ span: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 19, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={8}>Col</Col>
        <Col span={8} offset={8}>
          offset
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={18} push={6}>
          col-18 col-push-6
        </Col>
        <Col span={6} pull={18}>
          col-6 col-pull-18
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12} offset={6}>
          col-12 col-offset-6
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={12} push={6}>
          1
        </Col>
        <Col span={6}>2</Col>
        <Col span={6} pull={6}>
          3
        </Col>
      </Row>
      <Divider orientation="left">sub-element align left</Divider>
      <Row justify="start">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Divider />
      <Divider orientation="left">Normal</Divider>
      <Row>
        <Col span={6} order={4}>
          1 col-order-4
        </Col>
        <Col span={6} order={3}>
          2 col-order-3
        </Col>
        <Col span={6} order={2}>
          3 col-order-2
        </Col>
        <Col span={6} order={1}>
          4 col-order-1
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row>
        <Col
          span={6}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        >
          1 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{ order: 2 }}
          sm={{ order: 1 }}
          md={{ order: 4 }}
          lg={{ order: 3 }}
        >
          2 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{ order: 3 }}
          sm={{ order: 4 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        >
          3 col-order-responsive
        </Col>
        <Col
          span={6}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          4 col-order-responsive
        </Col>
      </Row>
      <Divider />
    </div>
  );
}

export default Set;
