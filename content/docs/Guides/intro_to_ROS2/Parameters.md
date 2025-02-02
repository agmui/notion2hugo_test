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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGNVQJK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ3i6UQsgMlrohtfDSnbkBuU1nmhmXlLUJGQNTT6RypAIgWcPMgVi%2FZyTPsxmzedI2gRVfwAChrUoyMUXBVEv3WnwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcug%2BVCaaBJ0DINJCrcA4%2Bds7gEVD8rIlldoaXPkPe9D9gTP75rdmKdQ476wsmZI64odM%2FRo%2F0ZP%2FjPLttud3kAl40Esn%2BMraYiS%2BRjH3R91Z5mmV0EnoPve33W4u57WRKwGVkjbE0SS7ewoc0sQ0CvqaVOrnfZpw5Qs3ifg6zsQhDNdWS%2BzMrHcPDt8HM0Ak3VvqsNipIrI%2Fwh63U5HwbVGjEH79wbch2PQs%2Fs0Y8Ats2IoGtLF3aKDLko9yqhEtiHqDrVwKSyEFipOE0GuPMykxHOB3FCkmvqfMhFmqrcsfFB1G9JdXDOYOoXBYQSg01aw8Ap%2F6%2BEIOfPiMovdP5Z%2BYJ4TGt8b87TtL7DVmRERi%2FQodOKH6SgkcI%2F2keJHpcHpQk1rOHIj8FZW70NA04Ba2mHJRSwGd%2BV9y5UVURcaYYVK%2BeBn533GdOr9u8s333MKs7ku5rsMwXgmH3JwqjYHTGgYWLQzx%2FPbAl3WIwAqUv%2Ba92jw7jJe4JmZczLTNMCoOnZ%2FDJBw85joCaFZzdfdsMBIokC719YVbrI443KsHeubcmJYPrD3RVfDzRWDWdDtdtVbYMu2ub0YbpRYJ1uKVDjFgw769YV6Zj%2B5omGJYnD5oUm323uXeT3Jg7fzDBy%2FlZDCdmcssYgMKag%2B7wGOqUBXCwspNJIHInmxmFOotI1UNmLGkhDOeY1U2ep416RroGrhoPquGI%2BVGxTshZ%2BRbNgCb1k7JP6En6oVAz1Jgcgc57CaA1PLsB4L0sUga0OPfstcnv1WDfpSAcVAeSRHRw5p8FTtafNMoBDeyE7%2B1gxcoD8CloP685RzsvFmCeMuR4nXtpmLUch3NFEDlV7eabq6YMe9qYuCQMeDk4Oc%2BNuVrrEyyjN&X-Amz-Signature=c8506440b2becaa8836ab441f1aae65740f106fa08a24df39e7f5709c6e5b4db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
