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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJWMO5Y%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD69GP6rVGRojuoX5S7aAg4MP3lMKkFPGzeN5Iq3ZvidwIhALbrcQr0EpDFeFiZIvc3GKiF9F8MI4I57Nej%2BZ%2Fp5oy2Kv8DCEIQABoMNjM3NDIzMTgzODA1IgzHZnGwOnqpnds7UbQq3AODaT7qeNu%2Fw9MjptZhs4DXw4RnKoP7LP3MBJwoykWdZi%2F53d9Oe%2F6KNBHwT%2BFf10mjJ8DDRZRfchLCrIDhPCsAD%2BGu%2F2l6TwT%2BfE%2B7dqO3CmIkNKs4vrw2otfhK0QAH4kxOpbZvDahMhEAggw0%2BB3E4wUgNunLd%2FT8hiI%2B9RZ6C%2BB%2BOmSZJ4QrzZySicvzys6hYQT9wAovElU0ADjInipVi56mmOAmnOYgg2wqd0DgQqoWk%2Fg6Ixrc1sxfdqk2Q9mjSFyL3wGHkbwK63jufH%2FfcKMuc4J4AiuOaQV7tDzeyHg%2FrabKvHxZNtx3bT2grP52WNFqpjXwPboPmi5k5YFUrzKP%2BWa3LFqZVvrUcQ8Fv07gm4Eedqf9dm3ehRlkzimvjB3Exb0FyAnLdI8kMCFwW%2Bix%2FcTRM808kMXwARk%2BjfNjJzt6L2%2FntsBXnlm1iFSm1B2FZpQax9ZgKKTkqkz3xrGKlOx7My8VOsm8FXTXKa9UhWuqIyFjdOrTr6QfjDae%2FX1d5TgVHnoSBpUyYderexrdMkglXsTLBsUn2zHnDyTDBhhlNfoX%2BXCh8jFbWEDOt3U5I0Eb6SalrJtoTSIfFywz9f8HZEFbHjYO609IbkzcDtrS0bOy8aMqejDo%2F8i%2FBjqkAWhxKiVAQZ3%2F99WU6do9IroeOXHW3OIiVuhBzUKTI4%2BbXLp7L01LTRvHbRRQwhM2ovM9D%2BTR9MkVMSP3%2BEevCJjZfLNkT2Yd5%2FuvIhgoVXP0lXNxMN%2FJiISldz2YTn5AEGA9zAM5h%2B%2Bf8su%2BAg%2FsV6u1%2BovVNMMZ%2FLGRSvYtY6yntvR3gGVoHotL2V%2BvLtFdwdIyalQK1zbG3tjtbpYxnbthvUdh&X-Amz-Signature=5a96b52ec6005bdbce31f569d9e7e129fb2729baff00fb550fa11c9f136fab4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
