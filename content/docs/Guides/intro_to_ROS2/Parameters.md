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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXEH2EWB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdO8v%2FcuKhuALCQ0r6F3%2Ba7wIo0BMNjf9jM6uqMBdqSgIgTcY4UPV2syOXtMQw6Z4JchPypvhSO8gMmN6rrloUsFgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDI38I6hQFd7%2BCqYUtircA6q8sTsyhht%2FUkDqclJYnUFemqzDf8PV96%2FSADSQWwRVM84B4f%2BcX5BQ4aYqvzwbdBKphy0JH4ANtUPxuCQa86UcbLmupXZviGqjy%2BPV%2FWQlHUNIpmr742sY7sR9fauLvJFDYoX5%2FecXT8oWyRtz968Oj%2BsOlqotTSFhHD0iwFvN59ZjuVnE7ujXSGUa0LFRzsTtq5WyOrd28qZGj8Exy5Zvd4Yv5wLoaOPPP%2BaUiPoYzyLXj2HaGSb9Bu1qE3p%2Fp55sOhVrykRhMqDRI0tXHnCbq%2FUgxr%2FSELgsQBNmke0L1Mm%2FA2OvXjlulrXFSLN8u7FXnB3A6ovSNHw0uYGdr6cgxP%2BSeHPSs0diNp2%2BWWTWaX4eHLDAymRrHVSJLEJ8eDZrj2NMJ8tKFiUN89JzBcA%2BDYxFnVLXUSEycOyfeCk3VBn6GDhkc78eiT14XQJWtDKs%2F0sEIjkcCVcu3Ozu6KAPgsH416Dfsu0aq3AvcyonyiInOcTqQFzmIF6UyEOoTcmG%2BF%2FX4Avz34DUQR9Yp%2FBHATz7r5QgtizKFoNRL2J1oe3a2dz8ZSuZ40KV7h17N47DtjZRGQg2THyo0apyj6GymNlmeefNcDa5PYM91NCVIlKNm7dRQ82gHlZNMMX%2FyL8GOqUB9HAvEZ1P0WRafa%2FaPrM%2FpMXwtYZr7V9WW1QgB0AfEHTPtNln4bIXgQwAfa5wSQmQA49u9qWUgaCTDJSzV4IDw932rwOKOflaiSX7lyB3I%2FwtFbBckJKgFeW3VvMxauoqZRnrNxxIzb16xVsWT%2BCAin6e0LRlyO4AHqjIMJ0GDCNQcwiyOeaCNb0ilDA88H3sTsWUOBDisR3auTZiEe0jIOPmZV84&X-Amz-Signature=1ff514801cfac759c77e1080119635b1381d8021c002e44eebddb839b5e15780&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
