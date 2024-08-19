import React from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";

const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

const onFinish = (data) => {
  console.log(data);
};

const MainInput = () => (
  <Form
    onFinish={onFinish}
    layout="vertical"
    {...formItemLayout}
    variant="filled"
  >
    <Form.Item
      label="Input"
      name="Input"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Select"
      name="Select"
      rules={[
        {
          required: true,
          message: "Please select an option!",
        },
      ]}
    >
      <Select placeholder="Select an option">
        <Option value="option1">Option 1</Option>
        <Option value="option2">Option 2</Option>
        <Option value="option3">Option 3</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="Date"
      name="DatePicker"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      label="RangePicker"
      name="RangePicker"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <RangePicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default MainInput;
