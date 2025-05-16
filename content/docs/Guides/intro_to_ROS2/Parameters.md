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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TPXDZS5%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRNin%2Biw8PzAnQ6A%2FqB7Lu4lJxI3EQ5v5zDpKYBcaJgIgKS451aYswz%2FAVgh%2BqZnDdSTYmR0nQ8ZAdLTU7OUGvysq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIGpXsbQn0gBjT7RiircAwIswzl%2BIR1Y0ep6VabZyxC%2BAGJNmHjKBKYWwR%2BhTNuAa4p7h1XsqD94OpiYdibr9hWRbpMTdJWrrH%2F6J2jXj4xEGEBlGtF0z9PFW%2BSEIAsOklNeSEM4tZSjn%2B5bvam2SCJu2xiJSvfe4QOIGI1Hyo2q%2FlcYo%2FtRd60Aokpg1QdFHMG4dT%2FFRyYs4sAZ1yx%2B5wt7aQmh3Om43cfYHA8mTDU7l9BMl7tcRoonEIas8yAWEW0gmaLhnCLR8au8DjkEnvmlR4wixa9THs8R%2B7Y0QQW3d5B5ZSwIShZ%2FBLOuKVSKqZqTPCU3sLfirATzMhmmVFJbjMWR2gtpkj%2FFhhNkP4wDjLbsNMqJ5IQyZFVl9bPXpuSX7V4HQpK7EsAbeCxk0ldJiI7XC3YGh%2Ff69nU2o8OUmMJeGMlKgJCnli4nU1JFlFp6mg89mEYaVaIUctY0HHj6DtplOj4dvzxgBNs4nguUmNdh0KubUJM%2FPBRpCrGgNhscKdo7eExf%2BY3OGwFmmJi4IMcAwVnuXzLpaNJSfa8WQfWNh0qr248aUEB%2BG58c%2B5k6%2B0%2BmZwNnMKCCqFI4sHfkBUMcc5e7s8X%2BOCVQf3wCcpjXJHDKT8GPMcbMB1ac2HbBb3tx2TwBOYjGMLj9mcEGOqUBFw5KMtG%2BjETsUXkBlrl0YdAjyapWPFrQcJJKnauZPkPk6n4cc%2FeYbCr3DLlXdSRtKXj%2FAD728XPzCWeh%2F%2B5oorhLmELDLylElAXa5sqpcs0PIBEQITfTOdpeEQ2PNJ0M5WPd6elRS3jhh71EiwWhjF0ECAYUr%2BIHz4KxAaKtWK3oe54EOFntaLNkSUtRHkR2Cx8tYMYkvCzg7Jz0Fa9qvn4Ep4jm&X-Amz-Signature=7c1bb598e4873a21e30ef58649b87761c790049b47b1523ab0d18b56ad94b8fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
