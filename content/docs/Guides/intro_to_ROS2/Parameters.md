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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJKCDWIH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T150721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCSH%2Fb3y2Z2CAl%2FsrpvvV6urCmuFaFUcPP7nRn4gAu%2FxAIgQSD%2FKaKKS7BMB9HZviDUkBz5Yb0bM372WRvvZgIm0voqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJw3%2FDKGszyBKfl3CCrcA9z51WdeHpcQsX4XbEEUbuajALXtUU43bmVPkKkSeSC5pbGHCrGKisBeSBuUYwkBBwiLBuGebZX7jnMzOjvb%2Fv3LwhMxUHTfQRI4%2BKi56IZ2Kn2TVwSXApt54J%2FKEekfARIUH21xzy4yl92E0vY8LbksmO6UuznO08oDc3pAWbXMcxKAqaH9e09MNRZmvoimgoe2HZZlWUyOmjuvdmnX2LX9PZuyPs%2B0vgK%2B9UztAM3VyiqOuUYSI7dwVrHN%2BFYs2%2BXyaqpVqYDE3X1cIeFQIKO4B%2F2sZJBQ0LT%2F1UgYy4%2FNpBl%2BvBXbLPhJqqW0iiGHc8%2F%2B0bVIZ%2FCYW8e7wZX8dmm9782VbVeRGByhNZydFDckOTI8pN6ULYd9ZuzNp0LMRxrHsqc%2Bfa9rN0Lx%2FftQXdu542g2k4pxs7tvdCh6O4Ck3EdrMMP2rpmYm%2BaparPN1t3PPtP%2BQKVUlmJrraJLZInVhMre%2Fs%2Fs2HQPBUjD%2BvEKihsfn242kllQ8LsE3lBoLrKGfoQxIOgIwnXrCiRqCnxMLgod47WnkvAxPRip%2Fljh2VM8lIFSWGz3C3aNRKLA93L%2FMWypKHsAwK6mkJEmfCb0eb4DNHf%2FKxgaHp2vas7YObr2n7Lrl5H8QLcMMKOwjsAGOqUBJdhBbdQWc42lu7qdGx5MpVF9p1Xyqbdj%2BzDLa2LdZsmAo0QKVkRbbTfoQn8l6e%2B%2Bly4h29RI3%2B2%2BQziEkgqN%2Fz7VKOzypMhYSaQPU%2F1BID9PrBt0nIotLBX4YIl3yrI61VGRo6J3XoYc4jn0gyVXseD7oqM%2BSevJ78JtDkuoyRzoSgFw%2FXxfcVm4Wujf7VIrwwPCZA6WR2RXwZLxLr11FKVGLw9J&X-Amz-Signature=07cd5c7c3420a63ab8ff1405df3061c8e3ccea03686dfd66457b89959e99d806&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
