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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LES2DXH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FhDpF8Oq8bh9FXnmtY7qQ3PRmbO%2BtE%2FkocTdPHu3VCAiAhhWQ9BP1pM21gbahPlkMaljCziTteKKtm0%2FVTnzPq%2Bir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMxQj89UrW74Gg8K1nKtwDsEOGMPyZwJzMaylCKwkDfPzb9YYLwwKb%2BRVzBNAWxDnQGAsFwIfZr2%2F5Kq57ic5WadFF9REG1eynlMcFxf%2FFcF5VqBtcW4VUJoBshXRng1KN%2F3ovFh8oJ7zQmvferla%2BMQ7eINJNHUeWy6Cmc%2BIfmGbZOf5DW%2FLrm13mGWQZr9pJRpAkMXfTUpX6uafbQz2ytRcl1sTAgtf5jvrN8ibae9DjTW%2BTxVs25yiz7wJKTUSvZtEftOgBUpXNUAqqK%2B88qhRjBHunEKqci2PspWovJm7SCHd0hFs1GMUbnu%2FSwFryWdlJi9ukooWdOnZsG5pHIF23vguBIC6s3QbN0fd0x093QwP%2FNbvozDgACzVsnWT7XSjRhioy3MvrqetnqYqIYA27e%2F65OVbiM67cnzbPvjCFlBRjqJRSl6ESMqECvKG5vBbv40VYG1T3gEdokKBdE%2FBqu4qunozvg60bmCc%2Br5hblHU%2FH4OnCB%2B7It1VmGDbj7LJkLp8L5QLecOdAulNnijnoTMv90pC4UR5l0JD9KHRr8yiL6c44htlolEb0bz%2F%2FA0V8pasvBohejQDj5MhIKIdyxwIaIIRQBVnX4O8X%2BV9wYI5UoeiyDNnyHbcjgriS5SM3M721SJQ79wwkc6nvgY6pgH1eI7EdhNh5o8mhJGT88OuW79LrA758iipxDTwvyBOWLDJkQlt5kNkZyV8f1ch3aipJUOlYdlZ6tKCQaSHWaFJR%2FO77nxOOAqfsLaS8JskJnUrCG1VPNBUcLEQ0yXFoTItZuoDh5Kb5T5bpR9IAs%2FYnYtbLbhjhMThMCL4Ou14qrbM8JW5aPbd61ABBFQbFTH6v0X%2BC3flSbPO7Y5UndzK1n19ZXes&X-Amz-Signature=623d3a80ce88af4ec68daf4d809cf531802065139653c76757567bd5b45a8fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
