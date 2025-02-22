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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OCOZMBV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T160748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiC%2B%2FIc9r3dc3XsLpobDlTUyUNqWZT%2FSe4mExuAKuUegIgTVokKbfEXTzHyoxy1I%2Bs3NTsCl7v7i%2BIjy2fT92J%2B8IqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXj86u7KJjkMotriircAyLrCPA6aAifRd3rAiOzYL6uxqO9Rcta%2BPreBJY3yIkhXhptdIzoLYhn5eqarP2C5Olp52MVtXnLxfRM%2BmuB1J6QR%2BzD3n%2BAaufvSUarMVB1i01h9tZEu1x2DSnLvdfzL%2BojIaR1oZnufrvtAbOLAgcNNJwPkkSOtNGPqYHFLB0WoVCdMMOJOHRkXq1T4hIWy8W9YFJjKkGVJYT1qgPakSGMA5rgWb%2F74Oi0U8tsLbd7kTkjpwlC3Yd4hzktK%2FnTvL7XE61SGDTaVOxhFHvxa%2FusM3HwP%2FoZHBdp3pQZzHat03IoFAeG81wCV4M%2FvU0dI1dE8QVscAVcG4ngBpmxMrFC3h3Rmb6k0exXl52mBtvuavHQDMJB2ocpl3XU1ZKrHFgLXfOema5w6ey8COuaNPTgjhoP4wFzUWZ2iCikOXRNpaKQYghAAMbLheocXVArOWj9nLKC5e4bBPvkw1UOiU%2BO9VCt8FrKhEOJD%2B5mXXUSmSwldml%2B8VXbEHovJrg2ZIiu2gs1uVV2M4jTCz91sIqkVLl7BizcsD%2B29S06gYoJW8%2B5lEMznU4%2B5rep9c0sSzjqYVjOSAgjv0vqWegZfCQGc%2BieJEUIwAujm7OyplmbhZqat%2FbACXvwYETeMJ3r5r0GOqUB2%2ByNt96YVLAgCJCEyQnT0%2Bnsdxc24YDlL4FeluIRWLL8LK5Zaq7iYwVU2yMVy2K7jjoSwDgEzjavmB636%2B%2FyLkCLhnWmYX1pfdEyYAsCH4k2%2B1Ap3mKqrcqrCkE7mB%2B1%2F9hPm%2Fm7XXo7cq0S0MhZbEnvvJLuPwDiFbb%2FXZOWotL8h6%2FkvFqTbjAspAGnfGgnlyDt9DmpHCAs5EcoBrXQhCJ0uHgc&X-Amz-Signature=9fdab83c19b77dfc154965b246b26b667ecb61e6ed304efb0cdfd0bdf3e685ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
