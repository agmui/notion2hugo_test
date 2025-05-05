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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTYBK2D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHacbAgqdvYYoQkUiQXUlh6vM4Cn3ZiNb9dV3tHpKZlLAiADhlV0tVNlxLVrkwWKDxd8MxaC8HZ%2Fy00zH2G2Zwlphir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM7c%2Fu0Iy5RBdvgk7IKtwDcT0KuVPO88tD4imc9mAR6ycR4HNJVwCL3JCtM9jLBccfSv3f%2Bz%2BXFLDEXKj74eE5G6ghZKDThgK%2FCcqYbP9d5ladyE3dpXVdjmvu8Ye7ZM6mpvAg2I12rPyn%2FhWgRX1v5SDfIK3PU3oOJD58HhCpoToBqCdAkdhwMeBE0zWc1imZDIlSDzOwpHtNioT5r17t0LtQpgM2n4VUGfyXZ7BS%2BttNG8gSbmgEOBFyo2ZUgCcFIjDD6NROJf9Ns%2BWpzhKpgdn2%2FtG21WXVEYCy9P%2FB9%2BmGIhfwT1Y%2FQjLEneUj7HkQBSy7VpSw%2F4nJxQA3q5LjQIa3r6R9Ip1qXCJ3%2FwWw%2BVvHwZgmyFnZEL5knWPL4Ue2ApYYcHK4wyinPTyu6eaJd4dugnG9aeBvEJhYHMLwK0AWl9L8tkpjC0myTbHiRC5I80ycXyYVEhfZ%2BjmDPIQWKxZJd0aocXuUo5DGcqBQugpH8Fl0CYaUVAiYUFPQ9RYNVFDPysaCzuxcHa14hFqHV9Bvy0N0fya4RAEobLsB4SV4V%2BYuKd7O5%2B5Re4zbBmzjhaNlWHyaAEL1eIHrwZ%2FkxfbFLC0jlq14XeWydD3Nx7KCUP10xnJilHx7sVuP17iu81CDWEDHVbQ0ZWgw6f7iwAY6pgGRd0P0rr%2Fe4Gw7i%2FC9bnpu9Mg3JREjXjHSCbGGzQj4pvhogETH9hOabbPP%2B2nPb5S7lym2J%2FlCc9S3LU7N1LY6VgXluLlhBYHPVmr1I4gZ5uRi9mDG1soDBFXmgsoqVZRNR0WCqo94fxcNIhcc3pkga%2FcAyio2B5ygze5nvpGtuSj0SecqNUjlJwTjXLjiHLtBjfRB0PCRsszLUbK3ILqyXepWpY%2Bi&X-Amz-Signature=ff3522892f2a461ce8248b568834ade985e943e0286dd6c1a95816d4351e8f72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
