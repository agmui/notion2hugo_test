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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DTU3PBT%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrzh31BEOFfoOycI2EPp%2BvkBWQd%2FPUmmDDhJ6H0ActAAiAGW0abPi%2Fc19%2BP%2BIMoFmuB7G52T%2B6Fhj0lOkViTX%2FCVir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMlg39YWc38QFnuyzvKtwDK%2B5d6SVQHCpR6VHKgrZFUe%2Fin9ZZuTWOXg%2FW%2BWN4frJnPr9OMH3ohhO2eqDQgPu29O0Jvaa6lxl6kaDE%2BfMYeLJZ9FkLilmlEyW0V4c%2Ba3uCuXnhf0AfiQ%2BfxIrSNcvYXnnbdMathDGTE5S9FVuo0pnht5FrOvOcKaC2outG%2BBE2ar9CjLTZ1ppdwh3WK4QSN29lSCQDSx6i55MQFbkkj0LRqeLcJQTfaPwPmwNB1j%2Bvk9AeNSfBFOJMCVBFjSNHnGfwxONEhDCE9%2BW5%2BDaZ1GSGm6Sq2fSLbaZoPQR%2BDn6yPdXsTjbCjU134NMs%2BMvXvdef%2FQPUsmZlXWWi1qlnvLr2qDjhjc041bVWaRxKbShq5kHwj6rZecJC%2BiLDvOQijoQT1TiVblfM21Gzo5lNrIWVYGsuh53Uo7WEf2e8530Dk6axqFaoSEAO2k7FGei3j%2BmS9ppZOOeynCKGCF9JXp0muqa1LggagweVaKWIzx1s049aVMJPF98IajdXT9ShAyW1tyC9zt5rEaVi3mHUEURBU6GTbEzHt%2B3SKSJUwgCoOHA9bMbfyUmwKG%2FJCsXzd9jYUEgXpBj91i%2BJkiGtnMkUcj4Bs%2FLZQ6QPPbKmyVDBJEO8ENJqbUexrp0w%2BvD4vwY6pgFO8ua%2BrQhH93YRSCCeISdsPjB1lzl6Qs%2F0V7x4%2BI9O14YgPwH9RRJ%2B0ORhX5cB2QjbA4GyhBTjd9iLYqS5HrsVLQxu7kQLqKqlplA4g7q301nHaIFDdserk9T3P6ksycShxKRS7vrmFfrFKoDURp6S2eBRsg3kP4Ovi0e5kDNh4ZVAJ%2F3XgHrAeeiLJjFGsowsJPaeDXzIvL9GNC%2BVura%2Fydpzx9oR&X-Amz-Signature=09ec008ada5b8be78adc8d5ffe98fb73becad14b7d63b59ca2ab7517eedd0a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
