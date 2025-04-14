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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPWWBHBG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgkG3a5Y7m7U0Y0a4i6IrD61hDZHpCalTsRtRdCtZh%2FAiA%2FU%2BgINOzWTaLy0bThm0Hvu1LGvbOUtmEf2p1fB%2BHG0iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMozeoXaOkGPg3ovKqKtwDLD%2BYCmu1PexA8sUkXY2e%2FbsxIewlz0iF8OYCFKEl%2FK3m7ByaDdG7ayHjFepR%2FPxej66Jzy8ZbyAs6EzIz5jmJqqYf4oItaId4ViCnBMatcLFFPMZq3Dmu3bEx5EeskEVhh%2F6Jo2RCvw4cMSzijCo1U02gY4nSO%2FK3IO6E0pDS5%2BgRvOj1toVwq1OVop0QVeFKXYO3WFPG%2BN0GX9ZTfbSfe07MmbAxlyYHFxT5diYf8ctwsWMMW%2FRfmgGdwYbdWuqf%2BoC032PBDpJwrZBAfYJ7FVFAyutHghQE2nR4BiH%2BcgO%2BoXc6TAOTy3v6q0jFPSivJKxyj%2FrLb3K7VHQ4vUVurcOhG%2BaLtqvXHik4R9OnsIpKWNmKTxZlzC2Ko%2BymSCYJYzXLSn0oF34K6rxRuyZOL0dSUhsozxenLkioc7kfXYMEz79EqlTfCL6kPypDUjNl6K1gnvLjYhuqhJiUK5BBbvhfpiAF2TVWWOqG0BhPkrIlF3MiP0GhC1lj8tqGVvKeZ2xftwDxJpwpKhvVIY%2BBiS%2Fpe1PPLNAUxD4ZzRGOfZEBAfNVSq%2B3dALMWPQaXq9cuNkbbGfOATdGDsnf4amI32qPgJu%2ButzWUXe%2FHugaX4OENj2R0SgBT4kK4Qw3bnxvwY6pgEPyNJna8lqrabdm7ESwZLEfuIHwOa%2BY42dGzwkWT5u8mdApi5Bv5QFLN7fkH9bdUEdZ0U2FqwzM%2B6jvYMN7Q0WTcNRtwWEGYkhmy7n114SK4HzZz1Y6mZ8TcEuPn7J3LVvta94nfRBewPgoc3v%2Fx9oe%2BWO5eTFgFoPQonasxQ%2FU71nOlyROv38K1MKfv1zmWXrKtwNuZV%2BfvZxJsgrKFRCxfO7INxS&X-Amz-Signature=4537db590b8b8d57ca803d3fb7ddfd0d1db9651ae5880973fcf6e7d7ca3c3677&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
