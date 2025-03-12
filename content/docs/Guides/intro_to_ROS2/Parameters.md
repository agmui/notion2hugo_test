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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPZQEG6J%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCyw491eR97CJKXKtFurCJVnEwWfVGc%2FPrHQuRUwXZP7wIgb0QuqnnVXl98ekIjMbAmvvI8fDmL1dSz02YBQC3RtO0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkAcSjs9GctBVOCAircA9AYaawVhC4x5FwT71luRNKtBmXlWAoELhDrUNEaNMDG5OC%2B2s0kH3r0EEefPhGeONQp1TcjOBe1NK9i3fw0gia1C7EYfcjxraHep93mOrTuSW3OMw%2FuA4b2WHEmDK7hnAO5bCA8QhRGXnX9VT%2BreSebKS5ST2G3rYjSkMDbY6DiTbbQ6X%2B5MzG17eGzW2T03d0m7uq9EW79jQ0tkIWmhqoa0gOKTpZ5pD8La%2BPNHQ3sY0Wpu1CyZzT4lpIiMPLRQxwYjDM8QoPH%2Fltkxr5nvSERZtx83C8rG3m1l7RghZAy3MUqUQIxGWis0N1ARvg1zZgwsQllXaWziATipmdCwFr1cCX8XiIeg7HFwACj7SBePsB1GMA92dJWnBK0aWKNsdZsbweWChWdJL1e7v5ZzSjjOwW7UrNXjkkunEaugCeQWE%2FdADtMntBzFcdSuQUbPnH9IcPSapfVJG523XStVUz0b%2FEheYb%2F6Nf1O8HzMb6oxURfizySVTo7EAdKz4aPZ%2F1u5GVKIaLXfiGMZ3ySiP8tJV8kuc%2FrKTO5xXXQR4JIsMlw3SsnHOHlJ79lNnpPwQq3IjB%2Bn13Wy1Wl5gjXeVTS23dgqvYSabahH0SDWK5VsPYO5RG72M8g8pLZMP%2F8xL4GOqUBFsRlVbLQklbzN29H%2BDt41NI6VlzbeC%2FVpuZ0QkR%2Bdz3ykHm2C066rYUSGqQdqKI2Q7xV2H%2FYayFHfrYctEyYC13BhytOMI%2F4ZJ8DDRzsrojFVUJ6lT6BQZhfXCrUltK2PyaDLVwZAs5zN%2BCVCmddBBky%2F4yMWJMBZd57P9joLcAf782Xjp0q7pOv9qKRN5o1sXidLFkcfa9EyTBNxYvyEmQyhyCr&X-Amz-Signature=0467eabedcddb0f5010d98074cbfd2d7703042300aee728a4fc326e97eabb5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
