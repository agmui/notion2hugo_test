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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J3Q5L5F%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsDC%2B0iYqyYvZSg2MaqkJ0yq6I440YQ%2BKG6oU8y%2FLsqAiEA7lVgL4XenJTK0hczm5UeOrCAkdpvzBBU0v%2BdaSEZeK0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMjBBKvuay%2BtRawpircAyaeIdUdl8G9EFtew46Cklg%2BPdcsDwWXj1IxhlRkhO4Y%2FO0sq2GDP9S%2FEQL5ZNhFuxlllejLuTstAWOs8PEXEYb%2Fyv8u948Gd9vVTWHr8uSTEn7KbLWqWUBrqf0lQD8Foo6JZ0XS0Xv5NX5%2F0PZIDb%2BH1VdRx7UDDIOVB5ZbpJeKORVFajuKLGP70mXbpHwWm3RNEjLdethujtTmy21dGzJUSy%2FgDNWx5tqqSKPosuQ0kZu7yuk725JctXvW5%2FKEKIMkzWVxg74GOadl2tRGnwOcPaQvfqxH5zxtSLSwIy74E1j3vD8sbDCqepEMFGqmAkt2xvwteaJRo4pUF1QWqFtcIB2y2ACSZTa6eDkhTM61Cvh93P0%2FJv%2FtP78X6qUR1CIFv51aWrNDv3FDD4NQCn9uK2v3QM3deezmVTnqyv0ja102dS81fR5DaNq0KQ1hinA1P0ZMw3IOaz8AJMLeWjHAbJ3FJnxhXuJNvTk74IZQrQeGCEvRNmX3QyEouFijLKDACmtcgiq4du74joKVNPTfi72CC0FSwUc3ygqnycPWEda1FxQ%2BjoXHfKiooknLsybVDBAr1ngsMkebgTHiAqKvEcqvhpzuTJ4ij7dMyyBRxY%2FirfGIS3ZccPzOMOej7LwGOqUBjiGonTVJF7ZE8odj5hefZSo%2BY8qH1x9HI1w5jsVdWQT6TdDkTiinfKfdTVIEalw0bybX17HNKw7e2jLJY9JJE0G5RHkvvXdH4xvBt6ZijtJ6MVqcCxf97ZonNTRvJ32U01MYQDvEtzACkhTs%2B6bck6lyJkMFNjphQmKyN%2BBthgTp2GF4tTMOIJU7YRkO5056sKlzJXSIoKPL9LiBSwlXDroIfd%2Bs&X-Amz-Signature=c03482ea5efe99e140f01959a710628ca54ab7f522f743ec316c1504dd1cb10c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
