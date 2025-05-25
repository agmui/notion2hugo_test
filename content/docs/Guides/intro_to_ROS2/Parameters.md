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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW74CO67%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIFeDkmXVXXTQk61faiVzHzZZkmmE8p9zsSR4tDzeFvYNAiEAlWmgmZQC5O8hNRbaMCjdXFGGDQJKwRAIywsetHfevMUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPtN1G81C46Ld5YQ4CrcA5h%2Bb9OvXZUB56UkZmIcA7TdcADgGH3kyzgKodTh4UoaYt7mqJsNDpJRTRHY%2F4UvO%2BNFeoOTX6XnKLvkNzktcrLaqnRfETZiAbDVwVLJILN5CUUZTCncyU581X8Er2LWk6aPsyYPn1%2B0ual%2BZ39F1fQ71WZPl7OlbHlozAHTj7t2Y4BrP7BgDw2HfqTmZnOhd2g5o27RYgOy4zOf7a5dGGMyoGRFjhUiA9OJxHOU9pXRxhymcczopgesF3DOm33Jlf7T4929Wcrkaj8aijTEpWv7aOW6H%2FqfuZmmY3yr7hKRNdxT0akPNP91RWIxn8tnfC8gh2x0lbT%2BdiIhxWDkilWexgFz6nF0gHwXWqbPyiJm1Zxag%2Ba0EMxA4N0Qq1evMOxEZoKaapsoDO9COZNTobXjEjRVZ%2Bp8abitGqppmgOCHv8BoxEVL2AEetFWhQhDdPASxIIBKfvhQU2Qt9ctx4YXrSEmTxz5io9WN5%2B5476l3JAz2npwY2DJlArT95D7yPleltJ%2BdAiL4scnSUo%2Fr50zXB6vQlpMegXwrpjNITXdN7As5mdPXLFAM%2BpPT7%2BHuv2qFF8g58UkzAf6LCgI25E8kLzrovchGV%2F2Sij31huIMXfhuRwiiPsJRFcaMJ3%2FzMEGOqUBh%2BcEsQd%2BYenlREHrR6Ml2Vc30nT%2FT9e4GrsCbn3GlYFHn9lvi0FXGDDAS1Pk28BRIESCHitWiJVigfX7XS87cKzQcOj%2FqTHE3fy0UUCrCAgOcmJw2wMh6zX5k5EhtyB0qHENxatzT42%2Bq2KLoVdOgJEI4p8Yrw0X915S%2FBfdI2N492Gmpb8QTkow1MvR5atsnNsYf7PEPKnP2Aqgad52Mvzu6bnh&X-Amz-Signature=99a10d6ebff0b9891af0586e717f715e4504a9493990f1387b2e0752467fab10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
