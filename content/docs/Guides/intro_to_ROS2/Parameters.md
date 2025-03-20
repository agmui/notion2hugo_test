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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA5WQDGU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIEo3POOM9j6V%2Fnk3Dg5aISHoPN7NrbfM5j8ak9GZiG4%2FAiAPFZk59Ymn%2BqD462I6B%2Fu3q0%2BkmLSSrRx84FBhbdhHkiqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ7oBF2oQ1l%2FzWwUCKtwDia9Tauf5kg%2FXBPA8D38N%2FXSWAdxcEv1yGb0RF7EcO9DM7rJYDhKs8sqYgpZuo8xv7ibLCEIgJT7xK%2BfXZdLJIDa0N7ivUEFS2sPgBKxrzF4k9Z%2BNYCB5uteY8fNbMCzcVG14yZtC8MNZKtdIiCv1EEvGtpYHXGMt7KxD4WFIBI776wJJ6Ompfocs0LleCwIaM3Wb8cPB9OGnq1stfda0qNJvysYejic1Jx2akn%2Bde1JdomabRaAzliwcuvqeL9KhT6A%2Fps8NaRd14wpWx98sW13WMQ2ITI23c6XSn10nR%2Ft3qqPEEHT1d5f9%2FXGXrXJ0Umng46BalRiHCs7rOUg4xJzcJ4X2jJGb47lu5TXfZJ7SxFNWvyDwuYFM79bdY3aVVqzbC209ij2UH8zEjmNOf3SvW7BjHkAPPa7Wy6BXPQDnrBS6ZDCtpZCOXQewFfrL%2BMSl3DV6vhzk73%2BGG0lo%2BQ%2FNhPvBkyfQiLMb3mqBsB2cq1aiXDrSUNpoA7Y3BLJzzprJwOuv2LoOrpsS%2FHNY0fbD1%2FOhYsrePRP8J4VZ1JEkIaiuyuUD%2Fl%2FSnPm88YZM8zb57Tf99JxlRQ1TkO%2Bgz78dhecqtwgc%2BFaOPTLW0bSNXOOS8jXLhRS7uXcwr6jyvgY6pgGBlQJ4SYBQWe1cKvfwLVv67KwSy2mwZHifylK01OU09kCDdnzkskN3xSAYTYPhvxBEblIYGEDjTQKzu0wwdKOnXC2EmpV6RobWoO6RNFanS3DH%2Bv4DWX1xlsfQ91I3Ux4rdCChPMMDA11GU5eYoHqMo4glgl8Qhqjl0TeE8LKT3RlrXrub3f4DIq229HdCl6ec0v0zAEPHc4BA7%2BeD%2Bou4jioT0hPP&X-Amz-Signature=acde5847b649bacdf8daf575a9890a8ad73909c69c7bdbaf52657939a6b8483a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
