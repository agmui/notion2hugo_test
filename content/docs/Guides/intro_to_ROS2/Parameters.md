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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWI5OA6U%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxbArIyabv%2FLZFDzliYLEv3vhHJx6g%2FTto6%2F0LjbH85wIgDgd83sKSsaH17qbovFaIHNq9fxi%2Bbr7hsuOaFprIAZUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmwDq9dcUNW6VWYSircA1qafraohhrD0XZrfeLKZv3jKHwBZsFI5vSqC7qep90XZxuQpGVR78F6Sxg1AdUNRO%2FiMSA6pkaF5arEt54siMss7FU9emmV1g08meMv2JlGLHnma6lT2Lrmak5AueDIrV%2FO3defC2DP3ghC7nn9XE5hjahUcCOrpYRpN%2FUZILpbFIXm%2Bc3yF5cm4uU5mV0T5SFNq5CLB5ps3ufgyuPjpnhySxz43XSL8r9Ka5hwjjfQ1ZfKDyDWnPjyIjMPyI%2BMfqClIVsgSO9dRvBwGxIdFW6o80tPkCBB9m5ZiRZ5QkS6%2FVMFytPiWGY5q7k3ELGTLsr%2BGw3zgHHx5gGr5v0GXKZQD9ZKQArcQw2mJBQJOZzZOaqKvKycvuHLH8z2FrsCfV92Kx9Vt0uxbEk9t2CGXnsmhuPFfAvCYLt1tvn5Fp8Rgy97GphTPyq6ydkzKY411EZ6hDk%2BHo%2Bb6LwIx%2B3YaInftpt02t0nuvkxmHVLaHVtOM9rkavXNJZDERimYfaA0OJioxn14Cua1yMcFvycaCNICTPnnOP%2BPJTRNTVKypu6f2aFCitUoO815LMTh5%2FaI4R9DhrkSo1NQ0zrWqUCefeZoEqKaNs2qKeO%2Fc%2FTdT1NhVf1Rvw6xxxnRtqsMM3w3b0GOqUBs7vZ%2F6cMzFJozrzEuzQu7589uxNMythvZtwrAPHRWRl2TUvfWI1XVgd0GYA%2FogdzpZGAo7IwpBDP%2FanSgo89GK033iS4pJhs8e8uW0NI1X3GSh8o2ymQApLTUuvEh65cGQacdTuOOFtiLM3j%2FG%2B4gWU4yvCFs1hgfyfk9nqVFIhLwxtPLW0q3ZJgRMe%2Bh3nq8ZTmXZORHbS4MTZxRkWV0uiO46IK&X-Amz-Signature=373b11f39057988ab0ac7ff10338d9d5e3e0fe2172d990621c29ca0d6f0ef3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
