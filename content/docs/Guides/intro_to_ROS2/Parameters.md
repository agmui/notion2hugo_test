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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EV53HG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDETHf88Uwul6%2F0QvvsAxI2bwmKdWimq18TphDZL9HKbAIgYEvE4Vn6N%2F5NsWYqkPsXBb%2FmWXtnSYAaLvCBY9VwJQEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEBhyF5nerWizGRoyCrcAxgPW7giuEStNTw1voTRfXQhwuUnX5ciNENsJRcsN9ZgHdsaTio89xy4%2Bs%2BkWRRnkMFNRFV6f0gj5hvJwXa2hB6Nz4gRMBE0feaCYrq2X5PJkGQA1OiF9bKVdem4sFcOvHDpbp1sgpSgrTaxZ7d8yxZjZ9ka9G6lVpdhA1tQQyAfP7JSHHoDrccNBu4C6%2Bb4Y%2Fwm1WYe82uxU6UT%2Fl6EEGXofMxLhd5MPskS4gZ0G5t7B%2FGy74Y1CJYl1Gsnr6hJKbkp9FkTERkVfSfO2Hw6nsQ0k76V6r7Y9glCEHYeYaagOFm21KCNvBQewhaOeFIjqQrfFeyHqVAwtX%2BGDmVHbguQKDWM4gle2z8Ntn4KqMZgsLdvH3mFX0OGzDmCJFta3BXq3NNcqf%2BbTIT0VVz%2BPrCmnK1ICvDhncxzKiAC%2BbVBLrRVFfAC9aTN%2B6%2FP%2BC%2Fk%2Fwid1p6g3AdlmVeK0xpnQIpZK3wyC8GC1aKpTz1aAAMRXdf494rot%2FD0nsvKaOQGwv7JRWM3Fw8Jrog6JujgSQzqhkBbra1tmBUSu5nel52o9kV4UbBBad%2F1cElABXJe0n3P%2FZfdIScHv6vettdUB6xxk8zp1i%2BGJO%2BzDxTBnu%2FPooi%2FO5UplLmTy4TKMOu2wcQGOqUBfYMfnHNag4IOlUyDhXfDxlho7HQBbjTEN35WhoLGHYaLgdSE%2BJ1%2Bf81yEUlF0tzaT%2FygPEriy3RmEcfR9Ny0jMLMzsGiEzN8YZSr974bec7yPXfAv2TmrXQdlIfTlDCJUpiZ2nmbGmFBtOfWkzLp19DQd7vLt2gEDVn5gybx4MuWaVft6HmyxHdJwaKH6mjyTfyjnQG9%2B6zZqUgvDNYb%2BB7P3krw&X-Amz-Signature=a8289d969d141ab1a206e7b57a8ce148def7d71155a3ccbabff7d97accac02eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
