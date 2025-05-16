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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYW2DUA%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T132244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPCu1lWvAi9CgiWuMbTroSvPvfvUAJBSV4R9VCmvhsqAiAIyZxQPTWyNBKTXtUU35S6%2BKbJV21e3YJJSVGkuwTjByr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMCKAhxlTcKcl9ZESiKtwDT9UQSMfCMqageS7BsW42nxb1CUz7T9h2v64YdE99u1fyBqsVqel8aprzVY4xIWJhnk1n052IVHXIEHGzAFd1Y%2FqOh8S%2FxJHRiI4lncmYuu2%2BMvKbC%2B7LDkJQMq7Gv05grlaUC0DQxgpMM2tWhLIi%2FmGQqpCan8tDqXBuHR7q1qpew%2Bow%2BHLtSoa37spYrT0ImCvnU3ctk5%2Bz90%2BUZ98kymoQ3MEwrWM3PkExab94313FLXSMoSZq2FlapGN0MrW4tdBpb6%2FEqsajoVg8xUak0J3TIDl5CFqJeL641svBuwfmJEVkPp9qWKypTpLoudSQHkKK4C5P%2FUNZjTRRLT8gOjF6Bn3tPeVcIJLYD7SNH9En14LJ5Hag4iEnLoxHxU9qcI3S1mbKDkVY1IGgPeN6BBwPFVQmYVWIaHeek9TRwxogrjF1SLCpcleAM4ki8GgPUSLqz70ArH40kWjDOvjtDU4U9l141sugE%2BoJ3KydalKScE3apXfTaLvjOfu6GgVEbi6663Sj0kqIM%2B2Wf9fo5Gfqmwz8UyNLLgQ7gdFusCyzrSvAQsrB908jO4bx8ZPkkJClezDAMSJm1iBvh99z%2Bn8fcOcxIii%2BKYxe5ZMDAXBYkP5Gf3BbGWJUfNUwvNucwQY6pgHQEkRTrldTx4fj0b%2BJY0gPJYKeNL7wvokuO0Uxz3eRTwlxV0EOjLlLSukI4MqCyrSKZ8mN9Z9YqcAGbPS4DjfYkTRFHK2UURifY1wMWRpU9W6IRc1r6wKYpmsCrEkTCwEZ%2BHHaFN7W1GIisNGCQSLht%2FRarsMqQC2ifhj%2BCjBEF06rfa0MXohGzAHE5FjM963gzgiay9YvkKWrkSXFrX9vMwtdg3ZX&X-Amz-Signature=13979301ebfdd72e02d02bfe2ac7a48901171235d771812c0247396ad3f29003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
