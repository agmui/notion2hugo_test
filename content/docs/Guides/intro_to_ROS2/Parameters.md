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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XYNGKGQ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBmxn%2F02%2FBTV6eeGpPFHUKCS%2BKXRxxQBZLkNSF5vRpeDAiEAzv4n66f34SpGXu10yIZtjSl%2FR5Eb9KBp%2BQ0RvuqDnywq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJlz3RpkcZwXFL%2FZWircA8yLnY4yJ8TiVFKC%2BwRKRBelsVZXxb3fgUVkt5HzDcwppLkLbZrS3OjQiM7w6s3w4lR3L93BSYiFN1D9jJscBXviQh5QYtH68K2Lw02olnVp%2BEgWsFHidhaoK%2FuD7P8rn2zUKQBezTRU3XalbhAOY62oOzYC7gzsC8IhgwsuPqVL%2BjYAIz2jjx3Lo%2BlFiwfEpWdT2BqMGDrpqoYeDWXbLLJu8nFgWVDU0aK17%2F6SjXgWqv%2FIJ7v0FvgughUefS6Q8Ug6yQe8FVEkd8vBp7QD0OFfw4VWrM81cskNZHz94PPZzQ1jc9BHoXg9fuJ%2B937ftQHVuhawf2of5ArSGhJjd1t8H%2FiaA%2BVi4CXELxliI9sdd84hT2J5wzQQge61OUvg01Z2iPPJu%2FraF84horpap3dGd26tvmX3BaA8yrTOYdvKT86WL755G2RAAYQAskwqhv91jEhOVWNA5%2B7DPvQvO4dxQfwaGfQ3IanHQUOVsrgmp7Pa2b%2FQ80PMdVo25Rr268SOLhZEec7JuNk%2FvumBG6mir0yfEGPz1bIbCC9kj2X9KXSJuQkIi9VWkjrAtR1JJfO5zVRC1WYfmaP%2BvxRNTuLX56dqu2M3mrgTQDl6yPhRgvk81J%2BWJib%2B4YdBMJqXsMMGOqUBzQOhvPMFDvPaLQq2Dp9sFhKw2%2Fs%2Be92JD1Uo6VNURdsdvxwL8RkMUqJd7Lxb3roy4szAWrchPgiSXUhJSiC8DCYROL19DLqu4WAfenQS2IAO8mL0LwvacJ2ieLjertVKSrtoYs7OPxUPUjxpa64fDke5ZGEw6B0mZMW8wLgvFpx0bn%2FxHuw1ywbJ779qb4d3JJ1QgGMkKc1clOj6ebj%2F6t6%2FRgxJ&X-Amz-Signature=3296373a3eda49c27fc5e1ce6e621710c445c1abb49c80a8ab87d9b6617d0d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
