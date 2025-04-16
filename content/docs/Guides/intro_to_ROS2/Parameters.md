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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQBKUG3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T022224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8ZJnoHR1DuF%2FTsIwOWCOq9McL%2FsXOJpKOLa9LCWwYTAiEA37uhkhpSpnIIjX9to%2B3tyxKAJZhJnhBMKO4cU2uBxFgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAzrP3P0iWOLTqm0xircAxg03rWMV33caxGioPTZc%2BNPxnPgw9NtQaPU2GZiTBsPFBS%2FiovoPd8p6wHmh3Y%2BCRuZCPlD64Lk8nbO8zXhGiwhjrpDHfdzeUtrvR1CB15YKZlMiHClbQ8Vg1a1atq3zNHoaCVc8VptaCuT4LyHPgLTWbO9ayW9W67TXbX2QWjAHXDSvMZ%2BMxjrcYyY6wuwx7FclYIRfffgCRnPqhcntHMlfwdIjaCrFNs2k2URbsoWfOLjKrNFlcdcCeIJ37xGBAv%2FpWTvoGHv4H5qPSSGjbX4ZliNWkqngOhsoybOfc7LMm4XwqUdKJoGv0RqQkL%2BSBYAB3v16h9sDN83pBpAFSYOeo0oa5lZ%2FW%2B5dx%2BVcjeScwfgJwdOiNHFcSJrsOV8P5Ig0ev%2BR1w7RGU8xd0ENRH2pLrgLZfNAER%2FTcg1P38OEfQn%2FCz9wgkgS4qyTyl2FlgduWMPuPQ243MYxHSX0NDA%2FZkm08vRzyychWPLmNMJT4fxP2VD%2BBDoc53%2FyjJdDD8jjBILX5ozAys8nO4Uc0391ESir9hTUq9tL7vJFZyaz%2F%2FCy7BbXW8cswtL%2B%2F1QCTO0bE%2F%2Bgk%2BBtZl%2FSeO4xkwTVPNjqP0QQto9gr5Pkvs55Rx%2Fpx%2Fa2x4o%2Ft3VMJuk%2FL8GOqUBzO%2FQlx2sJcJvLSnB%2Ff2JjK%2BakfGuUNYPBX6P%2FG%2BRkufFtDlZI7pk9ZsetuO9hKNWStceXV5jzascytBgMV6V1LOwIQ%2BgKvBo57JGVD6Tde2gdzBzMhyw5V9nkX7dl9vZOfLb5wEdkN2ARVz76lw60tJswZlHzpctiu%2F4EXU8TKQGFDBKBE13Bad4TCjER4f2vDvAmtrJtW6OWCVMR9a55XchLmnS&X-Amz-Signature=c42e9db7d7d7e9c6139222acd193cab8b508d6b8a8f0898ae82f01d5ffb79652&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
