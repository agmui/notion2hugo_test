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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYBPDA7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIBeDtT88WNUQeS0uG0rpOztxVCmLcseF4DxKwZ2iB%2FimAiEA%2BlNztWpiJpBt0jyVVPEbM%2FjphQvWFEL6jaMyJ%2FIZfjIq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIm%2FWip9u8ENeOJwKSrcAxJJCFpbcRPEPWXT%2Fj6tCZG8JGzg4b3Qs0Hl%2FfoeAYSA%2B%2FSh8XTIv8MyFBr1HPiNP7%2FUS0GZq9lFxX4tffv7IvfNUXiTh89NCF336No6fCZdL3QBifeH9h%2FPK4jKjXOr%2BUV2MAImfl3P%2F9lZtbTXRmfRA8q5sAfn1iRtRy%2B0f0SEQBNQsRV%2FG5jtDA%2BAfoNKo3gGk2I5Zm3LgPwtLDwZW2ujBA4PlFvQ9QWt9j1t0b%2FLbBMYiuSDaS%2BJb9jwXY73a%2B5bSvDCz9GL4aRPBspBlYpHhRSPsR3evNqv3JAfBkID5og5XPv1pyslJnx7OKcjB0XJw8Spp9fKm9Z2U%2BEJpLUDJ5qF%2FdMg8Lj7skoOO7imJJKpbX8HHaw3vAmdSOkvC0BqtzoI44gYhKrXx%2BWq1my1T0CV37DKkYhaea0ZJE3qqpNvUKOKHH8d5Ur578X1GflSyU%2FkEIMtCFtsilr3degPJp3jIbbDMv5sOBFl9MNizUvrlv6NoQ6UJ5DSE3c3kvjmNn00rUiJo9kY28Rk5t8PWOR2XpUGoh5XN%2FRqsQOt%2FnDhY1RNq68oXEp%2FzUApy7QZpwlvtUQliCr5d0CPw1EW6S4KoT%2B4g4mlx5BtiCe%2F5x44YU9luaFElwDUMMfCxsEGOqUB3aoMgnYHIyJSJgM%2FUddIW%2Fc0gV0zjrlyTyObNjb5WQ7rASXzVKS3vpPiuBDpVqvJvnq4igDrUVGn6QlmYzOIcG5Y5lY1VQLOUqcPBW9PUAs4%2BWDE0TpIHZPH1EbKwZ4pmRqmX2y3RkvdQSw653vDi1898KOGv1Z3JI3eWL2claShV3NGIZhqMj6HRSgxxwTO8RX7pDDjNA6YATo3RF%2FNpxOOKpCY&X-Amz-Signature=df84697dc38234c271e22107b71e4b524649f76f1ccb7db41ec096cf012ffa49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
