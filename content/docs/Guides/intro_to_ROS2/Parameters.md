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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5LYKN4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T210334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHWIM5B1ZJj%2BsxsGm6UUNMfYthg%2FczeOEiOLib33Y8pQIhAJQZCLHkMRndUn8AjUxM%2BUHEolhpmYMEV6DVFfogWKeZKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJLQxOHgyQzpEgYwIq3AMJlwPJPKnjPkiM4zzvhT0Kw%2BKIG18sUYANKOQjbKNvUCQrpmAzui3eaGGh7%2FpNIhkPKgOROQBuKIWKl8FsX2PvF%2F5jZmyulExFiFp3uJZ1uiS5b9Q%2FzFHvyO5kEbWFlHCCIwxbi6lr%2BOOZKsD4OZwfxYkZ%2F9cxIYtQBmlar0r1l%2FXeMjC5D9z8d%2F4Le8UfuOsoLXYu0eBdAhcJsXdi%2B1RiZIympq2IfPBi1Aon%2FvcMuxRkgJ5njiXDDBfyr6t2S5fDoBro44wtnrkcIyIXsqMX0Zq3n20HSn2gJUuD0lg3DYOdE%2F%2Bih78GK6b%2Bn5syb9Cq1Sb%2BLMX1EBW%2B%2F1wXddQJibWCElC8LtHQvhWu3%2FbmudRLlhHU3draKD%2B0LXab9Wwcuhn%2BKg%2BZs4jz%2Fny6wCw1RqRx3ZaeIEZx0TsDE1X0Umxi4tSLphB3W5Kn2xefUzMo%2BuEa56hsTBdwaOti2g2CvvVjIXXiCWEnllUQ0geldPuMv3NI%2FDto%2B83PYd1zQcTa37nmv3jfo54rWuiljAkFIvBlQn4nG8J3uJW2q5j5FGUoAYb4t%2FQ35Nde0eYahopf1es30iQk%2FQBFV7pDCSyUZMtqbhLKalGOYFVdM3oi%2Fqj8sDraGwdb%2F3tUIzD9yoG%2FBjqkAbspjVOWNPAHQRG4HVh0yTZvVftnL7wOgNBKja4RWGTI%2FTkIdP4fKabODwjr4xYIsEUe3majPeOnsxKA3GAlNRiaixrJh6Xvy2TEdZj%2F2djRPfwfiLECEC54EcsN46KRrIneOTcIrjZvjfS2E0Tb2IYln2lJiaZbOILrZuF1nB6sUuxM4Dsesv090KCn8KY1xDm6M2%2BaXEd0DgofN5G1dzgio7ma&X-Amz-Signature=239e4f64f79ea59d3be9f85f265e19d2faaa392694cf56d24adb511a780a9758&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
