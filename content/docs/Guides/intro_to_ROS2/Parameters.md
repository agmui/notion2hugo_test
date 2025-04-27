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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMJHWVZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaudbQId8VnUAG1DUuzXvtEd%2FkKT%2BOwcJPMrXZLqAvYAIgCj6OiLPXqGrc1GwtYxPY5U3E0kJjKkzSZ%2FS4rdpL1F8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJAzs2Yj3n00%2F58XhyrcA%2B4uDj7%2BpJELgUsmOAhykDjmyIfBVe8P96Vu5x%2FsMhVUfBYxCWtptMb0mwvNI%2Fdu46EYtBief9uLt83t0iS%2Bei9kNVnhOJ0g6QDs%2FnmdNgkkPul%2Fr32UaLzbXpsH1aY7ie0mvlX%2Fq9WoPUXYdOFV2EdV4057x1ILocckMIbqhGqZ6uSr%2FKzc7PILYrkb%2F%2F1fy6w3lhmEaOfrAoRQpQkSxfyQD0O%2Bo3bkKpe%2FEqtAQqHxrPQFZwybwzognnsNGC9YCr4jRypn8hRght5gSzfJJJUHv2R8Lxvp%2Fh34fnPy%2FqJzCPrByAY3TTC2PLDzk1Z4ltrdRXW0iv7ER46KhZgDi3a%2BvpuUpDrnbshK7wY%2F620O7%2FcnvJLY5KJVW3JgzZSuNTprl3I71YLnpBf94C9%2FOv9hu8%2Bfja19nqwj5s%2FzZP4EmfN8wqIUMbBnhbu%2FA0uY0NJfRvs3yznj6nd%2Fif%2FPhIepGDDVJoYqfRiSOma9mk1tXQDV%2BslPpp3vGlF4cs9Id5H7zijyTEjAGDLneEF4%2BnJ%2BL%2BCBpwLftTTmRQxSLiFbSzmBDenqx6evmlzQQucz8BztY0%2FeUZtg4ckKs0RkGIHd%2FgvKRqTVaOCNlLk1J5XEWDT5tY7YIgU9H9KBMKWMuMAGOqUBV%2B3CCxDx90lDVCOo6hbEj3Q%2FY78dAkll75ZKisD5WaxD94SCq940uBGca1jWahDZkKPzR7g%2BIQdSNKWEpbkIMJSITJ9VWTRViukRF%2BElRkhJN%2BjqKnr0WqqaHv0Z9tyEdntKZ%2FkaUC6dRaQ%2F3VQOv%2Bcw9utX5ESIPmc1uOwO7bF4OL9Jz%2F%2FQYrN8UyYHEoOnt%2FlQTm86rqWEuQiUXZ5howzuBxLU&X-Amz-Signature=4d8362527439972fd7a7736c7ce84f5eaf49d25b7d11de98ebf095aea1dbe98c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
