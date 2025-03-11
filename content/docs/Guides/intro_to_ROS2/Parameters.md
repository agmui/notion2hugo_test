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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7HFH5GV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBAt5JjMcv1q9oS34rY8XVPGcDxMK9g%2FMnpSMo2jCBwKAiATvCwejthZwbWQ4CzOtvWfZGC9269wzsTD8FSIKlUpdiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Wr9F8KgCnUcfw2iKtwDlWcjtiNV9LSM0n%2FCVLy3OQFQDhIV1YuqROFvWNs5sx7j9VJu7H9NNtsf8mSvubuJo%2FwH6EWcjUn%2B%2Fi2KW1bmJgklCVLiasEDZgVzwPIVvS6xdIhJWsLzvPx6ugGC8KJD5K8GYVOGKw%2BvX00He2R0v0BYoYepw%2BJG6l6VoyHIG7vDRCBoGmC6cYPNqtyUoydJZctlvtb61SuUV7BqimEBSUmaC4KneIlBd3BaYGfpsbuvzwmj9s4Ah7mTdZiN1tuHZinvfK8CgL6EMkF3RLZVYad8t05%2Bd1mJ8LbgTAkau8uBY3IMGFvmvhwNOyJhs5SZoNd4EUH9U0C7CvMaBf9Y75hHd0ruWWm84v%2B6j%2BWtSJTs%2BAILpAPkFGRkff1YixaEkKj4XobA4o%2FHuXMWUpYtAwkI0vR3mj%2BZjHlaDCxwm9KM3AL3jPcW2FOzC0Zlbm7nyVxBaEsg%2FDM066AQdpaCvx5OEnYX086Kz6ZrZDW%2BscHlUDAh6ajVUE%2FEzHQ8lWnl4h11xTEQYnMiZEpPEiafYjnkxT8%2B5yj%2F4%2Fxryhm%2Fhmk%2F9s0udy395pWt1I5uhLdRsd4iM%2Fd%2FvWeTt4zd6VoI0nL7wUuHIymZZYBXGbRWMt%2B0tdX4GdjDjoJRXnEwz9G%2FvgY6pgFzE9fTFgSoJVzVdf%2F2PzWSjtHQp55nMs%2BqADGRuz7c%2FWhaRBo3SmNbfDORcYGgcOatqAljjYindHVL2gPjjiWYvRG4OdLnR%2BAHZbYddlUE4Xitiy7D0N3U40e%2Bi94qigkID7EJBoasyETEdVAlgdpgECtDflNmvzYSqkfwoHaGbJ9nbYSGu7bA%2B0Zuhe7o02EUQ0tSZzWQiKN9p8QpNjI%2BkIVjTuI1&X-Amz-Signature=8814a49e620a09d7bc4ede8089067b4414412267bdc9435dfd5b939c975e31b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
