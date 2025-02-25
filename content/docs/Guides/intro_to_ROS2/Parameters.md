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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZTOPPOR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAU5yZRRflzUwZxgN%2F%2Blu9HbsdK1CMe1Dt%2BCDeCbc1MmAiEA1E0%2FlI1nQWB0L9zau%2F77vWZD9C%2FaAjPaWT1FR14M2s0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAZvyBX3ypPPhuCN8SrcA5cnLQFa6UXSR%2B1qDYK%2B2XzwF2cbkGFCng4LvY7gkSepy9jeILLhiQ5TIrWOxbZKNfjzKh9V%2FG9Zc0MMSaLVbsWvilKkcxQqi%2BMsLUUWPYHeDxlOn3jy1rn1aXIoBuwrj%2BzZUjvRX6Fn2wceXUvYoh89eS0%2BYDkHso2cWc3xrmf6FVWxgtvSNjg6i2cQdTV7lmsA4kRCEkVCXcVx%2BVDvpTTmnAk9DYRRsLlJHv7E55F0Rq47rBNFtrwCvjM0kYgvMFUbh%2FZ0YAv6XleFNTh66Dr7GkoXND0UBOEzWJvtrlepXJYdwOYAwOIngoqkBHiSqYqfALLcj69Eu8qyX7DnWKMGsieJS57uqsRYYUht3GfSBPy3nX8uELrgS4KzY7NQB3LuGv32P%2FWfZfxIR38nHQSCDZbBox%2FtImFAxf6ILDs3lEv7YRxqdnU35LciMLHBtR5NV72MZCkQhuxWQEFzc2VEL6Ug4IE44q4Rj1HMkOKAL88V7de3ztYWvxBaVxmRimXdE%2F4cL%2FD%2F2%2FGX4GufcgWu3gjjLiLMpoKy1r1%2BEssNrQqEkyCqWMG4lvnNzyGsIr%2BZkoxsBFxEO2FdiMbjGtGVS4ZJ2hdc%2FlwrsTJDbgK9yncjd5qLoaoZvUMcMNKp%2BL0GOqUBG6p5p3l2tZcxHYsRdK6zlQFhkPioEOcUDz8ZCw4lKmJ8hM9WU9dV87daUy5aONv3lRiv4mQbqmPLfZ39r569qgmnBk7h6q35imJcMVpkOr%2Fr3kMDAN%2Fn%2BUp4JdANVhIK4DpWrVwkW3Mei7BL3nm9wzZOW3CoKExiOP64Khzfn%2BW2uNZox8HrlvZ7VI%2BO5JtipJtHdXvWucXTtGDNEX5JviLLI5No&X-Amz-Signature=5a6188bc08fdf08607352509c717b176ee09bcaddaa2fc34b5ee497ade256e62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
