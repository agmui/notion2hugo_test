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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYNXXV3S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAL1a%2Fbrw5sTdqKilCmJv6KuxKJWpf5hIkzbMViVh3hUAiEA%2FyZ9UzVhBGaz0PTwU%2FXk2TwPxBrIP4%2F9hd2GU44RWWoqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP2h4khcjARGewACrcA6ityoBtjf%2FjhZQNgIiAO4HKlMB2joDDnZdV48g2Y74sSUjsUhG34zGy8C%2FBpk0tKlN%2BYouiDk2gMdn9bysgXvA0uVAiBt%2BmDbfTIEIVLoP%2FmNUG%2BDw0BwWlZMRVEaZphanBft9LaZs1NWC94dvs0bmodIAsXvUdPSTQ9uMMI99Pv3l1x4DM7yu0LGJ9%2FxyqfxDjegLpZglVyRlIOEwhHUTfsLaWigiItLtUclYaxWXMFt0WVbVdi9%2BZaGGc9bDjf5cpe%2FvZTtO06hpmpb831xbVTXP1H0QNOQA%2B924l%2FLwTsbGPUy7F%2Fv4smvmqsTSmjrn23jQv83tz7sZR6ftExj9HNmqKL%2Fln78OzV9gveqF6AoM0r05gvg2eId7vGYtO1BI%2B4crY9X87O218oIPeBvtxMROaF7Wm66RS7MfWgvLvm%2FkZyqd2pm3gUoVJsylaEgqDn28Zq9LthBcFfb%2BlgMXbAfKlKmC8lc7gTLi8cbQqLBFLiUZzD9bhVATyAQxPrbVYqRNSJ5DIbDhfhWXL34xRhfdzqbsgaOl5Rhbvfs7TNBJeuC9BLtxIFQiUy8KCeSRLNu9IBGsdQhlbN4OmkxJElaIQKteoWlaSlFx9gR4F0JVCiG3IXDQhN3%2FJMNq94r0GOqUBZTKyIZ8U9zcrYk2REwOmfgFE%2F7UnEtzNSY9aIoOzcigiOETD38uCuCMDR4wFC0z3AxeNyomXOuTjfrKub2brXvgm%2FC935B1KwQwkjEHRD3OmQ1nvO8DjZALNEUdIzu80YjMavEQuvNqbDNKDUY1IklM0nyGk%2BnkuMq4eRAoIZgBpYiV3bOwhGO6Gp3l3duePbpl2F9AdHRRGiG2SUtuXEoeYFClc&X-Amz-Signature=baa0d2b8cd59b193af3d2168bb5046879af63e9e14681dcbd870565d5c4e72e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
