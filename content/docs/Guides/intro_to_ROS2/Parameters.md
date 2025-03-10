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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OZ2QC2Y%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAId%2BjKhi4hS4lYhWo5L2FnwwIMUWvAYcNvsz75t5n9DAiBzxU26dMH4qCc3iy11ESO8DoifNaNuFOuP4qylKPqthiqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUWFtyjlFdNL6enl9KtwDW%2FCUZxJjZtHY75X%2BiDxWkbfTm15zfWmlsBSt4gT9NoRXsHiX%2BuyLitiIxtqds3%2FJjrhcibzlds6BUFULTtfQvJAvF4oddTvFIVBe9CrTEL%2F8OWT0hXC7gr8u9qN60TpdXPBToz2gn5epuZv%2BfXnyGeRqGxhLgN0xSGNmGGMFF2WgAHFYh6xx%2FZH5ADZ3K6aOQdVbYHjO25Oy5GOVjTBLq4WFqVI4mt5J%2BDAptj8heN8K6kkljlWPsYuwpRNd4xWtFrmGXIDgaWh5H4m7aO6fKpLH%2FznPzy1ASnBEI8VW026JRt00G7tg5odu%2Bz7etAwHCDH5riOQcEHt0NUF6dFxEzxX%2FaOgsek6v%2B%2F%2Fs3mtrm74QCVekjOXfjbW%2FUbImGsEK1VP9Jh61a%2BMhfsc46P4TXLP5aSwK7MMDFBNSqxTlkOin2CUKqDQf870Xv0Kx0hdjE2zLaqGuvblpfEJLSsgQOTZdFV7Yr8KCAwFFbSaq674%2Fu2UnwDfLYK%2FkQCQUqquOUGK%2F9vf5HGQy0fTPm0xkHpYcKUI19jUP9aPWiZjamILpgHkYB1LoXyi8owBapeypyG%2Buq%2BfyPGUNR62sfHLPEzSQ3eV8dXF5v8ROTTQj5zs7Ydq7%2BDAkdM9zq4wr4q7vgY6pgGP1Y3UivTQQm337h35vhvvlcoDXxpUNDcVocRpA%2F44t%2FV9Mtvogj6h3Rkk14TIHc3PSXqmN2FasAa1O2qb0%2Fe9uiIyENVOw7TyQqqGImTJYGN7dBYMFa70E77106YynGgQ%2FSeY7YJ14TOSw0gzi0F7rDPfc1bRMvpXhHJcT4G%2FbWZr8AydcVGWvbNLNnXwYRoEcv97JsxY%2FqgK7ar05vQ%2Bd8DZd9OD&X-Amz-Signature=ccd796703455b5fb87e2bdee2829a681a69c07595b6f5574e21cb16edbae23a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
