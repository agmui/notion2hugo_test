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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TQXHK7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFiP6h%2BeeH0VR0VgB%2Bnepw0pUkGUy1Gp06UIRKhjsJ4SAiEAxoCvjcMPRFw4Nk0UNjCROU4RDjPaxUW8xGpNUNIEn10q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCjdHA1o%2F9mTcCAFqCrcA8XWibOwNyNIeR4%2BBLN3MBuXfuKy0VNuXDDykElBzgLRXWsMftrmnQcI%2B11KImHyGv9H3Pd3PGPeWlT2lz2C0ocajj6zOB2LYrMZzqUM8waSFTKECrSb8F7ZCXF19sFdcrDp8Ba%2ByfD8g2Os%2FFraiwj81zVVPLiNOroQkEwyrm1CE2xGjrNKsnOVy%2BJWp3L88sVQOzbF8PQHspAYHeX%2B0bBV17cJBrjEPeGWPJ7cFivR581X4xt6%2BvCAymLw6KQzPnPlO%2BibVmOqhzdaW4EHiynIaz4aWtx93gRJEbQEbYGr2ZxANHR%2BBNCdhjXquxGSsbkKBVvTEVjLFwbmkAu8NHmXW85OIrH9i13oJZ%2BrOko9cjM6FC5f%2Fax514tGhtz93Eolf0bJ4PRGtj3rBhGLHx6j4Rrk0PrR4VAlWTKkq2aoCLVxohJkaA2pOP%2F9fuRU82ZXmYUsgx7M4qO%2FF9OKq5SR4%2F71IQL6Q2WM%2B4qHws7sjgANXLgg47qwohsV93GfprOkz73V%2Bho2P%2BCmtjUGt28EQaWyhv6lSFlWWclE7IybDfjushnO82Z%2BEuvFzQtmxJtQi0FUpFvhk0U2ahCTsM15xhGq6ZP38H%2Bip8e2%2F%2FZHFlrYiGXoCaQfeFWZMMCX4MMGOqUBw9xLKiLvKsgqo8xS2b3Sn7aWvjUxxxIWcgMMoS5IZ1guOyHVJqSQKAocuomG2rw4h%2F05M9MYyMX5KyprGzH7bPla2TvTcs82KftJ1YMuT7L9o9fXQsiiigcOExmo17x%2BJg%2FxB7zV7MZfZPgU%2BMjLcCKcnWTAbqfy0TNFZ75gVFzrbpHn5qmss6tq49Ya%2B3OBwwQ28VQ2Gb8M6arOGZP8A9RuOKtA&X-Amz-Signature=8437c3022ebeb3b26eb7c89f1d6dd9d53a176610b9011daf80c5af6dbc3d3462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
