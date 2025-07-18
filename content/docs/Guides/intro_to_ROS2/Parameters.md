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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ABWHDLL%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCrfbbmYa6%2BE5heCF%2Bn3gRnZHO4oeofxOr288HEHzSyJQIgYYwGMjXNvf6hctcQ6ZFrN%2FyKvH2fMrsJ9sUyULgX%2FTYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdv9eidEZAFcTErvyrcAyEneSAHYU7Bo%2F%2Bd7IG%2BubEMT7Xmaeoms7aRZorfa1UT7TSTrXu%2Bqsc%2FswqFjBNui%2FBZROFv42jWUDAtQThllw2%2BiVUomR3BhmjU4tyi%2Famhd0QFJ8NJxxdmhCzGGsO4iKe0Vve%2BcLeerLKZCf%2Bd0KJwnYDe7K9%2FV1UeFN0J4EOw4qfNV%2FsqlRPE4THBRsaQ3%2Bflt9bNC1L5jSy9SMH%2FoYFtXkUk81NCtLhD31cSGDsTeNMalXsAaf1aOz79Qtwe5lHLlgBdGKJUWnFCms7MXhZuKZUEIwlUL0C6GDJ7Q2GBmi21wW8vl39FlyOdLUDJOhWzQ%2BLGpeMqeg7PHKDQL0U9uVsKlwpfpWacTBX4h%2FlEnr1wJ0%2ByI%2Fap8pcGJUQb8a%2FqFYzF0XRiXUWIsGVqcvOd0BRlOwkq9zKa7RryQEG%2FyHQA8aBvF0iQzn5HqV4xjmiBqlJ2Z59fmPlED0TJ%2BEfxEp4Kz%2BEIM1Rv4mYoAZU1CEkQdHpI3ikDVFYkzQ59Xb1%2FeTtHQy2SuOW3Sve8qVj2Rz9GzBAlB5%2FEHGn41hWkSTHUn2N0afFmku40Zd007cQ87bw5ykVdKOfJPbfnpyyy0d87axNYFTODFEwUYN4t6gOAi0fFLBPwSO9yMMD958MGOqUBa%2ByupD8duLI3UXeHkJghUxzoy48978uPjh9Sql278mRifgRZ8ZBmJFel%2FwPNirBQsYyeG83fctF3JnwuP%2FwxzTjqDJaCZHGdJ8uQsi1LCxsWtyasvx%2Bl55HBKrItBzFVbB1tvVlw%2FPhmDuk0CWP5MXdUtzU5UdU1pf6mi5MwMC2uq%2FLot5W%2FxEhuIg2kR6PZg5ImLGKH9S%2BOxwDdam2EYA7Hs5vF&X-Amz-Signature=a351e139ea145a27190a6c8bb5995f61d2d89a15d36bfe023758377716f86a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
