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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJZRGCF3%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBvWR%2FDlhm5sBjJy2H7UdWSdMh3ERjMgG11Lvwx1S%2BECAiEAhEzbUVyb7Vl%2Fs8c%2Bl%2Fjq9EV9Wy%2B24WDCOc3VA1nD01cq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIgmtaA4EVFICl%2FI2SrcA33r7hVX2V9ChkyAF7r6zpLOtG2ZSj0m5ARP9j0pMLQPhUsytTnerzUMM2q9atcrkQZnA1emI%2BPzYDdLrkxaZ9IQ%2F0%2FsqOvSMZsvORcFB7Oeknc0qORsCo1zMUDmijgzlyo%2FRsJsut7i%2FeQDRnBzjwmJHjLs80Ewo%2F3qm%2FQ2dq2EvJDRMxBAELmxyiS79Gg2GKrhAyO%2FKWBgcxLBo887GZfo7qj3y0SE8rSsMtilYrBaWtRxshBvwaxLPDcLAhDnJKXeNa3YGSeVGnVHfETMd8hPVnCps3KH7i8EX8gj%2FpwA8c2kTtQWzIpCWR930w%2FC93m9M2M9HplTx030%2B1%2BT7KgXxVY8aqptxso3qTOPECmsjWSBGeVYt%2B8SAfTFPbGeKEBwyGHtU%2BfI7n85BqAf6dIczUbfgpmovWsGMwLlkKcIgRZFXRmUVw3uBZxyEZMS5JV3DopgYkgkiimYtE%2BCCTHc%2FaSK9HWqNK%2FuXNrY1lbF0SBpZuX2J%2FFYy8%2BXCfTvi3uYc4IyfQSJCVLb0pzc%2FBdixOwVNkcaDQQyRTBZNZBJxxVJ49z1h04e782pC0OsXJYtvLWUGKacohmA0BScMH48xkFA1jZTGFRKIKJK9A%2B9HdzzZ%2Bh66I7IBrXRMMPj%2Br0GOqUBXZrjPbB7awPX24H34GFGQ1%2Bq%2FlBPre77vA13dAxUy6Pu5jfV4C8BDKaqgBB1NTbNeSiPs933%2FQcGXArCNeMnx7mlcnw%2BnCphWeLVUsKP4gGdHZBaJxiGK%2FMBATZS4jXjpehCL%2BXMs1scVc5fC53RzNSwWzWL1fODNjt885ZW9MmAbTnRocYz20omXzWWaNXQRvClkXNlkJ5iMbCNwoOrkBkVEPd8&X-Amz-Signature=2d3183e3fa501052fb0d2db48741cfcd762425aabd570d03c85e984722b9e165&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
