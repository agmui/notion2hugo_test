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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5RVIHL%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAigjIPxgDQwbKY8r51c1UulcUi2mkiytpcTs5SaHtuAAiB3j4HWvPBm8GLK%2FyXgaDoaiNXuhsrOmmNAxCHTeNUuVCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMa7M0l6ecALGOXNqhKtwDXQU2fV8veyk3ShPfL6bp7%2F1jXW2BG2jEm3TWZEU1xbBxffjMO6laUGekZsT0UBEWtb6%2FmfgLeqasbrDbg7YbRYU%2BNRFg3Av3rFr6bpD2XloCtm%2FQYw8pNrN1xRjeAkmDjg%2B1zP6kokLi0Q1EH2kWw1p98Udpm3sYnQyhfQVaGee5pohdZSibzbhk3p16RUjpquyknUVVieVVeT2yRRLBhnLJ%2BHxxJ2GqD4Tvx39S%2F%2BR15F0VPq0bLhsF956W0yS7s9hyOMHttHtWkwckYDtHt7Pn%2B7XbLlmbTR%2FrwD8XH1zNvEjgzl3X4k4lLzulidS3m1pkKLq7trNBRuPxg%2B2dpOBhfPaBJWGV4zxMFysCtf4UatW435TDf%2Bm%2Fl0WB7VzDtLJMVMQxm%2FhHcTAhjwJEmLOPfKOPIjLvJbHYPvDFidUvgB5rwexBSHTw47zv055enTDMXckjzT%2B%2FyGk3xU%2FXRMDMeGiHzVMMicwpgJHq2HgyqhQSkvpW235YwmJQzEGpNqyVdHUZvav03C7soXZ%2BgG2h5yUB2y4qZ4OR0z2HCScw5broK1lQVPvS4uDE1QTHtyvJ5NQldPyntLoadTtHl2yXADiVP8KtDxUL0z2u4s%2BffE8Fb%2Fr2eRJpBLcwo%2BnAxAY6pgEL7pi2%2BvP9UoFnVRhsduQgdaHkvpAsq%2BP7PNQboBSpYLXW9omVEwZKyeYr1s6xs%2BxOLm9qBReKxzLPkrklfmGU47s164LPnHFVOZ4F9%2FnsCfjN3RNaysurOnE2m%2FrfDA%2B%2FwKeUJQ%2FRck7D4pn7nBDf2GcrNjXJ3QuGPXYZDV88A9Gq7ljoup4mkWkwH0B6NDmTi4SQzypZLtbNGJeLL0liGF2r3vTz&X-Amz-Signature=9326e8fb825b412b7346e82f76e6c7d44d33d550c10fc64619f02fa383e4db15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
