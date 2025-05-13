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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVKJFIR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBt0qM7MH0Pl1R7vsi%2FTRljCcl32XmR8nZznfAhycllTAiBUEQPnnwk%2Fz593bxygm0U8Y76Y0%2FV9bedoDoTjQzLsHSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBG6tPeh%2Fa%2BlqU2xCKtwDIKLypeioSToSnHwuNHl%2Bzi5y%2B2WVhkfYNKIAbLCzFLqOaThT%2F57a7MkTIG8Tqc%2BFJQDaPnNWQOcgwUfuVijFcqTD94AulG0cdDxdvbAxr2nmgvFQCgMvBMLsyeuq9s93Bc8R1YrqliQj9Z682pDBkpbNuq4viojY18hzb66gs44uTW2gWYlPExjWJLXisBvs4U1BAPM9zJGCkgMDciuS%2Fdm0ueITZ7Ytbwgtjslxl0KQqbMo%2FHmRSSNPF8AOlt3nwcsovjIU8f5o4WmzZk3BA%2Bc%2BCEgN%2BTCwE%2FKM7LCgBfCynJkqmFNFFjqpNI1i2VI06hcZ%2Fc37S%2FV71aXm1y%2F2OtlZyy4YyRd%2FXPd%2BLPkX%2BVHKnSq9VcLgxJVOl9Xvhm5AwZ56r6z8T1j9re%2Fm10FXpOiHj0hC0zlGSPqUXhNJqQuDHwrKocJEgCtlVkPpwMCugNHCocdHiCIBmeAQliqGwm7dklqGYK5orbqGsLRbThx1IOc6druNCyOZnqqgdd36tIC1PU5739KnalKf5nv%2Bv8YlbXy8mwnUu%2BiD8luwmqbpeT8Wdt%2FvZ8sow3tYywthalGiOibTpsW14psuaOMU18uCJf8YLhaqhGcpZa%2Bs2rxU4iUPeDfz%2FX4EHrYw49qMwQY6pgFsad8hyR4BUvJp61GxqxIMY6msI3ZHWTuIN%2B2L4DH5MxFmdEmjZvN3qW%2FipzVtxIV1snOPnMtpfJJEX%2B5Nd6YXndJjTtAnHx3aPyBnrXNDyOVyOZoGD9znx0Eo7I6J601UgIi5GKuLGRTHixEQSqqvCrYTd1zKeWctp8AGLu1mEFSzR6BS%2FPcvMoykidcgtjD%2BuWZXvtgSx3WZHSzE9pd0PSPctm%2Bp&X-Amz-Signature=2d07c2a440aedd76f256b9ad7cccd169728b941a57e032501490ab86578576d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
