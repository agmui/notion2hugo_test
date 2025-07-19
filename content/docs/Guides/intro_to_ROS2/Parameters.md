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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AUHRRDL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH09auUS2BC1Wi6JY9BoW5A7hT37969l5RLzg2eBH91QCIGjlGSHMmYz3IZiHvdYL4vofBgFirwwH7Lztz0T3ekOJKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFzF56%2BV%2B7qK6wxNgq3AMYduJfkZmyytA42K11zMxLakvZeUN3vFUmyzSQAQfCEdorsKdEf7eX3wSA2P4PWG9zBsd%2FdVZAw69SNZXg%2BVTzKUowI1fHoVa%2B%2BKVdyRpETgUK8lgxHR5300lUsZjtqIfJLwXrTvasvVVr3YM0kA1KE32wFKdmP0k1ZZeuc3tUl32vOs2%2BworQWN5ZczzhBx6Iyfjnt28mY0hZWJIC2CbpRhSbC2kJ1Max2bSir4wahx1n0VdXgub7D1iHu3lT0eaYBDBjDjI08vzVTpzqLZIhVyeHSNte7MmB2d4iRUA%2B7IOWEl5o7A8QhZ4rJ3IxjykR6ppq%2BTzkSPKU0Ouj8OR0MonTRiCQcYRNuS0rVI0cim%2BVOo0zvrawVq2QH1bzWGtIgok7b%2B2FiFWc4ep%2BpolZ3NeHUcpukLvlcgQ%2FFikSjB2Oml6nPezsIzMyA35LYS8kDACEKvxWRkAee15REsIXplrnPzmszTzHkXboPuLwe1biRGKEutpD8PRPvyIxHD6W4zxPLCDlCvstsKSntaL9OfmBH7C0KuCA4o%2B%2Fo2tDLm8aqrDYiqp8EIKbpFGIHixg95vUVNdPAFtRkDS7IaLlNsjZeWO%2FuAL5YYj4WNdA6tFralTsvvzOuZt6UzCBxuzDBjqnAVnj2w5tp3EECf8ONHkShXPpjSojZMidcWngucWVolROCLaxevqLbj7iSmjc5rvtKBanp%2Bj3WAXWIovHD3S3IEJpVy7meFS3pJMrl99nczU394PMYPMs9s5Tf9P80JH4JLEmt8i5uY4KmnZAXg%2Bz5UsKCsvcry6rDhhUdVuf6voE9YqtaJWstXxg7JGgO%2Fn6iRbMZ%2BuUudlzj99xzMIeXSE0EYWTQa2B&X-Amz-Signature=41adbbd3a060d4d257a670a450e8c95db8f75e1515f54d483bc840af81b26aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
