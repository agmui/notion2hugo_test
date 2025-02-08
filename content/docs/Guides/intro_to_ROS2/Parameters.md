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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBNDR2P%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDQ4SlByUFfF88%2BCTmR4QXMGMntcKJ%2FJL2IaunNBXMGzwIgRrrgEWCgH4%2F0RqV4rtCuJtLELFb%2BsyvfcWYAxbGZTa0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4aghlpf4g1%2BmDCPCrcA8W6Vo%2Fn0euV7vWb%2BIgNjkVjXYM%2FHW0gjTpAUYZzpeQ5Jwh012lljVf00ZfB9rerw5056svnwubxpe1cFxHXG5dP7zrOeGLUs9ApNQUhudd0gFcK4RFIKTwpQs4IM%2BEyvXx6Sk35IAQKWSFyQ8XT19sxgHN8uFUvjSqJZO3bn1p8cgGBpS%2B1P9z6lmZbeBN8FpdrZKE0GJC7IUfRyEWamKsKJfRINUmH0DHN58WtECSXppvYFTE0Qh6r9rJ8Ous3ppIIqGmB3A2of%2Bbm2H3F8L5G9AzuzGha2WhHvmBIco6KfH31%2BmLXCLefC3nHPNHILNW6IImw%2BdVdesyQyEhzGoZluFbDA2DkdTx2thSNKoV5CJ34heg2p%2BER6DLk73DMX%2BJOvW0rQ%2FFvuesM6jdM2Kxlmdaw74pmMuabypVEi%2BKNuN%2FTLyAeXNLq7Cqj7KSYIYlHBh1Q2Du0apmxvNd87Y7K%2Bu22ZJyZhd6%2B%2FD0t5H5b5%2BYQSvjAfvMTHsrgP%2F6rD%2FyhBU4zGoXXYWn%2FAIHp%2FOjqBylqab6y0POw038o6yYw7GGtCWjflFUNSjJ2g2bU4CEx28vEa6wzR8BCJHThH72mUURlJbV9iL3oeavdTgF8fH2Hn%2FrQXIbdbc3rMNKHnb0GOqUBSsN7ewfBZ7lEbNBC5JorcpqqV09QGdjEosNzsWC6C%2B8m%2Fzb3s79ylRetf3OZc6YhnSv2CTg4W9%2BPWF8jRY7qzq4XkXmBUQl8%2BK2s9A8ElDFbx082StxunoAzoq8FaDqz%2FwZ9vUBjrIt%2Flmm9653qUOnivdyIWw0OatJJFrHgWx%2FX2kVBUyJA8w%2F%2FkmPBRzaho1pMtXa2GbniR1K%2F7Eh3OH56tgUV&X-Amz-Signature=f9b61e0c2de2ef1bd7f9e98432f9f07d4bdc507d9a2231d447d2187dfd1b79e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
