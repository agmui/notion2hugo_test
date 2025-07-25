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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBJKADW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICgHZG7iIIyRLX4MYgxZoVVpkMcrppXqbNbbON5OmHy8AiEAw%2BbQ8T3i1bbwkkjmzf7mxJr4icEZd0qbat0ewjFhDv8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDQq7lmyY4q%2FH9zjFircAypoQKCag5IHi0Dr23A%2BL9vdO4wOa3q13kJDGSmi0%2BW5WUWxQc1pBOSkUqAcalY%2BOdxHHSK4cFZODauI2car93fSdQaFjLvOXFXk6qNqfih%2BP%2BYMu6QiKxhFpnXn1WracLMQsJYKL%2BYqi11Zuw%2Fwvc4BR59BG68FQhn3oWDJDHGzVpI65feiMYWYkseUDvoVFHw4gI3Oq5cvAdMvaUirf0rs6SCQgdR39MVaNhw4j1SUgtM6shRCQ%2Bfcselk1hIiDvoLZl7J4M2iznNLmHuw9WNs2%2F6gxuDh1FWwNxi5g%2F2A4z6NY5sx4CHRHWr56r8mOpSWmdVj%2FmgdZTPY47i5n6nYea42i6kEt6Y2HCwbvdHodQ8S%2FRyiu0iPaopWU%2FSlydvxx20GCZJbnTGCkli4DEPTK7NTquai2mCN4UAV%2BZT92X%2BH%2BSPAhnwlb1v%2BQ199dtZTR7s34kaPVWm4MEQllJhhXM1D5yICDrz3nBJ9%2B7j6%2Bk3mU5ROqmTL1osh3RcNeOftmVR8jD7yoO65b8JIJwWB6jrO3ourQbbHKDRip8MlfXtHFTjhwKO7GKV6Yp1i9SbOxffUQvc7sSQntBG1xVCsLFyOpv4tJMwOEc7bVTpMwQ%2FpRqVLRDH8Vb36MKWqj8QGOqUBJPBUhzb3bLVJU5Y6K9n5yE8gb1wqwCVrVwTJpWIA%2FGUx%2FF4EIrqdA7aGtVJ6jGS3%2Be9FOsTq0W0mrRYikmZhbO8THulumOuld3JxupTEXpNcB5%2BC8Jt%2FqiRGvOUn5g90UvlAxjGYvcrJvSW%2Bwzf9jX2qhbWKYrLleZAY7zj04hjff2mxBpwFc9wtCrXsi%2BnH9iVnYng3dLFsOsB05QXwYzTQEdPa&X-Amz-Signature=27c6fabaefb99ab5a297b57df67ab7be5a1f3312e0aeb02941f57bc8c76d0c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
