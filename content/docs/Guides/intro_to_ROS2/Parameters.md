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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR2ZKUMX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA0C1Y%2BodIOuFLiebjm8T1rxAA7GjjbSszXf1Ml5yanUAiEApb1XgFEA8rDMbou1QxYsbwORfgrhC09Q%2B1rC8f9ShTgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk2L3M7pZqIKpel1ircA337%2B8E%2FjWrjQJl4KeOiqXBjq03r28XZ1VJ3kQ3OtoN4A7AVI3hPd%2BelBaTdR1zdvahiBJ52bAlDkNqWAbmaRHPkS9urkYx%2B5anoY8FTbulyuVv7QLv4Ey2fJpJI8a0a1iRB2IFfd3OATtLTQGzZ6DQdose%2BT4JwHYc54yBvUsXisQIw%2BjzNCviTrTdG3czxk3K5I37bZWgfV96Yuz9bi7hSkui9CtcGQNA%2Fnqn9Uq1xV%2F5lQLCnwZKzsCwzGEMDtKJODs3mOx%2BVfu5dyXz8fT0X6LPblwsfuZFsumC6R3%2FGeuUd%2BRYafN%2Bx1nthLLW6PdG0oKwImhC%2FlHfHR9RY7sn3RNRCF8bSvtiep6iICms3yC9XCIt2lp9GbtGx7Cco83k3NpaIByLF7imzGFucOYG%2Bz8KycScN4%2BuVhFxKkil%2BMK%2B7qcpOJTZOaS%2FRw%2BAGuunWcQI6f1Jo5JtwKMzYmsrYqTIVXq3Bm5FM%2F49OwMA49fU43nfIvinRPfYNWytjmDy%2Fys9BnyZ0s127lYLvm03bw1PPUb64%2B%2Fbn4PMWf6QQo3ZlZ9D6g08rjv9RNWSH58%2FM7dHPxp%2Bs1e3FkI9OByGQIWeGlBaDtK%2BnLSuefYnXkcFbdvgLsmWMCVbaMLSmyMAGOqUBt7LmfDNYNyTV6eYKF6dQgtbd1Zdx%2FWpZNhvrwjCPxTnJb1x6PwRhollsuT1ZJG9GqZJOk4ivrH2twrRZwLUNsPj4j96Q3nQ7tvaBXEAJK9s1%2BjT8pgputJno3RoezPECugrY%2Bilw%2BZ6iNYWhgDeIm00eVfEWSfe%2BSgh24eNmFR1mMGfqBcOrF55qwYmq2n40ZqkHDiPpiDSVwMjeIdhVzX%2BjwOia&X-Amz-Signature=f9f1f1d4f5f4df3374db7854f70a1eb2170b050b93bd6c148b24381eb3fa03e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
