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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI34L6XP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtGJdXHFJkNk1Kzc3V24paxDBurMV7vYmz%2BgTNQli1CAiBD6CkncpwLIeBZ%2BqN1jtVGxxt%2F1aLvsc7xCXoS%2B7GqHSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5LPq0VNTUTHfiWF%2FKtwDGIirucqFj0dc7rSxJQ0ujjDjXn%2FZNVCLXvFmQCkX63rpNOmSFZm2pxn8Sje2hz1nsiX6wWeHafT7FRZgvQ07sAwPNmIu80sNrlfZdXA7j1L0uS%2BE3MtSMQcsEQxWBYhT0oLI%2B%2FIqznbn%2BFwwSOP35FQZ6z8K6p65V7Xj2sLgVUVZooSET7gQ1OfVhN5exeuJCM7F%2BKxpjR5wLt%2BptN4SHKn3tyRWCutkeIgWr44ASOAFlg3ljNohPs05wawbzIyfUTNwQ4%2FA%2FhqYkvmHSEzGhkSOnUAvC5mUyUPXusz8vpCEY7Y5kN506xZKdSBuYr7TUT%2Bm8FgtWB3Z9hZ26uSF%2FqooL%2B%2Fj4cWNcxh0rO%2BG3S0yWeVPiOqFEcVsMDs3JrQ385xTPkaViV8hEoIRVOaCCWc%2FMb7wpRUcKIFjOxVK6PJJOT4gVoc%2BE5x7ug78PlRPx7sae3yzjHB5WemyW8Bm%2FIN8badYG5gzQkeutwTqXmBYjbXbnK6VyuCNmbvShYPxoK%2B2rHGvCsGdaU%2Fy%2BS%2FtY%2Fw98jfx%2Fb3HlVrCQqDhsxJHnxrQZ9ovqumliDSJ8bDlBiHkNXXxi%2B3x4GYVGJ1Xz8FBJjRtaxHnv6Il5xhB6cP4jNL7rZQvsDtx7j0wssmtwQY6pgGaGvvew8LrA4TYtifEIVSyaDKazU2Av1BXG7yRnG7NnsBGqTRxRaPxLF6a28faN9e4GB77jQmNrqNVQCNDb2%2FwTNpvhpY1GlJsIdSXhiA9KzfQiG6ajcI56LcU41vCAo%2BRPp%2BxA5P8s4kvcrcYvOs3FUDP8oYpvOWVOZo8btGDM1a%2FKLv3cxjIiA1%2BddH7lQmmGfyynUoDCieBS2JYmU%2B2oDn6lv1F&X-Amz-Signature=a49917169a913422837416a1699ed256f6ca7b07f802511640a0d034f08534de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
