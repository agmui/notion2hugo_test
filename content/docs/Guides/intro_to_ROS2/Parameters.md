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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC6P4ST%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFydeLkMJfRSqWpJXJptvujnkltVEsNZ3bypORe1bQ7OAiEAs1fvmdeNbrMjLovGFkVksLKrp8Cc4LlCxXtuwHAk6F8q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGkqJaaSdke%2Bb%2B8lmyrcA7dZ2KX3a6zBddCigviWwdBCzTE1x4awDjzmQQWfTgw3UFxjHNuMUdB6xGcGeqJE9iGfaZsrnO4IyrhxJ7BwJ7e6m77vw4M58s%2BmenBBTMyRxT7fc%2F77OkexPe2gT5CIApan3geSVqreoXF%2B3NgL3MckH%2BRKBZPFFz1lymG4S2lpEHDyLAbYea1GRsKVY%2BeixyZfoBlR9KUvt5v2Grj%2BhZNevH1D4lRUbU4kzOr9RA7JxVZWniyxqxFUSsPB6EdaKwvtZNUf0oj1sJX1z3BwuM9pO1dpaP6WZC1mFPVe%2BspjvIYCbjgUv2qetZtr4m7%2FATfV4bctXW1SGDueiSv1Uhp07I4o1lnDjQHlBFyJgcXpeP6N%2F9RjtWBDIpgr17uZo7adHqvLErulLlXHYNdzKCdFvMRgm5lRj17XtlrD4Cy2KTj%2F9yraj06RFqz0SQHoYmQhqw%2Byr0jwBRq1o4%2Bdqlk3jSV6TsMGeXtq7s7Joeyv97uGjU4KxEh7FqPv%2BjaFke0a35HzqeIQw7OAt7KT3Kc%2FP5QB5sHhQACg5g0tIn%2FWHIRcajDoCuWHypl9HgOz1FZ0uT3RvwouH1BSW6thUN8%2FCZnjMKAjIdMtGSxgooS4w5DYZUB2BfR%2FekhUMLf9mcEGOqUBs5lBUDALyr2nGtdcoj4JT7ZViNtuCj2CqJcBPqLihb5LR%2Fz4n65XdlldDk6UGQw59KwSvdDDyQevdH7Zx22N43%2B%2BVcZPsO2Pbq3yvTYc8bu%2F3L17qY8eBSx96t8hsnvrKBCL8MWGaQxYMAYmfT6jSmzbmFhvszynWiktA%2FILsNwx3UljgPbdthOsgs4OOFaKKvJPYF5HJGEnJOaWK62ebt8rEInC&X-Amz-Signature=38b20d787cdef122725ccf40f1c33d840fca0f072baaeefbbe3cdf05e514ba48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
