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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663T5PXI7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHD07i31G3Ww%2FMoO5jSEwj%2FTwQbas4YXj9tX5woViL6%2FAiEAwt%2FkyUlVWR6ZIgoAcGz%2FBmbMXo7GM4fXGFpM%2FUWGKrsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPMr4wF37h3raG%2BVqircA2y5BOF0FhUn84acSFtwt3iLNHsmm0jFrTRlvMsqdshUpcaem2n3ENQioISf%2FTXNzXX0bWD%2BcjKflrKEkJZdA0ELvp7VUD8mureC2jJDWyjGxF2jC98HYz3YEwBIN3oA2YJkzJpipnclwAya7r3FVH0yI%2BzrcEnXCkoaw4lxYAz3j%2Frd25zV4LCm6XhrJABSyWB2U%2FVtdc5QfWk9y%2FFyA8ZHYsZVIGjGd%2FVLL0xiFTnBqmiqaXCerBufEzqLQDhpxQr38BqstnuMui7as%2Fly%2BvTg%2Fel8%2BBSSn62RwnPgssz5ogMsP5ISoViajC%2B9mZEHEgbNG5G94ChrR34x6tP%2FReiDixo5WXTRsN1p5ywkmfctCWpRKD5vIHgDVODFLfmICbRPz11ttLN2jzC6Yc6nzjjOwsvnTQIFzEF0mavh7qBq%2BtYq1ifHckysIkcrUxufyQLa8msDO8QtARVZYx%2FHW07LgNeY8WFx2vx%2Bqya3rQeiTWJEjrgWN%2B8TOaz5eKQ%2FZjvT6WArmUG3LWe7nCjz084X8f8aFzfeAFOqKa9dRLuLrd3kN3veb2mFbJaSvZpgEjqj6faHY5BE%2Bh4aF1D8UMOSdaQ4beo%2BsruS1AifpBIaVN5O4ORm4WK6bCpDMMi0jL0GOqUBZDuBQM6sA8Y2FKYFWo9CsASTXmBub79Fy4aYB24pppnDHEM3b8drkLZ5ig14lBulTEsQ%2FEC6iHoMZbEtaUr9GV6Trifj92NyD%2BrGEOgYwH6d%2FXAaJNf%2BK7XJp6pU9%2FrTvs8gZiv8njRF2zQYoUq3kFh2XKtkfcOowZWZRt9MizDOf2LOZ%2BmBbggHcB1dWlUYN%2Fx7w2dBA54VQlPiwUucsx6WENkI&X-Amz-Signature=850127002548e8647dff80a8b351095723bab7f18704ef5db35a602230baf781&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
