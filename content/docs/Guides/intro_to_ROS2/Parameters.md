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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUG7IEQG%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMD3vd%2Bs4N1LiR77w2M705zzRkc59gvWHfy7vM1xKaCAiAQN0uLg%2FHZtHpNQYd%2BCEKK5nWxSgAk9K1nBRdcIiM8ayr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMzujCQiujWJRDvBU0KtwDuTfBCfwcH6mCo0Ptw23hD992PYULrT%2FeoX7Hmc5h3BIYs8GMpZxkdDk8hD4kaau%2B0WQXL4CVKu15l4nC61tkJWtzYEO5u5ly%2BH9nJ1q8kyU2TF411kCWmQdd3Wn%2BBEPGnbJ%2ByoJraSI0Su2%2BodL2UWGbHHmU04nnYCYnM3OE%2BdJ0Wkz4DPga%2BebgGH0r%2FwxQURbKZCxTfsKef2VtIzJZzW7srj4YOwRMCKbPW4OAKyVvQBXYxVU4SilFbyo2ZVWMVC625%2By6U8JSQQFd1ixBb3X8xLl8H6cR%2FqNR5O0S7xkKDYyhpL%2FqiImEx0sYWLJbHms6Qp2AaJGyBOlahJKZVyzoijBvjdWOJRTKRGkcGQlhQ34rCNZ8OjEwceKsViubxROS9h%2B%2F4SdKuKA9goNIRFmRp33%2FZYAgoYN6rGQn6UoRie00WDZBUmuP98zRWIXWPM4Gr9xi3%2FO23SR%2FqWzBd%2BnNvTK%2BZfJ8H5Kn0L9Eoq0X4toHGPpxfg9lC0eu5x8l%2F%2BFoLIIr3fcPhm7xlcpQNmz14hTvgWgoD5a2kooO2KAO1oJDTjGmgfLs9kuzrWbQVee4aFIfBbIdH%2BM%2BnKaEAr2LKbSv60crXI6gDFEqWUlbq5URBFpxmASQYmYwybORvwY6pgFpnrmT5MRWuw351YWq4oZbY8YUzJTWRWqEoY%2FhwDJGrShkM76KRJ8RcRNa0w%2Bd%2BrECHHHxeUZOfU5ejJZTb1U7uCO2yVrQACTmcbht%2B9Jdb5XqKO91ZCfDkLRp4R6Es0HZUmsvTJ9J2dtKjmB3w84F4JUTymr4pAwDiCGw4MkKOQFzBlhsjBRLzhYD5eEX6s1%2BuRCMSTmaN%2B2nbs5kpm%2FTDDAFGv2f&X-Amz-Signature=7a3cd0d4218077de9f9374d070091931441c0b0cda27385c09596dbaaf809685&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
