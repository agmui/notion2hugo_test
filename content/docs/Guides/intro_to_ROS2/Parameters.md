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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTRVXF6K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFl9o4xia9NMZyZ4%2B0Umv%2BCVvsyKc3%2BLxCU2%2Bc%2BQ5xnGAiA5AouyccqE6k64a6U%2FK9gFBIaONIhHTvTqukkIRm794Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxwJadJrpjxYMT%2BUNKtwDtDUnQpCX52b9dW3P5L0GPRFnfFWOtDWhPS4sUR00dNdtQek5Vt5rfD7E2np78vf%2Bn9k68kwVLdbmIvQ7%2Fbfe6Gv1KTpDmXWD2XiSWNIvz1%2Fhn3gM5FBGg%2FaSq4OPzXXIOLrEHyv%2FU%2BFPuoEzubUYybEsu%2BWT0xRw8Ej4GIoUD%2FosPLc4qwBx9gbqSZv7GRtUAVxneg56TzSiE92hVkVwrMSq0%2F0EKq%2FIMCAmgpXcMzVtfKH8k1TMyO0friyC%2BRBMqbTtEjZNsYiXFZwuLIdKWx2b0R2fAQNrLypk5rfruaTJbVe5FiT98%2FBPvnNE%2F%2BCAVqv6oXy7bTD9zH%2BMdx2790G3wKN9kc0TWGdNl61%2FCiEBSK3BVhMZ4Uf6OAteeapGFbl6i%2FUF0MsRTIreoAet9NIO2lxJdVwXLZN3Uj2dfjxJ16EhOCBF2R5gbxEa5uBC3k1jvZYZJ1pWJ73OS%2BcZRSbaciwF6nQHUP3DoOzAfOQM1hkhu%2FpE5JeFkUM%2F5JBFGoSdX8yEVm%2FjixPhMNBj5dRQzOsX9gwFIq2N28sq2t8uQkrhCLZENBI7A5urykuP1qSltkSf6JHAC3LdkL%2B%2FE3EXRpPbZEFz39AKRf5Bk4yXQkyq5zz%2B7bK8Q28wnfiLxAY6pgFq8%2Fm%2B4kcKIATNfOF6Et%2B6snou91AnA9OPpuO5ahhxTZ7Cmcq5EWz2D0HUw%2FkCl8Z%2BAzveEcT3P%2BhuxrLByKGWoZ7zNoZ3u4ZShgLZu8rnfdPqOjR0Cs6HxurpqbUvPoq0H30nDi%2Fji2nNr5O7WfPQCzQcB4plrKL4NIeaCJfRURnpWcgI2Y3PmOmysYle%2FAdrkRk4KRG3OL4Yd56OhR%2FNHJPQot4p&X-Amz-Signature=afe77a5ecfb2004a10f6ebb357e5d22fedda684d09d5eefd67d61cc7c30ae3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
