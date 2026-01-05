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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXPDW2K6%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDefXAmHM%2Fjzza7zUjXTNeDj4bTKOvMIqu5ohvT6kqHPQIhAN1UuIlESC3JIOrV5zpTkcifn3RzAQT8Ra4PZZw3Co91Kv8DCDYQABoMNjM3NDIzMTgzODA1IgxR%2B9XOKJqUuxi%2F%2FOcq3AOJkk6B8QC%2F0DvhejFJv3zXs1Nj%2FQIyRMvqdGG2%2F5zGX6Rwz5OqrAN%2FnwnFpHXKXd9xWgGDrJbkVN6Bx6tUrGoW49cz%2FSO%2FtEF5NaeaIaeOZmYGMFvRiMNn5Mjdpew%2F5MgZgGDeS0mThpgAZlv9fcPTiLC3gE4kuyd1mr4%2FYqCWYi5K1BixiiI1V2JubzmdUxR7F16O2Dvrnh7gMOq6Sir6GWLz3hig8t1FyHbsCMJ%2Bn3ChphC%2FtC%2FtvUdDT2b2GjtE6KBRlJgeYXFusIH9ydP0yHQ8CuoAgS5kbYfQ%2BsJXfKkI%2Fc%2FK0hn38yiPPn%2FpOBaLFqFGrzhDY3DeHK7xlm%2FCDhb4PPwRIMJndtKSN%2BjA5mg6aM371cIy%2FniNSGL6ydm4uUS001JYdpT2u6UYpnJXfLXb1JSl3GfvcPiLw4vODXoZqXkTu3rz3mbr%2FfWb8XLQAMPab4z1J8599SQ3ZeYoJscue0%2B0y5f3daX312Kuz0cMcXjuthuLOqg4XppjdcdWxdDnYnmQXHVQlzdVIWnFlDwZl%2FUBMvdfWAdZR2%2BESrmdtsbSf%2Bol7oEp6fD%2BaE%2FZD%2B0rY1aD0XMY7jeS%2BcMu6Afz1M0K3DOaKaoDiWQOBRGlrZO30git%2BVX6vTDHpevKBjqkAcomFfFOl5xlOU%2Bpny32u%2BkB58wYctGPvEbylqSZxZvhKaMBcnwuXFeg%2FbM%2BVArSbO4O8TwHDQKGokKhgzNJV%2F7TyHF6ZiXED5QhvZE5j10qQQvW%2FiMaZsMZaXOlwU4M9xKZMlCfk0TT7rK5sMPOE4o9l4MRIW9%2FMnWHzNqPG7p3SPRV3JFpGftFnienOBio8uwyk7q7I4FP8JuuZUhRCxPKKKMF&X-Amz-Signature=4112d7b207bbf3a9411e05e5e1aa15ffe750105684b54b411bd2f1623b2c1e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
