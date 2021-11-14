import { Layout } from "antd";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;

function Main() {
  return (
    <div>
      {" "}
      <Layout>
        <Header style={{ background: "#a8b92c" }}>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      {/* <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout> */}
    </div>
  );
}

export default Main;
