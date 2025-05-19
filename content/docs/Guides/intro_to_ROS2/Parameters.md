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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O46CBTX%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvZRQT4z9ZuEkt97ssrS8yIIY%2FlCUvgp6ZmhpVMd47BAiEAlsf60xlhDe2L3FShHT97aGd4PNgtEsdvpQr%2B74KjQysqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsPbmrsIlO7NNdvnSrcA4ODBSzPDSzP%2FyZ2KSBHwxoq5QcP8guATLl02N0bKTkZ6iYgYODh%2FZPhU%2FDxaYgMVN8rUuriQ%2FipB9D3ia2QvVHiIjIHmM8oETP58byysj8YtLzNWCIvkNEwPAkmhCO%2BQ6iUnazn4u5XdtMOUkVf6vvISj6wRtXdffjslzBBIRMTbaa%2BTYzci84QpFwumsLWTZZWlmPywEdAaVBB5Xg8IjQIvg%2FUoTWMvr%2F0jAxi0BZOhWU7x64v%2FIwNwIvX3nzsG4oJEftBdMmthEseBfXDn3WsiZk9Hcl2JfUYYTloC5VQA%2Bcmt9f8QNrXEj6ynhckpFIO5zi%2FimNCztzm4%2BzpRR42dvbHWHCLrbm1ptpOAbZFrQbn4r42KyGU4nGId1iMNCmjWsJZo8WHzBpWj7aXm1tCMKb%2Fi%2FjjGE8TWEAWpDh1vH7xfJu53xRCk%2B1GsLFvTNf9U5VlmnkPtR5IuoGOxVzVaA%2Br7jMPl8PIjWTfnD75%2FblCPAj2vMElgnCFQ6Zwp8nHmIu6D2yR2LQ34Ibl7IIU2q8aLBLtWeJ%2BVD0WlLdTazTZc4%2FKGnbGB9dSaJ4q6aojGbBlFMT6zwk5dg9kPQTFdQHcMHSILcGf%2Bg1uvG7d%2FO0nxEhP2ARENVpPMMDircEGOqUBR6CWm3oAJ082zBktE%2BNLUTE3t08PQNjEvCNaXrmVreP%2FgXX8g5tWw0JyVIN0G3f5iyhowMc7HsjaIm7dnoJyqUYdGyNOg4T9jgoPTZpk0Bv2In9iz7wcojun%2F9oBJaq98mF0o1I874395FpLUXz9W%2FMhbgskJ9qnXKg4QGtcac35bSCnoz8hvBKRwf4hS9mJMy%2F5g%2BLcgb6luLqye%2F7%2Bc3kKoeIk&X-Amz-Signature=bb0b2c2fa3527a6914736442c9a7f0db445f5c170e89871d0a117de43f0f4680&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
