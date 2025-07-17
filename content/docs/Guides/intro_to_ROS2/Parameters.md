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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFXXZYV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD%2FfArkLKc983TQNUvnnSX26DEiA2%2BT8IA6Qfw5Bqb9YwIgQ3RtQmYg%2F2q65qwLyl7TIvKIjcJYbqaaX30SgF%2FXCIMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLMYOp30LjRXnk2vOSrcA8YgwpYUbhD%2FV0OhUvulEHdvbhnxzy0hIsUDPDSWpyxFXOY1WXYpyys030yyCkwzJcKgw5jVZk6lKtZVab9p8QpPqMX772G5WJOs94pBlpe67lm0VkO%2BJu0FssQj2VCmZcwRHnukj45drVSberc8KEtMHOmvAM9QT6CG4lOyhvg8UMKWXBiJj1GlrcG4y%2BDeMgjI7VV6pjs34a%2F%2B7zg9hYXsCdYKdmJM0%2BIVGg4svuuNCkotXNUXUlzfdUQSWBNAJw42L4ZaRQcl%2BBARhxFXD4uSS%2Bq8FsFEuDgiAeuhXMPpIDvBlly6VDeIEmMuJAvclPC%2Fm6sQ%2BWe9WCWVcbUmAwgb1c9S%2F5R37xdEPH1qAdjjkm3RaKGvKRXPfx4m1UheYqTiafbWpetNrJUB0TbdAAhfYzdQPITj4TIdZnyG3wwP9d3Y9Ecs6mMqhxyMySJ5GA0ZezSBeTPW4KOUNdhOBccw%2BIaGLFmnNhuJlZXFZyM6fO5pbEVuVH13JU27kmXc1y4XMlqeEicneyV%2ByEC4CmjR94RbxZ5DiMYxg0eBZGHSxCep0o4uKrCNRBhIbOvD9ScJG3nrHiMsri081iQWm7HbGtJZzW8D0HiAO6meqiUu2%2BaX%2BqB4gbVki8XZMKiO5cMGOqUBBiLbn7D05LUdM2lrmtd%2BBk1d4DS2hxfLfdmPQ8%2BcWZ1Rp4k3GxmvBK0WsSIrVsRL7PadZWYXD9uIphUf%2FBoeTVEpaJL56nMbGA1A9uj9JFYsLvhz%2BpB3Ab0eE%2FEQxSWBq25%2B%2BN1f2RXgP8%2FmhGY1bWkxmMYIWK6KIq9foq9hP%2BzoaIt%2FGAje7xjt3ae%2BZb5U%2FrXzwUyCSRpwUfR7KGvXpAs41EiF&X-Amz-Signature=30cafe3c0f75b0b3753b173cf5d086df7318165532829c5559d3a73588fadbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
