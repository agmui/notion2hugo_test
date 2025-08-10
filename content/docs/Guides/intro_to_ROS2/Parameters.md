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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KXFGLE6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHBlH4L6Fzv8BiGrSDfEVy3IHGf3b0uhvEW5gSSe5FmQIhAPeear6KbQMP%2Bl6Qr619X84dOWL9KVsRnLzHfysEryCcKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznVNeUF3G1mmltXH0q3AMt78NjSDKc3kolY9%2Fi74x8AocQycNz1thSiXRONoUgOR0ba4hN3dFIyDQBtppoGxk3%2FJsC3IVOv2fHji27f%2F2eA%2FI6Eokk1q%2FIqOyhkxsbP5lS83TNaHtfT1EbkA7y1uYv%2BF8vh5itf5VLQylmUlK156jBkB4JW5MB6W5mnUY4nDw5bEM4DV8jWoeIqzUPlz16x3tvevtYZzmlbNhn7bqtIeAgS5kBWQbNQjYyYGb%2FvV7BEN3usKXycfxE1LrLDVMmTDYRugwXfkMTRl%2F1lTkVvn7yM%2ByNJtqzX5L%2B26DTTyLNQzY7X2hfBfWefMdbjEfvgorjv4wb9AqK3WCKCsJopHLaVdQ402LLQZrstb%2BgMlOTBSm%2BCbP%2F0cWdwvdU07%2Fv0cOF0gnTeOhwS5ca8qirOr2dUN7VMt%2FPM2oW5U7q6vjxMXlzYpBNNvTn9kSym1tHad%2FdiZSyEboejyvRgVDh8SLK%2FdgvMRL5Ts1j6BrJSyycNVpaYIzYsmz%2F6vYXm%2Fch5oYt1YpLWPKRVjcVWQoaUsdb5fW8qFMmPK2tatlHRyihL0yqniXt7HfPx6hBe8qQJlow6UXDnggDELIP0Ll2haWbVjqi38KWB2zk9V1eVvRfzaZgy2CUS51t7DDHluPEBjqkAYMUG%2FXWODbQ5HeiIipsAzB26Tk%2BuiqM%2FVrrVrIE7sLi9hvlYfzPT6Ekx8vnVZYcSlJVvJP8TuKvLUlW4lrC4hxo8dnTfWYnLLgr2DQ%2F9t4neiaDkk2vz8IktwjhbLu4QxDfluZ0tcrdf%2FCv2C9NtTT6UoT2gtTBBpkDeGqw4CgEHEWYsKm6UKXAGk9jwGaGYLtMdhM8gcFHLs6z6Sr%2FBauk6nTy&X-Amz-Signature=55de9f08e01e17b7afad15b057a6c7a6c2206a12b78a200e6621fe0702ce9497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
