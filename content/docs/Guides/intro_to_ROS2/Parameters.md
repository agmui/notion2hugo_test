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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFFBTU2L%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD4%2FdIgUvhPw4juR%2BiqL1cmWqVaeKSDDp202dBOh4UtqQIgIV0bVto43Ni4wUz16to8MpebqFIp5jchn%2FXTtJvFjecqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLdMErbPDPNi72e5YircA8yjviQpJkoj%2FSvV9DOGxHF8A9UMhEiWvs36xI6wmKpt8tw4F5z7HXYirCJEnJNgsbjkIZ6%2FiRFXrTUonymwFev3WfLb52d1GUT7p%2BF%2BIFjNbg04RirsruodJgFJcWB1uY1VGjPuBQSWQ0ZNCchH9lum43UXuIqnFgA6JZptOU%2BbZEwrumTReaFcitMX1sBNp0CQQcz6S4pdpIF46k0d%2BOP%2FMxmwfNL7MlIajRj2La5UNp0qWNeRqxEMpSTItERnM%2FJVphJ474iRi6eQfmasJ2tTkCz3OU1lUJD%2B03OB7Gb%2FSFdUCYJF9eYSw0ya%2FPi2Mm1fUp8ZT6RtTwYTjBJP6Ja3mbhk4xNehTLDeHDpjPhAAAYcG7W10pzZmhje8D1jjft9K7m0UIAKEDClxyHPc%2BXh0tJjDR%2F9WmL60XxnvjU6lCZtlrvAU5AJageEkjrqf6%2BWBRpH86KSqBA10NwrnGTZi0YGP0xn0H1Uho27LRoe35kvyXnP97mdZBFuwRYAY61v5gNUtyhtFbGBL5aAxvzUTnWmBW6hMOKu9A0%2BRS7zgbcTJ3Q94JEb3uqTs7qdXNsEX0Y5ufWyR9YBuY67WJMNkyxyMp0X53kccBMjzDwzeCeEQ0C8UORoOQ6NMNGxhr4GOqUBgR6kpeWo2HBdWlOvsSQ3%2F1UZi7TK2Ai8lp46FdblMhe%2Fwny161YVPOsVXke4bu%2B33vjrQd2i3DqLRCx4x1zJNrsYGVCgP%2FwMbkOEZBSLnEuQtDPUOK7ZljMhr3C1LfukBPz%2FW016jaI3hw4341jnhqh8o8Z61OzV43TpItUa%2F18ko1WfDlWME0l2z5zQ1TMdg8JQi7xTNIn7HA1UrT3WpdiJqCJu&X-Amz-Signature=92c29a0cc3308f7d66e538f790887c2239932a70d2491fa8526ee7c369498a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
