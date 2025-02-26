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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGZN7VPV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGe0HWZAuIOuIhzrfCjpnsQ6jZyNFj634mN6c5VS0M6qAiEAzzy2PPwSi90KdXacYYD5bcxUDnHxR%2FzMJbBbfy%2B6bFMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFNoRpST2mlE6itRCSrcA67kvgZtN62ddrmiYrGFWmK7ArUvu3EcVgVGbI63vzWo5NhiweH3VgBK6IUlsSPKZX%2F5YcSR0eMg2cNlongCmExlSWJja1qjHiy5PiHsa8Y510IIPSFVx26GrLRj4JgUwE7je7v2%2BWhdsxJeorcZURWbyrxuFUcTmz0l4cfAxwnIn5lD0wKNCgfthb%2Bi%2BzUNUDkpLFfElpV%2BJjRdWjqEoempjd5lMWXULzQViq4mIwkKz1ej63HoJEuZgyT5XndQpJFZN3CDMpTUiu%2FjP062nm6egNjwK1BZQyI8tfN8k6nBVYIBPvT5JCO0ull9FN65WbpliOcR4eJ%2FasPtO2goT8PycbsRkDYyM3n11Mnn%2B89FfMCWxrfXlfvtS3m3vniI%2FSrRADQxyc%2FgPuGAfdghH3euL0r%2FbaY5Q9UOsNEThOf0vJ5oBGFOH8mdPPY3OWaq3me8CpKoiEFGcG06dcZwwIJfhSWNIqN6%2Fk2TB53eN%2FE05QwADRPVgEgVQFctcN6GTMKIaiVpKslZykeYNIrTrNF0zZID2%2B8IzeTyEkJTVVTt7YVK0NrhhcJlq2qKcCXeTnWz3qcvm%2FaG19nmUMWqUUsWKAkaWNKCDPHjevPq%2F2CWei3PmIhMFI4bZSbkMNa8%2Bb0GOqUBmhmmDgz9NdcHUBXKAfAV42nKmJ6rPc3DBklUJ9%2BRovoZJLq1bWN6oUeXPsmnou9pnB5Qe%2B%2B24YXjFlKAP%2BBx16dOrGq1p5mBw5gCXpLdq7fInk7mcfpQ16iW%2FYLmjz0dDIorH0Cx3nDH9hznink3WG%2BddvjOfDJgNBKrUOBjprtBNodmcmWs%2FvH0k1T%2BoqlVMGdkU4%2FrCpUZYPCLrKClLV5rz%2FGG&X-Amz-Signature=f48b0c2d96e798fcb733a26fdf9a03f9364cf0b9a4000bf77f7d17b906c8b641&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
