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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRM5Y6PP%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID43SF6ykHFD0u8sU0BsBu0aH1JjDfJK64TD2zLt08FrAiEAtXNXe0DvqZJ1sQ2Rm3aC4gPw3uRG0qkr6X32iHzD2IAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB2P0D80Z4xaysw1LyrcAz0KW%2FTE1hX5y2XQXlbEWrRjzzovORP7p8juE5Yk8%2Bzb0D1RJM5FyfRc%2Bh9L9hwAcF%2B%2BXPJtIj1H7wZGtB8jJV0%2FBgChzJ3KmXtEggn4I1TXnctO3%2BEVEwMtmCVO5POJPn7%2FuVdyPv4284FD2Mp2CVv1Sg40vuQK37%2FKYCQ3WnftcVwggkemhcuWmUhDenSQZVYGLqyOlhJoRG5H0SWhuT1Q49gDXATs1wjFpsYCEdGvOjyv4HZ2Rskgj6%2Bw28NMXZLnJEywzuSTtP49P134IMITctQMwg%2FVjhJ%2BnoXnG3nFZ4XXzOQOYBcrHeIOkLtovA1Cefxo4iRylICJvFITwX80SF3H6K6Y4LVLAFxePE6ObEc44tegvsubrBLoFm%2BeLOE15Vr71Cy352g%2Fd4H8KrHdV208lZ%2FuUbJsZPYYsnba3WCmwu5pQM7dVrla%2Bn1QplxJ1P205uViVkNsFSEfVoK94cE9JgKdK43RY%2BxNonhkEb23QZuHdlKkQOAt%2BEEU0xI11KMd6S%2BWdJJpd92NfKkQj6SGjVyj8PqYAIqwZb10EoZPp646z%2FaK9niXSUazaK7ldoGXIjXeONb2hkTXdMEJuPM4JtEbOrMOU4XQUwDTRbkY0Z%2FUza4S07SkMJievsAGOqUBzqq58D09h42AOWEYu9n0CxQnzkfOKaRHqpPfpFeCTPX8xQJoigM2XLf5i%2Bo7pM8LdnmcqALK2UU5iTu%2BXn80xFBhAgneWzM6bN2XsgLer2CnB%2Bno9YS%2BvygQHJeJpuMiP211bfCn4uToFXH9WvpIV%2Fjf2zYFNF4tWKWZShl6nAjg0QLJ1Lw5NACeCRNvW499pWP0bAAXRGjzhsdM9bqHRPK5a80q&X-Amz-Signature=e1434135ce570cf60a20cb06deeae718178abec7ff71613e457f02336283ed6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
