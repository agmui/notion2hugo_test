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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LMTHBC%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs2vq5bz372XKU%2BvWHG6%2B5Gou9mp2VQYej0ZDN8ntPTAIgHfzbuErBmqg0CtKUO9PtG7S%2BGgNm7TT1BCgC6prFDoIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDe62GJa%2BSbLLO3IByrcA1TG%2BTEPvDX1lGeC7R3xxqgJHZu%2B94D6TncoJO5W1BTRPoMq3jVVsJFvOgKI%2F1o5etFp3WZVYM39JCXC0m4nLzPAseXKy73TyMZNcKQ8s1ByKZY4T1uUozl908jk6hIJ1X2tawFW%2BorjdIwLv5lWVb5UXc4BAhk6c81k%2F7dyWttYrttHaptHWK3o8zOVF6slR4k2nr7VPcWCf%2F0dckpQ6WENnTdLSC0wfQTAY188aU1HMgrXtDP3FwRvGxJncqWdBlRhkIX9Gz6Ix%2BcM%2BM3Uacxygjr2DvEbczJ0FEssWQ1x%2B7sySHrvjwBQpW61zuY5SbIlNgk1gC%2BHHIfGk0v0t50RaDLQQXwufqe1hMvHorvMqQ0zg7cJbDnceuwdKiLXr1AYp2jWHhlYQOkTIWj7KwwHPQXmnH27rrMzU5JmZDWm1CsvMdsoAFJH%2BhH3TEpYl4fut%2B7Q87On1BNbeoLBZ6JVqI5iAnqe%2BkcsBZ4S73Oq3Am1CoE5F3Q6eN2N6kEbH99a5EQhmvOhCtWJW05GL8nRCBdhRdVx09%2BQl1SfRZqb68gTNZmIdhVYvmppLAHXwN6oOpvaWeuGYI5olq1VXJUl975nrJ3FFCDrIMeUrmYFTm1kDTISVJQcU%2FYvMNCQoMEGOqUBK7Pb2FrAPrm8r9Rym7zFPccJ6WPiWpfnjNiHeI0nxmvoPNSch6IVaF5lpYDbFNj940isYkETSISA5tM%2BB47fYb9ybj5DeQU1m%2F2OlrQerB05uYJuKEA4Uc%2FBF8wG05s4rl3RXrab%2BFlsxSCIO63Is6oF6kPd3owgNcac8sGo%2FPP4dt1vl4aiJkA%2F%2FerZFxkzQM1XoDh%2BygOeV7XG%2FFZ518bJ%2BBQw&X-Amz-Signature=a1f8c5b581994c9d7e3aba0f9691ff9740c5e55413b92b7561e9b81c5b2cf0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
