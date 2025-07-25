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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQOGEF7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCfWeiVUsPkHHrl8v5%2BGb94NmDj8kRMPrrRe3cbEkGcsAIgNU20JojWeFPAYxxpgo72ADxyQgdJuf7k5XjnUk3xf6oq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPMayxDzxVEQG3xoACrcAynIi9auvFZCq%2BnkDUn7LrQzB2AIier8YDMjHpOnbyQBMDl3FzKNn%2B1Vnu8lf2J8Xroo9d57SQPnZ8FZ1IzqSHJKEs0xFvyxwA8tMZN0Ab5Lyv1J6ksn8ysT4LFDQwmO63cNojQqzNcGjfbLNscq6TTCM3a5NoJya6YokXDZuLyxmRWay8Ym0b%2FlhFpDfb1UAOpqIA8MdSnAo9zB1bujAWTgnlYYqq2EqKzwbtTnF%2BhjiMcnjOz2J9TKYfIN4QMlb0TU1fx5hj%2BXmBvEaE%2FaJ%2F229IKRmkj6Vg9nAdPrRwXIO0ja8ycUjuyTBUgHCfxkRbDe6enBDIb8qEkeHtZobc96wKmhcqfB%2B8CQ%2Fxf5rlO22LzYqMy6LU7oaGuDr1WbzwfQeP3UGAZRggUeNuCK2mMArmDzGAMwBgv%2Fp1iQIYOew8z0DBUWTRT0G097syBSXB56K4rhWmC8ZKGXflFHQSec7Rv%2BsXq17tcWRuhHnwF9ehOIro%2BnaeJD2dPaPfxJEHRNLCDOj9lO%2FWrlNICGJCs9wP9DfOyUi%2FdKJxxzpOfektuot9T6h%2FMOFLY7%2BhL21lRlEhxuHAWeAMAoGUj9C1UfcfLPTjk3iGUlR4UbFBYYLWOHXLtUgn%2FPPDavMNe8jcQGOqUBJryj4Xm7X5zuCbkWTD%2FVnaE%2F43I2j8iQe%2Blbu8vapHW7p8m47Mv%2BrXY413akZU4Uwr5IEsixuPQ6p0A4QER0UaKCzRbE97pz7iPI5INSvq9ipbSU12AYyj02ON22krmBDEm%2F8wGAezp1Y0kG6%2B%2BQtYqq99h%2Bkxi%2Ba6IPEvmynuacmmHywUSUDMfGPG4d7%2FNFeT6qL3GU62TWZLvG9N6bV%2ByL2NCn&X-Amz-Signature=e3ab78eb5a0e717ea56b176456d05f64e61d9c608d5fc346a17994058adeceb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
