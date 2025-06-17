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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYPMZUE%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BRBZoteDTIGEZUi46zLNvegr5MIe8So751XjbG2y1JAiBgZYzYbre%2BdUtydsq9Tq7w9V9G71zwO6r92FQ%2B7nXtEyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM5dOBMeriHAIsXZkvKtwDi13oxadVVlyX1uRwoRraUGjGQFKM3nEzLfY0OaqL1sEx%2B4Hy9q3KfOb5oOBJiyH91PfK2rnXQl5v1pJi0fmYp1I6tTxlqJ3M1CHJDb3fsv8mUrULNbyKzKXsesgnd0sJlNUbF6upIkPPV%2B7ozaG8OWWQtBnaC9iN16wIDSwHPXeNnGjdiIkF2YTxaIO%2Bte0732N3sbzXB%2FopSZSwYwcGnTLqNQ7C8ERxM8J03gycJrFZ5GS0hybgLs7rwcQQgKmbJ4%2FwPHL%2BVsbkWNY7AJ4YtmVHy9mdaaj23pWP7EoMkrP%2BnW%2FuzcZUiDi7UAkGw%2BP6RV9TNzJTdvUkn5S%2FHvJGAJVEEjllcste950snEK%2Bw4vgiAnbQOGon4%2Fte5M6nwfpmEt%2FqiQ%2B6d4h8kIGKxIjRu3bUqxBpxuPsbZbcDyTsPOzPfleYD72BdZxOGqOnFKOkDES3TcduSM4BPPMYR%2Fqv6HzqPYbGgzuug28l9UxoN1AIzJkskuIUmSduBpEYgJQjHNLT%2FhApgF2GWMGCuWiZdvEOkMWDUzA4d4mcn0YaBNSD6E5dv0SE0vCnbR19mcnIwgkJSB290H1T7i29W%2FLvjbRZaVFYTlf5Q873sayGBSJ0j4YNZVug%2BvXyg8wnsDEwgY6pgERtvFVv3FZzCTDjizzeirOsCmweP58y5%2Bj0xL8isHKcqzf%2F2aIZ10aDWnLNFO6RrDEzGMO%2BN%2Bf5HaT3YxvojwWBovZuT1oTTv%2FlWN5DnnH4WluVK49wvPxhuRI%2F%2FQxNne%2FCkSxc5iW1h9A%2BD0ryNIGsI2vCLZUL5ydQmSqsQClRoEg6NNnxMPRYV8QjAyWIWtL5IxWsud4Wv64SbqxC4SbC0gKuxJC&X-Amz-Signature=3aabac9ded83535d9c1e7a0f18abf4d1aa81d714d8b33c458cedef20ff2c8bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
