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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6F6PB3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDAm9W2TpdJDFJar0RFk5CFE8HFXgq5SQL0G6Yl5b4kiAiEAtvjeqD4K1DY%2FyZeOc3sbo8G48Bm0r8Swves%2FGWifAPcqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0gXf4YDeeTdWERhyrcA9heKLiaPdsPF1nCc1pP6MCUMOrC%2B%2FKpXXv0LOPLHTA7MbTYjxuB2HdzJOnlJtlHJqP7m7B2rz%2FTQXy9GU7P8528tuhg8p6%2BPocXYKm4zJve4aFLiwP6QQGAeEggAvE5t%2B7qUVewP8fXY6qlEZNsKk5GjdpZqK65%2FdPZWTMGZ%2B6yfxs6DrAIIoF%2BAOUWvNjWNrvaZDTy12H0E7rv0vaK0kF6KO%2BgBs3ST9t7tsBuXMAudqMxgQxoePDfEnI8oRNJuVQCgzLlZHTU7CzS1RjMix3U04SME2ezQ%2Bcu61Sjpl1frt1YQ60QQ8yUnF404wQqfDYJrIbEXmrKYhUusyHMag2ITDAvp8sKjhIWu4%2FpQbqK8jTdtZTnuzZ1FrAWrU84%2Bum4I27mDOV%2BHyxlh70e1RnMvWX77eZwXnM0yJZxgla%2FtHmC%2FScMAVLk8eSQApPkoJmV%2BhA7vKhXX7d%2FEfVY79GaOTdUX3B08QswyYFl1uW%2Bbt6VPO83evSp4mQ6gYL7BcUst4Qg%2Fx1R2cCs%2BdpKAu56I354HWgS%2BzFyCjLUzazioa4U4q8dpER7sP58Nnswb23O6eo13s3OxPRZAjf%2BmUJCYrZSiY6eGkDDCV6%2Bl0e2%2FyTVUZf7kT6dtDyRMKarnsAGOqUBXCOhzjh3hhEytaKPsF%2FGYteONXk4Y2CaKpQg%2BKJqdqdy8bqloMJZFiF0v5DizvWPih0Q47Zdti6SnJk51cDFzS5J6Kr0GOi2ZJy8CFFC73mlyqZ63AvBVdrYqNuRq%2BUPt9gVB7Nr2AHPI8NLyrIBUQ5qLl621JNubEcjqe3%2F%2B%2FWFv5e0qm18BImsUMdPnLuFjMv6fkfCectIiRb5ilmQnslWjbly&X-Amz-Signature=bcf98a63b1605260a6888cefc3b5e9c1ddde1d49051240690a97dd267f7a58f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
