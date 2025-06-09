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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQH75OCA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDupNqEOc3NIg92SpmNVEqtK3BzgqANnR03L6TDh66TLAiB9vVI4D%2FEVBDvZUlLRWarVbs%2BEiN%2FpNM6PPHNwpSTujiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0jhI9MPnop0zo3LlKtwDzD02idAlESXv7GOHJUb19UqVtvkrhZaIv2mF6Ikr3m03FoZpmbI574Y4mKkxSOHNdw3TrhzDfLSuTFCH%2Fby%2BlKV%2FzAwtFVxygBcx6pd2ea7nzNxDtt3cTJ8QareT5COedjVYHj%2F01H67guwinpCUedTinw1%2BHGNZSVwQw6DqfRDlVVIzyyhysRHww8ZQgkGyfBNS%2FBkIzfZAcDbMIiMZBzrmQYPYE5gS7Ud%2B7w8hBmA2rPMRYaHbqHW25SEX3j0lIXFBajx4j%2FkCQruqpCUtT%2F8nneueAjPOD18I4%2F4GgUgxGDniha2gZUk%2Bq%2FfI4xNZml9%2BskyBBsBvm2JIBH2z5%2FybY7jjTDAO7jlDgTk0A8%2Bm1exJAXKb48lgfo6o%2F9VnRCYLNn8Pt85LRP0Y95WllLVMBQmDwzhzdaUu8%2BqMEZ%2F%2FG3TsFfiMPA38ZZ5qQtNETE8VAOY2BdPI9PKv4EkmKFJE1kOoxMnGA3DF4jo2ng1QvlVUp%2FtwpgRYW3WFFPxXG7OnGeXsVE%2F6iYIdqqJ3sJkIjO4u3fPVfgG5VqOFfqctqBIyMku9W3D8h2yS%2F3ol%2BF6esNFwuZ%2Bzt4SOCa2SWtBjbPJy1y7was6snYStPZDr0vLnRzosem457howle6YwgY6pgFu3q7Hb0RjPRFkLnxGq3OVeU%2FI2ZUItlYFYToRw%2BmdH73vy4STZJkMLa%2BVoiyQngdr%2Fxb4TNhR%2B1qR2FFh%2B4RAlmTG7q1Jce9vAXUtKbnkfqIA4jvqcuf3uBkPzz48SfinT%2F2iZnLQFNqPbRjzmf6nasJCrtPk4VthBmbU04INsgBBzWOlZEjsHNIkaZePQ980BAqbYNUQ%2FpcZvbkc27wsupMGWG7d&X-Amz-Signature=fa88665f563e8e11719a4eddf530225a899e4147fe7c60ac9a51ff1df5c5fbc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
