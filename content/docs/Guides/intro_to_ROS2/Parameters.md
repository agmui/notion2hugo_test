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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPAOHDS%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdjHnub%2FySb1A22qMSsoekh6E5oDlm8Wmt0qUx5izv6AiEA%2BMcRDi8sOqjS0T2A5ZUuaAi911uEirimMCa9YNW%2BjrcqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGB%2BzcegY1Ah3YovHyrcA6kzrQM9LYrYxPZ94qdI4C5ZGrTQWtGcuZ27EmiqOK9%2BoIOA7U%2FH9dc9DJ9wXaYpMOCqhDkgs3IfIQv705zvURBeHA0g%2BVePk5dpHrFCNBl6dgWGS4XYCmijgs4JvJgTZKV%2Fh4QxrENTDJkeJtjiJr0iQY%2BTcQOpDZGPpcoDrPPEGoBoQSULmlwakMVXzAhmvKWoL6NtQzelgm3cdRc9qc5vFIWx2KQn91fP5vjH5H57Ou%2BYOr0qAXZkB%2BqlG9rewaw52NuHE9xsUM5%2BjCP43AwR%2Fw7eq6ufxtZGkI10mMITVBUryyqpT08W1ubXPFJu%2BaVCzW7RGkvSv6dbvCSNVOKH%2BaFth8dt4ZSFMykwuV6o5%2FI4a3YTCDmx8DZFiFFflDNvtR9GWETyBYh8U887rYRM%2Bs0%2B%2BdZk74OnK77zs3m02toFbO6X8bgFbpM3PCnlc7P8geXxUC%2F6eFr4k5matvIO7mp9Vukx62JxMuzPlxYgRlfQh%2BET6sMTbCgUJK1gpPN6MJRnYZ6%2F2z3s64JwAJ6uYpYJH7SZk2kSe0%2Fv4NlbDvcoBWEO6174s1xDm0XIJwaPKHwbG%2BFIubD%2B5jyrXiplsZtHrI8bSQseoZ6zjmPi8pnJXN%2B1PMyzsGN1MJOSh78GOqUBv%2FkLSjjwjAmic7yrejwZ3D7CCc9yNOJXLJqWhk6qbdkxTOoeyvu1p6vKbF2L6YTicE46aLZDJpnYaTchGWMWFEkR07JRo6t9aoiKLWzE6h1O%2FwMaMkbeMBCT%2FdiITOzEB2Cai%2BafzPGsS5vcmbviT88KHHqSbEVgwG02hslq4RvcysdGO6G6%2F6ROzyVVb4x8gznkHJ%2FA5Cf9J02FGABJwpH6bd0W&X-Amz-Signature=00a816d60f9d5490e163277ddd788d299da8f8ec8aa830ca036f59400065cd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
