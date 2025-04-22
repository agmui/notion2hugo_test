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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZZKWBU%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIEIG8PoUbGdmkyeAwQl8BrTOlxknwq1Vv6WViYFiRWMzAiEA2XGnysYqfYs0s2rz7%2F70E889DaRcRSXIhmrpYvQ5dGQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwFLrxyNTlIbWqk1SrcAwOY2%2FJ9m6ZYA%2F6sKg%2FbAv0%2FFO8CSowT3itWZwhJDc7c47xT%2Bvr7Jmap5V5DYxSbZr68GtnnRLrMMTVKUncnvuChaTdrMW1ZfTO2lhOStPUi5A%2BYUKVP%2Bco1ov6iFhjQXeG1mnHHN%2FfXiqfZxrw9kUf13FWZ4eOTVnJb8LGZmdVmMLLIWFsFMU8sNIuAzdZEnw4lc%2FKiOb4Fz3JqhBvu3fCTbmsKnidENYNklrnl3NRbE18Kgs%2Fne%2B9%2Fss7c4uVT04aPd5HCf3eQP5FHvuzamUeRv4d7%2FUwXQolFNnkBvQxaBN5j1Vzuf4C1FJNMjcuTUGbig7e2yRz3Hb5YeQSXG45GmaEMBag%2Fqqz7GJ0KlCGsMJLrUFZyPFkE5kQzBgIbTi%2Fk2EzBt9XIxuFyyXh%2F97%2BjQCP2xeXBgWNJsIFvj0a9QiaH7LY02rf6IbakLCXTKnFFp1ONcIhzr3zh4ykuxmhtWzFwQWx4HP05h1Lw8yMkFURFl3veNHvRzAWRYOSMLRmlZ8HKu1JgxmQkYAz4L%2BFlTsI6wEqMaKQ022vczGAQ3ZQF3kjCRQV7nu1pElVRExu06bkCK8r110V5DD07PfS4kqCy3s87Yjb53sda9CXaj1duylZD3Zfz3B%2FhMJWJnMAGOqUBBwWHoXk4ONQELRTrG9Ax1oqHRUdFr6cM5%2FJEkeIYrA5eNDylc0SVx%2B0yp69RU3yjOSGDmdtb8FaFQvvwfOb8qGtAEgS8tXYyb7cKA2yt2ZXDtJYDsCqGTfqULUizFVWlmczTv1Hav26bHG1R44PocMmYXSyPSjAf5KjNUJvqJouIQQtlgmr2VbgC8OkGESyF9XjQhCLguLGbnQ%2BarVq%2BM020M1tC&X-Amz-Signature=3e25d12f0c9c9d7d0e0962d5b8fab78be720c6de4a9a2e35fdf64404337fe26e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
