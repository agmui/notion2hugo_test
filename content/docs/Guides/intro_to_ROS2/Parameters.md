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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NLZIV2M%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwPb4%2FZfNtEaLUuzPE61u%2Bz3aeZzc9p%2BRey0R%2B%2FMKznAiEA2AOsQtWyqE7Z7FI%2BBo8hJTs9yCnGWdWeFGxG5POTIDAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvZpFCi2kukmDBWRyrcA8jDYmSUlEO0ZF1Q4jYLpF3YX7h6JbrBXeQbirEl9UJmZrbnSZEkT2Dfj218ELykitw1RNYmuQyRAlSg2jmUh9756Ofc2uNCarSGvMw6Ru4ToQgkUfrrj7ICQEDFWVecReIaHXLBajaarhWyp6eUY2D91JtBXSOVkqzkPGtuI1AYLqbcAzoMI2wimKjlTZWY%2BLQeULcTSfhMf%2Bx6xD6Cpgx1SjL65cDLrXZp24LJekcGOut3Swm3DIC0nxw6Pzt0JOMF7YG7Zu5gRAn63LVI%2BuPJLFMWHOJAo1jSWhtO4af%2F8BnjNUtvEQbmykr1BHqkP2XUL9E9uvhMqd00mRaetB2Q5qoMzXRJelgMsHE1jrDd3bYPTbon3D4zXG%2BwqS2pgxtVyt17MJbyfLbd7QzZnITv%2Fo2zhZ01WgiEiZe3iDUcItVGJV5cM7JC2mAW%2BBRpIvZ%2FNNYARBSzUfV8pskc9fAxJ10bPcR3v%2F0l6WJ6n2%2Bqhl2aeubzc6rX5qp09PibRMzpoAJOSryj0bHfD32kMFXAk5ZRskIXA3ENcLHOG03w%2Bn0aV3Hih4qd6lJ8I7qChvu9SS3sT8Z0VpZYMkDAifI6FQh91Un174dT0nD%2B0WcmNBJebFATdE0x%2BLBqMLOy4cEGOqUBdSH01q9eqKlekh4ikPU1kkTKuUlYtGsoG8bcjeMu53SUKZehFyAR%2BRfeoKigMvk6NkhWHYvQb0Vy6YJITI5MtlkuHJCzoiAZKxIpre4v5wniCW%2FwfG3tNpImQnBok%2B76m7fi7HSW02yo7%2B8V%2FYlM9s%2FFMtuQX6%2FjAKgus51eRDrFDJVZ3ZuIfsfmOO6FITevIYs2qX5dtIdtIfqOv2XCE9ZPMaEf&X-Amz-Signature=76d22c76fc6e831f971cb61f24ff11403a55755383fc87f8e7de6d1bacbec33f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
