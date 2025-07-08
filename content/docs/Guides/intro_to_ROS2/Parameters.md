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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFTSFWVM%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJepz6jV1pvZ3Bwqj7MRQafgZGRkMn9X93CvOf%2B2usQIgGuTXFdoHmqYRras8JLwpM3t6ZrxojbUQjoa%2Fk41%2FwksqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2Frar1YYkMYNidTyrcA1WOEXgt%2BpEIbwlbCPbN6WC6oQKCSvRGsL4xeRxqCV6e6wEamGn1w5dBPM9yDoQKQXUyQb%2BSltvXFQrqahSySJmGhW7rlfSmvWz2dIEdvO54qi5D2MzXqi%2Fu2allGdQzxkToVfKjsqbD43x01IgeFTaiV3IbDJKe7fdWYiAlYOoSnkx2W8ru90WtEbPbhkJ0ap%2FKXgvfwawS0FQIxE8r2PMMbk7BF6ciKirEXbgLV1gxjplmCYnmzsCs2jXeN7TcpM9RwnMk%2Bf5wYMpwQcezHv2AfipcY3kj7YBUFOnMqMq4HGAgnxb1r8CSqbu%2FIz9s12XgSD9C6CRRwi87LzfSjhfEHX51CF0eHS9eaGh9dCcv6sD4YC%2BfDWSKQw5i0LG03DpgolczLtpyePqtGr3M4h%2Fw%2BT5paBHhHITgfPurYpSPgU7hS5VJbwcrx2Qg48EGEWia%2F8VFote7Ycu4ZHwth8UhfkuejJA3DmjZVKAAFAULTbmlqqGMclrePm48c3lglpxBoKbgMy52lnMnMYEdrIymxOGeJ%2B9KE7wyFP%2FV3tBlLkgULVqZzaU%2F2G6%2Ffh72c%2Bs35mIWrFr0L3pT9wgifqZ5hDC5kNVXeCmO1ZevSTnYgpgbyicjLW%2Bgq2oSMP6mtMMGOqUBi4Hk0c%2F7TZXjQRzjAjjV737oMbP3a27Jum2bL98G2T4euFRzor0gJjbS13ZxxDTcUrTTYhYQMgTVEWYiEWgji2XxOXE46%2FRmDOInpFquHP7VfmDVs909f3fSMXy8P72z4mwOirSw86E9h7AnQbeekQRLDdOxYp1kw6LJvWxC8TgahetX08vlmDEjLPx5XDXCAPNAzh6QeNMH3NoeBYZinMYdwmFB&X-Amz-Signature=15e0b6d708ff72e74c53ebdabfab744a63947a0613dd3cfe954d2da44523e3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
