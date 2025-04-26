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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4S3WM5%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T021816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbSazg9Rw6lIheA8%2BuNVqigz8byaWVDbtyHxAR9lZZswIgKoAHIJSE1FUSStgwn6hTT669eyKXHSTgS942u0mys2oq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAbKsKfU%2F10kGUnvnircA2j8M5yZUS2v079FH4O4wVjW3an0tcr9Cmz2YWT3o4yAhgaklICRwzDvTDodTaQm1D6JOzgSl1kmXy6ybMSKc4VRWRVMHmWfgLt8r4DL64ZUk4AkPJg6CD%2F0iSijPD%2FJnIynl7S65etelnmC8tDhB5dMxv6C8QDKhHLH57pGxAmcoiJJJiGfZBH3iA5UIxS4o5nBXvYLj5atnaos3Wslvttg7rSWrkELmpT85jZDeDgFKDBlIS0FqRfnFvx13CjgvFZxcvGh%2FPvzYKP8ng0ciQ%2FohLRaR2FAFFUKI%2B3LR1pQa2wbG8zvnmWTbo0w1eGfI8gPXGodCCimSIADsRMDhopetDqTTB6NPfVdErEyGo0DSGujvIjlJ96lJD8huJVJcya%2FYhIOWNLG%2F98n3sxIjsGG0whQ7RLqyKhXC4PRHkjaoi1yIPQ1lHW1qtIaKEH6JEmHk6wIowpti%2FmmzJE3%2F6LpYJWHWJm9oJ4x%2BwWOawsGUXh7G9wKwHXYmHBYJaV7GYhW93u2rVqoYYlh4B0H7rMxMW%2FccK%2BtOJRqiu0nt8xaDNvRyxxjppvgt%2BWGdQe8sHjOZgMZpuwPHULAyYMymqdiGnhQESE7NXR%2B2gu%2BZw35w5qsnKuvQQ45Y7vIMPnzsMAGOqUBwGXkDrsysOxaB107g6Q3qyL4l6Vfn41%2BeSVGYw36fsk79Z8UYLK6hh1PdMrcpXD%2B0uYw404SKuB90VuCOkzMEvB0FRSFRltrTxGrkzhbWwZDJq%2BQm2MtcKQbuXpzKgfBoTczV3DXqsb1A2hjQK8tRJKaO6HS2evC0W4Z%2BpB6EFcY0F0gZmZlGS%2FwF8OIymxP5KjkLtMaQ8TSSUUXdaOd4NjHbbFD&X-Amz-Signature=b368a1af3f02a376d591ded206914fea75eff3ef0e1d088f2011a1b9df9c5309&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
