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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP4GA6J4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD5XUt5eKKSz7B5JD2lTbskywbDNBBfi4V4m72MU8w0awIgV2Qws11img56ysnTMU4a9XQH7iI7lhijSYX1%2Ff1qSNoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDF3%2F7PURv1mb%2FikbpyrcAw1LSZtyHTB838cndZ%2BgvoRHOq%2BlgytbtTlWBGSmpubP326Wt8%2BoWhgPcaKQbQEx14fd9U%2B4GnzlQpEXu82bo2odopK4MAxM%2BjAKBnEmBh43i%2FzdxxUwuq%2BeE1BWKWMKjtsQVsu0TXHgXd6dKn4IhGu%2BWISmAvdxVy1lO2S2tLXOldlsTmPQhCzP347%2BDNoCFcNS8Ij%2BGe5rotnhF2n90vxDXLP0kA%2FaCvRBg5r5hb9A1dkjTYee2RbLjIuH8TKlXoUS8LDYU6wv92F3D2GaiFpisTVF1Q9HluGW8Vso3U1EHTgc3%2Fdjklrk5Kvtd%2BMWzE633BsWIrHsWG0puwrfGewuMAmh5oN8qzzKxXdlEmFpIJJzr33VkrqeqFxQC42swIxBm%2FEDObXiTS9EXs%2FBUwjPL6w%2Fw12W%2BWxXCq5zvgBNiucevY5vYgbEgiRsq8RfSt6Nx1mxXFIHEEhUh05yqcrC0%2BNihqRdDW3CHIA1ZGcZMD%2FKV%2BFjI53OhjGOXKJj7cn4VHeZz99lznP9P9y0adM1xShYsz3xU1Bzb3wFWuKYggmFXI%2FisqbZF9agINHrO3%2FvsAUgdgKD%2Ft5A3uBBw8dlTWEa%2BbredtvjexB1rABNqtY9GnTANlHTr%2BPxMI27lsQGOqUBHWAAvoX3XoKFTkGZYE3xAaNJ37W8o9Qpq9d1kLedQUPNXh04hJ7A4S0gYmT2ldUIyhAMiJdw01EKoRpJl7y2DpBeRb7vIr1513w5Gran5%2FYidhkYhHYacdMsDz1fA5yZjhS0q%2FnWVLHwhlE7b0Tqa%2B%2FT%2FLEnBPHJG5e26%2BhzssB%2BogSXeCTTD8x%2FwpUUrYspMuIjLBejpPptI3e1OFElmDoHdGWo&X-Amz-Signature=67cd131f41d9462cab3433cc8801918173527f7bfb5e234fa3ac3eb718ad4fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
