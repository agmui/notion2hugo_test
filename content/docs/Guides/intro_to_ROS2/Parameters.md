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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXMUPSTA%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T131545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlE%2BZ%2B3s1%2FeNwG7DzJbXXaO6G69dNghQuuUAvxX6mw2AiEA6qOG36nWmdztb9tkYUEAIOE4NjK7vaDOteQpHhdsU7oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDM1bPVMcHrS4bf9SBCrcA9QcahfA%2BPUDmPxlfEjD3cUZJAezahfPYDvc31nvhIFb8dDJUQRFcA6%2BprXqQePschSoOcd4Zk7FQFFfOH%2B5LNlGY5%2FpsyFu4UoL1azENYhGAYVvoPD9p6Dvn0lmVGxdH8lKqkk4A8GTxtKRotemkZ7yXT1DuxOF1Ve5yy6NJaYVh7XseyqaHMoU96Gs8SKZfxjc8OlwXTBpYJv4i4D9nI2WtqdConlwHc%2FnAPHUjl6l3CAPkd0qWOZ%2FyLbd3%2B39GS5uqA62x%2FCLeDnMscypvtMHg0hxsyti%2BwqACinuspoj52dIOWnjsBAK5n5SJ1LiuNPuWaZGmc3vEMblEPu7mxgpWGA8P7g%2FF13D7Q%2FX1OY2zh70ZBySW3VjVP55lJlqIJfdVDemUooUR5ffxpnaMkDTyHdySQocwWhJoG%2FWZ9FifyAO5VGKGoCDwHiitB4g2N%2FyCSYYTVD6kln4ZucI%2FaPcY7%2F8vpDBnsuz14zQm%2FaqsoqCw%2BlefbqDvmQevVvf2PAvRZ5uX%2Bf1v7VfBdTtHtTkcPRAHex6f0DHm8P7ynUSxtgLMVctdYDVd6Qv4QAiVKe85fyqncPMhffePU%2FJverRkcsBi4L3OLfL5XbJKgFd5AmShJe%2BoOtMpMaVMJamyb8GOqUBmBiZlrXUVMYhzwNAa9gAutrynJR%2FTesIJR5xfy98V0gtRD9vWFjF8kVcpvO5fY%2BiCAsjqQ%2F%2BNWMp6NuqR5Zp5%2Fmbo%2BAgYdMboyxGrMukG%2Bl%2F9KyHTy0YmplxwE4sLwvsCjsHGUy30FsPfEiKlta%2BxTxHx9AENHYmQ2XYlSluRho%2FR1Jimn%2BO%2FIbd7TS%2FIRp9P2gPmI7XLIOC8U1qLzcs12DXp3%2FE&X-Amz-Signature=773895b0039a04a05d1ba81066ff264f10ab09a3fdad6a161b099d3acd22d5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
