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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CCDRU6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5blo%2BBayDEC9G42TSkT7XkKMSU%2Fsi3T4w60pSDpMcRAiAX3hvZjM1q0rrLalv4gqaVNLHmMeM7ssVeRQKLpUujiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMqKE%2BNLzZIbICAKfKKtwDR1%2F5nX1Qh0%2FMZmkpGOPcWrLF0Cxg9c7OKR1MwpmHeu4FPETH87F7EhjTOtl9zU6PybtqOrEtytBxkPuMdvDV2Cm81wsDwWik%2FuhMx%2FwP1vVBadyyRKTLQtAMdgme%2BZmcyGGgDAzPqVR48nxUi4Fob3yR4h6%2FQ0%2BRu8jPKTp2X%2BVLrKGW3lG3glfswuJy86hOFXDHL1H2ajkZYtk2hO0%2BWCkPyUyi%2FedGPtSTnw24BcBx9v5wKPHU%2BwFpY%2BROTuqKtm3fQ9wKYq8krXkD9MMTUz91rkS%2Fc4w8%2F8vC22BFqNndNHhSYer0uS%2FeU20eD60iSC235i100io%2BhWDXEWJnTayTNtJ4j%2BjxDocSV%2BtKTMK71rhwZmC7T3fCjTn6p6FI0zWJDID7u2dt8AfNbBE5G%2Fbe0soPOt1ECKK13X5f%2FNeKVXEIP70n%2Bpy8B7bm54mvIpPLN%2FEqbAK%2F5pxXfGlj630wZjhs3jbj4cIGuI0yOVVA68QqqHBWaRJErYyJj6aT9X54eEhJvLlViYR8kDxW5mpPOei6jpdnNYVRHJmBG5WT5YOxZ8%2FVKSLV38AuOwEnUCqPjUmpqwtAxZdzPLlbqGda1mr2C4Dvz%2FjK80HZAmybdcpbK4qVlr%2BEktIw%2F%2BzOvwY6pgFIJzJI3Q0F6uylhTdy295wM%2FEDRrrXjjnAQWz3Gqp7%2FI6qt%2BPgKlCILCQeiBatJ45lVyj9sM5F9G5ftJ4jVNPQc0pTQXWKY7%2FmUDsZvchMMq8Pb02XeArVpyI6rc%2FdNK%2BOyTZLJzxfha06xRWmpCUWufyhzm9uOZM5j0M9XRJVw5RHLsl6AkEwgL45H15sJ3fLdt%2B5%2FA4CzxMt6WRsdNMOCwvY0%2F46&X-Amz-Signature=6ba34aab48d69e35df0cf81ea9f5e2488fb75423c07fdb3ff48492832197b0f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
