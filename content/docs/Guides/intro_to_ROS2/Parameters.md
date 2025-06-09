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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO45APU2%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FVkVpGEdEeqUfJ2LJqmsYTDaEhUouHqQjDmWgnUbyYQIgBpRt4bJPQNv4%2BTv4iIa2d%2Fo2d6bw%2F9Fhtve0aY9%2FftMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5znCp31DnCKH5jzircA%2FSV8Xxesz0SjDS4DZD7gvduxKbxVgk91Dgu9gLJJTPUOIEuW3gNgyKHrWi10Ik6hxEEluHi3rKlMNuCmMpAdFOgRCqs5f%2BqYqPdGRhC4Ag72GJnn3sMoybuNPyb%2FctKOy1njAIaQ%2B33BktBQfHZJuFqdc7IBU1DAN%2Bi52s%2FUzIM9Pd567MIjm2DuFARZRMXPBlN8nsQoy4algqpvrtHPiTdlCw%2FzbnbwM8bpbgmhuj2YmFLaBk%2FSD%2BqYLwPnbEAqKMceAy728ca%2F22baBtxg3hSKe7ar4yRyXc9zAwrK5VNMGZI8HaStu4xebg0jXgDpVVLQRBp%2BW%2BjW5YPXouhrBd5cHmzrdsd2nORbiYSdZ61UP4ZmZAnV%2BU%2FnjC57fGmE8QOdjREkOoIUNdrVDD9kxpmXKAxjI0mIZVceWXphMyuppNHWXgFD1bGPA4kwJ%2FraA0e5f1I6hajWj6SoVTII0BZ4kWA5I2W0%2B0PVyHOoJu3Qfpb%2BNkfcWx0oXiVo%2BwFRBzvmqJejFuAdmE1abxge5VTLHyTrW9v0cgGeSpdINI2aYbL6bJ4X3g8fYYvLm3xsxr3k9dnTuy8V0pbLl5IKP0v1Be7bzL4YE8oJY7IDiuJ%2FKyWjf6bNskejWK1MMPRnMIGOqUBxg%2F85DP5qV7Kbntb%2Fl0saRE9zFCUScshnocq1ACUibLYJWV%2FYCDvR2gp%2BFvCJOFnAFBwIyIYOkPqbdpFK%2B0DkI0h7CdYY0S%2BJK9d48liLawPPcSBYaesv%2B4PBdyQcqfphZ6NJ0f3vFJagpgs%2Fw9jQb8yF%2BKih9ZEtYKLEgk03AAZfGsKw7efz12d4xjCyv%2FDplVlvJI4FepwT0mXNciDzEuKUDHR&X-Amz-Signature=d6d51cd770647645319eb70af6a9922c742b51fe6dde894d4bf8c7011d1e26f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
