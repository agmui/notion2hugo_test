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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCJ32WM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbHVlvYfbk9kmVSxeaYIn%2FO56dmhY7a%2BXaXl7Qd7fxYAIhAMb9H%2FovyW5wv%2BSE2EHrkEpR9%2F%2Bm62UIJqkhG%2BpnVgjCKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZsHODcSPl9lrN%2BzUq3ANFF0P8WK0Vb4kHwiMbKXD5qSobN86floxHedKe9UWS0JqUmAy5SQU4mXuvqg6pwnZh9x%2B3JH7WnUzSgIVEfzemWZR3XDH%2BcwyKj0sTiczCFn5JwR3itFYVGlvGxKSLiZfdwW5MncVihrE3EFzKvlx0qS%2BVLEeZJKN65UAKLGZuy0tmUdPG9OI4F4R4fnX4rNfF5KqkXQ%2Bos99ik4TB4HB9p8DMJq%2BWu8xeZvnxlb3%2BDJHQ3IhtZ8XwsV4gahx1eTCc%2BW76RnxGID8xE4EXT%2BasmLMRh7Esl%2BkKLP2k6HPVP7bCjB%2Brjfu6go5q%2FlS7IutLv%2F7SPuEeBSOA22UPDLdMf6C2DQRUW8tdf9PDVcZmQvOaGfK7KBA%2FjZL%2BBI9ghFG7yPeq3CX88pMmRGD50YfNbs0PasRwoTM0FIEkmcqFJo%2FpbW7ZLg4fTmipCt9%2BnmXJJNm77A3W1U3PB1nIbK6S3e7YzfFWHbLhKvRh6crLx1NnSXIRqNNcO51zt3%2Fo96ZGlMToIwqt1rQ6z0LBRyxRPNuUYOwOTZzWl2REjrZ1cCJFxiT0AMm7t53mGaWY%2FFLibER8vN%2B5czo8A6sq6V2tkEWi0r1XEXu2h6Z28VDn8d3k7F2wNPHKwVutKjDy5KLCBjqkAbsOPlomsG3x8hsUDsFymPJz87o5NfSIm9urJ1PRedSlpFJZEmbH4vh%2BRHwCNlvjvCVdbf%2Fs%2FBulUZbB%2BH2DTh1iJAJGlCq6NvLiFurjUc2SMcZzvBIQH4vjNInUKVrbJV70LYmMZIdyYg7j83zkxHNO1XmZ5IB9FRmzpa80CwGt5VdPvUYgme3P9zqSOnAtzVp1UmDQTrj4RW32FM839rhF%2Frsg&X-Amz-Signature=371016cd9bd58b47bf430a3b51df892deb12ae430e9f632bf2f53055bdfc5c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
