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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642IQDFN3%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ8UEFA76vKIYVyi62O4h%2FJCc08G59kyIvDDTCCdmnsgIhAJIrxSFTlgcOacljcLz%2BTa0Nf9X6XODr3blvQJB2FmIkKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNYfBJawB42iUtbgkq3APOfk%2BJlnGj5lNbgtHYQerDaRGuEwtsmSdKkriAgPbckeTKBiC29ILyAZi67zB0ZnOF1Pl2jUd0RfWgoSKg2Jm90JCIO9P8n8SzCX9nT0W7lCq9IlY0yinL2FGN%2BCoGzfA9OIqXm8ycDA3XYunuPKvbbjCe8aSlvUvXYArGNAk9mZwpLizc61Nv1ZPLRVtMY037q64WjHb%2Bn6Ol9mgawx3GN7E4HAyMwQpjz4ez9yDZc4QHdOccUdY%2FA1vHA%2BsH0a3%2FrA40p%2FKTRFTyR3nXVWZ3LfU2iVjuOXB0F%2B7m7Tn942iV2K2AHetu0Su8f86QHiny094X9Lp7mHoRrbNbZTOCy5BWCrnQrA5qAckv%2BHN1%2FGa9FDF8tKXmOrKhSk0ln1BOhjCmjFxmxvc5DHvU6i3d1D2OHX4urpPyEwoWPs6yMcorCpn4rqeBKSY8GZQUGAnI3IbXjHgWmnHa02auAX7bBxDbv2Wu6Z%2FfvX6WcabNEfMO0qrI77ecJ99f9ZQtefWzBgxp1rmTecnzp2734ul%2BM3BuLvbaF90hvZvSsdluR49Bxb7yyzieny%2FNl4KGpkhis8gMH60ek964gNeenoLeBOKaPS7udACQnso%2FBXhcKXe6ugbe5awtDNDmNDDY2Za%2BBjqkAbtSDdUWkBdMin8cIzoEIMF4NG4ogmicmOQ9J02L7mz1qaLRQ5DndGLPH21IwOc%2FRLlG1M4AfxRxY5UT0kYpmjZ%2FaZAUZ%2B5%2B0Qeoa7W%2Bwm8jnMXzHTJtm1Rv5974iLr%2BqHrEf9oSrBFSqarbekoZ1D44cqJ3cJTc2J05zFNH3vWjZjggMgiyO4lqvgpNOtdjdcZYRx6QkqHbnEGWjK0IQ3fJMX%2B3&X-Amz-Signature=8425b1a6df8d2db5dc855b1e57fe517032921456b2867220ac877823ef5ea6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
