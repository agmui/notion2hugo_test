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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSO2REI2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T131331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLtCguY0Ab29zdotsigR49ymOYPa5HZiZeEHff16dfuAiAqFNDlDUBiV36hw2e9A9exU1IA2Ty7KtozBZT%2Fdhdc%2Fir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMbDp48ghYWho97Z%2FyKtwDtNBDbZUvxkdwA6maDtmneVzPqGSJzHSnRBz6KCnSjZZu%2BmoHMqDqpY0RPJB395RogXZD7c4B1GfSBJIDeT650fBHDIjKvxvPZh4phMF4aXLznNN81JCyTesfqBY%2FM6a3rV1Z1O0l%2BXtdDZe79lOIbfEJwmy002c1Gz9DZWhGvhE7HjL8JW2M%2FKtmhVzep2V5rJWBydUopf2FqbXq3%2Fm8Jfs6vlKy0I719RuJuNQCmeOdCtTLtREhT2Js1SZU1JcKCKsC8plUh4vqPwf%2Blr7kzkRmZA4oPvXiBPlUuzt7VcdaZOsywypmnMFRE0BQqJ5JV2NqGp%2BnMeHYxr7dQO2lfS59O0ComuZL2y%2ByuXISxs6Jvfou0Mzb0x9SoT48SmeGshOVTeKLeF3Xp%2Fx4TSPqodH68JMTzpIm0i155vBBRU%2BdQrMs8s33E8U%2FYtdaqc4fdlFppnuOdrV0Tk9%2Fyf3VnOz%2FpT2DJcCZpmTetYLlRbucyGg%2B%2F%2FJh%2BS6Sd63QVBaOjlRgh9vqQZov2CjRzP9nfyKo4TO6Z7GgZpUyjvw9Ig40qxNit%2FLCx0WI4E5BzRn3v%2FkNloinNXr%2Fu5T2BGwWLu%2FfDdU6aFYZ3S%2BLncj2CmT%2BD4lVKGR6AL%2BhOX0w%2B9javgY6pgHtSFrh4a%2FwXFeOopHWcyZ4QkEfAiZ0gBtwnh%2BTDbHUaTu7yq1X67bDu7BXabBvyQoioJlbO%2FDCl6nPVdsyuhHXL103vwHEzqr8rixKcGX3S503AVNtHLMMJfB5RNeddgDzOdcM9eeZgLMNNEo%2BR7NpulbsXC%2FiM4IRkptUQmLxe2ED074921lbM%2BUiLx5aw%2F0t3RUkS5zpmCAqtnrUe9mlD81QkR%2BY&X-Amz-Signature=a6a11f8e222bafceaeb9aaa7b0c0f81c0f67301f14795d7c6ff9a9d5171b199a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
