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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKKBODR%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8CS4NGJeIeteYGtYuWyfYo%2Fhiq3IeaZXZx4G5BwTnRAiEAmHlfwt1z%2BR2%2Bnvz%2B40ZNN%2FtAdInrABIAWg%2B5iDVmDiAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn9lmqkgfJCy5CTByrcA%2BkZtzCp5A2U7R66pWNlh8i2Stn%2FdVj45t%2BlKop71tL2Ud50zripn4eT5mACxF3Dv5AZ%2BNyYiIZg69htRL1YMsQgPH8JRORH%2BVTEq8RaF6kpZsB2Qv2ELlK%2BXorwRpekOQrHVZu38E5D3z2Icgc%2FCqMgJSH3sRSMvfnEcLgO4zFXfFiZmVGrzXl2ueJQf%2BDqZwBx4RDiqT3jUNpEdJ%2B3bTr02oNZnB0t4adKE4SGK%2FHfo2FV0%2BhgWEmMSsm0erll%2Bjl2EAe69PD94EfzWQC5ucKn49FVzejCG8Xu0OiccZjwfwXnkD9zWQdNAFpfyhzbvEva3foajAIYUTxJqDJYkWdUmE5tcwetDvp6rPWLyEeIxHhEm%2FwlRx1c1H7KOqWCqrn5LjFEea4YDTAxiopYeroTeTRhNG%2FQUy12WIFoYZv2aXU3%2FiU3Xre%2B9e8LSefxj%2FKirmiESadHtvj36JS%2F7%2FK4YC%2BDzw07QR9K6sMQ9NL7e48JXh3jHVgrTdz%2B8itD3IXMaVYMZzzNJ7Fr8%2Fcovaw6TeLyYgMntS%2Fs1txdk1EzrKvMAFu1r6JOUyZDXM9FrLN6atdB63KSxfKC2FjP9d7g47CjmVmBud3APMDVw87i1JG2egGI5fZ08t%2BEMNjG77wGOqUB9jGKm0jWEbUi1WCwNAwWwHwMyvTAL%2BAUwC7ui5xse1mfUWXNiVmD4Xe9qcVNBJZIi%2BQ2WgspUZKVRPwOe5sPteym%2B7AaQYsXmedgcfIrSJotnhckHgbcj5Qn6%2BZeFk%2BDpF8Kih%2BVORuR7YCZ8xnlLVtUw2ymOW%2BDK1xLB28BCS7ryO0Rom0SSnxWxuiHVvqfrodo2%2Fenlz8ylKOhQ3uIHlnskmLx&X-Amz-Signature=2892ace68c14af2d20fea013a44089d1a1f82bf37f4a136e4bea5c92b40e5d63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
