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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIC6WPQ3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLcm4ebzkKEPnNog9TV6mCvwnnv3wwTGkD%2B3%2F0vfj5SwIhAKl3c3N1symJ6sXQN%2FlFr%2Fhdw0cpTUHVQyBeDKw8NCreKv8DCEYQABoMNjM3NDIzMTgzODA1Igz9CzjEy1E91BmVgs8q3ANMZJ8xw3n4up6m5FSSDriIDIrC%2FBrDuDGGY3wHKna3dFPl9gqV3I6qjZtVN45ZocAxaVvN5eedHzNtkUbphQIf7ufQ%2Fj2wBhH%2FfoqZVKnFSAn93MN%2BpeSNjgS9b3eJc3EWfIPakmbuaXqvLGwD2Pgi1O5iphdcFQh1p1%2FqywQiHq3og%2FHtDdMfzQpOzbPEU7YzB6RqlPYncF2OWIz%2F3xTCYmZ5nPZ%2B1aJSHAVj98%2ByXjNlS%2BuA17ioVQg6HR%2Ft5DGODq3p1FWQaZmhb8%2Bu3wMVq2H6c5t6GDu%2BRv%2BPrXigg2bjLIrUNfNCw2WzmfdB4Wh826z13cop3uyg1JZY9oylLuT%2Bton9NCbZQhlqSXmUcGCWKAAgxR9Kl%2FpKXU%2F88eA2gcHoiaqD2WMwwomrElR8goeMp6H9NpqT5DyrqedXaD%2B5%2FgNZSVjpHJ0KiFgBLOJvXxN64J%2FetX7CHiE4GdR55gqb2F6bHRk4hjrp7VjSX79zgu4IXa8XKz5%2BNj10qBCZfeXr6hOFlUOs33uMZzRGi3AWi1yEFOlKoOoMDmvfwzajKKBY9%2BBl1TeSAIuzlujW7s1qe%2F4nhYa8aOdrDbMqwt8hf%2BIRf41gAWnzGMWC85klb8IkzwHDLgnCOjDy36u%2BBjqkAR1QEplqa0HAQKOU9v6J6GKqD2fdqmO3g03ASaIRAUGkm9nY%2B5inasS4tXGR807OTjqMgUU780bfYnViz3P0nrQj1L1ZOIbFIKPLudCvNRuMLnRTTKCYncPiQVv%2Bld%2FpLHOUDV2OSoHg3NVxa%2BBHAn%2FEyFZO16HQvhAkuWkLPb0do2lDgmhaLEcz5Yfa0J3Nvpd3xKZcxfrAF2Dq1YjP62VHhxAI&X-Amz-Signature=8738063a640b47ad463e6ec879a720afc421d0b8270b123db2b9a1635516c37a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
