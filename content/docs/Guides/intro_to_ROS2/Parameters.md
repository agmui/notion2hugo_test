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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UNF4ZDQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGbZeIa3gKuLaYZo06naOQ5dP%2FnX1sUqPzI79qyPiJgIhALnxMl%2Bemad4PJOz3RgMduUX8Qfif0OdGHFgKKa%2B8EWLKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzaqFkQaPZ%2BmYhdaMq3APgPU4eoJBAin8Hg%2FGn67hbJvmjUV4H3NJxh%2F2%2F3touENs%2BfOFLIVer4mdMC%2B1InEVvOg%2FH6WVVcQUusqQFeuM2PPYpOQUasHL4utdPnaccs5Zqtn83L36cKm%2FUtkF92ZDuKg7k2LAnBfpAYPPvUsDGao%2FJ2Gx%2F9xG0t956oMSHYw46R0vccEgplcfU0peL37yvjOyI2oi8hLrOHHEtbHGtNcGrJ%2FB62hvcC6KwvvEvx60Y97KQlvwdk%2BPZYO1%2Fuln%2Bh3t2OT6rSSv37WjVRZStsq3xkT3LcK7%2FAszjEDdKrGMrTQePtGg7LzkAyr34g58h6p%2FGwM2Fe%2FcKD28J9WOtbuoNjm4ejCWzNr9T6C2zUMxxKLdyuBapcrFJFDS1N5jKm8cMVTMcqJ2JpNItAQB00cqjDVLo9o9NUUgsVxQmV7yoUfeMlSCfyyJ7R0WmohRqnGM9%2F%2FCxET3s50phf%2FhObfrnV%2FUXOvQEorVJdEjmCgpy3B6LuIbswcdr6ffTJVLbW6UHNDWaIx01pP%2FL4lmfmKeyC11%2Ff8LE3ydCrKxrTwmBwNIIYBOPA3pAxQeuUA9v7rEH3nSKHOX%2FOU%2F%2BK15py2bOGkJgYk1YmCGMLHIXu%2F%2Fpf4Hv25Ud%2FOc6WTCf%2FbPDBjqkAY3JRWOpuETB5Up%2FoUSeYJH%2BrqmDG6grCKz9K0bKL5MWO2%2FTiX1CuHEaI2b3EdAluezpVbmjx4mhjnhD1yw%2BsQk%2FsftqZBkmhJOcXWQMSJgImVKUKx8eCI3%2BYuc8Ub0ld5rysa9C7Azzvw%2BQDR12LyOKPPErV7b5BioM6JnTbSmrMmWFXsz3eaemMKvReuN6as0cjVlgkqM2cvYtz57CTTNrMKTZ&X-Amz-Signature=a4fff1a4dd64932d4027c7e8421a468e3a46ae2bb79c7328e4d3367759ac35f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
