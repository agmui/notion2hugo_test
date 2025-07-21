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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW6GOL4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDM7oOL3NBfLkINBIM6sajChhf6A3LwAKw74vJrlAo7MAiB3qLW1SiDkj1NrSYxF1KUCwL2%2FsyuXKJ7O%2BReaxBTPwSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdud%2FnL9OPpFgnzWGKtwDUK2ouTfc%2BfrZdYh8iqw0Z7tNG0eJJnuvnLtmS97tF%2BJBqbF5EjMLXCiXrzE%2F8ReDO8bQ%2F%2Fqv4HmbaAayqWuCcJYnNteiUS5toP27aP6orRt1uWpCd%2B7Pks%2FSSvSUJrB%2F6XmyOxxrepVktUT0ElCIiUYGvBgytv%2B0dsC%2FBcWixte2fu6SXsHqQlWfsqZ4CrNpW0%2FGFLYdhUREb54I7S0OlICc94f6Ni2nM0h4Kelw9KUv7ZnfEONqq%2B5kddUu8kKJgSvOL4gt7vF9TcE8HeCtdi6tvCRtaxWI%2FpQvM822GXFW2iE6HQJXW49C37CGC%2B2tqYE0MU5q7JzumrNt0uL5oEClX%2BRkUKRAYNnWn0cjnc9Q6fMNjmYvA%2Flpn7rSjQCmJ%2BuNJc9%2F6eQV6cFqQy0hyUupZTNjPfBUdnqudmytUsRYkEUkjYh7Dcz3sY09iRkWAY6M2vdxrmkoayDxzFFrWa5wvLjVWKR96VcnoozCWEJMCVaIGLD1yqkxwNQbR7RK4m0AA9uJR3WwnwePbhfqdufsLkLjV5ZLPS5FX1j5TAkX5LAZxy2YCsunQl64jz6KyXgYpgqS1H4RNWHw8y4bNekeiQ6mwHig3t5TB8C6UVd5eKXUuX2VUOqcTo8w0Y34wwY6pgFTrQpwjFUvHBLeQHJ5ZCAAzSg%2FyqgmhvFVThMN9sAA0ErSNKcuE71T%2BLtd1TDg4EN5e1WM9lvN5c7KiWxKDwzz3VbSonoPH88xv2bXNyiUVZKM%2B%2Fdd4fBGDi%2FlSVvtO3xxacQfWKu%2BQWecxZyJ0sVqJPIdErDzDX2poT61IsIDdlFlgDAI9uLGnkFTdDv3gFQjHrI90qCx%2B%2F%2FQxZ2B61z7HWvIVQ5J&X-Amz-Signature=672536e3d2a622fc57ede35174ef9d2c6dcd8d170ad7cbb4938b8f611fb836e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
