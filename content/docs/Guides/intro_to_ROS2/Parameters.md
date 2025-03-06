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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXKR3M6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7jcuUiTK6ddBASQ2nESC3Yg7ecMpwFlPUULkx5%2F8aEAiEA85eeOQFrfWkiq8pFbr%2FvCZuTPkhB93BxPKA0xZnqsusq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDMD%2Bwv6CKBVklAQZFircA06uwPIYrhlPGTJryAu%2FJs2d3m7hJkqFKdHWr6%2FI8PHqBJItjXqE3neKHhJrHPRf2F23sv8UXIFiedwZ%2FKYohVBfceLeBxBchlmNev8OXsSGkNT94HIuwWDgEcF7gmoXi4zoWjgnEFc25f6n32eaoeO6CJE%2BRlO3GKjrXAir5fnYyLmvwVjpc8fyB%2F0CWsmsZdCMjoskN8x2ZY0w%2FqywQEmRdp1pqS1R1qMjMFYbg86C42RBCXzqqqIqHg42WZkJyKWhtcT2qz3j%2FzWPHYi3yMCltd%2BjF1TfG1M661szclKWry9%2Bpy2z5XCIpBGF%2B%2Fi7ehvuwc%2Bs8ZBLzcYr2Dwa7vunCY9K1%2Fe3YH7duJm50sMmyP6phLUp6pijQES%2FsyiXTrpe1TaKs5L9v2u5RVONZfO5%2BTDsxnSDBnHH0x5SUGSMwpSycO0bybQ4cIxITsOWxtm4md9WWPUbtJxuiQhp5lvGqZJCeHovN8wZFwN9TGVOVRkGVhpEUi5GhPQIit8kV%2FRfBLyZ0HZcFoy3MOSr28X8hX9xbGNx9VoRSwN3%2BF5mIsurpI0VMmhfj3%2B404LZpBvj6StAIAxfhXp6AL9aRZ0ONsVgQCowpDBoHv0wgjKFlSolv841b6Sn2DkcMObNp74GOqUBoCl79Kw6pTpLFHU2zr6G2r6Qfp%2B0PfmDkfxgw6FjO7b%2FOe2MKuLGHmjXOMO5oKbP3IQclzRoprYdQfGhRCanV0J26J6T3lATGnHjW%2FTbkhMQlMne9ZQzxEH0tObOLoAg93gxYug8pDmkk8kUPhPi2UmZdN6kKxWY04pGZpuFFcIaWRORFv0BKeWNHILm64yP0LMd5egknXmC8EUjBuVnY3Enp3%2Fc&X-Amz-Signature=efd55f54b7f659a98636c7c9c259b76e32e82c084bbff66b640fb4aa55d46c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
