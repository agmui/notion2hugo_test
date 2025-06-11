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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQYS26V3%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHPUAmtWR9V%2B8mHqsamg8uNIiQ3CDLLE4p33opB2erUIAiBFqudwjJUAkFItEw4N1W61ac6p8NU2MST2CfxSgqn28yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY1CjnDhhweEGn9QqKtwD51%2FO7BFCCkYzb5m07ZDOfs7R%2BUNmcy3wViNVmHyD5igO1oFY1x8X28uuhsHEnWavGGDw%2BJfmzoFPbD2cPJIjxL%2FJ4qRi6VHs%2BSc3kgCcelGLMe7zVdUkgXI3BdOhEy9OWTQ1erT%2FQD8WvY5O0YuvAcSL0uGVFayrYxKxH58Cto%2Fh6V12KqG2av7uDug%2FPW4gPWuaXtVeMhzgh%2Fl5jLd6uCIsa0HjzaVSs0vRBdVtMV8SSkmDlLBShvTg1H8i1AoyeJkvFi9ZSGml6u1fOHK5n000KiPeZ8w8GxtGZLIT9D8wdjl7t%2F%2FgZ%2BA9An4FR4HEDfU7lG9vQjlqhSrnvz2ofrFL4cq4CdSY7x5%2BJTS27aTlrfaKxHkXMh%2BLMdBe85ocAwn4qnAdJQuk8iCy2a7NRuDBS71HRZesPXcEB32e7ZyPogBLw3Vdq2JQINM4xbfZ23RBlUEq0HS86ic%2BuJXIONhlmgaC4K%2FH6UpMKBo3e7snSV5W524HGGvaPEIPxuFWiiIVUmkE2CbX5C0GIF%2Fcbum2taS2tZ9PiLfuSSQQjJEpswqhxTMC70Y%2B68TmU%2FzmT2tJEo3NWDc443KH1ryyTtAVJZxob3BJazre2ZwSolCohpcD2QOoMOSJgVEwwsinwgY6pgHg0vuZmNbUUdvlEvh28hfX49iN5CV0y0seP82zQZZO00D3KXJ%2FIBxoliJ0mHME075YT5DhrarFdc1TlQfirbrX8NTZrwSn%2B3fSXybZbhYKXNm%2BJM1e84fKQa%2FaGr6B9tVSrAh8vplZASxKg2Dzp7wnmi25rCTUU1hSVOmmkDqmyIE6h6fPvzZetri1OZKOG7ZzIGbV%2B49WL6q0dey6yx3PWqxyCYb3&X-Amz-Signature=73a6e2905404d3cb52f6134c6ad301e14880de539e02c39c18fe65475c1d8031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
