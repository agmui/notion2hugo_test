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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAYGCCD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T160903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGY%2F7Ic6eqTukPTpPyXJiTwHUYsZ0Foe2vJOCGlsJOgxAiEA0sYGlJwdYRQMPnURJW72RVQVMrlhekGMc1OEJXupUrkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJGn%2BHZVBiIQE%2B4jSrcA7NpJPUG9T5GWV2SytQ%2Bc7VpBPYa4Y2a%2FGdd9JBBJ%2FYPY2dhesFDDbOzqY7tP%2B6NMpbvL1TxWIMG6tPJGdd0RKnPKf0oJXIoAm8KKvV6qO1OMcoliDiWfNkk4%2FW2v%2FPkjmqgjq3CrAaJcbSp9FZaTSKTj9WnchZs3NMr2EzUP%2BrnqV7fmjZazdlgvG4lU6Qj9%2Bsavll03FHmXMLXPgjuddjhIj0%2BO%2FAn8XwwWz2%2FStvFLzAUfIPjdJhKfpddQuI9cWpCw9BKEvDg4lc%2BdCM8t5xYXHrvjjqROMWiW66ldrfwAoYn3tTWCYaIUWARN564Z6tVx%2BPPLxIq948wVbssAmnZY1aDfPYJAiVZIVVSKFWHBWdVNtfx841UMfHTgDTJvwehxkNrik4jlfXGR8%2BxUYXOQ%2FIko%2BmjSpYSdn3M%2FaEX%2F3vuA88eYebnwGq41a3DOHOuTRex7ILYI6yEonA51FTC4gH0sfK%2F%2Bdjg0Mr1%2B57pcAfWzeW7xIL8lfH8H3cTjZf05%2Bc%2BklCoF7QZ2n1z1G9WdsBvYRM5QeGHRdAPZuon5Qo%2Fg6H9eKj4FyWzsPyn%2BEM3Yemm6V5QJtO3Iop2NjVm7M8UuaHKS5%2Fr%2BToTRoLYnHf1ELWnelo2uVQCMLqd7MEGOqUBA7eGzjNzZzDM5F%2BWa%2FEgefmgT%2BFhTVvwy9ZY1yersXuOsrCZq6nUb8KrQ5Y8Qqlpa8B2v9DrjkuFyqH2VCjqW9%2Fgn5He1ZfvcQp3QWMmGYohffh9EVxop3VQTQjOK4AmiLet24EwHUoWWthKu05Ai0S1EeVm%2BY7smLXXzxCMe3NDorzN4R86zIcuN2LrVIPcEywTKQgjJuuzLCnPax0BGfb5wC31&X-Amz-Signature=752a7360827ab0b9cdea188e4554e94a2972ebd25020b192f1b1858d2d0358cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
