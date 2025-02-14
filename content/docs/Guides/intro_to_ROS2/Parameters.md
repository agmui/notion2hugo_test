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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5ZKEWE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsvxNicxz%2BFMdL0dlQEHDsZxAcnoEbF4TIrJXuj%2FV9tQIgeBPPR6kfAQ%2Bpmdo7nVLo7ukh0Bvcq0OL7AhsRWefnWUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAMC1oHcFKEBcf4%2BAircA%2FGrOMae5v7TFcbBYZezJQksCkNJ62fwLDVg8cE%2BVLuh%2Fem2MBeouvP%2Ftgut%2Flhysf5q%2B%2FeizTMkPNXPthG%2Fi3js9yw92LA%2FlG%2BrjOK%2BK6KqZL3V9qUQ74XLtS88esfZRKTBLz0W3qO6nAx%2BQuieH3pk9wC384ldscWKrJayFI49AKMsRMfpjREvtpIToMRu1QP79LoQRh94%2BLr%2FHESA%2FjjcbAqsJwP04y%2FRqrX9zGI7ovnc84%2FtatGQ8uDrjLy%2Bvw2%2BBSAEISOlrcaZi3xVapqO99p5xjcCIzGHKgorfzq76obDnYpd7MDwBGQXltR9AFBmlLsPT0mDozFgIg98DClDQdtK8HinGSwXay9JTE3eTNo4KfythKy%2BrVxtmQ4MbtHFBsqd5q34hut1Iicq2GxOe%2FWOkfqgnDXLJceIKP3vDKQMmnc54QMkONU%2FtJoNAvFJQjD83upLQaovvqz8Lw6M3QmaIjIbjGU9RohOjc5vQc7ZCdaxE%2B6xiNSJJzxPzUXa0daICmYqHw%2Bjf3UgCpFnchPkjTI93enGVOdDgejgKEwXDSIbIOslg7Otu%2FuPmPYPc5H7NeDFBgLL9c2cAvfEseWIWXbGzDsupTtgdOahPEIDO4Q2LFjwILPyMM2Uv70GOqUB4aooQ3x51p47NkWpi%2Bc2h2KW18QzTfraZRcSg1pm6ctqzCG9hSwJcZSs2Wlhfbhjliv599p45mDJ05EB%2FUkB52n2ZpNQDulDYT9ez9bcKNRaU2wyTbZ4oxtM8JE%2B1Bt4e9WXkk%2FRjPHtOYFlyIAYKCQ1VD4jdgitgT75kliEGb98344re09ToCsGiobzq3JzMLO7EE73Dlm24QPmLHw7Nikuqi7B&X-Amz-Signature=00abba0256d0b2c38bfb33fdb02b801389b7e3c25c6ecb0900ef14448f21a0e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
