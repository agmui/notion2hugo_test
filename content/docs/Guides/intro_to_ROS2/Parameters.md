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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I54AAX2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7P3JWq6YHgniLy6orCGqIpCV%2BUdcUaZT%2BzaMoZyZb4AiBmiPuxbMJwrWfRgbR%2FW5uqOVeZTMbO9pvxnCzY88pBdyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMRjhJwhC329WaKKLjKtwDgs3Kabgdrr4s1tlTZMLxnvyLuoubdv6iw30pll847aLx2pVeey9yxD4aPp15qMbOMz%2B5S%2BZTYs10tNWlNs4DsGV0OPhO6jSVxjth437ZbRqrZrDFAJMN6YJV6BdzXhMmLRA3JL0KF7mlOhXAhsWwF3QY7fWBj6hmZdTAAI1T3kOjB%2FX1XuaPcutTYlJsjtdwbXhqIXlF4A82jZpDlBUXIjHf9jQSjI3Ut53Fk%2BlZariBihfmxJcSOLcCTNyKt2dPa%2BaMo04CYIX7Td4TFWjLn0ihYOE8OiOshVsbXw1PYvs%2B4ybU1C7ZwMRmwYx9SJcWgJa1Q6tGRa93vhSniX6M0uWVSXxr9fZi3MQ9FgPD5qyJ6o8x0q6hbxsrHsTjCY9HncZkNuITOFrJpDYuUnrGn%2FCH1jgyQoYNjQhtzijvEZWAbfWStgoL2GgHbjMI%2FSGXXGYKryaxcc%2F3x1zIN8sDKqMcA4nW5X3LWOQZJaT1q2Lch1vzZH23efFGgfxawIeVd%2BPIcL2Nv8PtQpGohjOEkG7AGiLsLTPheFZr7NcerHHnas%2FVidIRGpo26seW19UdV7vcHYWiOPhS3pkaVe%2BHTK9WLH4BWMdEMEt1wxGND0C7IpwvsIqNlk%2B6SjAw%2Bu%2FCvwY6pgEsrSRypuDyydQ9RpWh7B4pT2RbLCJaPXwEl8qHDU8WIKL%2BDQmX0KsNTSt%2FYPqhdKmWKop7z2ehZjwsnNPwLI1cC2TH3pp2%2FQjQngRJd7mK2FQ3NIKhgEkTFO4IfOF2%2B3u1sKvA309HLDQYYu1Upw%2FEXjMJ%2BsSWg2aP2kh2LQdRqOzmFYIw5uDNlPjwOeODctI0Ft20SiglsJ3QLvr%2B5MU7tQZ8a%2F8t&X-Amz-Signature=d2c0fd4e9da32845b5f1f456bd350b51a0dce6f7309e1f21ba68b1fbfdab4e1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
