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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B45F5K6%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T151057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAFbs0v2Tz%2BdH%2BcPHzLukXuSgvgKAcP1ImhTTD8uC3H%2FAiBdYa70TfWaSPz%2FhdyP%2Bl7wDtn38PqvHzSEoBgb8ddJCSr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMitxB5YR85FUNpj%2FNKtwDTOSzdpoEJGqhwhQES0wTe29X7OcXKdVCyRHq2%2F4h%2Bb4cznLST0dtjTQ%2BOx1xSDbJqUYw%2BZrJjLYcOpm8yATC%2BbYh2t0C%2BUYDRzrFu4yGrGP8zk0dJ8CJcdUYHuhrPKbDlgpTrXtKKcXzYglRoKW3MHMkqXOn5RFa3GoM0e9Eh3VFFYyzmNTaI4tNZ7Idvp3gw83E%2FhzOF3qnQVhQdfOquekx2%2FU2dvpbtJqSFikM%2BZ3jZFlDGhVegVHqwJXHfwFmjAA0NiLEjXrtWrhXmOVZQgjI9Efd%2FpeeOzkzhHOg%2FnMWoWkUQOYrepWsl38x8eQrxHRC3VmVIG47K5ND2jtsDDJBD5DQeWS%2BP1J0vlZUBNhp%2BW84E03y92PdJRBpQJw63x%2BeNRiujrmZEPPGfO2ZOdEwm%2Bxz%2Bn6gnPKFFbN2Z03Nx8rATARCvCQ%2BEr0dc1S7dS6%2BKLN3GoFGB%2F9rWKsbnXhaFTN0ZsrSMOE%2FCvW10jp0QU68AwbJiaWfi5xpv%2FclSy0Rz%2ByRSQ1P5QVpjqicn9ZXGIZApJrH1DV5qdlvHuZHeRTMNaoZLl%2BLsch21Mb5L0%2FTbQSqBvnRctBMb3pPUlFbKLwyy8nqX7WAHHVpRaM0mIH75%2FTWvs3Fhc8wsKD8wQY6pgG87zGQypgBgDtNcbqV6DhbW33v1QeaGJLJtXoRd5U2DBLD6ST8sGatPbjm0xJUVEuwjhfUMO3126QlDJ027IW5AEZc2bVjmRCLyLfteKJQXBEJ%2BSPe0Ir2IyA2UeLCMcaiWvJLardCigAQAG2FNinxzG1wJ%2B3UmHXX9BDvm4FG8UgZ45jr%2FZW5hXocar0YryIJ0CqmKyU%2BJObg28TRq9%2Bs2xNXXmXJ&X-Amz-Signature=47f830e41a29350617951cd38b6a96e5f2a2c357cdd8c8e85e9f4a7e20d01777&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
