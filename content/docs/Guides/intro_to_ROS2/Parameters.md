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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HXBA2Y5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDYAWmxh%2BDWUxiPF0fsvFMGz2OzKchQC3Hsn4MjzOdKhAiAwd2DUwQ3ZDm7o3qqHuNT5oT2CMQPDp7Gndp%2BLhYTNZyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJt%2FgytxEiqZh2RgEKtwDf5xMWoDtwrMmiSpP5Jd4YcL2U2pQjH%2Fmg4CUaf%2F1D7k27aNxMQfNgVlORanpp1%2B%2BCHZW6xynB2yATqz6Ev8V0HjQK%2BgRRaARwUxwdtkscFaQJvwlQxP3trNjfCv2PSpKPCu%2FgvxtLt1JmpgBUod120SMQvkWS%2FY1u%2BiEIau11t7Fxev9MfwFNoBvODabbuiFVdN51VWeh9Opam%2Fa7bKi1kiRMKrZ%2BF%2FFRYriXI4%2BChJ8Igv5KA%2BBn5kKocCpgTuPzhY%2FkKcIwDS1FfnbVaBV1o15jLTyFmtalKwu1pLIsnjuG3quQ37AY86PJ3tx7L09Jpf390VvDBrB0Q%2FtDJfnbeSR%2FVfh8QTyH%2BHWbo36i7Qyf1skhlayUdL%2F6iUft7WBmGKSr%2F1B%2Bmb7CcfoUc%2BfqA0lU7LU3KM1lGnheTCUXXT2Vu1j%2BXprJDeyLWdlEttR8xrgzWLP%2B1Zw%2F0bVsgA4IlgO30%2B6qFjIaoTUrZHo0ocuIM8ROqOrvKuPRnmJhqqUA%2FcGRZ8TVO26zryRg3VRB0EwYIYANVJ9fawCNUW%2BoxplFFEZl0w%2B7zctxG1a6MlYKgQjKcYxejB9F5L6WyPE8H0YLk87bUPeUkGdcWh69q2F8YxLuCUcaHMV%2B0wwpqS3wgY6pgEWRr3OicJRyE3YIdCW1XYmw%2BoAaXWzHY3uXn4kM4r10xuy4JL%2BCo6fQLIviLyFEP%2BcCmVPK0aTeWjrOTLCAgIDgoYiTMFX%2FEwv1kqdF4CvvU4dcCPHcid7aSo9DkWbhIggCewhmBc%2BQ%2BWI0TdYZIwuPJmpozi7wVsBNCts9qATv7bV2s8Ly9MDDhwtElRmvgQuHNM15D6pGzHY9lPQRG8u48n4XbEN&X-Amz-Signature=67e4e8176ae9347ebe4c95b0782784336122d9e2c3654220b2b614afd0e8edf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
