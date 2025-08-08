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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJFU4ACD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIECfcA%2FtZG7z09DlLKRtSVHFxTB1C8slZyvKLgejdepbAiEA4atGfYgXjQBbK0wO4OhsuaDDYDbLFTNMtQwtPlwJXkkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYkIhltp9lc2TC46CrcA9AGkU8U%2BwvqzgYc7QfHyu7X0oUlWu8tBdedniSplTxvq%2BWikaH0Xd6KB1smIhAcR13n%2FYmtdpHNQ0PeaLHp%2F2i4xTDSKiSMBtOBsnjFUqc8vYqgLjzmNw4FEEvNV4W89EGTU2v5ylE9F%2FCu%2F1KCgy9qm0%2F%2F%2FbH1f7DNHZk221xleDpzHERo0r%2B%2FX4z7XX0ns4MjtYshSBlacScGasJ34j04bTK85B8ZmV8UBWkHyNH9HekBkNe3tC0Gxc%2FAcOqMQrlWFVQz6MTIhEouUEW6ROn3oofCBH72ZN%2FyeH1TCvUQwN2UBbINik9oB%2B1c2bkOvWPf%2FSg9OgBxVl6Ea6XqUDK%2Bb3xwMfV2Jrns%2BZInX9B12UL5sYmK1GdToWmLa91L3d0TUqEwa0%2FLN5EDr1B7zRz1vWQrclDTQkbYWZOEJ7xkf7FUgt1utn2T4qpZQQnS5WvzURPVJ%2F5idsqUin5HHIS7suQHPQg%2FhNi9KlZaNA0FkwYvC9TN%2BuxTcINuhY7VnK41c0evyigz%2BRLdT7F7ACja1Ihdkl%2FGFA%2FEcM5X0WDwS06y%2FQ8QK3oDz%2FAPEdmo%2BzG2VCMv%2FzgGgw2XLY58v5F0%2Bqye4uIe0Fx1GqvHJXmUUx1A97a3Oc2565gCMN7H1sQGOqUBNqE28QjFqB5M50%2BeMKkbcyMSaL1H%2FK0R9bVan73iARBJhQ2gSKgEtPERbZAN1M9uNzNE%2Fu91sc%2FrOksru8yenmcjaVGaQJRV%2FrBXTt2IfXfC0TMakVKljNSuqMzKYXVVHa1JmXHSQ%2FxJI1%2FfnaJvaFx2Gmo3J4OTk5kLY8oOfqRowY3wO3zm5F88%2BSH5GiZIAFPTcFO3JzAS2VzDrh3jxlTw%2FuAQ&X-Amz-Signature=b59be3aaa50b97bed424b9dcffc788cde843e61f4186b24478fa516ca6d99bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
