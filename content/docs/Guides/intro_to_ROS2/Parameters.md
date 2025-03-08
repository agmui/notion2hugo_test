---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KUWCOZU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCnO9Pu3gdXUwaSy4q1uJzxfcY4Dg4rkoi2MMPp4WXIqwIhAM5VxkW7yVu393Croab3QHv1R5cU9%2F7%2Fhbt2jFSVMp7%2BKv8DCFMQABoMNjM3NDIzMTgzODA1IgycZ2xZpLh92lgpF4kq3AMvNSEt%2BTsbMVtzrH%2FAjMlq9pkFZrxmNDpK9QweyRJrZr7mArLFSUiMWMWugaDaEf74tkTf%2BssTVqap7Q%2FecpTApk3ytrPJ5zVedmayeN2xIP%2BRwbUlOPmTAEOoneC1aaTLffoGuFLImh%2B1B9XLe2rWdk5IYjzh6twUcDkLwBDB2BMaWJObklyWO4Mr%2B442%2FBXgdZJspwL1ybRMG9f78ZnNhFU%2BLTe1UtMz5wNwz1uLBLblhdREF5N3ajD%2FJ3sytktSj5GpmzlcDTLSZHR8ufftmFNl4rnUtETDdC0HH%2BbQ67UDi8AYCOKshUZYreXhOhMoJsP%2BWVXxMh%2FbZMwsJ0BKxzGV%2BwtFZkUaRoe1cLmRoNmMpDRD%2BqT1pXl%2BXN%2FNlHxNe9H%2FhitCH%2Bf5Czvgo7l42MsUBE0ARXnPdCnya%2F3HvRNIoqBVqpQaz6Ft3g5pBuoLZNdoHcCBuh4mNFbCsR%2FbXhxOWOx1KWKbr1f64F%2BDYhvF%2Fd2FvDqiwFLi825u3YCCJxehOAF5VeJ%2F%2FzMh3rNDIKZBLVXgE9fgvWqOPRFa%2B6fRZ3P7v7%2BR%2BBdKHirGu6UUfeiYzxzcBS6puB2qssoj5WbXVEzIu4BidR7ZDr%2FCBuu5Yb9JHrXgJEPjQDCYva6%2BBjqkAY5CY0CEFl%2BgcoqIij0Roe7nOyCqJYxatHc7Co2oHkw0JWWfvlHGjTRLPwgajem4IQ%2Fk8vkkvPO%2FYvaiHdSQYjCEiqbcF4IPR%2BNS54eQ0cJQkZeYrF0vgONhMYDTmo7Vpgju3bkJQRcVr01N1jwWtdSPP0iMrPPKwOzqFX9QMZ%2FmLfQaWGclVKtARZK6xrC27EXKpyOZbQx0JybJMoO582MMdASH&X-Amz-Signature=79f88f645cda13da33acd0ca7351c94bd2f7171027d4304da7f5c0ba1c10b8f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
