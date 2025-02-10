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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYJUESXT%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDt7XeTcowe4hvFuLmYbhikFk7bFwo8XpAYD2zrULE%2FvAiAZ6SJ4Gc7h0hC1vdxriggoaFPUsVCWaXuoubp1Wi5yDCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0xUFLQoFRqRGnRNJKtwDMwqkhlcLWOkEZPHnqf4cNcfq%2B4zkcu7YIHizwa5E3Eisr9ud2kereX6WmLzsYIKFMONhKD46f1YuFOCiBkDPVti9F2lx4JKY3BCjVJwIH8K38SB%2BvMhdhBeyiR5D%2BQJT9fpB6jiSzALMLXwTXpNhVpiVJVS5Ez%2FPDZMe%2BTGURzgSu%2BkzxlaB8AOraKNCaadfDl2YySfiAd%2F2HHzoFK8tVFZ3g4KRm2YP4%2F7RKwLE%2FZ1lWlVIWSY7Z5y3srqLpDzE839KKur%2BjB%2Bq5hX6K5E9IwmPNmshObAWBlM%2FyMFGZTBBTibzND%2FpFXK7pvd4o47PXEA%2FB3JDuZy0ju8syW2jkVtk2D5T3iV%2F9OWP4LQKSyrSjXhH%2BZJVgWycSH0X80p2Z2xCax2RUWXfvr4DCRamZOkOExr2RPyqC0sg%2Bgb2VXQf0H3GAEs1HLnU4iHpvVQ0U4u0IzTnzGISZZrSkAZA61o%2BuIgB1VuxDL%2Bu%2BhOIEDxrZb6GIeeZmRH7IRLuRdSSrSXH%2FhBdWFNXvQyLSFSb67asZ%2Fy3gbk%2FJYtT6cmGYb1XbMbZ3Q6n3uZOwQms9p9FmR9KwxmYf%2FXGXgLT0np068djfI6pGUzGdXXIZkw5jEC2VpSksDb%2BAnFDWdQwwM2pvQY6pgEH3upctLNhzcO2RXZc7vEJtU1cSDcn5jXMvJZDv%2F%2B%2B2O%2BTCY8Y5052WM85482nSqc8a7rwGRjFZtER%2FdfOqzWKSPNneGt%2B2B28SH6ZU3%2BCpe5ATYqJJTG9qaCkSOxLG5nxsDAO82kEYPwWd7P%2BF0GLcKuko7qR8qTFdVYrIUr%2Fov83Fzhozp8j2hAXCgXroa2PbWJHubOoILMHftK47P%2F1k%2F0aQWcA&X-Amz-Signature=c82414c3e5fff45e1f3e07891f9af95906e7780e0b558c3ee49e2af086ce554a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
