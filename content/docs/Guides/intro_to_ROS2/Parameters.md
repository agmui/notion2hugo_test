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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LZ4RIQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLfDn%2Fhz2Rfwpjnsyw%2Fk24bqJJGbhjGyGuOaal0i8JJAiEAhJzsEQFlxvC8xe4Fy%2BQFL%2FsHVCIgvtpmauPuB1SvpuUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCSM8nzdTVEMjazcSrcA8VFP4dpCIYX17SJdJjRDEb5FFwBaKue4rUhbj96u4vbewBV9Ev1R4eCoW3rq8DIPQ4bZd6stHftKT67TT4m0HbmuRrSNHxHENPwFKEO7simQC6EhJ0mQ65IgMkAkUWAwqMnekkKp8pe850rA511GKCL7PIo1HOos5CrLt8sus7PVndWjKy%2BR%2BshOrzl3r5zJMy6dGbkRcrc9qvDY5tu6%2Bc%2BrAhh7NI4ZdC10jBIHW4LczMmOChF%2FnOab33ybEzaDs7RZR1lB9ESx%2BJduTICoSknJJV0tpFiWY%2BrZesV7Mim84m8Ayi0gGczOKWRfdPZvxk146aclKbDDy9jcXW6kDVHhtHXrz3BpEfXQ5R7fhjFevVlKSUGpX6uVW4EWPnbiSQiSohXwUxvg10ruPwAh8uFSuUkG%2FQe%2FdhlEmqCzy1jCEXjzgCVTsHcLV1dOvdZxxxX%2B%2Bc4ChtjGC5B7qL0lakHCO0JpEq01rRikHkFzLJL7yK%2BUwTuw7kgSFk6xfY4QnPqbxM6UqzoP%2BDGqYQpoPzk9RGCFTUKH4ehQSTfjUQbizYO%2BVwgB6R4tlv9lskMQrg3hmFZN1w7Nrgv7ELO2HBb5Qz10VyVLgCDjNWikiAdWLRrX3errhe%2BX%2BCPMNOtsMEGOqUBpuY3bM89HVQmXA9F%2BKW8mnN4Tx%2FYGapZc2vbNNpr7xRx46s0FKsP8WbzRmx7vUVBP3t0LLit3efhUCVFUjjCHdylSfsUpexpAPwaYdc0dLb4wAYdCZnrpHfL47uIMIV0nu8wDOgal%2FLYyMdK63FDrRIyvFTd0lqWDkDEnruUk2zmiD0P5NvtAxS0TTO3s6hiNasUym309%2FjvA1TtdKJzwgoqlt9S&X-Amz-Signature=dd192f98ca8c0aca4debe5b8a6c28cf8c78260ff8c261f8add3ab3a48a0a5ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
