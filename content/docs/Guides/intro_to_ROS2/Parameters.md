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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY63JGGV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH16E7%2BHmNrSn1sEKC0FHa9%2Baj3wBZuhkSJryoGiYIA%2FAiArdNaeoaeGeAJXfP7pOirjYA6i%2BWZlh7lKsZAqZDLJfSqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQaelSUf01XK6%2F9pNKtwD9pKiLYqdYcVRtH87DSOR1BNwbN9cB%2Bp2rnXVkCEvAohOH%2BOYUEJ7K4DG9362EyZOlPoL%2BjlJ84aVWCTnBnb1D9caSs3SjO42Nwg4ur8f7Ok1tx9V0ayuSFftRWjBF0LsJvkRQ6%2F9IVA1f7yZ4dHjp4m0v72xLR%2B9%2FQItjwX72UUUT0l%2B1URWFZWnMZIlwr7VujrOBbX4sZ2uZF85fkhE6TOQe60VCbG1fV1sCHDIjDI%2F2ylYlEJsextd%2FoofVh0D9y3QsrKpRE7CuCvyS4Uj3IFfhWbk2AorXKs9dfAjolai%2BgCcNQ%2BjkjWxeiITUHq5CWaDHXZXFRMgeX46lzTbsVwgRuZ%2Ba6pfKbQBG9soZq1u2r4aFmqjZgQbGE0YD90enauFdY56tU8xqFs9xVPbsAFgYum3AwovtoRxDHaUmN6DlOkmsor55DCmOSmE2xLgw5z39bJ9lorvp1GhWYqKIKZG7xARDOYQEArwEIANTCImml%2B6aztsDCBy3OlLSiaXpWBi0Zm9mfNNq2wEdyTpqp6qeVt1huIyCqAoU8jTlhveTJW%2BISdx7dKKCw8NBKlUOXJb4otrl4B5MCZ59k0otVE%2FeayqDR%2BJH98qou0fvtHX6%2BWaQJo5fMP5rH4wgcvfvQY6pgFawQA5jpBGTsWbApKQaGHFAAVsc18lc4O8S4y1%2B1P0AqUw3nlshL%2FrEIznIxpPivaHtD1CKtoYV0GOm1Xc3%2BYbVExDRX4YwZO3fsdj2zIBAI260S%2FWkYyH9wFbOnWnfYzROvjosSJXiXun2s5nBYehKj0%2B25%2Fgwmh2UdjLOA5srCkkgHVJ9YzzsYYzTHqF0ji4mtPERiN33wraagGDfg%2BXmcz2EbSx&X-Amz-Signature=8ba7fb50ce33186550a123004d9634e177005d56e654a6a2b9e4888e69a08ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
