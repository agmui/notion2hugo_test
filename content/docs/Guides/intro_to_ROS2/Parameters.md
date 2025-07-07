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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQTERJ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC08adG6Oh0kz5cOxmX6dKLVtk30qwMMTKb2Y1xTjQY7QIgSGjhTKrtzzwR2%2BL0gKqVCErlXAx19quPynLVPy6cOZsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBGX%2F%2FtkUBxBoCkk1yrcA7dBhdbQzNtr1kRCtbWtlfOgZYBEy8Gk2xFOgVvhW8X%2BLKxkBUebmG%2BogATr8QS6KQxaYQYQQYz%2FaEYRZqmP%2B%2BTDySIw1Ve8tISUr2VKF0im0G0WDYgKHn3O72MqwjdvKtI1R2xqhRHaZJKQJN7VWLb6BOqWD35mjyX%2FtN4IOtE9UYqI0G6ssQIZ28OIlhvzGnYo8q8uAmC34EeQ2pvpegKeMqQbS19VbUvjZXMsLIJhdOKUJpvR2Vr2v1xsp2c%2BZngh6qrGk5hHU8X%2Bu%2BP9n7RDC5mlRhibTJx4wUJQt1eedydUGZcYAHQFif6V2mWxVt1L%2FmCkuDKEVwJhJUHo%2F12Jcw1%2Fvb%2BryYc4mRKa3xBtoY4FjnRIm1QMLzGuChfrTsLXXBAHY1c4iVD2G8YL0fTWt7JoKyFHKpZ2ZGwwR8wLn0f7GcZJcXngdJRTIo9eaFt4HbChkHXgfCY92KD0384XYhGHeLyt6yNONEX4cGMxat3TEs7cURRSbF%2FItewgRnKaSrT1nc5EUc%2FHVSh4p7DZEvGp5Vjv5erjtEcd%2FdjKAHZ9tbSX4NeL8AoHnsy9gQY8SFD0kOWcjOY%2F4bsWYeRlHKRGp3NvEge6MdeFNCEneoitrjmmWl%2FCabANMImbrMMGOqUBcJWX4iEdwxECNgmm%2Ba9qEfFrOCpZpd4TUccQRDR53Dq%2BYftgqEPZlrC%2Fpu3YavfXMyVvTzXkx2CxC0ygTgofVirKFr4PjswiaIpEVGqaE3UmkAcNrwD1HnHmkiQApzxhTE86R6uymZ7%2BEJ3zdx65hGFQvOWH2aozyrNV8XXN8M6APp2GaJOgtbx6MXTlNUbkUXkdEKBDmwckoPzfLDvAcKe%2FJ2cC&X-Amz-Signature=fdf4df447ab35e81f0c3b0591cd95f549ccebc2331db52f00c6ad1036b553562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
