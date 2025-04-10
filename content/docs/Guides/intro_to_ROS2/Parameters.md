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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643JLOJ57%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIDiwMDqcff0TXl4XiAwiN4knsb4dslbi8egavkByPtAeAiEA7rFsoxSLGQBWNur1opUh1Cymp10IRgaFiMcoEXF3AC4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUfBzPTaZAiBj94FSrcA2FAnFd3srZpvsmdUyRvXoGtYVIxkG0zMF4gzjpklPjxC%2Bmah%2FNpo6rsnvEFZCkIQ9L5215zLb%2FdRrjuaUDvGC6HHZJ3gzpS2vWHcWtj27f3PBIzyI%2Bd3JjzHCD0hVil47OHw%2BS890KFbjckzwSitD0WN8qdByekON0XK6hnipKAjfGZfn%2Flqx0bb7b0lLcAx3KEhHHGCZHDBQvKb5A4pmPfQ1FplAVaw6DBVNRey4aV97iew56wFtl2x4%2BPZpEipf604NPswJBQw%2FuHWB0hmronAlZuxboaeR%2BOUOzjhwIOat1KuCCsLskppawcziCIYWPdnEgOkr%2BxUIqkpaV6yZaA5v57iQLQmTyR2Q6p1lu9P1YrsQsOlA%2BLI41xJkdmN1gklJnnNddmavpqiSq18b3ekMZowTsV4li%2BN8s3AVfw2LpRtmSk35Ry4s2nOWmf4YsmdG5G8SOKHBqsu8KAaTvXoigCFiU9N5Z0uZyCsctCKjJM2WvhD9QEy1CkHX4%2FWcYvIGilAlKRE6IfnTbjfCDt59%2FWavwyNxxAeoT8g6bkq4mP8tD0wq5CA6WvTZ9aT4xM9l22tP9g1tQaKPao1%2F9Xkr2%2F1Ek6NUTrb7gEeDpcsv6Oz3UfehaIWxSZMIGR4b8GOqUBUg0vWY4RIKhkk%2FfrX9ZY0x12nQ6lLOElzDcm51G2HsJ%2BvEJeD4rWdcDQYxjwLviWq8MXXoBeWNaSuH%2F0lTVst%2Bf6Yuo5aHpSWZvL17I9fEBRMHq0tUaljigj5vpDsjZmu4uVHTTXmXwcINCuc7aXwgmrCvECaugIEgCeNaUIdLLJRwObiwXxpSnNnqNCuAng9cAIVJfGUfn%2BJIYGvEKSyyYJ1VjM&X-Amz-Signature=ecf5da60fb996d8bf13f4aebda310c05dbcb8c4f5ecc09612f26b63aef5e1fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
