import React from "react";
import { Button, Flex } from "antd";

export const Button1 = () => (
  <>
    <Flex gap="large" wrap>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </Flex>
    {/* another color */}
    <Flex className="customBtns1" gap="large" wrap>
      <Button className="primaryBtn" type="primary">
        Primary Button
      </Button>
      <Button className="defaultBtn">Default Button</Button>
      <Button className="dashedBtn" type="dashed">
        Dashed Button
      </Button>
      <Button className="textBtn" type="text">
        Text Button
      </Button>
      <Button className="linkBtn" type="link">
        Link Button
      </Button>
    </Flex>
  </>
);
export default Button1;
