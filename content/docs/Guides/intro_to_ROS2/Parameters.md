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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZCZX25%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCRT7y3xElIO%2FI9w6OX3tso0RfOu3zxAONI3k36bOyjJgIhAOESTs9gZ5y%2Fcjkq6mMPxhJGGtd1H%2BWsGiH0YDFE%2BK%2BUKv8DCH0QABoMNjM3NDIzMTgzODA1IgxGR7As73lg8YGkc7Qq3ANFGVpRkB0WIL4I6JfZATyo5nY8PxPjXLAE5fK7EKc%2FGUzWgLz5XR%2F%2FhhPip1S9Z8RNhvQTRvc8WRZ54N0aghmic3dpmfJwck4IvVoM90u%2Brwxm7mfCYSKKr7JhbakDOYRbT3wegY88Pj4EKpyQ3IjC45dJKtl1imDYNANpsQi3mG23YZNHSwflVMZoFe9UU%2BQD0iiNprnA57JOG%2F9m4yb57rLV%2FFQ2aiapzkw%2BObhck%2BnnSVJRqbPGiigoDvlFk4ZcmLIB%2B4RwogEQb4e0eWQ0IumlPzzJd0MEzyoRl4A89Yf79Z2EooxFWbTY55Z0Q%2BUFe1T%2B3e7rvQLQeyacepoLyzcNw8SvjpYlae83K2oARtm0CoP1nYtBy4pROXk4wjD%2FFBKwXulB%2BrdoiDavHTzjF0XEcfjsq%2F20O1W0e%2B9tEFVrrTHpscWv1foVrZHdgw2ztwpbxune19xeNuJX2R9A7Ec%2FN3NqOiyiKa0onIeqmgDCQdUm4sEmOD0ARMMiDS41zA1isMM9Me8gGRplaBTO8K6Q60e670moD%2BWBjaP%2BrcL80wk5GBk7NTB5cEynIE6AqHydY2kcS%2FYFr6cS33nmrYhKB6uVmmcP9PChK5m9lDXANRQfIhIPMVx6dzDdvrDDBjqkAXevFLOqe3WXYMUyWbxoFfLFnCjsRE0D4W6uud0z6Az%2FBPu%2FM7kMvt9modGsRCZAVr1imqQ8uFDstcxZMva%2BqO0Cd63wqlThspTw5sHD07ss8oTZWd4wpegyi3wjtVodyADr6dpLq1FQPmrdHoPEKDHr5yNhM5S83NMarsxuGT82ofk52v41uqaj1KwWvPoZ5sLWGm0BKlntVuJzwa6w15T9zEw9&X-Amz-Signature=8274eb5e6d994cfbb773894108692a20570d8336cd96a72e35821fa59ca5034c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
