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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TN5CAP4%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T020939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4CzOTU7Qh938XXEaCYN5VYajthJjkF3%2BW8zFKC8X5JwIhAPhG70vtax%2F5Bqm3dX%2FTtDE4Yw35aEcAI3QsIUGtXuiVKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT1Oy1UwykLcDRb%2Fsq3ANg%2B3og2P9QLPBQeunUehwQz2R0tDlcRz2bb%2FYHW5nAmYbMRfCZ6NRi6yVyL28HXw%2FT%2FE4sR2v4qLJNn2CYhFhVeIxNEG3SkJ2Rra1dXp29UMjRuv7QZyunLNbKiYqmUBX70a6DUkBw0FqJrJNFD80WEVyAqfPvZZ5PkrwcYS9GW5Qenj%2FOueHpF259IFADyCYyJO1Z4J%2BjUQ8er%2BjEUkz8d3lWb0pPnEMj5fIq%2B308FFaeZdRNUWLytV18HDP6TJrb%2BBBvkj4Q%2FuqLx6TOKsSk32N1WhToNynhJXuwYYVNKN47C%2B1VFbtif8uYNb4TsIN8eQXyd%2FH%2FReLVVsnOQGGUEt8s5uPvy3ETp%2FJh3biHLL6p4JvzDxH112eNyKyHBtvNo2gMsmfW%2F%2FXqQfuftghRF0Du%2Fs%2F0bWgvuFX4cITr6FjJEIeq0mLpKmFdiVGp6A0yYfKQfz1m8ls1saN58hgTNajTZ6AheAb0h5RP34YG6ov5LKdv%2BGtPysVMTWUY1Wpv1MOan8pOCD5XZWMfW9mD2BXb%2FtZaNIeV1fbjhOVd4D%2BA3akiWL9XcvYxYI9hBrIp0QKw66lu4b9cEArDaTVo1OzhDLV%2F7e5FVuiO8kaskUV6ENp7n5O7dZPPRTD%2F26q9BjqkAVKBuRL%2FMI89ECurtftFg3PCTYkej%2B0XdClpbujnFgLRaXbvkH3JUvR3BMHn6BKE9YTkBo42yfTNb%2FYxiQBSm5M2ctcBKztqPDhX5Pja0PeNR%2BL7ug56%2BSBDjIFd5zlL4Lx%2BbPz1mxbidqhjSoVZSDKpPeziW0EItNGw0cxqtimlQjRy47Cvr51iTxX0Fn4qxcGsSsvnIumx%2Bm9Y59KiTnQ4yUs%2B&X-Amz-Signature=4ad3269d51047e70ebcdd64c66d6d99927298d12689f0f20a4fcec1afcb2e8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
