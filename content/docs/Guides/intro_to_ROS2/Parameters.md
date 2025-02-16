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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X2ZMV3L%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC5%2Bk%2BSoC%2F%2F1DYsSH2vopDkubmKYWqfHNfyz7LJE0LkqgIgFuehT8LNggof4OC5JrzwgqcUginvoMhdMKJgnjkpGuYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDBeisGRpeHXD72AZsircA13mi6yR8N7xXNpZcRMs7wqjYZrasCJUo0nfr3PRQgY%2FbGSeGTKBk2MQ4os%2BGVZOylVAAJqjflq%2BOt1fLiUB%2FLIPeaD2WpZXYzNVAdRYcfi%2F%2FqD3akloJv3CYlVnXz1JL4Pe%2Byh5cPKI8LdrlJyuDwH0IOLkxwODO0nsAZciPHprMoGO5uNsAB2fUzKoR%2FuVsXmvKLS8T%2FlRK03QWaQcQUWXFc%2BLygTpX7Gu6oz2h91yidNoZO6Qw%2FpevWEargltIRcppEsR4cfINp0lUklkusaE9n9FDyGi8gr4sB91tGNTcpo67lNErqGHZO5PKxYEoMPtP0DoRvLKF78tMan1%2Bs67Db7jIyY2OERz0v2Wa9OXTpNkX7%2Buqsaq4cbESiFH95I8jr2yABCCB1t8Cr6ctrDT6SdgHlfFj0s8WueteWzRw0K0gr4O5sU83mHqDMFyTUpOLQk7l9i8CpmS9ojJd4%2FT3VrO%2B5CAKT5%2FR7ErRUrftEKAJ0KWi3OjNZ%2FdCKDcS036HsBRlK5jBrmX0JlBx9F5AENYDCKQuFI8tA8%2Fl5m8ROEjTF9V1YN%2FXy%2BwuO0Hb4gb4PBUB2nTtRPKzLIFCGR63UwqD4UGgvIfbfaPef%2Fnr%2FYh4YPDmjNufLRYML2hx70GOqUBh5S2%2BKkQjbNCNvir%2BwkXfIt1xcZsnTVGCQHdexodhakeU4a0tpWchUFFMb6ua8YIpqey4Z2z2jI4H1J5uWIgKTWQil2cjxjjJ0Jag8J8Ec9P9XDmkxKPI6Qr2mtydZHIGqDMyxA9M%2FxUpA21UrZJOi9q2a6mdw0Xi%2B4olBlLjlc7egIR72qcGyjYTsf4lemyzvU%2FLseUMq6SaSIm47UsG50mAuDC&X-Amz-Signature=6503af5b5136cef61dc6f95c6e2e059087c837c1d93c4c342cc959d8033fb2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
