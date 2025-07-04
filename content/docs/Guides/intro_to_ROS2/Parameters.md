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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NB7T4UD%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICEqTMDjxMDpkqxd7DbxV03Z0%2FCmXhba8CbvnCSb7gXKAiA%2F0TNqgBgsr97L09nNqaBU%2FSoXLFgp122UTwDoL9Eq%2Fir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMRG08CFimiOhDzaG3KtwDFLBQ91tz95zlrwYFXJUfh0uoqRs%2FU3ipaEkhssjbrzjnixpdrkzrkt3vW%2BYaAFohiKDmQ%2FGwCTPEB591it9%2B6%2FU8mIDjaSQ%2F5lx0HmxB%2By%2FRggZTCrWOyoMXsxnP6E0f26ttpJS52WruEX6%2FyWUHR7REeU66Prg5TGgX6s6WONuj2kDioLDS5BUOEBJEYGO5iFUz1hEfZsrVL2KmaAtgPLMJvquI%2FseLVT99jRR484NaOWmMsD3fZGViKMP3HQtgH0IJ02htZ%2FmULpGc2tYi59gwZDAc8Ai4R8rDTSaLNkLfv0h6o6BRGZykkTElUTfHENyqdBdKdnz4I4oX3FXw7vzdlznyeBx5j00p14LjADCpl6h%2BZ4hRAgMc%2BUPbXeWMbIScIczMK4HMwGRUenUt%2FOXSQO4UNuokCo22u2cDlDBA2gz3QLmkB7YdYctWmUcZpdbbXNyONDxJoJnsbJPxV%2FiGdOMmy%2BWIP997z2ZWMzRiTvEpDNSXg3RxxK1A5ZvHx6j8LZpyxiiOLuEWr7WoOsmiNNu5dvc2cHTSoTbr5NXc%2FrZB6IRRXrA5AfG7ffmb0sFnh4Kn5Q%2F%2FX2780X7yX3H4y8h%2F6eXYsHxmUwjkZHpZTCy%2FPvE4ltW8e8gw5Y2ewwY6pgFrpGlqGIUFB2Xct6FF%2F34mZjlTPhylC0pmsqwnByx%2FrQaWSs%2FMkjukzYLqQnIb%2FTlgDuWvm1kk1p6OHx0i6r4kz99QP9woQY%2Bjzf3ABrfHT%2FNeWT%2FXCn47V7%2Bd9%2BYwZNggEAe9EeY5ebPFlCACJ%2F0Asog5it4%2BlRcmqY7gBz%2FSVvge3nON0jzKi6XQAVgMgOuTKkNfj0JL8vU1sp7j4bXvcwTaH8w7&X-Amz-Signature=f30712c1b2768de19537874d12beccee87b2f7e7e9da7a2c7406af11166f6d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
