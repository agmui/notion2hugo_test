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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EH2RSDA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfC1W1UMHy611AocyWJU4%2BAbns%2FRT0NncHYkxRMTK4%2FQIhAPs11SY70bI8KyVEoiP5l6eJ9EhH5WJvKtf2P9ybf9qcKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKuPhhOwklrI9dBH8q3AN3O8nWK4DXVvgqJo2F%2B3tC4Vm55QLjX04qodYrIyOLHU1TxzN71gVh8DhngqZAVxlxk66Sg7pZ8LIKpits155yCaUFEF53dKycvwf5ftZOYoOWXQ7RvSuV0htyr7ixTLYNnBMZ%2BmeYVUwicVLtOFDTSXhRwL%2BY5p5AH7bzTNkxAPSSt9cDHwBDSJV23dGK2mnuXeZAovhJT32IVSFf5bCL4UIER32JVUbdeyxtfOJR5u%2BOHgWUcqErgst23V5aLeBb6VAy1cpgms7lZkEmnvDI%2BjunF9BlWyz71Qpuubdk8QZn8VQe7F5FQWFHwEUAr0wKOfdp3nayaDny0gN0fc4HLTDS15c784A9peEUYlQtO3DBWqdYsf9DGbb6GhMHoCAq2slfS2smd8ETHYkdoTLuTTTvcmeAgJ2BqM0%2FH8Xeo89fcPstqAZetkm4Zou2G1sNI9D67eKXIhBBz8uelagFCZo3yfzxbsDYv1Kb4qtT5kujsqPCh2Y%2BllCeIHawI5VsbyEXZEmuedFSG06CN%2B2tAZADzojcp%2BcQPtBGitiFVtcP5jcimzN4FuEFKEkc%2BbdqgLtqmHOAdu5KlagdvuGg4SASGjVN1B3NjEMkCq%2F1nHi%2B%2FpVWNWOy1IjAwzDEobTEBjqkAddBiASmyHCkJqcUXKg%2F6cduu0n2wuw6nOm8%2FFcsta69M42Wv9Tksiw%2FEK%2B4mKWyn6LzgsyAU4QHFYf59KBs7pZyBHfF6fS0c55R6uzQysAGzC4xGz539xvKSUPG%2FCCsS36KH0w1Z1sR6c5z2j8wVsYcbCGRkyqbgfPZj3eAGQLCnDLVvtC5B%2FXJj1fwiNb2d%2BqDDXIUn6FIQGsaQRNmWa66oxsZ&X-Amz-Signature=eba06e783b736551c82710ffdacfbf02351a3fc23cc9b3ce1f957d90fe49634a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
