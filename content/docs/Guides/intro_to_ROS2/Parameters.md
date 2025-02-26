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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGB32IYB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC7hsMz2yTcxHhAJjW2Z%2Bx4BeBSGLKeq%2B2GBChPi98r0gIgda3at3Ia5PrP%2FTrxwnyB3OEN0T0Cv1W%2FDtHXJfj0u50q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAffV%2F4XikYswYpVNCrcAzhHBtYmeOC8%2BfBcv7DiiBUwudSPlriER3MMm3ydU57OmUGWTkQVrOhd7U4LYDYp%2Bs6AHsVbg7oh62HmcNmmMiwxxlcZ6zJMvhx4PuxMDBveB5BJcVzlRfvHWo771d7ZRNLYa0txGVkg4MFREsthPZRcDungK9v2E4gZs8EajCEV83NwWRh2pEtidF%2F8eKI5dbhJwAFrvVOG09pXc%2FhRqw9QJ2GxZ4DlMumS36Kg3St9nyEGnY3iU9CrLf0oR%2FasZKBvrkp3HwfxVQuB35m9Qb0PFZDw8fcY5IR6kMQQ10vYz3RoQyHYLD48uidwQVoB0dy44oV68ffdtNx8IFavbt%2BdIMabl6uNeXHWhdJ85lMe4NDXXM5IoEsUjzdCiPRxwbqYLdS0f3fctGXm6f85wbPBIgAJ4AlPpCsPx3pGjRyb5Ar6RpeLatuFB%2FnhI%2BWKli8EHTkI2cu7fyag3NuGPTjnPNV%2FkcsDwv9MqmF%2FOfq8qxpEMkQE0Hr0J0gGMBpDG8KS%2BmI5fy6SpMuY9DCv%2B93fn%2FKflMqXJjMl5uTH9TLiUCNA7hXHhW2gxz8pI4ahyjSlcBifKCXkHwXLx7yBMw%2FZhy8bcWiAUmalX12iNnQ1kmFN6RmnoU6RwLTyMLWI%2FL0GOqUBhuPhP0U7xYChMpYO19oFpOZlkaxT6YGvIkL4Tg9GU1iu2CNNSpE7KBiq3KrjCWp8IDYQBZc%2F%2BnlKcWXU5FLi125S4vmoy7%2Btby%2FVlnZBTZIWKGipdOp0CtHeaYk6dDRl1kjUg5Dv4wvwtlbVHdKgKT32i8HlNVHIe6cFi9SDc1ZqdJDnUBWTMyXSxc4hAovmq%2FGYbUHLJmOqri3rZmdk5KQ63rT8&X-Amz-Signature=dc2aef83cbebedf4bfa81446a2ab3b44b9030a26d3b5eef2aef8e9156d7bcef2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
