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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSSVWJL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdlD%2B33wKPzlUwRwfyxj7aNY1cfYsAAjk%2FfzV6tDvLkAiB12ibSaW4LHFSP85XF%2BxZsPEtkgq03aMhtDSp1MLcH8iqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5OCyKU1BWYhDe7%2FKtwDAPSIxufn2PUWqG0nZcidhlRyaDN6jzTaF2rP%2F9t9az18UyWpjPEz7pOXrn9Q0mbGMsFqqjsaoKqx6hELolaJSQGYg3UiJQ2PGgdqZ0S00a14g6JpDL9CmPzgxxer1WIv8HhepjEuMccuUB6eByLlJMrPfqGT0pEpEt4SUTsZT5m26nGyr%2BiBdHLoNiMgKHA%2F3qVj79k08yyliW98ucOPM5Nf3gfF08fk%2FJhFs58g5x2WQZFPDurib%2F7nJlwp4j5yjHFN%2FvRjPMK8eZEknweI4g%2BwaQwfrPKD768ulJai7ua8Tl1P9RRUAKyvyIW5puuvIynrf1s8joL9qdViV9O2hWoczAMsKghaX5m7nLc97YIUDDARhvpLf%2FCcOE3bAY3t5oCokujD%2F31bqvS1O%2Bosi6hZSYKzWmlbaXv%2B493WBiF16mpj8kuFioRf12FAWRgVoXp7RZOrYrPqAtK%2Fnp4rLSC%2BrLlPneJ8l2r3VvLbU6ReKQg35n8h%2Fh8reCP4mb7gmUZdDFoiTG7k5NZEuHwAdzNGlUJ4iZwemyBCywhpIDpxOK2kDoH6HkVqsTCbhHKP5vS5IX8LJHJLZ%2FZ%2FyIO1alBE%2BKJojzLsYKA5b0eZD%2BbDj7Cv2rLAIVohmzYwtM2pvQY6pgGwyeT9rLuBgMpf9anRRKPPBm70Q8jzjfXZ9giH084BuWL9HIzvs7UgBJg1jfYdWXwFx66DqGU3fm3eWA8kRWeauKeE21AMy23FtQg%2BzCq%2BEDO4Cn4QxeS5SWEb3l%2B6AfdvlIsnbglHM9IRiRv5uZ6gxAnmHW6%2BqKJY7FAVsOLH%2FIwF5z6oZS0kpg1XQ3j1xZ%2F24lrRSVdk1FlBYUvKMnE4CzUIW8gw&X-Amz-Signature=dc40f58a45a780b12156a09ff5d52252533beb71285e8611341c9863f6fc6ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
