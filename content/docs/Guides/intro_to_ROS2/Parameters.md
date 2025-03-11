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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSHDA7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCUlwl%2BCKfnWEYPHIqLfPQx3bb8s%2BMCSjX1HwNRmDDKawIhAOm8SuW%2BlOzXJhqQdnOAI8zAy3g5UqcdEZ%2Fzahiq3UnLKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzsVyabk2sAT%2FDQn6oq3ANWJ6KDjkzMBywoQNWhKs%2B9gCerYC8Vt5nN7AN1aWX0bOQhsiBCXtjga%2BT%2Fud7uKtT%2FYagUV28lSn7Vf3R1ezE79hepW72gayfimvOEDp%2BYDkETitcjYzNJtelMnASiFDGYTRfjdrsZVO78u9CT7MJ5YwOMw1iqPYJQy%2F6qvC1NlRq7c5Rx9%2FByUtUyfsn9qnIJ1mPssXajPyXyYbWkgRJ5Qkm3jrRrn6qMMO9p1BtSuUw0AHuWYtD32YIlw9j2MX1YBN79Q3zDs3efv1tFJwlnRSAtp6b3e1Xq8%2FQEhSXFvtUQnzzgdoTFt%2B19TSiVO36lbcn2X0FHmC6d0AyQt282Ydq0rfgSycs5uuQDoF7zW6a01ggQhJswBO2TrhT0BGwWrFfOdErX8123qUzpir2vMV14%2F4ki07RGUFXa1QNQWff7R9EdhbND%2FtGU4qdvwBCLqPiSiiFF24xWvvX%2BC1ZM7isJTA0cGJgEraE6Xtl6rA6UlY7gLEG1N9b%2FOARrG%2FVSJysePUqwftDlHsTgbgjiTuP81%2FgT9vi%2F3kSadBUyf8KSOxnHyrWoKgfBelbqT6cmEytKgjxvhswty6gNXUFgMUypPlAI5%2BGFWZZfB3D6WPVOvB12oAveIlhR8zCD0L6%2BBjqkASjHAxg5SVXFjI%2BbuFNonPp%2BQgGiU3ONE5sYxUQBDldBVWVxRF%2FdEWe3ZYZMIXJ0%2FE4SIV%2FB5YOGe3WDH0ejqDkfhHoWUcSNM7Q7UCAdF7E9ZUCQtTlH0BEbAyQvqjHK3dVPqyRAdxdoVxqxIRMhCLl5Cr3DVkYAPKCY5ai0WmtG7siTXz42NyTer1d3EF2PoPlsHcWAMyyAzWdQ6vaXKQn7eDDg&X-Amz-Signature=45f8ab95adbe52033f0e093d655aa3bbbae763f8a56680cb2d19c901127b65fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
