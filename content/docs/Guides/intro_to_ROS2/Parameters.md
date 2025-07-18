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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VSU2EDP%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCmA7vu%2FtdNQBkzl47BxFgXJjzRExFrzhugpfrX9r43IQIgTajqvtBFK3BZGvBxHGtjE4QUyBv5gliTylnt9%2BSaN50qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzAcmU3z%2FikjAYvRyrcA06Fpf0WF2w3qGzTUm51AYmW0wBk7Xh%2FviNqTcGtO%2BiGEHhKGfwLbb8UUInLvzm%2Fck8ogmxa3AwIHQZI4ivKCGoEVBHat39u2Q%2FgXFTB2PLi4Hyf1%2BtI9oJ6DYsABJf8%2Fa9LTGnNWJhqUoi1vYbsb3Zll3UGxLG8mUc0gBpNUs6ayBrFBptAWW1nmbYyUaUc%2FP7dGXwcMcWvQNyUuqx7rfVTnjJ22bbKaM4QYHPQdD81PngLTZRALAde9YSaSFB9SvEltdXH12LFBXuzodJfbVYhtHBH%2FxX3EK%2F4bNeT%2FQDeCba9tvUZgJ6aQ%2FGuz8qaUCaIDnRRbMqQJxWe2RDvPXPkkT%2B63JDbPs2PLOU1W6U9DjNKfhDkndltRpNkcNt%2F2l%2B5nl8pxt4vLocD8mR0JsAvmBDn6ujoKilWloGu8vGVxjA1PjWxxI8SjcFIV6GKMoYg6dFLOObZBbrioLHywzayLDi1h6M8ZxOJK5Q6e5M%2FiT7Wt0cct7RjJvJs08gqDjQ4WLa%2B5kBYzcpQpG8BxCu2CAUZwf3gXYSMgEf4gsvFN8Haxb2cxPheK%2BTEFtf9sCUnM%2B31sNEivlloG70iIht7PJ2lI2HB4F8%2FmNJLd8QNh6%2FnSnkPRrFpMjgPMLyK68MGOqUBFYzMgfI4x9HwpR8mLUAy2YxFJDddtUFp0%2BvR6pWVPXu7hLQPRary9Q1179J1BXSqLLsILoJuhuhQug5CrutQEXFos2fLSyYS2HOfirsuhcvgR20hNc7rK3l7WahSWPlXd3WQetpojWmbc9be5NKw5cRkC5BmUcFCFn%2FfpZIxDoPjR%2BtmF1BZLfHFyKLA8cSz7kDMBQ8RNVjWFzpl5FuQJSkd8o1S&X-Amz-Signature=ca0b1fcf96d173d61103d2ef09915d1f0cac90b384c0fcac68d3ca1b903af3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
