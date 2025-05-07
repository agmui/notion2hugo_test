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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEEWZP7E%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7RaWOV318xe2uip%2FkD5bX040b%2BEenfYM0j9vHI9DQHAiBhsvI%2B7YSdbLf%2FIV8gPUic%2BtGpQcafDUYwM3bSXrtEkSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMGp%2FL8Ae%2BclgkGqTAKtwDNKngW3a%2BGKndmILMM45qfWaqT9u%2BgKmRcQfN25wCWxSt%2FGJ82HvWaZaE%2FjSwOzUJzmZ2MAO12vqFZjzcBnVjPifq8yYlvkc%2FKXoQ4PGQXegyKcZuWeH0pMO5RYKcrcNELZFgUvDHVV5T5jsAET9fUu0aww3OKefruGW3DY%2F4zFnxx2UzBB9RbPBR3ea5%2F%2FTxBW9DNG6pr%2FiX%2B07nbtvh82b8auWFWYXRmDKOpuqLx3pUJbxAeJlLv7AB9EaHY5aYhN%2FIiC2F5SpCYI4GIJix89rki6FyHBxFBxMOBb7p8whZm%2BCOWFc6EsEJ7G6Ll3C2CI3BCVf3E7F9skTYQj7Uh3zGR26ChY5kGuLfM%2BRZZl%2B3ZSx5C1e7UYPx4p1NOKWmJOO8YHEtEQyomFISCnqKI5Gfr4D8LZ293zgUAHspMK1JS3V62dNS%2BP%2Bg4qkPPUUnct93j9EwopTGQ%2BMHFmwPxX2g0MHJ9FojHSpFUHYEUH1MmsCGF5QbnbdhAh4jn4toI9TEjrfxhttLHqb02Cm%2B56ETfs%2B3wGi81ek%2B1xBvLFxGj%2FvOdXOnI0xZ8Pt0%2BM44EpM3fKs72q%2F5hARWT8mr%2FNnqRQQfUex%2BH%2B5q2XJyRfcP1Ftl8D4fpP5edY0wyIjswAY6pgGKzS2Iir8%2FqHM5d%2F5WvzmZAKD4w87vDZE9yAzVaK14ONaHHOFb9G7%2BraWtnxYXKes3YEplaMCos23QMtGxSN1X5VhlhL%2BrqM7TWQaPoPCj64zr7%2BN%2FTVmz4DDBUpSuI3FZHgtPEjR%2FHmto1L1nBDraWAlKkM4MmFLXqvhZ7hde1If0GMGJ8B9f44WhWtiHyJePT2ZaeAkKs0JuWdppRNfn0PSdpJa4&X-Amz-Signature=ce4541be0286abdedeaada1fb2e982af1baa252e9eb7ac8fdbc813af56dbfa1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
