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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466645LSGTO%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyACAaeZIhsdyd%2FGO%2FB8vuEpQvgLmuMyMRSrf55Ro1KgIhAP2pLpcBuJhrB2LfQfDl6%2FdTdcq5Kl%2B2%2FPNz%2F9Yeh%2F5gKv8DCHQQABoMNjM3NDIzMTgzODA1IgxHwyKLrfnJIv%2BIsHcq3AObBp8QrEAy%2Bj%2F00c8nIrrgodUnD%2BJmXyiVbiE6orQ3cPaN0a94acEwb64cdXQXu3UBKZ8prRGX3sj6J5PE%2F%2BlE4rLJxIWZQti4w7ejQcNo483qZ4K1C%2F33%2BBPgfYmfv6wUViV8ezWEARTJShzCtTQK%2Fg2FguvLjVc57uc8qtkAEFS1dzpSi%2B5neRN7Vw3xMoGppDP5o3S9CI0awSJASzhkocuc7qtzPCeeFr1Rf9k7Gp2OwIPOIOj2KPQviZUw9U9YUsdElpUlhbMalmh1jWcqJDI01mXEDqveyjceLrsxTBkQnjmFzO58SVZh%2BlMKYeGR4b7vylIWmXIve95POvoNyH9ggrBPjLf2HxMqlZJ6x16OhQkRCIw4mcUZcYvIurZ5V%2FJgoIFrTluIugwcF57Kcf%2F5KbOMPLZKovk4JSUcEpqxZRai%2BtAHCGf2XLeYAuEo1BVSux9behUM8lkZwWyy9019iYb9qMQOzl4JOrPRMZV1nMuYNlLVNx515B8w%2FipIAn%2Fv5gGxIFwLntam1JCY%2Bc9FEWCJB319ERJ2Huie9tN4tVIpyeGpFRmWS0TcBs4EJQ2yGZh9cEKj%2BIUz8jKZjwCJGtcScHaqHZosVCeqor0uxE6AiH290ucntzDT14jABjqkATLi7E1JwhZhRIIxslE4MxOn85ZwS8V8zMtAzSqI5pf%2FLXV5OlSmVZwg%2BYbQiV9Ik1Zb%2BhlgR%2Fm6u5cLfkzfDXT0CapZNY3QReWaIcIN%2B1b2agM7gm39owxOFjTizQ%2Fd%2B482yFWD3v4HOEjIWMpP0XiUFc3jzqjAPHpthTBqiiqAeXBP%2FQFrwkwv2q8UWAf%2FJNVba4OMwzQGopBqTAxjBtAeAy4%2F&X-Amz-Signature=f7c2502623712937b8fac513bf81e3c689bc2b8e754af84a8676dcb67cbe0ee5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
