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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7CSAHA%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtXxj1cojzFUtHCoEPxyJXOMxEFg3mm5hBKPsXF9o%2BVAiEAycnn4ryEt4z6Wa5xII40pJsZH56gUf3YR9H4a1No%2Fy0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMl6eEoGz6LQ2xr4kyrcA1jPoWzSM2E%2FgNL70BdERh5u0YAGZleNaCDVQL2EyRJE5OllPv6hDv8Eyh0ie5BLQGURtNBSzS%2F404Ct9G19Gu2NA%2FLfueu1cdJ3H0aD4ZsSL4zTyEL%2BJpJzQZIIGBxIKEW6XtDPDOqumu2KHT4DcP2Qne61gSaRKzHqkeHdqmQAFCXDyNBoTyQP%2BBHdhYJmCHP3VVtGss%2FpfhDHTcg81qMdxLcu%2BAeael8bervAmxdYcHCQt84JK9ls5eHuq7fadrxE0kRW1C%2FEREy641fA3ljW%2Bkt3WkYLZHwca5oMcmooGG71fcG4jPnqUYMiNfIL4qTVf5gGen6oid%2BLvI%2BcJMbAojWMkn0BsjYbqOXOnWl3HkBdlzjLo0V4JjsluMMD0wU0Uv59L5zAM%2BBSaFyOhESowblI%2FEJKZbj0lWprxfRpkwRWYz2u7a7eM914ni0CsfOctGOPas7jT%2FPxBryVVia4qp1pce62xg9eWERT645Uz0z8LRkZ5X%2FZRYwvNePgy5ncx%2B8UEZ8C29dqUW%2BCOHpPzI37pLVtoZrsm3%2FXSnw5J3B7x%2BXUHQRh37Z0UuIOHQRNRhJ%2BI5sPFafhPtqpakuFUcV4j%2Bql8DlwcF17PYey5Q2fuParToJ7CHf6MKPEkMMGOqUBu4sUPL1uGPTA3Dl6yRBTYVUTAfbw6qRN6BNMbalydpHJYsqLwxSTc6tjp8Eon2RXsm8cy4f9aA7Ypo0PX0KDA3QrL2TyTI2TjB6uv51SwOC626pKEoSM1atT5XbG6ryQAIGmBRr9XE8GTG3DNAaXr1ZYPz%2BZf%2FaL9QR3rrPzq20qn%2FqxRzsQl1E6%2F8vuQRAJnUwogFUKFX2pkStpvHGP54Jz3RTf&X-Amz-Signature=285d77fb94f6a12fb1df7bd849566f1c3ff2fa0e247bfbfe63e18932a160ffba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
