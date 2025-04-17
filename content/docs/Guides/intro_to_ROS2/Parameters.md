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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WKPZU3M%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsvIOP9VJxVfpsX7QLgKVFavux4MCGYm%2F2G8HxtE9NHAiBDMF44E57D1a3xi%2BRlam%2BQjK5trSu23rp%2B9mXzV4V6JSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMg5PKZOsxor8lvLmOKtwD3BobLYokvQryxf6r%2BNHPMWk6YEqw%2F3YT5C5UwASBxGiPUJEl6aAUiu%2BovRCU7NExnL60gwJd%2BlkTriChxXMWPNiLO1Cl2e%2BQZgMF0DIgry2H%2BxnqxSBjOzFbWAGMaKSKsUreYxd48e9JyAVuHvSqyeYGr5Mk3o52bjZB9c8q5Ru3pVh7wwS%2BQEfZZtErjU1HL%2F2vQvk2Uy%2BNJ40qmBRw8vb7H%2BKbYLpslKS%2FHMKRF77KmQIA2ca5l87fWJsuMyRgbQlSxlcKLjLy0LqmHB4dVzEoTXaVyBAz%2BbOJWmdJ0o6Pk%2FWvVeUug0IO1D4g9hg7FIOC2FHM3fXrFN8WsHfNlmkUxJ16jKLvIVRUrt357MxeqgqSG0c4dA0u1Ta3vAC2ziYMb5PqXUcNfe2ZKYcDzKauXI9QlpUCnyIWvNAQvYfIUqohBYaahBmHbSypfP%2FvJbQ%2FZLIpBkkZ134PjoDDcIXfKHUDK5oY2%2FfHH6dLsSbKTIhEAiN5H2pL3BNZS%2F%2FffQsgITdFb3NRqz4ZPiAnhjK2It4SOtyX4dEOadpVkBp72iut3nk5LbWRsV4izqzWTyzHJfAJAGEy2SJgCQ2S6aImse4phI04Oug5HviDh%2ByMIxAC3wK2K1O%2BmzIwsfqBwAY6pgGjkBVg7gcOrUd58WzKaz6Ulm9zJtNGyglpjhEI1%2BIP3gFlwmFH0IiqG5gTm3oDJxtVbYh41PXmAqNkwa5dRzZWMIqBUl%2BLYqeqJK4eB9PVs7UN8cp33yeUbQJCYRZkEdPok0NURGhkx2B5%2BdmdCVnpwqJh%2B0mn8xsF0JOy1Vap%2BHUFeNE0gOOekOrKJRm9lCG%2BbPJlYwomIDtR7SD5PoFCwcVJtEFi&X-Amz-Signature=926a43fcc04ffb09bc6f325f8a681edd44dba66eb142fccdcd4c88b6a38581f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
