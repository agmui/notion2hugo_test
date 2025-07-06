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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536GIEKF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCGNcrQxwmCYHLYY41z9evN5l3WYUg8YQZtdJ13ToCgYwIhAPfEFtz7Y1M41QyXbsA9by2LqHb5aIqxO71p6HI1G3EoKv8DCFIQABoMNjM3NDIzMTgzODA1IgyoGtWYh7OTc6Bj6i8q3AP3M72wtyrcZ5E7hNggDuHxV3qw%2F%2FR7upUGnJSaqIwxlH6Vt3sinV%2Bmje34Dk%2F%2Bhobbmordp4wqpdai%2B0uyARY4UYYzVGHvWRkju3IrIRDhSj%2Bgva4847OSvM0b%2BqfXeT3SxnAevaL%2FVcIpDsU2t2eFJWUGjNrLbweKSfiy9GU1NLUjMCuxkt2F4q9NuD%2FAtyeGKHs%2BVnE0tBdwObUNvNfvY2KcBuaZ2PGlKEh5fgGbaq3vbJ8rHOkSwj8dcgc5EAuh0%2FZPJGeu6TaTN9%2FvkhCiA2lSpE53Iw91mrHVcrgSaxggNozmbUGYcLv6UWBovwyd5LGCbXCUaIZ21xuhXxpIz0KAeQ0Wjbm0McKtR4yJkMU5ke6D2WUcLI04uc7IXR382HgJDYtVnTmVI3Qe6UChpJZQm1VyBmdS88jiy0RQQXDYRdaFNfBvvVZp52Q4%2FBsjseHs8LfSTV%2Fjd6Axl8VDWvZut6avPftoDidOuPjscDPzKBp5WQwrOx6r1%2FzLHjhk%2Bp3YwOd5YWC0fxIIvb0WDMIabfI7GkUvN6BSAz0Vui6Q6GoIdiMeUwhPfPD5DVWBrGQZAyXxRNSdlE%2B1TNf3ZONCFMwoXCkIpNTAwFy0CYCFOEi55usIquaBEjDahafDBjqkAbWFYne5pOhKt02QehNR8pXcU1NKYRKlXSYsZSGNA3iDca6Ja5pGv8FL%2Bc5FBdTfVXRp7Wm7oQW6n9ZgKI5bL9PHAKoMt3ZC5LBJJ0adp4VRw2S8PNx3QIsU0KqG60QnZMa9Z3OldnG3sailxoR6wcZA2xCSkbaXD3jst4XFlH4Jx0P%2FCVeXoaeh6xfzE1S0UkwXegCn479%2BfJBWfRlKT8imEX8m&X-Amz-Signature=d3db944428a2b4b4feb81bd1c8e0207a3115b3ef17c39161aa077b18243c6817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
