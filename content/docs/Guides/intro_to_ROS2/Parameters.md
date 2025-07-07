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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTSIYM65%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCP58o6AYabmRiR%2FcVtgcUSWIAhkMEcgWklAXz1ghwLhgIhAK1nfd5OeVL%2FeQhXZyW%2BlA4O7IOwfdBqaAh0NzrGDaK%2BKv8DCG4QABoMNjM3NDIzMTgzODA1Igz0Q0MsfiUmSgXAYhsq3APfUF4UWG9ifvxRIxc9yHlYPn1e3i6ikJfCavSbpZKfNMpbPccWPvuYKokPRNSRHhgI0ZjZGdTPZqXHa%2BpwiaiPWu1RT3J8MomaaA0CBWFLvqGQ2Zh1yG1I6s410tkCOgPOlSHn8lvr9dopI84c4zwJ7%2BmonH2M1SllEb1uS98cQSyLBWVzACf846gQb9gTJ0C54NM9YfcMuKAL4EO7sOaztElpf9mnfE7dEM60d7bi8Oj8kFtzeAedMLHsMHwNqDVm7Itd4aRBnab0iPhyVT7k9IIAED0gftV05BiMzYD%2Fsn9XlHEPm1yZ4%2BtYGLmJR5inR2bSX1F43aBBB1Ea8cmnjxV3QeOWRFbwF%2FsSVvLnTHa8NrelRb%2B8mKMJ995kl7eI8oJhX5RY3uxPucUe8guov%2BBBeKOe9n3XG%2BObA4ggjFijc1XWev4H9ygOhVBSsbLkFhR00PvBlJQdQq7c8vwwLFyUAawRrSMsxHhZY8H3zu3yrIUtvam79St7lvhfsk0szF77lVmiyNOSHSqlEfjb5LWbD%2B7kWFrhWnJOlplxJc5wufbKnt4JvWBalszdy4gLgB4%2Bj9cxdI1mgUD18fuMHsH2TkMptiivww7Xkkq17vTZrTZuO0aQnM1HHzDGoq3DBjqkAaAZIAljfDOrGJWSekzcl%2Bz6XH8XrqyasYzzo5w0JH%2BYpnsCbcE89KlPzFvulIcgGINizjhOe%2FmQH5fEFl%2F0p8631CmF93JMctdxCy79A1VLO%2BbUwUMsNe1XNamnuWG7pKeK%2BOR2z0c1aiiHr1A8%2FqRfEscEzaWZoIZMvtasFZVqVuo3%2BIFzYRH75zEbC6qyKoJ9OFiYDVHN0NMubyXOxW6MVE6q&X-Amz-Signature=168e11f2d2bb6cf6753f05d8afda865d3fe7f55f76f8d445c89573a0fee34757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
