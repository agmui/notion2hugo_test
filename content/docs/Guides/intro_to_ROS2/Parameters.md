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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUXJ7ZFY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26D0%2Fc7Z%2Fq%2BVvqpcTCJqTk%2BzzgVyp5XioD6CgyakIbgIhAMh86hakgK7mxWM9x51Zr%2BrflxyAbUA17woZxf2LpSvtKv8DCDQQABoMNjM3NDIzMTgzODA1IgxuCPNc4T2BmCJ%2FIQQq3AOYg0bo5etmR8GiIhsX8fP2sy4lnWlMIzL0h5TtWjpI3Ub6VEQZ4Q2TvgPfWYQFbWtk2iRrkbnxudQJjhd7liPusYfNdBNwYtR%2FlSfDgJkjQaWrV4BkwSWiqJRIZZjfokNQ1i0gNMG%2B3AvsKuLNBd96ppluJ7oSAWLchedhstd7E8OhKxgNsCikjUA%2B5FgVIl3%2B5vwR5xvbkjGp2iEd7aePlSguSyCb05INNT9Vde%2BZ%2Bhazmok6R2Te%2FuLuuSJZuKfFUbWP30FKmIwBw5%2FtmKh9kep0kmTboOn9UQ9rQVfUF0SO61wmzshuMcXp0xcjt%2FhCxJ%2BGt3cbwHhzdVD87Sif8rdF3bGO7cyEi9J%2FqgXz5be2BJhYxVaXHL%2F5%2FKisR2ubADTvsB8w4Br0JKXHxBqX2ylNqi55LiEphxwd5DlSXnOIFwOyzthbCPewXY1MyA%2BUuU37kLFE5VTwYDTC7Qbnzh7rk8HRSdr%2Fgku4c%2FH%2FK6j7W6MZlru%2FIO%2BOWvb6wTZOsxCU08ONvMzE4meoo9PUoNM3ZU6gyNBK%2FaVmntxjhBLEZXVnogzV7ACD%2F5k3gVFX7fW2PEuwGmOwyVGb1ZOzhQzUPqH%2BZ89bv1vdTJLPiyiPskwn9504zoYeFjDNleTABjqkAeFEFKqMpVBCnJlDezTQoMok8mLYu8tR4EF0cbX78RrofU%2FpuxPNkOqvstByfkX%2BsQAfTloRMQa9tjD0HWzgl%2FpgXbUBc%2BYNucj5iROzbz0DjrnbmaWxPvZtnuVzy%2FBoUdIZOljVp0ezCn%2FSbTFzoxKqodoGFUUqE6g3dqbXThoDk8iE7uRTFEK7BykpIrDZFKZ4TO9dV1eyaJWHBk3leR1RAzpk&X-Amz-Signature=aa4b63f2459fa6ecbf186b143566da16aab6030e0811ed0558bc39a9cb8e8c10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
