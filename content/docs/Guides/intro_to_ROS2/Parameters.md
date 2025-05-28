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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2QUI5Z%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIATr%2BJgeuoSaZXZlkde%2FLNE4dAx%2BHDlE1S8jEZvlVdKrAh8JO1ypDjt7EwLC6LyB60R%2BZ9%2BILoaSWUQOGEQRgegVKv8DCG8QABoMNjM3NDIzMTgzODA1IgwHZO3xY4z0TlIGhWUq3ANHcllPYRHYBqCF28ULl%2BIfC5YIvIXJNYWU9ptzub0mPuLF0CMmTLrAbQtMiE3fsC2LVW%2Fg%2BxF%2FV1UmQUydh98B97HCTzurioW%2Fnvsp6ZvdLtLna1cuLgvmuPUhn4oocLy%2Btb5oqfr%2FbH3Iz4xDhq3%2BqKutN9dJPxvFrhBkIFnUaRH89%2BJ3a%2BOkLYAtJTavLlyBJGKXm4VbeFyfLRWDdyqGZELlR4lokE5fsPTQ%2Btbf%2F4iU9TWeysavzrQDQ4KlNzWww0hRdgC6z6GK7MvEsW4cwXtp%2BtapkrEF9DI5lv0myNH9BMPJpmSJ8mEMuFx%2Fc43SJbMrHCdyt3Hrn18pPxogfPBio8pBVV2vL%2FgRVmVNjLjEV9F%2Fwacg2uv%2B3yRFjWQkQSL4TQjCmD0R0SbtzuoWJtPloo4YnSwy4MCGO4ysB9Zic8eFuFmqiGzlrgjdZSN5kMdDUFeJS4wEefjN%2Bpv0DR2vHsxhqYX80qCFjNibxwaF%2BvmqINpqEKphUhD%2FiiiMtR4fAEJ4eIFNdJpG%2FoIZBghrFfBp7FwiAgnhJI1gZuuFkafwLmNf2IyL35LdT9XLggh%2BpLA%2Fq1Zeuk8iWersf8FCWDvwQGJQUJsW0pnsn3RnGUqRshNlFf%2BMrzDIxNrBBjqnAW0iy%2FXx8Jp%2BfiK6dhRqZUciSrIScmfjrTmt7s3ciRC4sal4JhKpey9zMOfCB2UDrv8ZeWY%2BWtJ1Xwcu42Mc1xMgC48%2B2k94U55zARo4FZM%2Fc%2BjXW1URLn1p2%2FSskqZBcuQPffZ90a4a5k7BwnySjlX3QgkPpN4bNDCmPsZu%2BGv8Ies%2FouVKcaBZMxFfTKNJXZWYz2Y7xSAUUQSLU2eBaZRw6lSvXqKe&X-Amz-Signature=c2e36f8fee8ff84973878188b9d758063fa8c2bbad49a4e1df0186955324771b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
