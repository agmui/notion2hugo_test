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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRCYDEU%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCDehzemiG6NY%2F7dEU22yYFd%2FF1FRbR%2Fv5ioxgeeZKXewIgOyusWFd9kseX%2BPaE931gMQ5iiwq5yUTUludvtI5Xy2AqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBZJq7tnaN2v8EJYyrcA0aBF6C%2F74vi%2F95D52mjj9aNVq6MtMSjehcA3Jpw6NY%2F7EI4%2F7HlUR8d7ZZq3xC7hpzPhhmkZ52Oy%2Bf4B5X5QKqSGSbVznc2UuolaOHduIzRhkMUzG1eHIdWliyK4PzDkMks6u2%2FPnwfQVKqvoA2%2Fqo2ZP%2F6AGnfTEVMZGs6rXGGz6vtSUBsEXnlxjMqwEWcJQnGdb0Xzo6SWXxn5rLL0gT1i5ho29Pgo1gy%2Bb6uyJbLcAtUmAsPKq2gM6QFDnesRxejaG4%2FUx8QawCO88Mz5HqzKmbkGHEBiWOd%2BVGYa1oZN6X44mONdqMzzwJDaAuW%2FJvgozpAJIZHtBONK9afut8TE0uI9IKcLjGk98b2V4Odhv1L4gtAnCQnbuZfQ059wFTe6VBl%2B4r0XqOf5bMefWzYJj3YhVTFQw7ZK8ZWpJd8PS9%2B5qk%2BfFjhADEpOWQcudre4fOChsx%2Bcc3SBUOOARzM5Y0mqETRe1EgFQrAjEI0GxDwsFDwKQaDU5%2BKiOLqtksX%2B5%2FaBWeraRAyV8LoghfESCao4gL2j%2Fm49MHgKLsAzFG8%2FUYUgttvn2AvHKA430s7Bng7wUD0hR%2BKGQG9LQqGyq8BddVT6vqgxyMSwy2qiIilNtmNHBLT1e%2FVMKbc1r0GOqUBkvCAIa4Fdq%2BTdOqswPOVysuOLvRKs0jT%2Fso1D%2F0%2FQ2ndiks%2BgrDgcjgrigizbAPaedB6jcDwUwFLe8Ev%2BCCjscy8xYTk0PkZayYm1fKLBqHI1mUpGbP5KSafsRm7Ws5vfZrbyNtdejy9rFugPrK1Tk4qo7ipiuLhh2bcgm0iqdzZSA4hN%2Bq03IkRI3jU%2FqmY6lPZmUd1XO7Ne6eTYnqC1sScTEq4&X-Amz-Signature=105e70aa795e62eeec0b799ce27e20664e74129fa605412b0ee8752480fa9135&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
