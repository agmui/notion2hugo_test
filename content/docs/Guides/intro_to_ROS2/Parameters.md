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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45CUKN3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZcSxQUYR%2BMca1X%2Fmoe1CQLI0eAp4YsM6ZrYp%2BOA8mXAIgF90Eu3f1%2BmkksN%2FziJ%2F6KCAChRrUEgCPBGEkt3UpOb4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOruWhl4X%2F3eSL8RAyrcA8JAotz5tpsAVUQlhgWmm7QTZE6nPTIoGJJZFqu0B12C1YZVH84k5r8x%2BA7f8aLzAj2ZnLswNhWRXDryye77jN8Km%2F6zXsqqm5SVz5lVjJ6dZz58iJufmmBFOVmv%2F4CDmlgeeGbp%2F7Vq9ya6bxzd%2FeDwUTIJZveBmJwOnVV0YYezDp47xvpednGk6lVysFqbjQ8n3fvVL0pKWbA0EJtzSIiLJyOLbdkBQxTLG7SZNFbnV7bCQOoMdl8QmHXXkvtYSgyiL4D2d5jftW%2F0gMkRwq6ZIjI44xHUw70MxWqhq7gGWigLbKcyKFrESwFxqhe%2FVA7ccZ0aDvR3LbyU1vH5YrI0RYhgIdJJ4FFgKul1WS0bDJt5KiHOP87B6MN2tHVHyhM9uLmOUzFdz0Bhi6yj%2Fy4jc57a6e9DyDIQe%2BMSbdB76V7yl65lNxCzWAUP%2F5WBwiMCIQ8F0TZ8KYdiLw8QTJhq%2F66pALhKNPT0eBX72mEMXmkosZle34N%2Bik5N0N2yGdFEPFf57Qqv6AMB0%2FQYRhjK30Rq1FNUC2sQMKsKpup5egvUEyNoCQHya5oC4njVMFVjDk1J5g3qHqcdEp2OXZFjVIjhhMwlGigbZBMyC4OhYn1T9kPV2q%2BqH1KwMNiA470GOqUBK0BV1j2wAkNBDPxGfw%2F15eOs9O9mmJsMQV237wshwkb2339yEbgDWntIjv4md7KeX%2Bd4rBSi8G9JDotbQ4mFqI8ZEIBio3meXpSAHJkgTROrOUAS3tCPm3a6Zoxp5zhCIzUexybz4BvWZRu3S52MvNRmhP0%2BZKQDrUZxOC2NHQdj9xPZovpTuOHhkiJ2%2FHHwHNCahlI8jaDF5sheKyfpZnlGN0G8&X-Amz-Signature=8833fc324714e83de6aab458069398f4cf026dbcfa071fd200e7f0f17ba5a75a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
