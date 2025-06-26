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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CFCM2OC%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD3dXdAWCJA493AaxnfPQwHQV419KIUgUMGfYW0CVExawIgGeGqIrpTFaNGBMNmWISq7dJ5kgXYCHQpeWqTDyGTImYq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIETUN9rJ5S8y5NpESrcA4u%2BjKU3QWJhidabV2ChFBLceHHw4cwgzEL6zdhQhciZln8xl5c0l37rZqiEq9IbJlFdYZk4El8%2Fb1tAsmdEBm8TCteiXBnT2EjJ2QhFhs7UBLt96uie6kGeRc7AaolLdM%2BdvvR1Bdy0i2iSag69flPDKk3lWDKadgvI1dTGqsG0HuNBYjG7jQpAVswn06Hxtnr5u%2FBZXtaeIStT0%2FEm%2Fd4z7SxWRbgS486jcI4ZIcw6%2BrrhWVLw2jFTeIHxNH3V3nlIhF4cjkuO377mw0yq8y485fC3TQiuzT5f5OIzJtb5%2Bh%2BN1MDXFtpvGsdku4qIXpR8gpLmzPXVTl4aOSHn4jzXjsU6xt5p2%2FIqR1EaBrOpl22dvxkTO6DllkbyOJZs9yCibL8iG2sB2y0IuQhmoHLr5FX9Gwq2VBM4nWImjR6n8phDyoMhcgtpJ1dYn0Xo2EMavqoyFbV8qo7uLNaYvM4qsh8HbbvHr2KEgwB8iQrZexSiY3o6NB6b6WPu6sZ0dHEE17qoKP5RqlvXx0G2ACLcUAtOxali73tHAN%2BsncUqcDVyX9xrJ0T4K5bx3EalaY49p9beC%2BPy%2BiosNvUDpHh9hagynnsvKGo5gCEwOf2smOle6T%2BJ6wBeqmWtMKX19sIGOqUBZTpeVsRDBF98W9qMkv3eD1wBz2n12MXi9RmO78kCrlOQMcbdLSI%2FjAODLgwQUrHXanj1RN6PBypmtMxkIzy0RopP60nw%2Fqymac2fxfg5NhPQldWGny%2Fi35wFzkt%2FKgRYe7URQvBA%2F4jBqZ7pTjyLa3kv8eOS5M%2F%2FYdLlqvjhcf6cpXF0o2tYn8nsGNCGIiyPJD96pTpMFaSwmt5rP5KIH9Gh5Jr6&X-Amz-Signature=456ba8021cfda5bcc9cd546d87cc1914bb2fc99a649aeed15df8f03588725f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
