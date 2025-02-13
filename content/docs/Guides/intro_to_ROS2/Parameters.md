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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B2YOEMM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG1p79zqnxa9hjkp9B%2B3Ah84V7ZoQKqkxDmX3HZI5vvQIhAP9P%2F4flU6cAYW5t3X%2BKOADCAPe8HvbqCQMfEomjdrNmKv8DCB4QABoMNjM3NDIzMTgzODA1IgyyoDAiFFpVHYFwl2Aq3ANprRb4F3bv0pzfKqvsHABzr4AHZ5dVT1Ohf%2BZzTk6CFXCc6R8c%2Fy31%2BMHFz35C11sybjC%2BBO58223dVEUmkM23LgPaOwe0Uv%2B1wyycjbFQ20w2Lq1Qrtqi2Buo3%2BTaQhE9TsSvmDiqQCdYmZ5t3WE7SK1Wm7fCEbmktGJnUHlsdbYS%2FT%2FnRtDGTmNwJcoYfOr71lhEhUCkyGShMwT%2Fzo%2BvEj5iS%2FNTiY96JwpmkB9bMWVYMKXU1%2F4QjeWCKo0Rv4uIx52OPOdgIoS6kYP5lZ4NFLdseWmhEVEAJmKZWviffFkb40zqGTFEyS6HuBZfAoI2qW4phPrItpLo0qBfRjS7RQCCmpNSmYwkKxXCOl%2FjgZ3H39kU8OHkHBmo4fSERcpeg1yJy0%2FueH4PnRysed%2BS9aviYYiKiFCfp3wkD%2BFI0YTf%2F3p8DRBz6mZi8uLH1Y8H6YcimYpHtEgey13ncSdzoZbMJ%2BXEk2R8Pj0XyjfFGwYYgqoFcwauC52ZJ3f6DbZz48Y3%2FhDKyOCfMpYf2%2Bn7nYAfK%2FMtRbPGa3qGauj%2F4bGH5unYURS%2FvqnJhg5ph%2F%2Fo6cfhS2G795Jl02raTpz8cjy8WYlZmxjM2iPnX0lIv98Ra%2FiuTtS59H6jxzDfq7m9BjqkAeGLSgC06vT6ti8rCXsrj%2BWmMeTZdWdIY7xqJnqIgI%2FoAw3UF3s0UErDHg1vwoevpEhfc%2FurxmrwNaSJQ6%2BwAe%2BwUi0txBOLviuDIOgIXp86sxP7sgqpNyH0GgCFq31P8Ons6qnDu0YiGpm4Nv6qrtSN9VZXtSLmWBPvkoBKVtvq2JVTYVyRBIYD%2BbXi4Gn3WAipkak0yWkkOC4hwc7ZdyBvf2Fm&X-Amz-Signature=0c54af479218fa504cc7b03a9e95513356abc726e180e1a96011479a2fea9b03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
