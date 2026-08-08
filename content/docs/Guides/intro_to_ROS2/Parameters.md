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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBMGYTE%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVeJZ9ih0%2BNwJE0y%2FrQnvrqK0iNJswWTLPJSgKQMivQIhAN1o49nIydt6P4nL4nZ6Hc1IvSaM7kIT6Ma1ISFmXsBjKv8DCGIQABoMNjM3NDIzMTgzODA1IgzO7swLqTPMLFMZ3J8q3APJdNdAqm2MnkT0KH%2FjfYlbXiZXe1rXoq8Rfng1eQOHN09jJUZYXtrsJHaG1JbzQ9l2X65Gl%2Fr105DuyFzzisQ3qYTJ58ScXN6nEVJxAnto%2Bgn1fBlUiXPNwSWu0I7B%2Bve2fXPV9oLLln3qMh%2BItRb7zI5lMYvjbExMN8LX4sLnFGZDva8mDwKi5maCJWbS8iloss2C8iaNFNkhV8BV07KvXnaaoNccUzGhG0uZQpHQ7fm4KGzxoUn9%2B1kSBLfIfpJhnMZn9ipRZcZ5KpVAX%2BNoxled8AnVEEqwqqfancSeHwF3sMMmjw1%2Fwl2pij%2FV2Wf%2BfHhWg4sJ1p%2B0qlRGQMJf%2BgBPEQsYWhiMhNWtwyPOvyfE3QUJdGMuyn3Kl%2FMLNVh4Ov6SW1Zvk8ejI6mpJzZoUUQu1Va%2BEB1%2F43hmDrxL2IF1PeorOhGRJn%2Fdmx9tHr1Ep3TSsMyYb9Z5k1CfpLQS5uzjnxzoBVtAWZCYzoqQ6LHFcIsNJ6NZVvCOtuYYYFb10W7%2FOpsDX%2FWIWwbCK1JGxVT2vYJMF2bI5SHIkJf272u3OGM56KEoTRTRzBfWrskLFOaAfkx%2BXSAh3NLUyFzv7q3ayWq74raJCALgZH9GCI%2Fm7tip%2B7njJwfZtjC77dnTBjqkAY4iRsomHKo%2BEdA1wqOOlGYOMXPgx4BuZvRmSZEpaDNKezdrpSPucHp8XBxx83U5XfiJzHvZ37X28CkeQeBi%2BnEy0ZLA5aO5QqjP05wZeX6%2B5U%2FyrvDY%2F6LL%2FGqckPHFQWUFE79%2F54naeQAWr0Xyf32usNjZ%2BOx7udvCJf21Rb%2BaeNr%2BSPWb31uSc3Km1ZXMgPBaJE30pDMOF1Jc0pVlhdPI7tqo&X-Amz-Signature=4c0c36d64c7a9cea670f8607418c4468d634769a7fc25ccb08b4c6374265f2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
