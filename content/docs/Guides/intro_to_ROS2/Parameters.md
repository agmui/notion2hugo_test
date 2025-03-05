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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYCWO53%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02YFtENgJcyiEAXNFLJKtf2NeWuORaeLc0QKIYOHCUgIhAPwZ%2BDKufv2q3B3%2F3xs13SPP2l9r7Fgr%2BEx4ZtEoGIcEKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FjfHur%2BKZJBm8P%2Bcq3AP6JBPY47exEMqvqz5AC3IWODv9f%2B4y7TOWuz5JNvHXmZTjozUCTyUXJQOQinFrvJ5ZJdDN6uewo7fkXeAXRAin5qtyfH%2F7kXpJAXvj%2BlnsqEisnykxkdHnjzd%2BwYNu0PnXDnHxKuuNgS7%2BORKJ6eLJdO8e6p8TipBt8ND8A1pHsgie2J3I6BrCZaZ5twkpWMgTIQ%2BRvLqHT41bheLzAUHWgB18hj2DcVJ7b11Lx3qWhX0g37fDy4pYZLqcmojfq%2FJZcSF%2F3l9NGixfNK%2F%2FmaVq5hyUqr0u3D027utCwP6UYgg2ahEM39n2Nhtz2p1%2BJ55tJkYAVeWK2Ylq0IjvOvyOdZQTTXQJlFv%2BsHLY0f6lS1ldAG73OUGgEa88o0S3ZoowG8Vy47vbfIVIfsOKsOfrj0yNWZX6vCxidWcYw7LodiGQcvrLBvn%2BkrEG6rSGv8T9PkWvXohuwQXoYsqboqYnV%2BZKFgVpMWWSL6TJHN%2FOMvFJWrctdMASuRjpITyt0uq8aj7eTBFCyp%2FlhYR3voKR1lzlWjz15KB8C2ShC0zfhEUtzPilj87qTud9mOC6JEkPzeQCdKpScOMdyBJ8MpYjWxXLwdzTnfWREMKOW1AU0wQlGp7FDTBzlbHSyTCViZ%2B%2BBjqkAZZ8QAU9Q1SjtctdLH3n5prSwcmZAG22tcTXHYBQUL0ZTcCiCSf7nc9KF1YnYNqWPuWaGCDXE5R7bvMhCa%2FCasPfKaiCOwIRIlJWtVy3%2F%2BLv1tBFCWDfD5srm%2BrQMpZof%2FmFemN3duxuXiW3TFm7vGuqneg3vgxx9MIpb%2F2Yl6g9Si%2Fsi6jSgoBVz17fTHVgkP5rwKRw5S7eQSLqtm9651JDFbbq&X-Amz-Signature=6b8115f6515985c858932109c23099cbd9a51ba6d8c365923a4fbcd49544fe1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
