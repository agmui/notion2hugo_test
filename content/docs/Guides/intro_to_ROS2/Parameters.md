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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345DRS4E%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNsDpwDmU%2BEsmq61M5VWoiBqnBOLo%2FcEJqRiXAFVtwRwIgB6QpQr2Xnw0iWiZdbDinqNs4408mfRT%2BVpXiw5WkcPYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDCQMEvqdws5IFLiCrcA7UAVi3ZEneFflLtHeZmoxJPUAISvTlAelisEo%2BsyFgTKNARD69HaJe0Y203K1sB55d%2FpEda7kjIuhTu9GhgfNyTmCjw%2FlnT92GtKDvRhpQnjfZE2%2BR22TaJjzmyGOONNiBJcJVZwre8uKi%2Bwz%2BWoe2ckAMf700oRUgDzcavJ7w8sb%2FzuOTAKIVAuYJHfVyKJ%2FK%2FCQNEZaW8lBFLsgSnIcl5S5LsIWFsUAVnLNR0%2F5g8UThHRpjna61pPU%2Fyxa3H3AbhMcb0aeq6hsYALctiEhj7Oy%2FLIUYlTqUcRstoK0U4ylDnl2EFLx35%2F%2FvGYESpuO5WcX60QYTZzs8BLP%2FyNyHaEQjy9MUkDYGTaQbxyijfNNvlJpau3pd46ksUu5RE9PGAZOxC1OKedO%2FqxTWPSjL565oNZRYfya0esLR%2BWSQ7MFqJdSvvsHVdB5S6fSQjkH%2F6boMlRjcg%2F8dFeE6bP0xWasXD8fcQLOKZQ0gHBLjFxxRDl10NSJkYNSMGBKzWnZSMXBb4faf3wgutSDdRP7QJ4I1wbzg2LoFVLSY3U%2BZdQwEgnsGsy9mDvNh5E%2FClhY5qRKMOCxLo%2FBefsvgapDLhGsC9A1cIF%2FbgvyRfqMDn%2B3gqkVOFhOwozIUGMLKlj8MGOqUBk9sr25MFxTaUz0WVO5PI8wutvXEeH6yO%2FMSB5UX97asAU8ZZDWjDOA6m5%2BqeGCvBlI0x%2FSJ8XrXsXf1%2B%2F8%2FiQkoDKJ3a08ENYk48t3Bb6Fdw1J3v5AqJvzely0gtzx%2BKnnbQYrtl1ZafGI2YRVYIiK3AjtEG0Q1Na7ghF5PYA2ZrzcPFCPmwY4giLDGSqpcE2WTOJ1YSeccDaxb8GompBpT9crqS&X-Amz-Signature=f6b525965622c8c48efc8f38fe6e0cf73bd52a7dc641f54054fe1bf35981c25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
