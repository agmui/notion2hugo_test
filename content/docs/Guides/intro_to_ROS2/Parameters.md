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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5P3AQE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFYPHcbzHYdAGJLiVjWQCvKIuc0acVEiDrCkvdIICgDRAiEAnJuksI%2FN3xppFutpCH927cKQxz6s77w%2BfN555eRCwMIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDPRdVkRcjRFAqbXc7SrcA6hBJU1NvYvMA7W3swzjjO1dFEQzjh29pefdGApv5XzaSgLymPYou%2FZ48jLkfX%2FLlBKTP2lVClibUv22OBLHeqkxMGfMDJBViBChfWxQMbJGuoLgSIMN0s9QLB6NsOAEIHvm%2FPmKUIq%2FPNCOXtDY2sOo0%2BP1gbhHWLusghbuNDm6ph1d3oOlgAAtW7ExHUaZKJwgSgJbLrSrqg06It0OCIkbnfo%2BPzi%2FUSQf8t4TV%2BlJPmp8%2BZruHMiJDrxnT8%2FVnB8iTURVh1%2F2XxMPtJe8U3kAusmuQwP3lPGJ8TpNJoV4lgLZPOAHWFNRK5C2JCHXE5FLbMk9DC48kfIDwu6aMMa1rKXnc9rwKsEscHgMl%2BIC5Vxf8MKYVUt5hxR%2F3FRDhU9nNqk06QBrkxR0hRziINK9yVS6dbnktKf8vOyF0AKSE96lIoB1WYrqfh2z3Sn%2FyRoucz2TmobP5UVrjRrOOikcWdTwKdZRJYE%2FmRUXY%2Buysz1vAtljQKd9Dc8mx7eVEUITidiKDzJWMOdQsJpF2fk9nygB0tpV3M%2B1b1lwMZUikpTVYnRSYAQD%2BE4N30PTXqMw9lnh25T9oMr54kRPaerZ5uvjVN1Q5dR7vcs7seCum%2B7UZcNzIqenLj3%2FMNzc9r0GOqUBnOwHBz4VIevBMICR8GjFaHkavRXNjDqNhXmn%2FPk4yBApGpR7mKdfifl%2F2ETt5%2B3d9CE9HAdaG3XnVk5e4cHcs%2F7O4rv2s%2FsxhmEkVJOKCTreubZxlc93iNoCfDoP%2F9Uy7YXKOOvltPy8X570eQzW1hVmm4YYA%2BBXjIf9s4EAuRds9fYOFoAlpF5AZ7HoDd4oD3cTwCVYAikQc4yOGpdiJaeve8VS&X-Amz-Signature=72a3d1ed26dd97035cde49ef162ea168e03a72645a7371d5094271e4789cb72b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
