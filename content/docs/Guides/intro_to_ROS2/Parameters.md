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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHOOLWK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T140850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBUhFsVU9RtGucEaqq1wzHaYIyFYlDcZ31BwcXgeaIwAiB5s6I7FG6LE7DnoNFbSeihkf1BHCryOjkwGS91xR9aMCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMzDt14c2YTJn2IEwcKtwDTfRl9WJMdym1yW8iEnRCIAuSnaPMZ17o6EH5nwNbpujqPvqE5XxLSo29ATTLQiMCZVjEdHOKLFcB0QIsdBHAF99Pxe7ULFBaJZq8hLCUGnQfeplfvP5HegSfyN3hVAVKLGgSZQMfJMKDJbRmJPHwaEeisbhEpd5xtQrOkAA8YNESQMpjxsryiUCAt7ublq%2BIgKvgSfpVeH6DaF%2BEOaRz7VcgQZX3M%2BaKB9F25XYGomtDKwAYGQb2scMn4Ji%2FucdLe7vhksooIt7FS70UFjMKxteaiupV1iYaXTR1FejvxLudac2zD0T24vO%2Bp%2FSy69yVg9xTKoEDL1ljW6HCDL%2B%2FwMaNQ3P3P3RPWW2j7%2F7qvjQoOe5OvXpHNVeyg4KYc6HyN6Q1W97ENghe5evplmp0%2FkVsxC4vcqc5b6Ul8Z0fcq5E59W9r73tmQsMxf8VYBcM3WOkekN8i2TX4S8ZDl5gjbgez%2F26CiucEALjsvv7tTxDDDpEqNEbsXjtppKP0TTjrJrbkPc2E4zJvsEccu5XYInFfJsDU3WQvE%2BpWYwxUFkl%2FOvSgYGTWn4dbLD20scTc1g9z%2BjKUCUD%2FZDZ2q1UFchKFLsZCBYTXmIXCQULwo%2FyWwV7RVgh66kANSUwsL2LwgY6pgHuTbcOrIwA3nglh%2Bsh0dvDyK9Xc5uKoONxWqVsv%2FrBPoFUDj09jpcqLwhcS4eERwL9351p5G5DV6c1QBt35ARZ5OdcYPhnCXeliqaAD4Qksk6xcSB69Di7XNhbWLkw5KjicxkLU6OH7eUbp%2B4BNIoSD3IKnQSDashKPDFAj8vkuv4csofiLgDyzuy%2BgPrmALVGwoOMEVipvFhn1bTdSfp8lqfXiAzj&X-Amz-Signature=b8e681dcc6f2c256b8df83913d8e6ebedbe47944627523c1b21b449c454b152e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
