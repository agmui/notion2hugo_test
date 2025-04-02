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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A4TEWJT%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEM%2Bi815AMQ61i8JTdRhiSETi14AkptvDZi5dD16z3jIAiAuQSJfPdRsDV67GCQvQn0hXO%2By7%2BxYIdSbxbM8tq%2FZVCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRjo19MVyxYsKs7qNKtwD4MO3SBS4AlGvJPSL0N8DyNMdOtC8cnZrfsC0y%2FXXLdZPDID%2Ft2K4Shaz4zcZ3pxigPeWerdQ6Fl9yhrSf8SmEz%2F6e%2Fz7hKaFf4Qc4xU%2FzuE5QLsr3R4JvO4hbA0ru85XoluyL89dXjGvmmSXYH6tI4ygaNEMgfthUmnv2TeA7oNEGfGL2rlaMyhGjDOVe6wQ24BOywJtzye952R1HI31D6t%2B3WjgbaEVy9ilaZxcG0dxB4QY6TfXWK88HEuAqlmyiodxL9XzkEouWe1ARymhyIxSdsQJhtIhKHt2tQYw51EKsn6jLC3QdXZLx%2BTZFt3AhhZePOKpHebaHmFXsre2dvxqhmKDkLO1rY4xLKWxXMGjGuZCraXyrSicQUAPW0PKRxnXSpIIT2xlboLdklgSnDBp2wpHFDKsmV5zfol2B6IO1lxtWOfceWLz4XIy53Wjs6ptnfpzx0NQiOB3RtOW3rbUgWj6FUNwrpZ25%2BbY7R%2FFSfRQE5TZgR6PGFh7%2BEV1H3VpiXlyrn0jxLUUr9NsJw7wjkvnXyg8iS%2BHDcItvnS6chub%2BzWXw1bnjbJad034NEWPGhWCmOSalunj1DBZfa8PGp4xK0OQW5cERrqeZ6Uw1UecICmt15kAeZ4w%2F%2Bi1vwY6pgEsnFmarOD%2FvHEv7h9CsRTIS9umOxhlHPoPUcGA4vyghA7aFmueOvumOnFb4lIpLJ1TLxiSkTULTRrfH5dBdD4NTGE0CjRnuJmKM0IribPpY5f3oQDrsesx7dAq3aC7Aj2t%2FiyFCKXb%2Bo2BGbAPliDtfELC4VCHdkf1azG3aMZ8E6fG9kAvxUi3CrlWkpMdtA%2FyrjzIihbu08VyFfiod9DMb%2BPQL%2Bal&X-Amz-Signature=c9fb8ebec91dcb7c06c3cee7a8ef253df7994195c36bbdb3fd452fafc64eeb42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
