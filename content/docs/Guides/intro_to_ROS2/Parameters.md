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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK745WXH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkTlrNQsZW20Zm%2BynF1f7mEq%2BcIvvihF0Yzt2qc2hwoQIgcYaAmCArAo1m0Yjrodk%2FXRfF57%2BnVkPtkf125B1t0ycq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDETPJ3NroHalivQlNyrcA%2B8zoDaAfvd4ff6HR4x35LQLkddNQiPN7IwmHXCl%2Bz36OvJpv48G9JwumVhvLJ1pCX5l39qtdHPdDf2WgoVL%2BOrwy6AXkpyBc%2BqUE6gP6g0QkkYzJKu%2BaT14KDlWRTcLzjp41rUO1L%2BGul7KfizqQePBm42JrUwtVgwJRMWSgE30a1erNwQoexA1RfpbqFXBmTryr3lUHDNApGvyNtRrBHuiwvpit9IjMD4XIA1rddYGDsl4Kng02i1hnBoLsjEVJeq0avievhpHEUjLtlDGzZH%2Fp7AO%2FF7zAkc9SoIR3zwAolwlX4rFTJNdaW%2BP8N%2B4G1Ep36HV4%2FyL0B1pV1qkqGufRGyokPfVBkMgxjeA16RzG6IVpm%2FwrB2OznyQhf5zYD5zas%2FvRvH0OObqD0gNRRgEzDVdq47lOwnZ1gDC5Zsqwl%2Bex7LZ0fA2kgo13r36n%2BqXejEElvs00DnO9VloZU1srY7OjhS7BcN7DnKxwXAru4xoe7PcLqo6Sx%2FAFjQFBS2KZzD6MutfHS6cQCZIKCWrBmVv%2FNU78rNO1j2XshXi0vt0rg%2BjueAefFIcMkOj%2BvdjBimpymIijXuLHn657RipL8sJmWtMp7EylSIN63If78YMEOZ25JK5ciwCMKHNlb8GOqUBbtF%2FQV7Io6Vmebgj8GkVuUg6LFnnogM2lB4Zm4wWTcf2AKv%2FnIAmMGp%2F%2B3au%2FQyPFgVT6GYgsx0pvvglFQyA8IedFMbZujXvAncxisAwvMhzLxhf2trbuRDY%2FcNpCafoIAYEEU8UiwEDf6B6vLOa%2B9ZLc3n0bqQ3HrSsSKIxro05qtY5VOh1L8ne%2BpenocwA1PCLT9MBbTtzGrT2xX2wy4BdOGcS&X-Amz-Signature=0444e459a9acec882e95c8d3ff160dbdeef8fbda20d2f506773788180ac96a50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
