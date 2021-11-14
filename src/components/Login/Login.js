import React from "react";
import { Row, Col, Button, Form, Input, Checkbox } from "antd";
import "../../Style/Login.css";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const leftSpan = 8;
  const rightSapn = 10;
  return (
    <div
      className="vertical-align"
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row style={{ width: "100vw" }}>
        <Col span={3}></Col>
        <Col span={18}>
          <Form
            name="basic"
            labelCol={{
              span: leftSpan,
            }}
            wrapperCol={{
              span: rightSapn,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: leftSpan,
                span: rightSapn,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: leftSpan,
                span: rightSapn,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={3}></Col>
      </Row>
    </div>
  );
}

export default Login;
