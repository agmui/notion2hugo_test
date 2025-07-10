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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BRTWZTK%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaHju5LKx9RnTWmzY%2BGPD3Ybj5U0%2Bn8t7IR%2F2EmxVtsAiEAouXZgMvGybWhRo%2Fj%2BlwVc%2F3mu6%2BruzW%2FspWgFq3IHQAqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ9OnX8%2B0BhYnTfbCrcA6V9uzIGdWgn8vHhjrGbu52qNz2N8UTgoFNLttM%2BDjJlQly9Gs8sNiCyrHe04%2Fv%2FDi2sC6nz3%2FXCidwI3HAGjHoLZ34Js8sFKV32RLqIQmSSixprKPbP06dgObmqCfXrLCd%2FCv7vuKpWWkPDIqkBHLGQKDlAtJCYb94u%2F1qCVKqBRU5iWcf16YRgNANw9uFrYaOml9veHr83IA24%2BEJutZaUa8ATK3sf9Uhwl2neHtdiNfSPJJXlo%2F66IdwMmT8pPb8UzEqadbqe8sQbqI2XPWA%2BguwAnX1swnQ3caBWy2Rqmv4yEb9GuCBHfxjxWdT%2FHhtTTJovr4dYGfvvwUCCvhc%2F70j7E0gbUnwiTrb0eQdcns1KQMWS82ZZCVFlSoOYStRCJ%2Fhkv0EJWFg6Drz6F%2F9PgP4oKfguJL7q8RV20Vl70XQgueyFmk2UFrTeWwp9W9QojdIwyPc7ZPUeiCvmwM3O%2FES3I7eR5xUYSpPel0LT9mwcEdy0OhSYnc87MpD%2FJ4mGJVCW5zS6deBHfL6NiZ75Bi0y%2BXbTkDsq6aL3wWr%2BCluhsxOE34PuCNqM%2B%2FSql3HgPIjEpp7%2FygJXjhzzT1Rtwb8i9Z2MeqLEFzouMGqaCmZldRZOEyYfcbLlMNenv8MGOqUBT5z4pMV8rQDodUoDlTNIaI2kADF2Af6R7KuNqn0a7rVjNpCyX4RmAu1ERefUJb6ddkIKGYeZ4KdK1tuvQmm1O0DP99RrHJYwjbKCtjeKFzDgP2BIcOt2TTo%2BpljDiYz1%2B4X8q5oSXkYvuvK4VXnMohTqmJlJTGvfZLBGYfXRLJa24xCj3HX2ZwsVVjIJusc3ygNf9SkKZd3PMPdgf4ZvBh0IAn8I&X-Amz-Signature=ffb50748fdf75e2b75d567923ed212e776c197982b7073542a682e3508450317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
