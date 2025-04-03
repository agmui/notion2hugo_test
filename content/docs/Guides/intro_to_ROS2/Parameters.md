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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DJPG6JA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ4Dqcu5bR8W3LDgvmiNjaXUZvK0QwTbSHtO5wUNS2KwIgPnXMeGJeK%2FzcHixUnaYf%2B%2BsBmY1B76U%2FxcmXVnZM8RQqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKD44%2BIDOpoQ0u0xircA5pAu%2BMQ8ZosP3pop%2FOrwqeSUNhWmOGKKqN%2Ba4couOHIBs1Olbjh8cOziBWAXe4fse0eSMq%2FFEE1iSqKwTRVQOPk%2FZHezGYWhPtrWc%2FwSOp0meBJZYULLRxx4x6YkbUNnIUQvCOYIpAqHrInL9nqiCJfwTaEdc4wwTmJPP4%2BR9fQ17w7XPXTf7Ih7fZr2XN8ezji7dKMI%2BTFgUkUvs7nN2sbGGnW%2Fc6hDDCEp7Gq6rsmBBkyRnQJIorNrudGIHOWE0VVNAtmVzU39L%2FNXGJeeq4ZktF8UHzKnVTnM%2FI%2B6c%2BLrHpbDia8%2BkAWF6LzvEa%2Bynni%2Bp0ptf2dv4Kr15EJE9WTKeMFIIEAYWUzbWtuU%2F1T6vCvS%2B5GyCk3g9uyOmZ4AxgrzlIyVlKhV9efb9aUVG9CG0w3ksr%2F11%2B%2BsHtw9%2BtoiidjcjuYdc%2BT2%2BmAthilq8WJWCCVzbm9dULg6PJlEI4XahJ0q3oCLKIgsPyISUXbX1PMciIsajTpZHE1HtbeauhIeST41XvjAAzzUZ5SbYTkLsubn17EL%2BOYPHmcjPFfGAK1LxLSAt19ODCeY%2F%2BX8sLCo5f71CnXiUVNl5cO%2BI0MCaa0jZxrucWc%2F3bg3Geva%2BV1vgiwX9r5j1RoMOayur8GOqUBSQ%2FJ3UdHRFGizr2BWacE0ntpMujUy%2Fw7%2Fc7cmpVrrQKc9ftuBw8Y1THUT0Fow4wcRNJVmKRTA1844JPG3cEyqipjnKEZe5lJQT%2FzgmIApwoRIgfi51VuVDVH1v3O4oVxORwrWXBLQeQ2nDzf3pcXo2nYtyVGwF7IUgc5NH%2FMh%2FOOwr4y9aPTfFzhb9tp20x6RZtfnTjjzqykilmPrTB206ncBTsh&X-Amz-Signature=47848bf92f44101ae141e6646e257f468a51db4c3b12f8a91a5cc0ea27bc892c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
