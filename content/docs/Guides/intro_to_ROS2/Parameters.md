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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFTEGQW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5bsMK132azITDZpgklkEJBRQuuDEHA%2BoxSE2poDTymAiEArIyBhTeZqOA0dTEeqEfuC2bkdb%2BN6y%2F4gdZM5P9hPCUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECs585Da55smpHAqSrcA%2FMq2gt5YfaNIj0Qj4fkqL0iNmXIY6mVyHKKFLoNwCIPCSLmjHvxuVqZaZuRQLrKs5%2F73MRgYpsjxOKFVomNk0CDwTB8EjQFRDdNUBa0%2BE84cAC6KB%2FZpDvIwNprBJ3bE%2FgWrMHXAJDb8XEjas8SO27fleOIkH9Wy1yrs94dYtsXUpsX2VpYXU6vGBl0jncAZoYMKZ%2BaWfSLpuPnZWlkN9W%2BKq4xMswBTW%2FCfqxapF23zQ5iUe1w8Kqeo%2BNGxXNdQt9tZplGpM6jyjhQvjanvn2Qy7nfuwonKoUBD5l9uA46ucUWAU5Mld3jeKUsbDakkqPQEjMHAlvlkWYS%2Bpq9IQ7QPyKJzkC9A6ij68SlCy3BxfVjki72%2FVAhn%2FqsdpYsRFdFoY21TCnTowJydLYq2W8Zabz7YuKCNyAsJBLHEQ5dHvvW6S2chwQQdpb2tY0gGnsHgczPyo6DHIgkj2FhVkMPRv%2F4ylflOSui%2BAC8A4ZThgN%2Fsku6Gpdo0xrtHnrR4JdsSs9YLL5%2BTjzYNgBeekqCtVPLAvGqvhdIjdixSzw06yDj2I4OsqqIW2Jz0H40pK2lDeM6386Eomv0s6hAp1P%2B3FlD%2FlERBKc7UaDptR%2BcKkBCJp9CJUv6ZbJfMPO7y74GOqUBlTmkGp9DSXJlmzOFPw6yMTCFhfdzsawNJEVGgTp3IdyaYFlJDCXuMUCAxJM%2B5PMjSKdlnCP5aq%2F4KlIvD6zhcI0AfsfBIQ%2FbfnltGV%2BGHBiAQE4BksQRKPf0b8jrjIxBOUu1KqJeMHHCTSDTjgQYzu2BvXh53eI0mxi7GWzWU1T6r0ZFrEfc72I4Ol%2ByDzWMV3qQ%2BTHWYk81vGuyAGnI6Soh1j3A&X-Amz-Signature=adc7f15e6be17a74831ff42a3a579feb80ac605d62608ac3fc0ce4664e599fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
