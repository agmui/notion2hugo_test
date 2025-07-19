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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBSIJPF%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDvlSsSVydB%2FaCx%2FB2beangvQbXBOTj4pZC1UQeeftw7AiEAwIRMBvgVAT67NOAxcWt8Uu7Q%2F4wumhGR8Nip9m3LAO8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJCdobYCmgKwRYNVRSrcA8fhRY2JTNX4GSxPLxQlsvABwLQUKAHG3rG82qIY2IE9ZEuQhuWwRyS%2Fx4TkSrXRdNHjzRtoNhsgDZ8uZmw87yL55K2p%2BH%2FtNzyvsOTJdimDX0bIWw1brNnshC19718MaLutFIrFDFvp5NGxp3fEKEACx%2Bc43A5sbH5499lnUgj2FVT8PgMt%2FI305xasoxEtEDdLW1vqcIuInLi55WWDwmhBK6i%2FVNhtUWzb9k2dFJkL3v1NLfNDej0LURjmab%2BhNZNBOlJ4gfC%2BGaamgAqkw2jqNB56O2zFANmhPJd26j1qPhINEcHA2f28ST4th5EO8wvwV2k4U8FHkAAQOZ3a1spqFsB5XlggNhbJ7M0bKVoj7yG7cwzbnfQJBHZ6h4LknLNQCENtvQ7SeQRulRshdy%2FesIhQ1JaX%2FBJH%2FfYnF4HR%2F3JygXQno%2BRaU458vlQSkVpWUdNVqWayPH4BS3CpDCYBxx4pNRG4zyiG5Ihox03pGCxQb%2B0tJLrJrFM4xAIaLtCQWCgJjHh1dZRTj3%2B3rUUFcdkdlheD5lsc8%2FHiNR66Ecjcr60vRJJAr8SolAAQ6VyjCv9cZvqVZsJiq1HG2hpkY21nWWgC8DelgjhE4llnA2HqdyhsIH5kJ5GzMN%2Bg7MMGOqUBbDHaPwEh4JsOwl4kRG8D1OQp9wTojBBl1CTrugoVdrbvuyd6dzOyA8rXNdLXTk5JqWGQ0HJVJJcc96qWi4ThryAqB3rvFGIS2LB88Hnc64pSx8F587sSOhYPHrciBRfaWEACUN3CTjGlQ%2F1yUSguiX2C50GQDN1X6tS9vVFHUjaST%2Bhw4tSmEj%2BQ8zoERRCpCNcOaf9V%2BevD5VvGuofOamb72PGj&X-Amz-Signature=ea5c6c2a9193c798b6ef975f35abfd9fd79b29a60cb841441ce1448ff277a2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
