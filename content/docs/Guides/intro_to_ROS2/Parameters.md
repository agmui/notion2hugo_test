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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WTD6SWW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT0Z3jxn2hdmYXUqRGVUHZ6dShv6Ojp4ponEGmnlcr8AIgcwJgAjzlPpjgc1wtaTSM7B%2BwYivg3Iq5aGvurXE%2FtksqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBHIMUOdhFk54g9tfircAygehkHc0i%2BPYDe9khYQIow25MGaQnbdKghVowlmQcur3Eei83TyTy9DLFKUPbwcPKONyQqcL1URv%2BnZi59l1sZP3tmnp7lWZkvpc0TXN%2B%2BWBqgxKM3FoECr4CGK3P%2FXnO05viBaUKsL14mmdkKIAWfiwM%2FrYgiYeahjPuqPFDofyHHd4OvJrdpwt%2BUcharqY8NInCMq55tVrbDtHXFuWk%2BBjtD6aj1IHOWTtiam36n3ru%2F6Hnps4l6bJ3Loy1QZ2koGSMP096K1DRZGXLV2UvqpMSRq6Gi76oHXJhDgdDDk7LYpQpMUog%2FjH74aopx5K7Yamv5uCcTf0Kjs8L9WvxT%2BfbhDSiUiTQYf1l2NycDrKcrW3xgzXDUAuhtsQAjO0%2BWk7wICHSEqs4Rsof007Tik8it8aIREIVRPtk3PJk2zDrDrwDJGHgsfk3gxa%2BNtHHNJOB1y1CFTGmS5tLuf%2F%2BkDdLnzFJ21oKoCiv2fPXcpV0%2BXoTy%2F%2F0GJjm9ZlxHbEkaTu7V6ru5s%2F5DUO%2FA0d0wpUFaORUY2kfsp8A5aeJhTanh4QMnzgq4ogoD0y%2FwL9NWvm7QAutuDW8twH4WKxgZyFdFuxRoiOr%2BfRpJ307Dq2C4DW%2FbbdVFoPaE9MNaL3MIGOqUB7N2tP7FFW%2B%2FpHAYV4LiA2gAXSfzfw76HJrvqG0L26r7DhVb4aHBEgTXS9mKxpxhig2qKyjxX0Pa6EZvNTsjRa46xOBD3yrY2bWgb1N9efZJK9caORHvNscoRJc1Up97zohl5YOQ29uvx1389PKqmSMrhkKE0N%2FCvOHN9N1str1UbNH%2F8fj01dGPRRENR9m%2FcmeDcxKmykBrQMej%2B3k3cjYeOnwst&X-Amz-Signature=dca60526dbb1c5276d8a74e5a97f18a56eb48a33cf6a78b6244bbf598fb49948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
