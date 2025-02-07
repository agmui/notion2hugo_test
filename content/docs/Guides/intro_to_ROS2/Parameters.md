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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XQVAKD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEALtLWCJY00zwaT2FclVU%2Fl6adHv%2BZNPF40LY33xs5BAiBbi%2B4Qqq8DFVFGGCA1cIR%2Bnx9%2BY%2BCcCugS36xBM8VJGyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMub0OeXGEPaQdAcw2KtwDkVmSxZq9uV5Gh7Uw0LFVr15lVdU%2ByPCIbDO2%2FasrS3EoXI1DkyrF0assWIVhZvY7%2BKyuswyRP9Lz4sZfnBxP%2BsQiN9Cl9LBfDb8LRdoZHq7LbCo0x1pioWWSj9KlpMEvHL%2FqchGW1CDYRNlrF5h%2BYPl0ake2gGJom7lx1lqYsh5cCdrpGQ0YMJ1p6pZnv2Wd%2BGTeoq%2Fs68YvHpWw1l7elK1nJZWJ5rfjz7C8VZ3ulXn6q%2F8Uc8CAmivCKc8n4FWAbOMBWD1XVaKrPIxHfCpgM12jhEAGk4XRypkP8y%2BYKjbJAHSN0%2FsmZGJ2Hchg5u6Licrn97riPtEOAYgx3133i1YLxS%2F0ycD7YU%2Feq4beq%2FkBQspsd7SGGFFwZwIiUk2XRC5nZk%2FkaJidHFd6zOX1C%2FCysEnS5wKYZ0uLWUkDpIw8R6aSLyb2CYxgi4K1J6TISMjSKjmVdCUm3Og1Th55Wnu7udBey0h261sF2X5iLu5IvNgKECoNoyoBasCoKg7K8KhhdD%2BTYuTz2JT55c8dde3UUkj1veQmuyr37vLB%2BYIPKHGfbEsbdo7pazQPJitJ8Ra4IlZiDF92CSbh8YzFcxKqAav6xKlHwO%2BQVfUdAspuYbuLFQKBXOuwQTAwsoyYvQY6pgEKn7RyZKd15GAdwXuLVFnierD%2FM0P2pqnit6AeWb7dwxdX1KxcPzRsD2Dy8T8Clleg%2FTKeZMPTu0belj2JClBsLux7nxR3KrBtaYQQvIlPSiPisbcF4%2BIYtjqsoSmoyR4XeTVI8ln2fdUsn2MM50wE9S%2BcUFjZf0Wmw1L9DOl1UoIHuOVXSRw4oiaqH3ZTHNra9kYqINPBilGMGZixDuwxxKlt7RKS&X-Amz-Signature=1f1ad1b8942705012cb39692077f79a9ffb0b2c6490b08b3a510ccae7a0a58ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
