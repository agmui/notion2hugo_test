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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FQIXJ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUTD%2BW8FYLd0nVovz00UJiI2MH2qGcXZfGW4HTUm2YAAiEAkXAtsfJUSd77h8pJ7iEkTYp9FIhQDcH9XTaR2xaeDFEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIiysDoBvHAGxhmXqSrcAwd3bC7GsvMnQrqKStEgISNogmLCHtIT360urcz350HVyxCVSPSzQc616UspjfwsjD%2FgMLusNT2tdz9OF48SyDvJ0vy9lKBqggtfpBP9Vx2ruUVnFGaEYkS%2F9ls3AwrrDh3AdGJMSI00wX4%2ByEsw4TaO4FeC9n%2F%2BTfQ6dl8Ci0gO%2B9amKpv9uhz08mCPdEUmrF48EkpeHAKdZKvbPWa1yyoekSmvgnxEWMZ20CmZ%2Fs5IWTw98Fe5HQG4Qz9qARcxCPySKS%2FMB%2FK%2BTeBTX2pgdSO2GUW%2FAs0UCRfQfNudYX1zc%2FDDYK%2FpF5ccmNIj6NzwFffsgAW0sailBHalrEcpLJgSYrZI%2F0yQku51jd9DqKiI5l2VPfuMFywq5GodyAlIgGUSBa03TL9tqjDtzPqIOEWUcG54zGbzahpFRM9Yf3uyBOrdiVf2EoDv%2B1DFNVMNq3mcuLNqmjIHxK8AkFNjZGiOGvHBLywFZq7%2FAMbBaZ8%2ByERKDRZNTFzoIwOAHfw5pcbWfVbmtEm0OYlh7d58yG3Lp8rnj0IjSz6cGnJLCsxoE%2BXV5i%2B0Mu%2BEad2JI9T5EIasR73lJrRI0CR5O5n2G9ajX%2FxH%2BnUWj0tlQAHRi4KFl6%2FwIfxXSSPD0FP%2FMPGQ1cEGOqUBw6p1Tt3MFSgp%2BpfzIXjKrVLDCSq5qlKdV5mZZwQ7m0fxGLX1UuS2mWCGfhtKj2oCfI8WE8CeX0XoRd3%2Fl6WQas772kbyMk6iobgzHwzrOpPbQsW9AqWwOdW6SIzGwT0YqLySQCdFt%2FZDucl6mFAYVVrObL5xoobL0n5RZ5R5aatI1VmGDC1XFKLGnyD5KxA9w3jpjIAexTSKH4ECOiBaepGumL2G&X-Amz-Signature=cd42a3c748c8c5371371ee4c74efe661775e918aba64983ef685d3c53eaee56e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
