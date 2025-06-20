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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPTIIDCO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrth21vWD0pb4NqCgRPO16P9Z83sGlP%2FsvfZwkXmwmzQIgA6chAAphQF2qHE7QhH6P3U5O5E6biISKZYXHihA4Zq8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSyaAzK0iK%2FU5Ic1SrcAxMFEn7hHpoC3lQmBn3LWYQ6EwwDxpdOdZaf5t2dhqNfiKge%2Bd9AY5k6DwfU%2FHGhbQLkpc8gZ4Z%2FdLzjYy6TfcI%2BF5iDROihsxFw1OJoRp6H26DvSDoyahu%2BFzQcl8RUbU2Dagqay7mi1cl7XLA8bqD42%2FpClcFt4s3KuPbixf9iw9NhmlBOs%2FD%2FTHFmQ16C17MQ8qALlsYmpn0RfBM%2BSXg9yEVPulHTYI3eCqbaEuFIfzNGOT%2B9cn4M098hhwmCLQGNAS2fmhvidbUk4AlLp%2B%2FZVYcSDFWRaF5hKHKOFyvp72mbpDbdA6GtOOEDtehD1PIcpG9iU6ERwN1XtMRcEnJPtcBlUKWkzVTbGEViYbSSeisTtEx%2BBzFnxwVJufw9YzcI0Z1VYQZ8HeX0Hoc%2BG0DDSFuBky45fX9bKBz%2BtKn%2BtfNFB0qBjsYMP%2BF5WQLzeQu1Nz2NbyFKppvIYyJvf4fMKrwzgJ7FCbmabzBp2z56UjUwkyKFxW8ng4m4CJsclXDXVV3HEgJSXuaZCMK9BFFZ%2BSWb3CxqzcJxPaWsDsmt6YlqkOL2p%2B2BKMG85dZrT%2B%2FW3BBJxDj60hFaXtIDFukyc1Lss10ZApZpwwDKeLlnriJCbosKxTi2pv%2FMMMq908IGOqUB%2FZRNBhgGx%2BoM1nf1uPxAmimUUzM9JtACdEYH6eDUG41i2dzZruTk%2FElF0yNCNDWhYacV8rdDXU%2FNFIWRQqKxtKWpH5ZLedrH4s1poREGelHZNyx0vRFirlgDLhlb8Y1zK6uIg30IfsV9ofCY7DoX%2B9vfAg0CvMRHiVkUmPsj5nbGjs0Kr6B%2FrorPACX1Em%2BEkkVKic3TgMGrVhEQZ9gnYAMApOpx&X-Amz-Signature=82991bf0890437e8f91fea929fa5bf7137c3fd118cdfc04dcf6faff2a222364d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
