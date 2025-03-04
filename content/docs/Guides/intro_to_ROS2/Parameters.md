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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO7PZDZC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYAo1mF6Flf%2FD6qJTEZvA7SvMjpFSWJPYf1egYUkgtWAiEA9wmNXSeLk1lbcKTkw0AHIYkj1eOlWZjeRsXyBtfbfbEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgXenOYeiVVC6yd3yrcAyLZn%2BVuvZv7W6NV%2Btxmt8NEJYYMYjIfn41FJGoOreyQeJv7pjwekB9amxAfEGUEyTrQphT73gpMI4ysMQC3u7QVI4lAhjFQ395Qt8a4pdQCxm1NqxLvDg%2BADQ%2B0FKeoUELp9R6VIRM1PwfxVI4RE0hA1yKDWuSqMGwKS44ug2%2BKgyGR6TAjuOpWbhj8zZ4C%2FfF4Jd9LOa9lvCVmmMf%2FrzHFY%2F7JCG7TjgpM1xzgisi4F%2BwEzzDHbtx01meIegTJ%2FtCRa8bRLRPfmUQJX7M%2FQIXaux6xxFi8COQ3TfGMLUlTeNZY%2Bvljuiph%2BifEq8lsR%2B52IbtIAsfkVQqIEp1xhSPnEdZgU268GdBEoqrqYatb32jF5EXJ84o7OSaUun2QR9z2h0hIFwtZIaMlgvGgW%2FZBJ8ke98xRozg%2FybS82mpeCdwbbzAqBoIU6aKFAA6Z8ozjXiIJQk7TKJpoM%2BEFFNithR2afqyKngWeO9XJNnGM%2F9LM4WG4lH%2Bpd%2FyDfSGvRWJzar7txE5B5lzDRCocctHib5r5oFg0N%2FofyDdvMcLzenXY4EkPP5HbchdGKg%2FM15%2FUIYy7%2FAf0BjVDW66jUejbEdN5%2FK57ZdtrA%2BnVaRdQgblL0CsKVX8heZcGMOC%2Fmr4GOqUBF0Sg2Vaar3E2oEj5gwmf6SzNPYR5pCpKnjJ04HAcApU3kqcQbWBCANY56AmV6K6QacfkKI5RUUzOWepcROr%2F60K8nUtfDqaFoJRyhgJM7x0OTbJyBppz7VbH5waZE4x2ZfvT2qds%2B2uQXfFDydXKO2kuhqld25ciHuH6ibFIrsAU6c9V%2FVExwLoPqgZdNv9KuhFVPHomu50qFWOb72ulIwvsM4%2B%2B&X-Amz-Signature=804eae16c64fecdbf29334b0dfafbc67ebb624d8cb54b54b30735399887401bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
