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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4P7CCGW%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAs3gYhEQbafLGKwVMktNKZa60GgvGuc%2FIIpGKRAXZJQIgMb6jQgNdtrUBcn64QvgasIgDm7k8gaVktcq%2FW3y9XrsqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJimPoQf7Gd6vjVuiircA8KFPadd0CUwH0FO4p3vA5GtT5IqX%2BqJJ4Rk4Pyb2gvhinoXQAGiuM8ppJSw9rjZlzw%2Bb0h4TW%2FB9mQPF91N6nzhsaJUZwjvhuZRtVaxXhDrx%2F3Bx35CM1Rcv4qjfE4GyufyYlrDVCbc%2BPnWxf2gII%2BwzR6iyOHwiAPVTd8A29eOQ%2FwXep6neNkWWnLb4oGi9MU8bEfR3I45g0cc880BQO5St5nk1fEIee9c1pSM07JgGOJ%2FG3HFWT97DI6RFhlCCpo3A%2F2%2FLJEpEG5Gl%2BCCMm%2FlquyIEn4%2BgaRgW2poArFroDGeUaGBNLQ1oZ%2FI19P0JH91pKcEwm7Lg8zMbI8C3UIowo03PPFtNmp1AwGQBvuoc9hM1ocbRKzWHgYTQQzik0dmwEfneoUjyYeuk%2FuBr9%2F9Ej3GEUF%2Ff2hhI3loiniMAmuZVvUwi3qOIGI6WRvYDGRv5z5WieVmbA2ao%2FbpNgaa%2BKa4FFq2u%2FzEZLueLdIeWg15i%2Bm31Mf8iY2lMKzJtRXLFGELpbE4XX0KaTtBHJpaNLIIe%2BA1ev9eIssKCzd%2FXkJHo%2BaA%2FT42t9DfKFNB7T6kUZW76l6nMfZqWYmiI5Wuiz7DMJSp32a3Bp1ioWq9wiKOltmZ8bElJ%2BAhMICI3cIGOqUB6NGhfE9%2FjWb04UWEZJEcgQuLlJ4%2B7WKMu6MXb%2F8kyHCOgR1OhFpZb8lCmyH6MWQnS5iE5pMrrMXI4g%2B7vVz0BA14NiZllahWh4Mx0opq3%2F2rz5Ar4wheiL0H9TVuMw14i4NI37QIQNGFWJQYaYea71vlKfWFk7ZvyeyJfAe69gcPRLjT%2F4tCnby9eYmzqo%2FTDobUJiH%2FDNKBe%2BOfNQZRtO7Je6Bu&X-Amz-Signature=2f3d1e351ff353e944084118237dbb4be8889cfbaaefcc51d448c868eb327d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
