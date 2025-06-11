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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJDLOKRU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAuePQHTry1eDY3ahsWhJqUGkbZSnSQuD0VnBvXvw5%2BgIgfLwIDt4IUq1c%2BEbbCUzvNPUEoyN0USBp2%2FltGTLsIzQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsxHqkH56QtxEpC%2BSrcA62PdtyVmwI5PXIYySnYAVWZrEMgPkwNz4wTlM1nYqRMw%2FcT4r4%2Bj1ZpbMOENx3Pnzp3MDS75hfRE%2FEa8TBLI96T0Mv76X5gl%2Fx3iklLABtHPNZE0LhY5CFpJxeorXSYM%2FlKA9j0Rs1tS9Q8rTixhZsh7%2FDYgguPreC1iiJ2pLNWWitZB3cK7wBmqstGV0biS%2BXQN%2FjriPgRk9KzqvFNKjvRSzSidtO5S%2FNV8OLTA7ON2ndkvOtpqEZHjjxEucMybtKhosynLWb2L%2BSVZFArH8PqHq7wgaFDrZ2p%2Bfu5dutoaq73FF7mmKBYXxi6%2BU9uRjRtzsPdqbxA1yoKdOaDACBgJIXz9nWEY%2FH8p9TKoYq%2B5ExL8lGZ%2F63%2FIWqLvO7M%2B2LHAVTZhwVdgy4N4X6gBQxBmQTgEL%2BoMB%2BqbZQL1mADpw553b5i4MoOAs9Vce7te6%2B5m3GGmIzDY7eAPS1ydCWcMgc4ihiJELc%2BlOWvYB27NAgNLmh2fmOJ1RTrQRt1smdMwSKU0XGJO91jHytjuQY4m22MiIf7qyMD3rDrUIWx6XadCf4M0AgK2paDCJ59ToFMk%2BkK%2BdEgSMwydTCQ4TQO2a0DdMgy7LcG3hkgXz7%2B%2FStaRf546pRAPvfMMIPlosIGOqUB2HEI%2BLiuxfsQwh0FII%2BTP2AaBL6S2ZOY%2B0rQhDWp8yeE1HDHAD23KgfJDEJaSK59XFRDlpxtjePEFZu%2Fz1TsHPSLwxlZJqcNQ3NZF5xr8sGy7xJjZk3PALF0K6qoaNvUyaDk%2BMtRl3eIXwUkwwr3oxn6ot14AgdoLhG5ypMaZumFd6itMmv49Q%2B0DiWs%2BLK0LSMRtZNukuL%2F%2B6o%2BlHg3cWpWgl%2Ba&X-Amz-Signature=262633c63dbbc731abdbf7246be4e6772bf0798cb198bc8717da7ab88d1d52c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
