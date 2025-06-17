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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ5C7QNQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpmgn6ooC%2FwuobzcT08GluG0DtyqpIb7aEFmH0O5ibgAIhAMshOtOqA7SNnxLBDTFZy4oJnDJ3pVaAy%2BwVevgsAxRuKv8DCH0QABoMNjM3NDIzMTgzODA1IgxjGzz0kYOvYWe2JS4q3AMzlr2BZhgPfEwHwYFfOrq5rtb9hCGfxwSeOZ68Q3%2BejN7iInOacKuLQ6Si3nBYuZ%2B8kAC0Ig%2BP5vSmIZxlUG3GY2%2BrVNmutwzygbBnXD5CrEC6DoM7SNfyVsmto4x1hBI6%2BSddEoNMKlcV23QRNFzhl0fNZiSLrmr5q19%2BXuVgguVitWNNjWheYE%2B0Iig0jq31XE3HyFMJDcCsV4z2VuWRNxk0tPyW4WFogtj2j0zWUJYif%2BR4Yv3KSgymRAeaBzU5ijcw3a%2FKwRkko5MsoLXX9EYkGDBBBDlZInniY4UHVRIx%2B%2F1tjdCwCh94ARESmOWsqB3kNCJhEgSoSdZiVTqvDEa410W%2Fht%2FOPARfKc5qc969eg7iZZFt%2F0luJVFqABQKe6aY1whQAvm73u%2FPCdJ6sA0kYjb5zH%2B8AvV9Lh88wSzTfptlbZvzraqYssaFOdNHSRYYo3SysfCNlOk%2BRWN8h51UienE%2F9GzNP1xg8MYVMwRzASsL9QaGrM%2FLColdXCtabzTTof68DajV5JmUE%2FIfP8q23%2FJ88oCh03ND2qmQmWRgRRBqbKDVw75ZMPYmJv6eGM8%2Bm4ZYQBFmY64YrkGr5H4LIyXfcWKCpxb%2F57HLP26DzUOvPIxhJAmZDC2icfCBjqkAVgA1stLf6a%2F9YCu3KL%2BI%2FnHZpY0U0Tk0e1Z3jQyydgaqPi3zhSbx1iTOO6Z5PkpR2ZX0EzyUVi2p6DJopoZzZc%2F4KpNzQ%2FvCh%2BhyHq4K1OECgqyDSQdSWMUxkDSThbMN6ceeAwL%2B8K4Gv2N9DERjboOuWnObPJ55cdvtnmz3ViVMrix%2BBCHGOnA2Hm7IxEK9ICuwmpGNMQ%2Bdf6DJN6SPpf4W8ct&X-Amz-Signature=6918a6282bccf2d9ef3c061fb4687b70a1c13277b9489538dde55a7f410d071a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
