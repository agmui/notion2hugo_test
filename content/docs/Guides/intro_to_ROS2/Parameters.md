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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBGCWWD%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHYFJov%2B9XzUsDuUrHLCKiAOU4fENFrumpRrN3rjWngMAiBENpj5eMjpOgshrjFiBDFeE0x81%2F63RTEouLg1vI1kcCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXq3sdSY%2FVmlfH3dKKtwDylFLoYNjFbJCACNnzryxsRXxrhJmMLfHgSdgcM%2F%2BPxzkPQChhx5qw6Efl9oTrGZAIru6sHlYpXVkcTljLSy7eZIYdx%2FPRYQvXjDveyhjAdqaNY1a2%2Bz2ymVahCohNSeuz7GEylLsshTzNM7NnmGRgmkVyozJZVC1B2YicHL3LGogagYQDpwSLZnlXrqEpfXGDYFeWXu3pu5fvNZSOsmpsLNiceLLeg%2Fv%2FP8jij1DayGhy87fvXl6ecJWCKotWkN6ZLjkOC3KsjWT8u6mQRSmRkZERHZvODtHBlIaKWpPSB25RV8A%2B4JS%2FUkQCWAkIu4vkg%2B3AH6%2Fo13Y69WWjDbjMs7g55UsYkF3DHnRCWuFxvFa3vg7nSXitGBxBQpOwnBJJ8rDuyR%2FV%2FJrSuF62ZrbQ8XeR2yCrsQZcvT206%2BkADYC3ed%2BrS8nm3o4Edoz%2FJBk3mwkMTr5KdGPmE5Qrwfb%2FUojlKcaCqZumWssPHoqvu9G7bhI8XxwuQQk4YxLIpDQVykysjCCPP4N2LvoV5A4bmQnLtOtESo6b1%2Bl2X6P3kJMtQxZ2lcYPKdbUPWsee0W66Xr5xhUl%2BuPvnS2YEZl5EE70ZgT00C%2BwS3imFEYxMO6O9LD7l1D4bGFJ%2FAw94f8vQY6pgHJbUfvhlTwvVm5nLHDSbXcA0MFLHN4SYACl%2BShcwHbxhNSBppYR4h7Btq%2BLMxuM0W76zYeI3oY4EmamsRmxthD%2Fn2S4vjPy1lY0hCc0alQMfwP3AAWrYYC90oSR1kfKA2c%2FjtmMcLx4qJGnTxAl3akeTnVshyDJYwxNdsySUtK%2F%2BDlbKuIe%2B%2FWd5Z9le8C7yOrsNQwdHxBwTIUwX9ewMuYe2w4kR8w&X-Amz-Signature=80510344b50202b5e132c7a6383ea43cb8c9477c889729a667bc07dfa57ea978&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
