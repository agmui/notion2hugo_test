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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HHUTEUB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEU0RtqEvu%2Fbef85ghlcV0QDoH5Yx%2FnY%2Fy%2BwJJm22DHAiAyRH8Afuzd9v3G1AMnRKhLYle5yT2pCDEMXwHHqmTiCSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtMo%2FMgOVl3iBgUhpKtwDmFR28BzLwglDMJKiWtjgkOM4mdjRDR33Oz0i%2BPuCeWvvJioAQQTm114K8POJnQQaEnvOREkFUHnkpSWfAy84ZUzVugxhLtvP%2BoSebqa3pZ%2BmA9o%2FWaRl4U2tBNeXE1FPxSSN%2BYjnH6P300hcSNn0q7kYDbtvAZKg8X3g4iOZE11b%2F5rK%2FIUSXStlPIUcAiOFHeTS56TOftWpeGpwztvxvrzve5Yj5r7QZbOoR0ik9W0SKRC9uy7EXkagFhNs0gT53kLx%2FPncHRvm5kX1%2BRlXPmx%2BS1S6H4gBuaQQmdktuRerj%2F8Qr7WeKiaENhFjCd7Un3VYXrdDktpDM095hqqHFY4YYVptp1iuPSnb1DiyjxAKHwqiGyHfOnDOuUs8y%2FYMo90N%2BUSUryk4bRazbBPvaV8rDZNEIn5XMfdX0r8wHfB6XG9Ud5zjTB7HHyzZERC9aB2hg6XGUXMFyrCwwAx%2BODsRN3QEga%2FKoFcfhDZ6ZJgwAlMqKMXfUFnJxHI2eAd6lPvrC6p6jcnCfrLqMRp89%2BPeN89OJCaKnOQoIJLgQDjurj9qLqmW%2FU1D7rh8bn%2FM9HIZ1RzolBf0XUlj7%2BoSeV6Km%2Bl%2BQxxVtAV%2FSM9QCHjymKaidilyFe27bJowyO2avwY6pgGj6gStpjs74yhi%2BVz3KwUakDl4XvBU37uBPcVbn5t3A7V7WKK%2FQdH8ZOdJp3OjeyDvMHsxMQhTtXcH4xJrIiAvQwQbPez4bMJx2z4uWOqi5vdU8rPD8JDM%2FCf1ldZipRtIaRHtTb5Yq4FRDw05pn7dBKocuA7Z2V3z%2FtwpiuyCIrxANpHcW8D67wmb2lHMdGSOu9%2BlPxLxl5iuTJX8gPR2pCI6S1b7&X-Amz-Signature=3c47e5364b20e416dd5ee620c360d271e40e1a4470ffe02b9f57c525d8ba6086&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
