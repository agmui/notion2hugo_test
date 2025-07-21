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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSODBDE%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpJM3tAhEMwUjBDfwol3rYm1pQAY53AXSp4nzfHmi46AiEA18j7TszB6YlnBbaScg%2FZbb%2BZVY%2FJcxNXXs8T48kNbyUqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBK4AsJvCNEA1y7LTircA%2Fnkf0%2FtoA4FBHkQSuQ%2Bf%2FfK4Q9GOlnt2hBVbEDPgMs3qJqwUuaO6QzOolygBmkAps5wAspOw1ww77uAD5AvWRxSM9IT0Ai4zCoTaEOAnrnej7CuFy%2FSy2e3suv1xmr%2Bzr6IieuQLPj8OXhLZnZiB49RwAPc8D%2BgqELUq391xrq1zGmW2bLc%2Ft60KNhPOhqxCgTe7r1bwlROGuuxtwtqXzGHYf9M%2B7srXl97T5C7Xy5MrDWslY8Z7QeyL8IyrV8Mf7K4Jw7P3Fff9Ot0FkveY0JDjxeoDycSrGMdfCuyaE%2BWcFZHhImUZHl4dMUviNjRyYLUlKeHxiSgNy9QFlIU25jiAl3pab4x3kPyNxp1FboSduNK2Bab6L0GYAS95XSC%2BljCUceOF0iNOF6ITs6B0OAHCErkQkqIFaUNRT0RgG02TRCD6t3%2Fk1i80IGeaahyn9Ie5EmOXfVlOM0H9Gl2qbsj848GoFb%2FytVkzrwt25wsXgLq0qxaTejaJh%2FXEkP26YZ5I6gsG3T9m1j%2Fz3dR%2BlS0aUYp%2FWCVljs%2F5OsudRPDoeQ%2BLD5qCrT2Qy0NgyBitWegYF9qzuhflDaK0oyrm4zqbJ3xg8Hm7PUp7XCiK%2BSlrAelFmUWI%2FpRe3e5MMaP%2BsMGOqUBds1cwNfa5v8yH%2Bf6nMPpRYql6b5liIsHkruWK6STbPjuYIAt%2FNPtsDuKs0%2FIcUle7AzmDL3f1wqcRdagBhTs0O5t5j%2BTn6RPNLIuCkDoJ47%2BSvF6vBkdP6zskWrH2Asmt5lugjzII9bOS%2B%2Fpf1qm2NZwRKLCqIVlLb5x720L8L1HA7kRTpr1h776L%2BFxjzYsYj%2BusUbblDrwp18bNYzt%2Fa%2FfS479&X-Amz-Signature=794f778e3d3ed4b9cc2671e00be56c25b4fd60e87ba42b659f5f8f788c1abf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
