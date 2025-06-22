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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3EXYES%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu12H1MUvfxN3LHEs73GUvn7%2Fj3mqUfpabKHHkxfk%2FfQIgR1d%2FJeEgNijzRS%2Bko4zPhQ7KwrmwV%2BK7a4cHCPQWVrMqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJicU3LKVOaTC1HGircA5ICgDkdHF8IotJIvKih4OzUxc1r3nrSckI3PUnpx%2FAXbPhYwKN17NvW8WnR3IDsMRdQDiVrSHPnhHOajAujRqknz%2FN0CWhbrhFvKOMO0I1k3OKxmpSM%2FFZI8hRq3MGlCiDiSLWoLp4Mk68O7rHvPFDxQOmBsvkJWanmvzkuEqrt%2Bv50S2K8GrkeCol3GyE%2F2OZMKULA2PnLeOo2NJVDM8BYgt%2BcAdaOyueZbbKYrmDH7AZ%2BZZ01gVjGpEZoJYoKnaLotBh6OVWvVbrMDIDrzsQI3Qscl5UpypY6HR9Gcf8amib4TE7J9ts%2FwkkQIbv53FhDqSBai0Zf3%2BINN6U9JGGvy8EUFZkb7FLzhie%2BD2gz4MnSuvhWKHoHIk25E8fVL9JKIdf8GrqNmi0vacpxi0aIrSUugAPAR%2BVCwEEibLZ%2FhlF9kQN8kY%2BZn6jOlf81WfkrQHrEYtDUdceQhAhVxE%2BHZGtf2nzKY0ZwtnISkeLQcwa8HuY3Uht2ua8Rr6KtNgbFBe0deq5Si3Ka69R2by0ae3XMR1JZUVJvzvRulid3LCmFa6Ll6P5lQ4MBa3J1UKWYvVRsX1Gk1KRUdOId9b%2BSRhhonOwhp%2Fvhk0FpPDbSpNYf2yHovbCW1mTGMIuI3cIGOqUBJWg%2BTHQu6cU%2FbEPP4%2FA8ghHAHkxoLRW6xVsUR1TDykrOucVH7PoySNIi2cDCSeuL%2BGrb7NSoY%2BISKlFaOkVk0H%2B3TRSIH09nI%2B3nlcUCX%2BHemcXudy57VI6OkZhKhsrFvRCLZVUB4e75pc%2Bdfl515J5%2F80eQ4V3YGqfdIbL4GbzYMkpF34e%2Br8iwBTbbDxD2cPjCNw1e1PSLzb3Tbef9Nnbtr%2FSv&X-Amz-Signature=2489723baeac7a785f7400c137c57ca12f881b0792814cd6991d1edd4140469f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
