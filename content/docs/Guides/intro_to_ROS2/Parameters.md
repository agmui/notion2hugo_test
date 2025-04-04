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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2SDNPZ3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTxp6ayg%2BQOgTmnNMAXST6LYJZWHEdrSCdNES0C%2FlPWwIgBK7cbFVqF7QxKUtN%2B%2Bs4XrbBvvdxmz4oqxFb%2B9wpEToq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLGnLXNoaP7Uw5YzWircA9HhakD9Sf2D556mrJskbnk%2BXpspSjlkE%2F1GIlgZGDe1ctvvknkwox0x6V6fAH%2BWWt%2BK2QnhOz9qxPDL5n5ePfgf7OATLVsI9uMWumRHxCzxwUC8J5TC%2F7FVuxEhKpG%2B6tkYiGXq4WZLtDporkeyk06M7FSZ59U2RKeRRR%2FUpSosbZMrpwBb38FhqrfybEo8VCgBzzajQzWuOEb6V3TO67SzIR83vOuyvrZ7D2nwgY7QPfk0LHP0TlxPUCxSTK8%2Bd0pAaiz4BPVbkEdn16TLBdeKLcdbiSE8Iz9WgmuU4%2F5lA65fl623NQZmEkYQaS9lWB%2B1jrdScTyfmh5TToB2gklKs%2BQJgR4Dz38WqvukQzs3hn8o0qjbGveVz9oz%2FIjSuQQcsLP0zgiEOg%2BK7bKXtL%2BZpaS2r5Ik5fSWDw4t6FnfI5d7Y4l6eq%2FDPxz%2BPQ1oAEURp%2FlLu9L1hQmsZhS%2Bk3xzd9HbVMbqwNp5WH3cS3aspTq0%2F5szWjC3CQ6Hxsnrk7bg1P10goSgH6%2BI1gJR5t4I7urhVflB%2FuvqYMGs0W2ZvFYmSmo6eEzs8sbyhIrxam76UFfllksOvRGb88IzhaejUQRiOJbVY9kqW6XE1zqa19gmaxybxutSpXrPMIa4wL8GOqUBzn7MuvsyzzW2ogy6nR2nGcW7RYvl3LchVzAdbbsJu4uSnJr0v%2FgMZY0OFYc%2BWbDDTmJJbpKlYgrMc8JZy4kjWpB461ZEEVoBaYTi13PVEnKtRJrwSRqDRQpzFKayYBTWngeutzT%2FtQH9ip3TDcu9lAabDe8Wcq5LXMfHi6Dk7NZbxQHDbKIwP2GLK4DDSEABTPaztFEUa%2FgKDMcNZxEdatRTfAVK&X-Amz-Signature=406deaacfdaa5966bfe23a8f5661316d46255453ad361902c13eed2833dea3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
