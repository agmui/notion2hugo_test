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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSME4H4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDZQW0BMxg3QN2RlEZZk0sQxHF2WFI5UkNdv0bugSHLcgIgeSgAnoJL2nT9VwwRsDC8cr6sN9tfd4A4fHcz0mJ8QbIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOff4kGgPuMyehXVircA9mo4%2Bkjfl2DJO0qfkk%2F5hQnS4MuUq1S404llzLiqVz%2FtMI4dZbngUqknq1q2fubjZaA6adZ3NHyJZkKgxjYfK31Md8A%2FvQXPog%2FuG%2BbviqkTNHa8vPjY3zZAP7DFR%2FMuypI5v7WYQZQKM2OjnozK0N9orB3Dqos%2FlHpmyHWOO8JC8zStRCkXH6fxwblQj1OEGcNWvdmnt3Fb4sYP%2BxRe1uLxfYqNDZQOs43xyEZSw68BeN%2FtgHeeuTmPzQTBOylrejt8tKKESDDcwO%2FgkbZ0tN1fFNMp5cvfrffjG48bwr%2FZHLPJYU4syksfBoHpYHt1AIaGVAGBavqkOg8tuHSfAyuq6npzekvTXkMV%2FtA3DZ%2Fp75zwbiO27WHrQM%2F4vvX85kJolPe%2FfhA9ITVYbh95pHENfTPCwZrSwMhce8KdyVzkckVGJfiFIEOTgPp5ji%2FXKg0DHLcAwRYipMDVBGQerutG2cusP0HEY33wL78UjDPS6vhnm5odjMmylFLdEdgJQ8wZaVAgePzXlmq9%2FYoZQQAYkqfQIR6Z9THaoP%2Bi1iydCKSIngapVmcIakogoasvr%2FeLy0HKrXpirh3vx%2FTjkxMb133tO5fCtG0YlkF8zwLYuhF5yGmfGPyizsFMOz66b8GOqUBm91p%2F0plORo9LGxGVxU%2BocsMoTWcVqnx%2FG6TRkuQobx3RBU5AaI4p24fofFW9ZS28JmJyALX37XK5sxkT1MUdfimMrMkw9Em0ynD3jEpiulFjCs%2FR6Rd2RD9LE8sItOs1aW4nbZA7aYazKTK15yo6Jxur2%2BS4zb7ygR1GK2OiPYSgU%2BJ%2B0WeTyj6Vgu9MMaUu2jgS0OAlXeaYmXoEdLFyEdiJp68&X-Amz-Signature=837044873f6c275d624f074d2d321a6ecaa62ae43dbdb775cf0e92c1454f3746&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
