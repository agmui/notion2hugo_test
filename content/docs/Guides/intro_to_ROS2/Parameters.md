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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHAPHA3Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNMqMM5o%2FXHA8j3NeILQgWmVoxRoR8SG%2BPY4yeM9Z8HAiAX4R3WoQFzdmats7ji8rT05qqcoBnbcxUKV1mZStqrkir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMluw%2BQcVe3ERLjYLxKtwD%2BIvEllXRl%2Fovwt%2F6VQdCFX7F9mdKKPVzepDuSel2gXqpoZ%2BiYHLDO7Yq5Qqs%2FCE%2BSbPL3y7%2FgPhXLLTNXUbr3a5QblsS8I1AdSs0%2BIR6OTo%2FckuZ4SpVPkTlPpqe3bqKPBSWJtNlsLBdN7NkV5MpISLszLkTFxa8XlQXb9l6zdPsnrUdG4FXhUhkJv8fTsU3OdETVRU%2FtmWy7cA0jaJhxX1jN9iMvxGfMG1tUkPijT0vcciK9PZ4FNZZQqJdlrWmEvitIT0lM2Ut4R6iT6D71HgM8q0Fb7y7EOFUgsnRepDd0xWwQHXbitJvHz3cuy1MLqgSQJj1Mgd9sd9NhJZRpECzaMOrsTCgnN6mXd7wARjWpTdxee7yqV8Id4wVl2ATEUtL8Z89dq3FPNZVcmJA4dgiF3wDd0dCzuwCYcyv2mPSVR5Rr4SeemxnvENgBAjqfBvs74AulpqMRnfMYPOfutfzwWboNejpFdXasTLPCSElP3TZz1A7k2gUPOui%2B6gxdeO7Xy2ErqesqcD3JSdLrkoJumGMspzFDjr5PEkh6EL0%2BX%2F7YfDvL13X%2FcUHDnRwRSvNb2sNrIeow7dY%2FuJBVZgTBnKXUL8UvihpiOW7gCZd%2FbNoLfvQZ4RLcZIw4pytwAY6pgHlZVRUR%2FJ0p1dvCPT%2BqfT%2FEi9KZEed783heMOtNFOABhQK2mljU%2BaxQ3IabhXs%2B9G8yhYHVgywe0c6TPIARqKHkMtFZXHjMFdTOkzfLnAsyQk%2FIdM%2FD5E%2F33LCptrejVeJ7VeYUfW9yZgPKS4xCYZSyNk3cqmmx0Q7idsBi9FGbjzigIG7UtRxQKKfxK2eMY1Wn7urFjsRFo00%2F0QCMhA4Sqr0bnWM&X-Amz-Signature=9a8398f97861eea41a0710108dca695e143872db7cab7b1644db356ba81197ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
