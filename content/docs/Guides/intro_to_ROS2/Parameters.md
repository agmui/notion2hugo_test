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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z642S7OP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T032006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmHwcZuU7i%2FoifuWX7GHB4d1XMnuXnUGwvSwsN2IFexAiB0pgXPFOBcI5w1xWqrxlmyZ5keJQsqfQprIop4%2FRjgdCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMc10hvmrMQ8IP2CYnKtwDm0JczTEifqLCoPtm8drYv98Zgr4pRrDnkYiS4%2B19zV1LC1tMEQ5Bh5w09jkPXRhOTQ6vm9rzQU1RCGHyW5MjqQ%2BIwp86mUFg8B1upExVrmNT965n80H%2F8DgDjXZPyKYfBDRYXXz9f%2FlLdIQ1zO%2BqTIq70Y%2FA1Jx0mhYKcC8%2BCKEUz%2FxYR0dJkJm6sIzKiePrae52nNMEobzSypuhRqW1%2B12KEloVeqQSf93DHVpgFXCPHcm231OohusQONlbvA1yTqlLlzyXzgjm%2BplbwkKu9zC4Wv1b8tNAdOMTET1yjT2mcQGKeNEEZtEwFqkxskI%2Fkmu8dKCEviPmEcbd5jF622UMsn5PHSazSnN%2FEHQhd0b6uEXIFd%2BzDaTZ2HC5ieYWinrDRanWjGsBUN0XGn%2F3BFFQ%2FPbTAp0pR3LAX0gleHjRhlhsYSPmQl92RpsYhvS71RcCqLXa9BKX0DuZPg8KwQO%2BV%2B11G8EG4%2FFH3K4OzVVapZAwd0Vtj1wwDZal8gz%2Fucdei84jyolfH94936qYTsq21HvQovD5Y%2BsAMfIBOM1cjpKMlRmtwsDJe%2F%2FR1cX%2BYhaEwU6xyN%2BR8RI6TPGPJK8qDD8PdR6bvN7KUfCAGtN%2BxHEUpwYVm9FYrV0w%2BMiovgY6pgH1yn0877iGun%2BD3isCT98e%2Bu9dCtTE08hOw2YqxAbCjs%2F5ovs5kUexlcqFuF7W0UPBsA6Anb4uk%2FW7x2L0OC7HN9TR8lCcpOWRCTP1HqlqGBhWBHNoh%2BuAEUlSZQAA5TTp%2BUkGRdg7HCUes38r3p8kGF%2BTqFDueHkS4KMDMD4V3qdQTPqqFLcVJR%2BOd1uS7BfHPMSgC6QTKwifMzfw69rzvX9rXFEs&X-Amz-Signature=49fe5ef93bfd22f3ff59d8d4fcaa13da203e0eb0f04560a69fba5e44c16f6727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
