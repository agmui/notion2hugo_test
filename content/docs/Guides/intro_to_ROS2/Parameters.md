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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTZ5HO45%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbVUwmAPWROKB4cGrbeeS5mYtVl7OAeJrlBLB3lUUUbAiA2XzonygjeuBhOo0PXdqEtgEjY2jerXeSbAUB63ZG2jyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfUxBbkxMRp4O99xKtwDPbA7Bdg58mF8BiBEuNw%2BBgIhYu3ZNFQ3Mehh7LmHZdITLAUWJdJTMmQtQW9VejDq5GrAJqaMw5WxIFzaz5RUZWrWFdLb3tWp0LmGNoi2JaCbfG0N7XWVXH7vlsyqv1Fs5fPuzqVbtAv4wOTmGvafsEFMfL8bVJiECyEm4MUm%2FRR6SRcYn0tPSjUAfjR0XMPaEISRoCozanXXfHw%2FHA%2FqJllk4pG6PJdeGUqHL2G59nfbQvByJXidptKsYs0ggehFOXotgrgEh1YuAlQbnK7GXVkhslgrKwR0qzqG9whL%2ByScjtpMqdwnd2c3l77XZyimF8zaBOsVWMEaej2vCwxdh5Jn8vo4Z8yuz7Abkb5QNrdMDgeZGw1%2FK9HO%2BHXPWha9YHiF6%2F5GDG2dZl8b4e7zIAAh%2FZziXtYPuw7n8REQ5kN4p4dNDirXEkfeonDusSmXs68G8lIU%2FKp8VzWiI9PcKs8vY5n56V8Cl2BIQnX18fivGF4lX%2BYT8930uCfQ2yCKmkh87eWZsaZxK3SbxvoldwsfvWXy8iCMZezvkaFAs9GgCQ7FpXAy8DSK6JHh1b%2FL2FkSPqvmcGZgyoEW3nQvsn389HozDc%2BrxZmlMsCSWdUzQvaTJ%2FXhSJVc%2FCkwzfHmwQY6pgEcwDFP8oKkD5GJqC9DX54mk7iNzgbv8qOcE680PdgYIxJjp5%2FZz4n1MMLPWdpDH7RhfZHOBgIph0RQkaVjGC8WxnMkpWfiHq2GJl0%2F1qvXiq0plpJYMLgv2CdGUOZd3y1cMJ3QxRCaKb64dZjCZCB0dwPtqLSyqYdUj1NWV3DYLtUm%2BR5bQ98VTtZwxIuxT9UeyDrlfl7WNmhyVuUQJ%2BWibsdqBzDW&X-Amz-Signature=27f8b2e52dc20e02df27aa74e7fc3cc5df80d6281638c278da392433613c758e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
