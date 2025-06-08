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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBUUSIJJ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoDIrcqdxuYzg3et0IjLDhdxYMr5JiT5j5mogKa2SmJAiAHjgaLDhv03Lx88MQ0SZB2FsphEVHXsFoRs70nLcf7ViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2B5kcti%2Fu224zTjcKtwDSUCcpiFyfozL8uOGg8nLE3C13QuMTIpZid63yYyM7FexrqLD5mYJEc4Z8%2BCrEUlAzQL8LdalDocxknQHvGHz%2B%2FadhuC%2FD3jSlfen0aQ2OvRT0QvwrOK4Q7imAc3Wcb3sA6wOmSqQsOptZCwSdiZQQVM0tmJZRhkIKqs8DNo536VU2oAMa9t1VbsEZJqpTfpO7pkMuM034fZT5ePzErRGpekqh2vj7Wqb9qunoPOKX0WT6SAnIueQ2yGnuLtobnjHHHjnQn7GAXpbuvi%2FbnjdKjey%2BGU7MeEhPv8rvyCZfpyYWsuDplqJfb9lkDna7QNxHl24qdbiHw3wSTtUhuJUHVR01zrnhFo38QUQEjYC7WoTBw2Mkl5xActERwfF%2Bb6fXQqVWqgkULu3eJZ3vuCkPwA9qL2xZnaBHi0bDUM%2FFuRf8c%2FcK4adQKWzlTug20ADEScE00agAX20E9PTc5HrF5BsYGycIhLVTBXHDEyYjsOaVyi4kI97RNYPYQmXuCLUdKm%2BE32OAtqnfLH9UPHY6NEpqFv%2B%2FLV27QHf7xMX0c2ZdfGetTE%2FK8WkzF%2Fn1nKiMokXrHnlzfFNnOPPSbUJ0hWwO1vtvtv9fMiT0CQDhPYxYefqjEWKirCwPmEwtqeVwgY6pgFNj3HoS9ZnUtmzwc4gvkUnGRZoMH3J99O%2Bp2IZ6OqjnrnBHXQg7JaWCbc1QwV5H0nEpXtHOFbOhdJz63ZLEya%2B0vDb3v3qMS6qq3N%2FdPXzETMTI4Igth46AXMAXM0MkbfiwYHrqHldAQCuNabqB6hg%2FEJexz6O%2Bn78avX0qGQZPSfPpbWNVvSFyxVh2xmS0T5QVrznOz1ZvKi5yOHIkkTxEjQdl3j0&X-Amz-Signature=a0b7cfd43311f64408cc1f13ebea0bb313c90d4c83e91b88dc6886d2266c6769&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
