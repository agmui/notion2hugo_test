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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVFZND6B%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoRJCqK8ne57kQYLEJxALqTcE6PXv9dXepNm5X2TfyyAiBzwD%2FR8%2FO%2FAUeOyMbF%2FdsfJxtl1b3UbYsnzN7IYXwF4CqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ImCgkiKL%2B12mNmcKtwD3UEpcT37O1Ikm%2FyDcM%2FJrmrDxffWBBIaVYHB%2BMd0vR9AKAPRhudH%2Ffb1hSFfpKD7J5MhdQhi9kxEhgaGIqVvbJo0FAAHzNAjqMvLuiG%2F7sUiGhuEqxi7B2Og%2FkeACsBZYnGsYnbHDeWwrk3NodDCLtk%2FVgjFUb9oJz1AlFmKiLcXFRoAvsb8CfzJKG4w0N4bWBdTqLaa1YAtF8Ck9jVXsYMrvLr7pdJ2uOVVU8awP8gGkqLvulsFZox3Q94CfaVl3a0KB6r%2BK9OvZ0%2FJf3WwTYM4veXGl4zuZBp7afrEtOV5EO2enlRp6QgiaAmuV1KRcqSzphUqbP40Sgc1UrRt%2BnElrA7QslI9cBzm1oZohe7c3Ag3E6bRij1B2lOHMPKseZDX9j8GD1Yullmj4XZejpFKj%2FIhPU704SYJAF5YOGbrk9W1Yu4xBO8%2Bmd9I8tgy1i7w9PSRTXV5tKPfuEP0V2iQHKXAwbpFcy4%2BkVkLbmkNq42kACSqj9mAR7ca12lxQSsuUg8ak3t3A%2Be5XJRe2RiolvIHzDLR4kSxZC9lM0gYnx5UcPGgbcDKcyAQwUsdKghg0lbceRyaQARPG%2FqNteaLLt3Q2r5Aylh7fDcgIQZ54V9DjTC8yQlu7jQwuMCAvQY6pgFqFGQw5vdLMLL4MH2%2FbkzybrJIQxlQ18g0hcNBlRXTNdYR9WDFop8FM5LAE9827W9sQ4aBggV0ns8VdGUsJSVpsxW8kf%2BadoF1ZC6cxZGBGFIVpUMgPFS0sm%2FUmn7NUn5r9McgH7W15R1GHUh9zFVzAmLauEo6p7cw7HSa3Ny0TtYp6PWRDqXeBdYL2%2BwC%2BRxddnIYuV7nbrhyWfpratfjLbktGE5K&X-Amz-Signature=7644d2e3693d40b18bcc9b997aaf240bb9163fc997053333579edc8e4c101d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
