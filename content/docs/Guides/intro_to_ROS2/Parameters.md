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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQ4TX3Z%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHOWtznFP%2FVCfbvjHC68g5hiMHS9v4M5nvSyXjesTKqZAiBEEejeDxeGrtYYLtM7QDW0ml%2F6rc8VDzI7E7AZew28qSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMSJu0SMOv1o0UfzDxKtwDcYIf%2BWHW6S4q%2FrULs3UuJnt5jkJGIfIGOl87CI6VnPU2EipojOO%2BMfAVaTIyvheQfEgwHz%2Bg2Lwkjd93bYRwrd37S%2BIAk%2F5hcgfSOh4UA%2FO8i7Il2LgXf6vhEuv36zFPlX53UR8v3Oul1tfgGW6KEsDIlJZMKmXrnMB5%2BAIwZ0yI8YTT%2FWDG43amQzQvDk1BHndthJabjhUXqtvTpV2H8XwUWkq7nV5ANKK4vQlGpHoNoHllZWUi2U6B0VcxKGx34zmLEqem0twHWO5S0dd50TMU5lWkWsZxmAn81elArr4%2BrfJvqDs7dRScFfPj7gMHPKPcptt6mLEXsLhgaqhCMQtmKjBK6EKZt0xC%2FAJ7FfI4K5ralOfWnKXEMxd%2B%2BGOWIgvvYePxcCATtENfYoCDZmzo7ABWCBzeS%2FQq3z1g%2FsmMY8BcThuIm2l%2FDe7iKAZOQumvs0zKucb%2B8GQWa0WL5BfcET05WfDZyaHLh771gEYHx478GMLFZ6lzw5eFar6yvkZKt7Rk0AsNV1N14n3XPVLf5p2KEhq1e4jFKDRMhpwY3VNT%2BUE%2FgLlpVc0UA0NRsz0XecZRSuTL6XA2wero5%2FhKvKHhM%2BJ3aP7DVCkk4LQzSv2BjninJnzxlT8w6qn9vQY6pgHrk%2FW9qQJSB7vbXmlQNa0R3eYSTegZhR3rePzi9rG7yIDfKwK%2FJHCYaEGcy%2FBupcfsIR00F%2Bu6ysRo1KNy%2BAHpiQfOwcPT7HXmRHlee1t5gasXl7yUBAYCvmrBZqvP2iNxn18erY19%2B6hYOHEmLSwlW%2B8PnvVGElBzu4zXQKMf9w1UAh%2BFTCcfqtVvx7DDodg%2Bvto2doJSo8B3Uyu7G9kFUz9qLrhg&X-Amz-Signature=7a53153b8b2043ece6c7a219da40fcfebfaed2be3fc678681afabe5bc4c8dfae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
