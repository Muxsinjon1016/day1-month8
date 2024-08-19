import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { nanoid } from "nanoid";

export const layoutData = [
  {
    key: nanoid(),
    label: "Buttons",
    icon: CheckCircleOutlined,
    children: [
      {
        key: nanoid(),
        label: "First type",
        path: "/",
      },
      {
        key: nanoid(),
        label: "Second type",
        path: "/",
      },
    ],
  },
  {
    key: nanoid(),
    label: "Inputs",
    icon: NotificationOutlined,
    children: [
      {
        key: nanoid(),
        label: "First type",
        path: "/inputs",
      },
      {
        key: nanoid(),
        label: "Second type",
        path: "/inputs",
      },
    ],
  },
  {
    key: nanoid(),
    label: "Table",
    icon: NotificationOutlined,
    children: [
      {
        key: nanoid(),
        label: "First table",
        path: "/table",
      },
      {
        key: nanoid(),
        label: "Second tabel",
        path: "/table",
      },
    ],
  },
];
