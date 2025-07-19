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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X5WRF6X%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUvZLBSkHbfQlKEFPB7ER8QVUI%2FVoj8ZeSzLqCaTXPAAiEAhCPpa9IyyfC7oJQpw2t%2FZObFsb51Ec4MB1JgEk7WvncqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH9%2Bt1FYv%2FgeN0yLyrcA%2B%2FY98TIUQOdMyuCZIp0qGX7xJYnE9eUJGgDjv1xxTyCKdJ7wcv3eSg7DFXfNa91P08%2FUEHRWSUS5VcuKHUqqUx5uxw6%2BwQJ4fs1AcQi0c%2Bd%2FslB2w8FrlQqohhIFd%2B%2Bi%2FxpZzhknciv5Hc7ZcW0buS%2B7M3P3hPZfjfkdmvwyS5AGiHdFIWOiBNs3p%2FoK1rxW%2BG%2FhYHDLN1cd41lBQ6Ltre0XwMLMDnEnpcHXT2bBIVgG8KtVmM%2BJMoGPj%2FU6N6ahDh4rtpH0zOanAYKuOzboIkpio8ZNLQtHfkav2rE5fypk%2FQZe5zdShq7tH2A4ZDPS1l7FUW17XJC%2BJSi4Lzi9sWYEm2wjFom5WReNzKp5ZOhr4V0h4wgGKVSV6ufJrxrwl%2FFJnrpVeyiNQBhbvTTMQvex95BzWnUtB9sQ8BIWH0N4pX43KIlLFEUGWOxpeH%2BuaC4VZnG9QqCtB3A%2BExQRj7R2h6PA0Dzrc%2F6L3x7K7uFJWUt1HsFtUrkGr4ojniP%2FF9EaVx6HcvLdsQPksByCsD5uZs6btPD4AjpnF0QgCJgDXhV3JdVJtnAzwG%2FRXfCneC%2B76Q1Ort2DW%2B8f%2BBW0ql%2B35zwMK%2Briwln4L2%2BsIIXEdHa2Mnyh7dZy8nyMIDF7MMGOqUBlVHWhi66vElkdHfyUQi4HGE82jKOwNUPopVxqGEKUKvgJ0Suc3oMW%2Bdqsw9ig92tDi3H3fqpVrNRAYSQLa0kYgPrjUsCr4rzHNkZwAzfrBSI%2FGd5TfkzwDM6vxJbVyoyQJB%2FKnif5%2FSFW8YGEIV6VozK3t%2FYaPbCfmUXzd1VrUEdCJHGCW7kPzHOE05J8g8SeNBlCJIrzZm3rrJsJ%2B9JjOkwMMWR&X-Amz-Signature=b490c1414bcd1f3c234fc8c3915ab0c9c1a6af406d4a86fcd123ac2360ee5539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
