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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7NH3WBO%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICKQ7ggsSZVjBUa07%2FOjAHjMYV7sACM7ggRkVBJ7Ue0JAiEA6cqV2MlX777WYR8xmT6rm8jhaQ6uVtgbfqy%2FFQuxQFwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9JDl1fz0c2Mja5RCrcAxWFrIyj0q%2BEWWjel39iATWxEFXHEBna7KmIFX26AlCsnOc4mI9cpF6oxmRaN0bvHDAL2DTZOYGnpmjAFSJA3oiBbYwg5ubWR0zKMv3shgLk8%2BY0DBuTlkXrCXbNkToYkWf%2B8t4niwz076QQLFNBDZHAjPXkb3U17hZtVSYz138ac%2FpweDS%2FusW5osQpX0250pICHC59qGfePCrXWLnHfWTnPLVbqHRivYBz0ESTOfJOcC2mz7qcNUst00nBxwq3himIg6%2FX%2F4nscRctL4ty%2BLGrQIxbDSZmKQ1WeTEWWylqb3TfvVCl4Y5Elv8XsGL6l%2FitFIICOGIogjG%2FNn5xw5L8XGWStV7NRElT5FyyIHl1Dk5GVnHCFIjjn1TqJVnOXTSL%2FlLmLxnDITV99youlzccqXkhDMky3pein5lklIBE9Dvg9hruMJZK9Rz4ZZzYSgyBIr4jeBk%2BH66DrZ%2FPUtm6YZqVoXzbe3IlfDXuvcUAR8hOkt3lWSd%2BHblEBGVYRVjg%2F32rgpvCOqjakhMAGn8txfvzzGnpGezjupPXfIT9xfQ5UfelBzVP8l5FEEx9iyyCDa7y8J3Hk8t6RyyefvfpIPYIrKRuQRQP5UhomBsTB0tF1nJkaMPpOX8PMOS6m8AGOqUByj89tsUaH0lRtwa5yGNMIZQiJCraYHdpwjoRS%2FkT5KdoTMHF5r2to%2FgNkT30fyyzDWXqSIB7tDJBpuugbwCgXSS3o0VdNQXEx57kPdqyMm0rE1l7ZLxty4jk4B%2BKd2TTmB5m0Ct6TiLirTbvQHL80Plfu7kuWvEBjX%2BjRtRD8ZYsoRXewt1QAZIFTy7RxcI2kbmIiBqjEArhIwPu4RSqeZbfHJvH&X-Amz-Signature=0705e9a202b5ba3c68a2e54db6817554576c83c90e39ee02ab33443fe5e39ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
