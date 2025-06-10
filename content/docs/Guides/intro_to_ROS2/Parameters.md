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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OM7KMV4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHQrjySAB%2FTLUefO8WkYXU00h9bL5Y6Y12apa0Pw%2BOFAiA1RR90ouDz0EULE%2BgnrdHLr2xst0RVoPimu0Pt2qj8xyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgTTsMZANi073GyNKtwDlyPHIcyQl%2F6uPFU8EjY0qDEnvzIT4cKKGJs%2FG6Gr3AzCVR4HZd5zIsYfnb50gX0lMZv%2F2ZC2p9%2BrYgOcqJHFZmQUbHyN0vRpaiOXI5E%2F5BQL3wW8IYVz6avsfT3FNVKdu2W26rV9Ioz%2Bc1SGrmLeW7%2BWW2mmKX8i3ohVsYeOMyW0cq2bLs369kvHPBFDGJbccpdy4ErbdJegElxbyr3JL93sSZX3yKAnTNyM%2FJyvl6pBFjVa1T6vv8jzlCG1wjnCBFd4p%2FMz96ML6u5QHawVH9O%2BwLNPgnmtiaJi3xg1wVIR5XjX%2Bo7GJPjCVeznvkZePFsvj1q2gtd%2Ft6jnlbBoiTKE%2Br1XHi77KoZtPa%2BG9CjV%2BhIX8AjEc5WaHxbDAv6wg9sfuc8LEwT5s%2Fpfxwmfi%2Fk%2Fd7WZKIyESKvvCI7WZSX%2BU9B4fU9SAF8cmF58gfeBLA8bscWGIvFAaQpdnDyTF3OcCG9mCNrAMlh8rtgMEjbkwpCkOLJ%2FDwiy2kphxFiUrfC43D4sSsP6y5MgX2TuCdgCzHDtbexyrKAG%2FN61SlMMQI9G2AQus7TM1vm1zsz52fc8ULCNSvzWh%2F3mQXhxMAZpxOStNicr7ceZne2adF2gbL1wkoPgpdSu1fowm8uhwgY6pgFy4Y4mCt%2BO6GoQtKFtXDrcwx9PNPwro1X42k7ALoWsqb%2BVfPqCrbshCekeG0B4N7MzaAqURGDl0wUlvaw4%2BXE2c2%2F%2Bq4hKqX0QcfNJ2NRVnSqeO2paBcIqg4DW5n5xzyf3C35H19oHNbE9GkvbozrMmdF6T9zLSfpK7Moo74n%2BnmO2uvDmQ38fQqZvNiu5APJn5v1978fJjAlo6WjzGrAr5k%2BmLdrq&X-Amz-Signature=62a343eeef41ea241da7e8b4abb1223ca430a7ff78bd4dc2652f8616378bd4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
