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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQPGKE3%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkemcg%2Bf2rWnY7HWD9NT86AaxtRuTALaMWq29wcPAocAiBbOPRTf6SnzplHhxs7fI3XoG9O7k4mEEqDT0H4NmqLfiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJwO%2Bqp5%2FETljLBuPKtwDOEyM9Yc8H7OUhWs4I1bBvqgM2KzzlTnsRXg0aphIe8s2zbbEO4bBKlbuR%2BzP1jtmFHIG0IYjm5v7in0%2FzdJdNVX3ZXaYyj9ga%2F8UYyWP%2Bd566FyDGitiWZrdjjNtkmH%2FapJsWAz9nOFfrk5Bm3cPRfTqp0Lx09g%2FoIgFEnv1DyqwQE8jfH5oGA0Ch4FTJuXDsJVoMPaGrMKbaejtywhqBOUf7qYjHNY8O1n5p7Jk0xN3Wxqm2043hSBGtrKa%2BIjOtyVWCmabI742LU8O5sW%2FzjmQNsRxfgSGWfQvo8mjABNhY%2FIgOqKP4O%2BXk9KdYfDMjm7UwlJpsaYV9sF3xZubBRDeG0jACc8i%2Bc8CCob1DMzpZk20ujxEb3PcVIJKtl5p0FIz8Gre9hxnmha0byvra7NtQpEataO5jBA7A1uC%2BZ%2FWgZ2ql1WNVHdq3DuStY56T2XOeRT2lQbVkl73zTbZOP%2Bux%2BBLVrgm6tRFBTPwQFSM0fkKc0ax5cBFW27iFpFGAVdv8XcAjMMOgynuZx9EntFgMBvZgqWP9mIVFAGOeN6%2FpMUzlfG%2FzznQOZtEvIGIZNkol9aa41n2CpAhwb5pD8sPFY5Y%2FOvGy04wbJzOh5%2B49iLAl8FbkR4PTcow5aONwwY6pgHeckuAINX4tTBoGNf8oXF%2FuDJ9PvyfVbAFiCy3CWQaqseUL0EmwPbDPOu4zU0PNrxExgaaFeF%2FGxslWlECupsryzTWjkqcimFM5izlK%2BZI5luv5jdCJDzHhdQjoaodkoMKwMQFXyzHA%2FiyHD58sL76FXV9NgOEcmzz9TJY8XXWStC%2FNTeQJLv5K1aPDenT9vCSoWGNLzbq2lEUPwRd8HPHbyHPOhJE&X-Amz-Signature=043dd4780d483da0d4ee52a1225e8f858c8b8c782deb3629b4b4b2ec13d37516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
