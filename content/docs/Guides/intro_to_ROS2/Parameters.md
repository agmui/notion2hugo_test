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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLLYCU66%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDkpFIUAxg4SgG4lGeT5pl00BP01toyv9lt00Pzll9hQIgDLZEUcGqbtp5NaLcNc4159mapoujC73jiJY0dx73%2F%2BUqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSPiDqDXmparbki4CrcA9nmfJJIf4WH8sMVf4cjgTHmGnMozIubwV%2FuABDw2TCu5Y3xHfB5othbFrf7lQ%2FvykgJ0%2FZIbbleH3ZjBkzCgu6HEODIw3ehxPuqj5MiPFZYWtTnU9v3xMnWNtdv1EpLyjkcL5qkSAet0%2FKnpLR6RAecAO6wXtbqBbiLiYJBuHqup51mU%2FjXkgloD96E4WVwcy8eQI%2BkTKjKfHU%2FlSD9JzAdxsMGsKCS81M%2BPBIkIhq%2BYaqlg4SzfR%2B8KBbox3SY8c4k8jOXMfwNy%2F4d5hewZfjJh1mxOeTp8AZekqAkvpRR9x46p7VlD7bivIFOJGq60AGf4shhRAZAvEZXaJjWBOHHEo%2B2LFkzDIofoiAjL0zZ73vbr43Ig1NnZX9O%2FuRLM4q7LNFkL%2Bfu2MSUoW2M28dqvg982vAehrE%2BFYE83L4DPLbuShcWvOJD5Gt9xvKX4oIAuv5lQpcuKEpKgpvMCROVKoleWS4jUQw6lG7oxd6PM2sT%2FOlIHaGWdesR9MzFKwSLJyAB%2BNLMd3T2Amz2YpjqmWzCteWDENuQmbjyCP3r9l0D2IC6B76jEdPKcNNUIULM8MGOr6dIcwx%2Bd%2Bjdo1Ye9sIQElx8544R%2BFB0Jg8ei6%2BxzxL1c8UZhR7IMJeY7rwGOqUBGbVS2apd1TbTWkQ1AVI1XwPUDJn3KQuuuSj02CBuTa3GdNCeTp%2B2X0XnOIZrVpgR9uSWCKdltFcwqJlAZmMFoMZwXitcRFPWuySRkqzgjzlA6QbKBHOt8U5qEjkewgzXau9U1aUyMI4Cb6VMU2pP9LzDb%2FJdWkrCm1dGkFkJ8TRkRdf9r0Gt2K7i8rh4N92ATpV4yYu4Q5v5oPCwoqlp7Xw3fQM9&X-Amz-Signature=2d6d83b7f96cdf5ad379feef7c7aa979f6abdcacc9b5f21d1b43a044bff2cab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
