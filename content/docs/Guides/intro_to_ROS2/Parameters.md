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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4KCGUF%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxRr0MLqXYJsfUw6ScgBp6U88tuThciGj5Dquqg4ZVrAIgLzdyMcYhnSA0E2X3AkD%2BMR8K3SI7fx6BXVlhd4aKHYkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE64gAlvfghKXPZSkyrcA%2BTAGgQSm%2FsAB7lZayhVxRbmm6FurJTJwVOceStM%2FDfc3OeBiAIaGZjmVHNde%2Fp3TqfGBUMjEZFB1YygttafFw0DuQpwkLVRffF2KSF6DBcm8%2B6yGDwTlJKe2mgS9W4XZykHy7uSPnbHqT61Q90k0%2BN0gSTjDo4EW%2Bu5zuQUXRNnG9rF1ORdFarOYXdrj2ywWnLkAveSl%2BiEjlNk9QoNaonDi%2FCo0aOSW9w5iUpD%2B0bqTKkdxo1o3hoJyFulYNjSUJ0vFfvhr0YtNhHfaLiKm0Qta4OUNU0SAU%2FauMIb4H4GYGf2utrQmFDnamOVeWreEBDsC29jZ8Wusv%2B%2FeR2qt72lM7R2CgX8ZqGGsWeeIWs2ih4HAXL29Qz5CUNxOMWkEyIcmgP1xk28tRLhFz1xnsOSfSgBmQARmS37UGY1xgHHlk1oZkeP%2F4k9uXein9QMjpbAf38Q3M17XPyPSR7yv7q7fb7AV4bLAyykh%2B5n52rmJWFlw16qdJVasEk5aRr7a8lVXbXPkuZ06zVnZ%2Bb2Kzr3QZLgo2M%2F45KaGOq35Qf5rwCyX5gvCaykyIwi3hgwI1YJt35Ljg3UiiR9VjCKwmLf5w57Wt6U8IVXEOmr9ZAilLy7AmsvsAlfsPaUMPbUib4GOqUBwOuU6K2Uv8fBAFrOjBlyvOGvE7WjMkb4jurFANrxqy8FruMBX6dT%2Fe0q9PxNZlWW%2FhqvwF8TTKDy4CbZI1CGSdlTtJPCrnOnNC4nAWPawKqtCYFAhAtypJMG7JQFK%2BFka2FpUYD%2FthuZWSH%2FmCjtLEIZwlJ0evE0y3gOMpvEDf1pw%2FIkK9Wc84nONROl%2B1H4nlmYyCwUyRcyWrVlapgF4WauBa3%2F&X-Amz-Signature=262392da52bc6023ccff8301b1161f8e48abdce3d0b84a479cf23fa1ca64cd53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
