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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBNW4CY%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIG39%2FRPKUpsnCassfbMW0hziXsPmGuls3lEom1ayLaJwAiEAzSToUZC3F3g9ZJ21cawr8tBgH3S68Dogf8Rp9Kjb9hAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDP6ae5rDjbe95Gd6CrcA%2Fuoio%2FwH8x9%2FmVT%2BiaqrFXNS8Wny1%2FIPmZPMCwSQLX4bZv2ydIJFHlfTSBjKGcwuSkV1oCjHcsI2TraLrcMc8LrpSo5Bikpk64aopTwNCHqKR4tXibpdTOzLAXih5T8e7bEYyv7PX18%2F6gaG8VCxWYntyvkL6C5icyPtqFuqsjJI8t%2BlAhwIDTqLOKaSYdtbR5RESJ3xaEnW2ADFkubxZSdlDuYIc446zYXytekJIjU3wFFygIOmISLHu%2Bfa95RyjvLIzPbn5JYzQ6RUPvzToLzsCwZqHhKM1siNamMjdmTKbQ2gbX6YS6lwhxLBSOIDtuVgdTTiK3M8%2BdMump2PiuWnetoUGWYDn1doKtYAOl%2FvDhZZh7ZeHXLlAyaePgL%2BjkDXx082higqfBvjV%2FXvb7sdk1zKMn2MXnoT%2B6z%2Fz1x1GxfDUSuSs%2FAQxdGO6frA0MXaMhpghOx8OjQbdFUgATHElKlDk2GFjyEeJbf0Bt134NfBiG7r9xll1%2B%2BLLGQxIdN1DzVTyXjwIQsP1oLPIVv%2Fj76gtG3lVQD5dzj%2B1yM%2FEOGEgAjO%2FvSEXKW79uYLdKVLPToqkDZzKeNBijwa1%2BLj9wrfu1EqcgNM51iI9mhJlVL7ufX7ui4kbgrMNy%2F4sMGOqUB%2FlaxFRRY%2FvoDzO2H8r%2BepyTDpAyw37JXhmQjggyF9WD2Qxr07hHsfKiVkNJg23Z6c5G7ssDqbwofkUGBvBodxmJll9kcZ5LwPDe1gH%2BfhnXbVSOrMXV7Vn0zjDkMUYg7rcxy9M%2BXn2bLfxu71Qd8jyE1SoR6qkVTzE3%2B9hGCOCtm%2FQzqj7KhkCI6ofNsy%2FJgsEDqJ51WS9%2FUMnou4zBbmxdYvog%2F&X-Amz-Signature=66e05383602e98a6f21065c1698b79a7f09d74f7abda63a37f75d25755a17c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
