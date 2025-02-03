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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3K7PNN6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIEXdt4E5ApYRB%2FZQpDK%2B7vzlkDVxwjrZ50h%2B9Tak6rWNAiEArFVgXYR9Jg9bKeO8AMoKFTxTvkP2Lz%2FLrLvkBMUvanMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCEE8sOLYhHfZiYJTyrcA8ps0LzINoMaO4q%2F%2BxekBqmv%2BTCQXXnxz%2FSMsUdiRTiWRh0mIuv2%2FgBh4VNneAfIElSaEbpD8v4zRMcjqmHQdRz8lagTnEjGHH%2Bbkj7WZpSbAONamHAkaRlsOQFWONqKlpCAHyYAAI93OnAz26FkNLoG65YoAAcmHs%2Fjvc9TZ2HDRc06t61rCon2yooetltjJ7%2FfSQfsmeFrzW8G1fHsp%2FWxMAO8ud9MZtviE2g5hH4snScU1DwnxOt7%2ByotQFRjaCv5AyzMDtY3gxDjK0%2FDyUr%2F901IPRLtc%2Bl8iYXyrc6Feu5ecmwkw5pcz34yH1x2rRGLQ5KK6ImAxuum%2FBWbxP3k82s0D3v1bOyn1kN65GdWoJ6xnpX6q2VCCY7YZpVhchJQ4aHzu6If4KeAnJ2tlG7j3TwDy5bnrZTGfsuCrFoktD5Fz9pX0oRJjfNo4dQPVXu6a0p320QfIiv%2FywIbx%2BUnsc0rz4WUafQqDCCSiLapcKbFZQFIR%2FlraanYngJr0A54F1Xxyi5Rp9%2BtQE8tU1wxoV%2BQVyX5wmOpqOwZdrAyFHkgVhLxEWmkARfQPDZXAZze8edRc3mkmOUh5uCLRLKJmVnpA7FR6BJ3B%2F0Ij6icYnEGDjqBhCfMCuzFMLGihL0GOqUBNIt4JPs4w3dXaw5x4S19c52Hrmhdc%2F%2BUjnuKnrDCGwXFFgzQunXE78j9oi8aI2h2bht4xxYl%2FKM635XZXAEqfV7HzghlHMCeE6ADGRskaf0lkGUJVvxEcoyljEJixVmicy7ZT3ZwJkqS2dUwK3RR5%2FI8QUUGSy%2BaVO9%2BMtA5Q6YdcRujqnBuLGDhiBeXhP1tY3oAj8w62wZe%2BoCPL95MRzP8Q0Xk&X-Amz-Signature=d7c7347cab38e6e002d5081d8d3846c9dc9959a5a2ff678a975d368b67aab925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
