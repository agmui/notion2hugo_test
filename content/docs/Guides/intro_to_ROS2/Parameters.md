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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOW7ZFM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDmiFgdsJdzNckmolyEa3ADJS07mG4PtlOuZTnyNmKFRAIgGJOJH%2FJGYKQZPZrZeyLWQpBhnrHc%2F%2BOvb6SGVd53n7Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDH%2BLruK0BzOPFERApyrcA2FCTXI6wLIOUHdyXPaD5le0L6L%2FFLQTN6xTvQFVzhJWAhZuZkTA7MLRFbNGCYKy8S7bBKchs2Q4bXuUG9iahaUx%2BuBb7GCH%2Fpqt336FcRfaaG1zANVwh3ToHzncg%2Fi%2Fo6fuZWX0pbyC%2FQXATERKe2nYJLeM70Wk18nvAODfgCYIjbO2yyOiEOW%2FruJbJ7k9gZPwA7zfZxta0LKpGUgnqtmXvLHnDCcNLnCgL%2FYZyon3UQfqEIhWeEq9cabmHh8ajMRZo6s0EHa4Gnf29SD01cCwBsERjQ7dPZw5KmBJpfGcdda%2BSBbDZdkPmlbW2ooTwLcZOISWIfmT5F8T2eM2hq%2Bn2odCTgFtsaRiHLXJGKlNSNuCGFPGkc%2Bn2TdPc9XQnCEyzlJ2a262chYJy920YA3R1lBXgeRg4J6Y5UCsXjbMyeDPmD8IFdTPVEkxRiThnkoS1sytKreCqq0IG6g%2FE%2FOHBM0H%2BUaBUW1QpbqsGTwyScH7qb1kIF0FyTQpqluNqT3f%2B0Y3wWlqoPJ%2F%2Bt7IMx6bhf6NyR7o5czuZuWX0RhTeJ0EHDpfbqSKKmMo3AdeYbRc73YcfjJqCEsgVP798Df%2FcxJGqzw41ZSthKXNwWfj7vXFCkgUIiXpKdD0MM%2Fsj70GOqUBHT5bdCJiZ6u%2Fy7VhA%2BFsS7neaqHk7wK0hoZ8EjTIkK6aIpeBJwrYHO5SA9gqLLK9L0i3ogBWxv5H8sBObwULfSxCHBnwWd7vPe1dWbYVzoV6xWyzBmyVBb8efkQ%2FOEnfLMfFU1jRhjJ7X5R%2FCm8vJHewZ%2B5wMiROA0t51P6wKBNP1VMDu77mC9j5ZjKx6itea%2Bx3y4XzWrN3ns1JYNsBJPTHIELM&X-Amz-Signature=60fdf942a7253553134d3820c73e819ab7ca62431972834fc8f1b661e3b07fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
