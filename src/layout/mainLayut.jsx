import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate, Outlet, Link } from "react-router-dom";
import { layoutData } from "./layoutData";

const { Header, Content, Sider } = Layout;

const items2 = layoutData.map(({ children, icon, key, label, path }) => {
  return {
    key,
    label: <Link to={path}>{label}</Link>,
    icon: React.createElement(icon),
    children: children.map((child) => {
      return {
        key: child.key,
        label: <Link to={child.path}>{child.label}</Link>,
      };
    }),
  };
});

export const MainLayut = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ height: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <div>
          <img
            onClick={() => navigate("/")}
            style={{ width: "40px", marginTop: "30px", cursor: "pointer" }}
            src="logo.png"
            alt=""
          />
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{}}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[items2[0].key]}
            defaultOpenKeys={[items2[0].key]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayut;
