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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=57db30b9a17e40c7de1753e4975b6f3eb15782253fedcf42b26e8a43f365b69c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
