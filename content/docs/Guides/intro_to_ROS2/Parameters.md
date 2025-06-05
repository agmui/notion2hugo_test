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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW6HCCGG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCtVMn6dNfjS%2Fuj7mNJ32h%2FAx4YG3d%2FWPjtmM%2FpL7HY5wIhANhq%2BqOxUuZuvmrSBG15wIp9%2FUKLIe4ZVFoz%2BOQNMajzKv8DCD8QABoMNjM3NDIzMTgzODA1Igz939%2BLd%2FY3NVmej0sq3ANvHNQWOpmNXud3XV3Mxhk96JbJyY346nNWrt0RJWIm9RjQQp9a9TzC%2F0lz%2FbkaeNZlMJthmeVS2VbR%2FFt%2Fo1Yv4UxXDrn9Hy8KhBvxDpnHfz3onNMLx0IPHly6cQOtFVTkqne1IB1KmkN0nGTFNKwYUm5E52b5mvjlbNlsarV7J0%2BmljYvRPmgjyot4UcKkFv2rrU2hVrlEIUsqsHjIE0cc8MXqLrI4RehkBBHR%2BMgqr%2B%2B6zqUUFOjB4Aapx2%2BYr2cNYb%2BXhHAcsU1rGmGWxbOf5%2FSc8j831MfHiWx7rriuTqcEitwkTITFwYTempqLD1JHpxgFaet9qYXGgW8jVdB9inXgpEj3q1uewTO9oKKQanlFBJKMrHOPTViaqprYujUdfTnyQO9PB5CcQ%2BS9UpPXnHsf6%2FdrOewJYUY2sl60LprzhvGeN5h1IuNvbui3eV6HNrPPilGvIoJ2Qri0REPhPYuJ3DwKyUBBPTaGAnYqoMI5KM1VroF1%2F00Osk2pLj6pELO1NGEPZfe%2B7ReAvsuX8%2BNdJfNH%2ByK3WLVA0o%2FCaAiIqaQFQf4pDxGYjnJN6KIQaPAGA6esYw%2FdcIYHqwdCPkjQKgSf9PEbSLc2QcvR6Mu7CVqDnsTPsDa7TDw5YTCBjqkAaHBTzBfEufMp5dcUT0M2%2FOPBelIZF4kJr4Uw%2BPTXj%2Fy6COH9%2FB9qXkuYVQTGBy3Hubzlo%2BQbTQLKy%2FktWWQphGrZ4SG4s0KjU6kgE867FGl4kq9r3xxAEG6e2UBEU5dGu5hCQmWT2dJaOXWTKiu3msiiDLMBKQeXWi5LzPH6pQ%2FSl0%2BGQSza4QoX0WOg3We7OWUkWu%2FYM20tNUIbPysNJb1%2Bx41&X-Amz-Signature=3b81b7fdce47a1f30eff67f88ccdbde14d7daebd4444d9c6fab8833168a21415&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
