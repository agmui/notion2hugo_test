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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHLLFOKO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFjKy4tDL7qqufY5m0P87TOYf3%2BcL410N4dQl60kguyNAiEAux9S36GhrQFBv%2BDKFafWPa0j6bui2JFSE3mq1som4dUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLBFcJ9NYYhnO9dLLSrcA2AixEQHEgMTa4W%2BZF83GHu9TlVVnO8KhYONeSN2K37HVw6G2A6IsQRCPP7dJIzyevZWZ5hkS7ze%2FKZaQAZWz5%2Fj1aCw6Y8Xra3RJHvP%2F9Zblb9Bb2bcRcSQ9vhZfRfAOKxsDN71WON6EjroM7b2b3JH%2BGQ3gKd%2ByuakIXXACQeP9QaG0B6R4Qcm2owiD8AfCV6YEaP0BH21zrco6OxbotL1hq7HWJhMbw5WrhRh%2BbhGGWNpM3QBbCJJoCxNfmWUExXiUKWnps7VnU%2FFM2WXiAXeUkSOuDNbRa6NEuBxq4tJfifvV8wSYf5kGN%2BeAe6l2DYrhxkyHH66W5A2x%2B4TgIHrbH5lQ3qO15U7fiqDrXfG6avnLddxzRfT0hE1LmS1oV%2BNV%2BS64sMm24fNto5McXG0zlyDi81TfhYls%2Fk4Dkbk%2F1vAEQBCLtCzLFh4vIqRAhA%2BAGAGyJZMOfoPFZ8ykwEmBHBYZk3AOVJQxDBpw0OhBpoNp6w2V1sS3j47Ykr0okiNAGSs2NdzgE7BrKndvHwap7xKc30O1l8eTzhqRqj%2FPnJKfXQ2wGKi6Yeq5IxADyWeSQV506Q2WW9wRfE%2FFdoFPTG3rr7wkkKT4QyiS%2FtItPiLblS5ywzQW%2BjpMOa8ocEGOqUBSwK8TeB%2FxCH1C4bIq6j%2F%2FVMfhCrAKdmB8IeJMlfNLI8zM%2FXE9iWL4KfWiRvggiA1m5YeRhsz2H7IoMxhl%2BH9GQtc3BMTxzb9MY0fUOjnhagcFciTLpH%2BwdlJjwKe8b%2B7Sh2TeUXkajEsOWP1I4dK%2BjjZWEU%2BD%2FnJTL35G2%2BRowbq7gRTUTK4CHRBZ30PGpcBHF1MWqn%2FcBQWEcRQmVyknfbWDXe9&X-Amz-Signature=20c9ad9cd7b5496c7078d9a292691640db6a191dff6874bb18da378262d05eea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
