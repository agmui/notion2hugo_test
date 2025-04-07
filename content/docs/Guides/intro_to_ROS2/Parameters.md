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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXL5IIPR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn2hyTUC6RtQydkighZLlwvog9VI%2F3JvmhleWUHjpRUAiEA1jRCfN%2Frab6VzOYbWqIQnRKNcu9TzsaHx8nvzlZSUlgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFSuv1KSI05Yj9yu9CrcA%2B1FlNev5QDPAx8Ssjh%2B0ZQpGaalZZjPdlUPq3%2BpEAMPWWFfZ7eZeJJsKG%2FVIoDh5Tst%2BOc6bNuJgjc3cu6%2FemiQN%2B%2BjVVjfIOwv2OVZ%2FZ7EAdNtj83GvXa%2BRvtQOQnkzzH2EVTj4tRS%2FNanfTVDmncU%2BJAwCvB6YpR6jw6MqQoChZec6v4rGm7MVL63skKdwXltZ7J%2BoisWzZXJJYRy6tnRHILf9%2BhwzdZaDCCI6Z9HPQ%2BWRH7CGq9mFpUbz9r2Ik%2BPqhUMvTVrsNY9Oh5YWDqI6aaB5btiK4YdkbHPupwDkDbx5jP6WwBOZgyFUuBp3g3NOh41GxMlpNY6ILEfWrsDPnGuKNsaBM2239pvtp%2FWfq6ecHYr7vNqDf%2BO18JjNOw52nvjgDPJ3Q0KZDz164GY7ePJA23gIHzHu6nC0CdnM6SW%2BpbZde7h5dHsiBml%2BaHMN%2FO0rtJO9O7k7wtZZbkLWKeujYKBIWhJ%2FCHbynyOletPRwHMb7xC7YbJO48KmVeSnnux3DSECJLt8lbup57nHjH7j0iJiVjAtB8b9scuV0bqJOZTaXiFTW3wRTjNuycLg%2FI8fi5%2By9TyiLYVjVtXu4KaLqNU5fwwc5CLfGHlapDrNvuE%2BnRCEHY4MJPSz78GOqUB4NCwcf3PItI2ETVp5tznBc8p7XCvkBnt%2FVV3WU8%2FBRNxGEjaVSpn0vbJjTHRQSkq5hWz0yYB8Aa7gwZE9d6xzBJ7Om3LvozhphNTA1rvKnnVz8%2Bq15xAcbznN5Fw4%2FA%2FDntFCVAvrLWBxXSbt3geYmBo6M7u932rSdcB2bf%2FGei25rHavBgMDBs57vQsYb%2BHvU3%2B8b8%2FAQRw%2BAgzydZaLj2lpEWh&X-Amz-Signature=663bc27b62c8bae28172cb3dd931b5e97c84e15e2f6e6824bc67ffe32a05fb07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
