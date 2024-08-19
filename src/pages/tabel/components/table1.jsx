import React from "react";
import { Table, Button } from "antd";
import { data } from "./data";
import { nanoid } from "nanoid";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => (
      <div className="card">
        <img
          className="cardImg"
          src={image}
          alt="Category"
          style={{
            width: "70px",
            height: "70px",
            transition: "transform 0.3s",
          }}
        />
      </div>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    render: () => {
      return (
        <div className="actions">
          <Button className="deleteBtn">Delete</Button>
          <Button className="editBtn">Edit</Button>
        </div>
      );
    },
  },
];

export const Table1 = () => {
  const dataSource = data.map((item) => ({
    key: nanoid(),
    id: item.id,
    title: item.title,
    image: item.categoryImg,
  }));

  return (
    <div className="cardContainer">
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Table1;
