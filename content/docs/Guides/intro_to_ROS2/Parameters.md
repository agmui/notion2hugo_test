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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625FWAZ6M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDyFy9axfCRBbLiXdzZY9UCzufABbHB0%2BxtsDtCv6r0QgIhALuVaaWP0mwhqHoZRqY05Glg3jsgClEZWnIoAIxlU52pKv8DCDYQABoMNjM3NDIzMTgzODA1IgxGhcOZMyhBcrno4LIq3AOx2viR11bYmPD%2F26RsGFyZYB4M7zK1%2BqvD4fYhyn5LOhLNN9XWg2oTSkL6WmsdwFlpn%2FbaS4vZo5gSgZF7ZIAYn2RF6tKeXESosOtytjkjvjUVkXStc%2FpzSP2BjMhe%2FpCIV0o67eCBmEMKxuVpEc8WaxMJkSGZ6M8eVqnqKOERGbIwOAPtp%2BOWCDRsgseIukzGiQB5znitMCUotEv2Vsyb9j6GZPz4jnDzeXAX0ZZ4LQ1qkSXfKhkOf9DX%2Bvq8jBSXz%2F40pK3SqMms4mABncTJkRDCv%2BI1P4LcjnSiSADhf7Tg1fhZF%2B7t80w4y5oqXvrEFo7%2B%2FRm6K%2FiXlp3BJVi0QQ3JdKxMrr6msVyh7reN8XwRQ0ShO%2FFsahnWUqB%2BMvCBdhzr7Np4DmfZ6E2F6ACSDyPSA6KcV3AfiC%2BqCAydwnfZUVDupw9VJlO73lE2%2BwsdXl65J1gbz%2BuRdFFuI9ZGDX9O8EjyK1TMTE06i3vp3dIlixwqVgC5fSW4S5UP4Oyh36qf0Vvngh9Th4WyugzoiW8THPmsmiP96ThXvIHJKF%2B1eS7QW4oqPMSZfapMZ9t1wX6Pz87vDhj0Jsi2B4hSdv%2BOOPyxWOcjoWwLIYIdaE7r1mtvq5BG04rJMDC0tIrEBjqkAQGa%2FAPCMdHNff2tE0BJMaRcCbySlfGLaYDLpTKfY20d%2FPyyxmIE%2B1%2Brh0eYyFgkdy0OTHqrjgHtiv5SkrblAzrBRzd083kbsIx5olQNwVFpwidpN9lODlzZnhhLjcxBMH4qtINP%2BoJKt1gXlzuZJfWSlKqow4v74EYmQRrgb1TABmYKa1eBrvTSvJHgXEOKJCmfw9zq7q4HncMspo9zJuSGoOOo&X-Amz-Signature=3d18ede1f2120537c591f42404442057cdb7dc278c1ac6095c3ba0d6068d59c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
