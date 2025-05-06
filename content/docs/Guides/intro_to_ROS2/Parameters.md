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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNDJPJTE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSdUY7WWLqquAhRUTkDLiuuTiVXIZA2rCV7Ok7KswvOAiEArXdHUQzdPwDdq1RtwdQaA0dPXku3o6dxolKm1rxixJwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEsvgzNpIoZCtcWtDCrcA%2BxxpK1FshscNzZMmE0tF5VpsNxmO9llDkDrGO3%2BalUfuNbwNTVPKaKwKicZgoZzoGgnipbz86lIodcqvW8au7WHydKxFm%2Fbw7hGfM1F4%2BQYaxuIgL9cbLlf5M%2Fco6npCzFXsh%2Bhh6CuT54LNu3R6xFDS%2B%2Bm8MBmdyLc9t0yYsNdWgRru%2BSVe4ws%2BREdz3LOiDV8Dd54Hh3u%2BXXVfJIqa%2BHGQOM45vEezT62f1dRz0oHSkSL7QaDRp3wk9dy7NmknecW5GEtF6qKl%2FLel3mSUzIkbXr%2FGLULy6cCFyD6YoqCLFvd2x0Ssqxb4pg6u09NfC0YYhy7Ymmcp01BMvvANF8yNF%2BBnkR5TiMkwI9tIE3wyk9754aSwxyFGJduddKNGdYLqE127bDCbRKEpMNuWELFY%2FilTsXB74mzoG4%2FXot1Q5QrppKMyjkL4uJXhhJBmJo%2BxqCxF%2BUK8jI8gryBV5cSoGvIjRyiO7hLDyDKkI2Sds5fMql9%2F3UdLEvb7Vsr0beoXs2L3G8ahAJS2BvHEZ9C7AFxXv8%2FE%2FJAZJVsXs4bu3FqwUGG2dpz7%2F1lai78U46%2FhHLa8%2Fw1q9sHyojeB8Mncrr1eh6qyf8UN4a%2B6tDpPG9SRsmlUc1W2%2B%2FwMIe06cAGOqUBmCpLjCzFf1C6EL3nDutgAETO6rPZ64aY92qDo%2BTlON2KcE6pPAp94BU23p%2F6CKfiVpcrnFfssyXwLoKrAa6Cy2cCWlG7BviGYbOHs9zcSA%2BBYLdTf%2FUbFaVjNC0p%2BhpKqI7enGVxZcfypj9UH%2Bxk%2Fz5ZvValHFtMmLogNbCdhlnnF8uIXmvKglFT1PLOkV9KwNRmZJbhYtDxZkg9i4iqq0E%2FQnkY&X-Amz-Signature=d3a40fd0e2bd0f1755876eb862915d5407b47eb7f0b8971c6375dd85dafa12cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
