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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCIZPHO%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDZWkxcHaJ3dd1dwUpjnxaswuSB390GKeCXCeijI1CDzwIhAMpZeW39NUE7kJjYQADjZlI5RphTftJTonc22Skdw%2BL5Kv8DCFIQABoMNjM3NDIzMTgzODA1Igy%2Be6jByzf1VHpDKE8q3AMqPOj3KT1YBuBLYYsBHyLyXl0veYtsAV975Wn6qJ1Zeox3QKt%2Ffppv3pQkXfzejFiMsRhbkfTlKGbpo6cjeMyxdCOMTdedi5uGaTsG6GW7aglVKT35%2BWS5J5xMKnTOO4zb76ndCeVIw5vxJRO4X6RXDLvN%2BDSQNCwkIpQsNMpZJwWPv119VEB0E58rSmWtqvMJLCqwo7lls7lpGkpNLBWzsESAfWiDhHVP5VCwbp958eU8rDoMKCGrsja6ABLl%2B9NOpYoY3UsiO2x5Pln0qybMXZ685DqpcphCUYw09lY8mvyKCHsl1toSbTCov2tP2hFibSphNidrNmoFwhbaJFQw%2FsDG3KnXfLJaKylaub5gLKajSjgg5R6MOD9p5ukWWp6OR8Z4xHzo67eO%2BNMkxTicMHvbo%2FrRpJZ%2BjQRiSkPS3RQfaQPKrFruSSoSLvuMJKBfcbGDpNgja%2FmtSMZfCapv3imb%2F7IrZv0mXWHx7EOSO0tGWEQZpTciqEymF1tuB4x6qUHGNTbXS8%2FlObLhOCFoOTMy5Sz8NxCVLAF1GfjnT1WBznrxXF6FfJVha3W7JULPdPm0gKCApPwxcqzRE%2BqMl%2BhpczXmhylz3BQQBTrCpAk7YlGBxEbAYFcbVDDu8ojCBjqkAdwxANe%2FCJUFzWt203kz%2Fny6BgkOjKd9L%2FEANYsHoyklE5YCkQWv5iMevQ0SXdsq%2FSzMPPeMQ1%2B4TD6Py1a5I0GJvVYlBDUyCJdolowXt4wMlCxWvbxKjhezr7CyIMv1HfPmQpGmlXtwAK0ZiiJuuCMCQrZ6%2Bu3jBroHkbnYnsllnnODvNfbIxvdsTH2nohA1blnUkBVyYBmueW%2FmmPMcjjmQiP1&X-Amz-Signature=8ad1482a02667474935ca166915f3034a646730b5260c7982015370ffdd747f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
