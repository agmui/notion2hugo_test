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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHO65JYH%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyllt2aKajBtjSyOg0Ts%2Fv72IblXVsKhK2qORVvxtwowIgZI9VunISkAHSmL0XuTXGOgMP9pCD4%2Bvp8BJnHrkFeocq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDEhtBh%2FyNk2cjNProyrcA9TKwQTkKuDSZzfTsEbEyzZfDQ4ozvl%2BIBYY%2Fvz54NLCElXsufkgsujVQBgau6R9DXwAa2puPnHvSlp6i3KGOtnamyJ6kBvd%2FJPnKfRnHQytdJFGvgMHP1YoU5%2BXlPJAu%2FtWjO97TJpJpISyqSK5LOnbZGIN3oXBoSU%2FJja2vLEpragIVgedEJgoIVh%2BbHoA1Qiz1NI1p0r4zw4Y2ARBU0ujWcO0iI%2BHozjY%2F92OivxSr7ayoFEH%2B2wYNOQiF8iPGYSoTGPZA3hyOjAZRRqPHEG%2FaO57uJlhmJsLVgtkLsM7hTL3sKRFVjmhi75T3lqWfOjVaJpcE4oiQDsWrACNGWgX%2F9Ub6VOL37aRSRgvqOBRywzc6v73Ftw0OKR32uxcD0Wlu2g3C00e150aH6fxxdsIkEVk0XIivLgxlqKAoaQthapkoYloqSkLhpe8Qgqbkx1GM0L5E8AthEjL1tfF%2FI2KOH57n79ydgiRLlKmEeR2Hlg8TcZrDN%2Fw1rIWijvpBVqc6ieCv9WaEV%2Fdc2DgQ3R2lOx71%2BncjVX2tIQBPnmmW2Q7xA8a%2FSUfjMSku15jlTzr0N%2BHKTwpnu1sBV6Iqm1w4lBPrwCGWQ2TGNU%2FekFE%2BVYlOHtEmOLlFdpeMKm7870GOqUB%2FC8vUXXYvjP3qJzTIor0x1OUK2K97zVoQ5VUa5tctsGskvUjYp%2B9IMflxxGUTb0w6UlgnuX0KWfAKsI%2BymP%2B4zcp4VzUUJTR9kgcxovmwC%2F9BduOggq9mvnblWbmrZPGNbk%2F%2F2GyJWlfqrwDRpXtRFuqLbiDEGPxrV8JDtzhs0INaB%2FGhUeSm%2Bg9YjU54x6O0JSNVgx8fRoT%2B7wl8yZtp0MQR%2BOt&X-Amz-Signature=203450e62070b9235b9ca6ffe92fc49d3288325f0a7c5717b82636fe9139857a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
