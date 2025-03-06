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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHDFJPQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq4T5W0%2FJgv7lDH0tjzJQoaLx0w6Jz2giG02yDFDOyCAiAUDlX%2BM5%2FIyZicFim51GYavE50LaqChffADb%2FCk0vM8yr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMXrlZXQ%2BIb4BCqSZRKtwDOz262wjq27LbR5xcj6p95BMU72jifZGr3LddpE6ctqQWLlZNn5dce%2FbkfiI4pgbMbEOOHOE%2FR%2Bh7ba63d6xPjpos4nqYlVmZuR9VujtbaDieww5wIm9nteCxYSA2HQKeRh6%2FUDsDqzee2t2E%2FpTCNDFulNyKCFjkPvS9zPGhBFAtXaG2LH%2FtMfOaWCyJbdViuHSp%2Fm5Nn4EBcIMEJTIqh70iCbzaGnhjZrL81lFbo6DtfRG2gNGK80S04IRa9ywHyYtbsc8VXMdbH%2BLyV0n54K9P0iMAyoPzAOR4iuJlSCGx%2FtpzCYgZnofCkRmy2XEsCrI8FxmEfdIYhYRzB1z1PwJta7o8D06twQZzOYyzRGghwj%2FQBetocWSdRaH9cFNN7YjVpNW1Wp8yx6u4EN1OdQl0p27D32YJH2spG0w6lz1yelSGvVYuhoUGqe7%2BcNadIjaGIUQtEuoMQaj9DoqjhJN4WTs26xrAsREQoFpJEntQhGquWoDHP7Ble8CTkKzGdb7rl1i9McmjnYY9UK0wseayt0MML7MzjTzPqTTOpFSQo3CwmA8jXlIwvazusR6Wjj2H%2BBMRCrbNgBovddztpp5P%2F6yFymPdgZZUww8AlO7eDv3SQrxbEgh8a%2BIwgvCmvgY6pgGzenarp%2BsZ4%2FnfKltql8lh%2Bw7wROj2nQO9PufiKMviOCkMXtmXJtHBJVEo3oNU7AUEPXqet7dAVlbecoRfUl4U8zPGYg%2BBtWXS%2Fw0ZZm98Go3APegCm7PZOdXQ9%2BaMqGuSijZD3rM0%2B6clTAD41GJtGfhi86Y0RbvNqSYGVJFsNslo0G2%2FclHKpxQyeTWp47t48cEnWb2s1jHEkfyNEbYLWp%2Ba0hxq&X-Amz-Signature=3203a43cdfed8fd60b2e9b38fe198dc65d6e6da7d304191152a1195d74b0165f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
