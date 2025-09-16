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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BBABKZJ%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIF7h%2BIBnTvFd15VkkYINU3Smv2yKmP0F3iGId%2BC2fgUVAiEAnGUI%2FFR%2BxHqKj4OflRi9RvO6WzXdy71%2FdaJ8NkXQ3C0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6OeQh2%2FWvp4q59xircA1l2z512ouXtn9yEr1MZ1XeDksgZZBmF7u7D%2FQrvp2rDWKAZejReNb76SDTV16sL2LCDo8a2YJ6lN0Em1HDb2catCn3J7dnKTeK4KOPCXjVRmciXz2Io%2Ba9oYoY%2BdtvgFbQjS4qxMozPk9N7C2olKlDBLnTPP0QITP5rVqSBxN0q%2B23bUX6CyqYn1Fgj2umbG3M0xnGgbcbsb85J%2Bj5Kked6f1ccOAB%2FihxlCH9zHp%2FRJZH5B0lMApCeaYGGQkWwWDnrJuzu%2FVAv6B7NVCWERrPkdN9TXfbuRO1QekxajA3P5PcaqvAkwcQMoGTT2b4P5yrXh71RAfmlCC6%2BMsxhd99fBCJmUbm%2F3TdlvvoF5%2BinMApw5JvrpmeUo4aNyGNcf2WHMxAvauvsySGKIULcm3JiZNPC%2B0qrNm4nUZgszBuxnzO8OEI81%2BP1Q3D85jupjcFWt1NRvvpae3uUEVlfN6SiNn0Wj%2B0oFcxMCoaaAJzwyR42WwvqXzvxZDQKhemuddBCRjzwO5lEJ%2BCCqwgxH3GkCeg1SO%2Bv0A%2BPfHu76so%2BpQFs6SAb16at%2BzbfO9FJ%2BrjzH9v22jfSUHsbg%2F9utFyCMa7PdcaZd0CbNsXYvAIve2hLPCTWJhPHtOrLMNPvosYGOqUBY55NXfk24UavHo01P3VgLBAVhWOeV0HEyt%2Flb4KGXQWUDDIeUK3bHQl%2FXh9EFcbiU5y8O2vwuC49n9uIrqxD8GnekMHyEh%2BpXrR1iBoqlD0inlwmWTe74jjR%2BRLVuEatrpncldJPr19z7VoUjU9Qq1OiZFOC5utkPiuEU3emreTae7M2LcaVrKUj5k04HKIFxchQchwifGDZkgyIa6PhVn4LchsP&X-Amz-Signature=1f55f9523a81715350a7c07f7072a1c9c2ceb04a9354f1abe02a153c477bd498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
