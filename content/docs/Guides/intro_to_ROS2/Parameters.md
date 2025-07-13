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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTK4H6EF%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIC2WuhFazlFt%2B3CQNS1YKytBdzNnkRsTcYfU6rhceHV6AiEAvMk4yr1yT2ycMvuuJEWqm3D2R8nuybrBbgcVhsW2tQQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGVOlNPGmlNeQuDCtircA%2BNKyNuuAPcANO0Ig%2FrYUi011gKb6EjhJEsBQ2kC3wb8bkIGSDi1hdNXdYKSSx0%2F9CVqDUYePX5qh3tPWtNerN9XNWCTuOEnV1%2Fnv2okq5pcCiUl0kfwWqKw6urPlSVwnZvZISr3bRN65IKp0BuyQS9Z7QXEU9BckbCRsBhf3oLTEUJMUIvHr%2B%2F3NxCki8mCJYM4xJ57g6BBWqmASgu2bzaUbxOINc5%2FQCDTUZtC18Hx8ZV4RGyG5Bara4%2FlyYe43XQyFyEjLIUY45RSNcRZ47AX4YCKKw6FZWD4LDiEFar%2FXvRBqygzFaTjKfRkuCnrIM7SGQ6IFOBjh7nPQ%2BGExweIvZq%2BVgr%2FzlrylPuzapjD95Afl%2BuIDb29OxxU06CR86asQK6DBRqIqQEYVZC1IKYs7H0pTex6ZLVLKtAT0Vf1x%2Bcylw1q5NekOGVDvFdOiCoIAG4SN0MBGHJZLWCwrukr9l724cbPqujes3DMYz5%2B6P4558gEQzBAM5EbT2oNbUmjmlHztnwDm8KY%2BUwMPLIYUdwyZB0MiZPH3cOItP8MBkEde51yeCAwxr6dlGbGl2EyHt2X7EXhwr464LjSn0EZ24Z%2FI5IJrWNbtcZYKPsXskyZmXg750wc8KSPMJWQ0MMGOqUBZmQVl7dGyDTYU%2FuyhxEfM1UU%2BSAskMzJMkKwPPShVyRkwEtxUBkHPFtAACfPS1A%2FxTN7Rlz0aeH6zTn2tAJXO%2Bju1XceADKSTjfiBNf%2BRuljkfLN4baYjNrfsQgmYt1i%2BkcO9CGBn7jnikheu%2FjXDnzky2A7uNuLRNTePlNYQzhdINEBwFerbxLxdc3pUpfR3%2B2jeeJyxYZc7sCzeHghJwWrRwXe&X-Amz-Signature=92030946ec79308238831bb0652a037769de8eb5e92c7ce970b4e141e5d19ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
