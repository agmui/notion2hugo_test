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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TWQUIR%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrnhb%2BvZypI%2BJPIAR39ASS2LASVeEt%2FXmsZBCJBmFfeAiAW7Snxr4k5tGpX16txl31JN3FDkFQGgqv%2FkdniN29nTyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyB%2BxI0%2BC1Ag0fF%2FYKtwDcTTmFLDw5i5aOu3UOOeZSlVcCUVRW%2BgFJwJlTEjZGt9%2Fl1dVjWIhzQaXnoZZ%2F9IlEEqDcMCjPT%2BwTXMPE3qMjnTupK1VwXO3jWNQ8d9DEU6CFvg5CZwvU8NwRB4oZZa8Rhu8xLRiHFKKh6faWXMeEXdpMSjWmN0UJgTvn3%2B4mjm05ZS7n9UrJKIh0FdQTmPLP7ftTgOosXm7muLOB1g07TdxqnA9RQDVruXmxSYhpDtxrP8Kr4gZnn0Pg3NJz5nbkgCk9Q31C2CtKJNj7aukoogxH%2B%2FMqhoqG2KdsY1MGHDgRejeSuWwDqmYFiABA95S3xvD%2BkxoeLEUzw2D0SYNf35eWK25ienYURRuGTqqe%2BdfY4%2BxshnzpClMqrz%2BFqtxFKQvH2ujkJhoPJS8YuWQV%2BsdWa0x83nKXsXNdIQtY2RqmDiVrOv7Dn5%2BhDIAZqNQZMj0giSSFOw%2F7crKNHdISLo06Zlf3WvWXfcpKv0deTbrXgDRZ3X6nmwuV3A5HxWHMzTbMGqpQcmotGd0xLqw7qO%2BNUF7wYnzVBPKNWEyp4hMC6S70dvw2KP%2BXKIwfdYw%2FprJ4Q2P50doYC4HIVEBqwPMtD%2B5mdv2aPdVPmLiSuKd0UclifWoi7nRf0Ew1KD%2BwgY6pgFtJrlNv1xr8wT4Gy9mXucRr3oJTPD3brxnlUhAxacywv8sQOcAq%2B4TQHOyrbbxx%2BxV7KcyWL7rU7m1EvR6iAvqgqeVIizx1YTDm6bUBBrpBek04vXfO%2BnqkxFUkz7zchViaLEfzMY3qRmjoGxNkcmkMaPZPvHC6QcNx%2Fv%2F3JySREqzyZdQFcNnl6fCjeJxqRua1RJI6nRU84L1NktnhsvJZfbcWhKW&X-Amz-Signature=998cadba1bf9b067ee4f1d9ca5b7e5ca475b0f1aef59dcb0ef0a45b4b20bc83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
