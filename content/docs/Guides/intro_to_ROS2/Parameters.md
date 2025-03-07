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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTIMXUN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7YCmxnfNs0%2B81Cm%2BpB3uYvzrMaK0VH%2FD7AZcTZJokzQIgfIheDm%2BwPs4SimiaJfKN1i1HTXKm9b%2FwKkRNhp2nxKMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDKrD3gRIrJ3m%2F0sPLSrcAz8VrNLNU%2FnaHJdd8%2FWKL%2FR2TyOAYIx0kQ3nBuj3wWWNqCZiUQwvycxUR%2By53kD1g1rmCMXf1OWqHEXCmFyz%2FISz9A500F6CNNkfRS5AmgNcQhszV6hgA%2FHO9SGdNSrFWh%2FBLdY7rFcM17xxN%2FKcUKLa%2BcP3gAZF1G0P2Js45E82pTVwSLBcRn6ZcX5kw8uVbnchdEo1YAteqLxI2YMf6X4hc9hCWyRtInvZkVokYuEleeAwWLnDHuxSH1SfKPBhUKxN7arTqZMGiYslDmdnsiswx0FU7OVL0qLiDJRPvr5BYa2HljW%2F9lMeAbswPS7%2Fgms2B0lwRDheGfOBGz0qSZm%2F6sr7xQIXy6xieJOBSWFIAY9krhaugHvzetHm%2BGsDKLjrx%2FPloQFJkGLx6Bu%2FEFIddz445wTrG0P4A9rEdvX2soYCw10r2J0T1hJP4aoNvQli1zld%2FxYeNthcUSscjz65yXju3gXz8UDyqXszBMARdf9rAy9KDUUNDTWoKp%2FRgasjIk1KJvoX%2FqenKVHxFVi57xrZE2rDiV39FFi3S%2BkT2W9dd9OEusV0QOqpcQSZRexvkibj9oWYgMrhKPTZuKZAF0EGAprAN1yi2tAcmTcY7sVesi5AF0Fvs%2F4fMPnmqb4GOqUBCEEOmg7n5OxMAvfiS6xuknyIOCVIQgyRfQSIfhFCUnTYk%2BcSCErsN2GJWxKetiFNPaDyAGCy5usMqdezGmyhIKJRLlTAvjSNGcFh9MgGh8VXqvQWh1kGIHYbEhRiXTLAFLunzrypZ7I0MAMJWj6N7UNeaoN%2F%2FJb766uSyFjmLCnDX%2BokTueucQT66ZfAftWMiSkF17wgN3et8z8FA6kS8cIMwxvt&X-Amz-Signature=83f152260ed7e29d6f28e1340208fee0d8f159528cf671e1c2d7bab1c35c22f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
