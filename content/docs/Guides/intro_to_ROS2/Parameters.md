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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUMPIIPT%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQnaeuTMHUwbeUaMgNoqiRW4j1MR5h02Cbzu4SqChb5AiEA1xZCyQGcyM0e2fk9DZ26zeXRtS0t5aPVAWxfZ53DMS4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKYXp8sa8xZm9Yc9CyrcA7vA0%2Fq%2FRRBoXkAsDksm13YFvvKb%2BcJRVjcd55YB2lB5Dx3q5eVvSEBMYeV9UrUx1KiSJQFV%2F5Y0Q%2FJ%2BzVEjENvxOKgwj8aPPiUM2IBglMd9fLwbqrRRU0UjHM5k3iQ0SvG8NBB0pvqgYQbf6ZM1c63G5VsgYlSODjmu1Ac1TM0BS5O52l3c1zAGYzsU7IQnw49cgveaSJjsN9Jz1t5Iyc14vXiYx13ULE2VJtLGpBa%2BLhMcunjAOtD7D4z6TvGyoBqGGJFT9a4YzGncUwN3qTRV0HiQXsm49XU3QuOt986WViSCEy6t9MinGa4Rdpo4kmVTjtStyB9tu2wNq93xXFy08v6gxsHJtqZHGLFMGVKYtbcOUdlHy%2BR%2FjCXnan5kyiGlyqcjD1Ir2%2FvGAVhqjtk7bE5EusDOtNBEjiW0ooN6zFpoBXt%2BatE5zu4F1e9Wv5Tg%2FUpkdAjUkTsFUKyTpSzxnW3O3BkE8is0A4vbPTiAWJtA5BxFoyc%2FCinG01Zy1qCzMt%2Bs5GygqUWizGeVaQWb2hyS60C%2FZoySvHAzmn45VTP%2B01yxEGk1YYjgi3zog1QsIQ3%2F7qtomczGmmfRE9gLgtaDbJVN4p5nA20r0MR9fudxPKaNZazgNX%2FmMK6xzM4GOqUBYtByLB2kRSxGWp0UkNC1HLcoeqMCGFW15jPcEN11MHl5vDerY%2BN%2ByR9bxicrJvB%2F96BTsDzCfur1QGblMvdAhVj92PKs3qwyX1RwM8OvvKx5RvOp3TALcl0%2BeU99M%2FlhCuI4bAkbkIC4u6O8S%2FX1wnqfwbXGxf7Jz2sDxGx5XiEtQyJo8v6nYYNKU%2F4V8ao%2BHHA7KKC5pHnczXjSwwSkDGLk3Ar1&X-Amz-Signature=801cb4afc0a4e65a5f3b21bee7f95c72040d32f5a5c05ee08c845bd45ec48815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
