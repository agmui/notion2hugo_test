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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E5H5YQ3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFD6NcqvHKGxpsB7tZ43%2BM2ueRLzT8mTk1JEVTpM%2BKFEAiBJ0EOoarf8ZgFbWQ0LmXKvxin20jOQOdhSlgfm3yM5mSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMGiZBrkQkQiGd%2BAh8KtwDVsYnT7Uu3s33TYYenKJuGfaNE%2BCMoCkx7BoGre%2BkY6fZyXLdZHFfuKwwuMjsS6Q5kCCegQwS7hjUjA5sR4zY3yqgCTlhSTzdeaB5djBVASGGs065EQ7LsDzmZPVrP2yapGG%2F6chelBbYDZs707JtxKcQ4HZrLJEMN0HsMExsUJhLQwbsOxevQYcEJgPqMblUtmky4GauzB5UWhENQKVu66N1P2gs9xYVCJIVH3q3Rq1dijFpIEKaBA2opFd4%2FM%2BBR58jB%2FGjGnn3ZeHxRUOmkd7VDnMLedoQxqC73vCtfTZcmS2RDz7vco2gpVG1wy39twfP402C6yU6q1gqvKSprKe8JvadARi6M865NY5x4jb6k7jCOcy8Il63ToBiAyHLZMZoxx8lbtRykuaXJp5Lfbn8ScqK4IEZiICl0%2BAE9TrnxIK5S5zPGJs0MpOKTN5mNsmtN0OgQ9yKweRi7rY%2FRqZdpuTEZlHHJv6Pty37x87SP5za63Un6Zaio7192RWRK0EflDicxsy7e5oOteMa2n3pHYShkzvUjnKW6usKdkgMDoenPd%2BZgx03BBsqIHFGsLNl8TPce4vS%2B6VgcUaJTbmTl2IYBrn1VR%2FoqqrcZNbpNsrTlO2xRgzAnOsw2tf%2BxAY6pgH3eppvp5Y6mwRG%2F3GmzfzOReX9XU3Z9kRHW7v2ERoCXVFoNUWVjbdU%2Ff8x6qH2cAI76xUfG7bxGi1PsKaujrLMRlQbWLNsbTwdviYe5AXDm18C%2BGnO%2Fowtfjivtx1O2zXbar5F8EfZaj%2FxrXXuELkM%2BoYm1Iaucn%2Fa4zPNiCgjzGxhd6AXA2oKMes2gOZTiD6B%2BNT92cKXjKE5Abv6de6hnBqod%2FOn&X-Amz-Signature=8fbd1d0948dbb6c1914ea90143db05caa6e0463113b0c0d8963efe49f9c18162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
