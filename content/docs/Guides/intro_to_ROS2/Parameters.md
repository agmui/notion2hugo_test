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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663II67BRW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMAJcvxXUw9pE5%2BwhJMFgH78ZODa1JAy5D1J0jPecdjgIhAL3l0qQZ0bUtrbm7ZpZIkGzPDyKt09YcsTRh57HYv5iyKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJxcSRN2UvqVGNs8Qq3APDrMNDDBndn9abbxeIzeLIzPbadUP6SRi9I9Cv3yVZn9du2tiqqZXoxYgwSfcjpm6IMuCzf1fo3Uo%2FHuvPygscEYbiU2caKyc6jK%2BW8Pqf%2Foe4T9%2BqgSYSo%2FdBAvIv8rqKNaHMhoJPPGBoy%2FsET5sif6NdwA1NmAV6KFS6dWT3FeVs%2BM59bnzn01vlTsPgZoPZDFMw1Pj1%2FxguZznwQLmBNqqzXTctX5d1lBQxS14QuOvUrrng55gjrEKuPS5AgepM8d9hKBb1dYwGj093aGDTIDK4oIm4RbWQB0ZtZ7ZA6wkV0TDvy3%2F7zTXrOcgG%2FRpoicfNVF1j8J0qxNoJi7ujLLM7kCqjvo6%2F3Xvr0JJCeabaHpmgSO0pFWj%2FIpddhf3JjsZrKyJ0l8ySbsN1YmuElHso39apiNUXcBBWyttp13%2BmTEZmpECxMdJqKEgoDmoD3ykHU90eOR7qsbJWrTntDVZcAM08m0%2BNupFFfKUng6OqOw23%2FVMp6R4ghH86pcsZTZPKhsTJCo9Gfkv4nxpYxfcv74W1Y3GQotOVTbNArqu0CSjIxbNcHV%2BIqx8dXT34Fy2hicQ7WcGF1XihjR3sa99u8kPeGs%2BWAEkhkKrX9QoeMPx1A88RV9W6JjCcsLK9BjqkAXXma5MHksHXsk%2BMl5CVhPO6MD6UlHD7Mxg3FgJgix3fyGbQizfkV1cFU7d8z8KxBnfVDcTVUokP5oBtKo%2FO1n172wtjjXuI1jUmyTWMKwktWypJGg8nRRML%2BjhRiYZMtjokJJxF6davmDPsNU6mCIYjIC3tWkifs1J1vn36h%2F0rMarydKhqf45SBHI%2BSs2rJ8hm0pQxNSy4NubB%2FJGc1S7gs1gS&X-Amz-Signature=974b1b807f5bf2294a7d7fd9c002ac05a5d439a792ade0ba1423bd0a51468b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
