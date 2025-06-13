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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHAJMT3J%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHh8GjRJWjJgpJ9pG59NXlQ5o2ow16inX0zTawX3Jv00AiAqMwK%2FYMIIYsckzHkCIwo%2BqSwRcSeBvufbSVIK2E0Qwyr%2FAwgZEAAaDDYzNzQyMzE4MzgwNSIMqsjyPDgQVTo4d0%2B2KtwDcIxEGSlwHYDBiVjSD87Q%2Fhn%2B7Y2%2BRriFsbqeMmoMWfT0E5rO2GA%2FmP3VW1n170CHD0%2FwckIaxBbbistDxcaeriB1PEOiMMlRDYQOQlINRMF7Rdb%2Bl8KRrLzLIorLmh8%2Bl%2B7m9MCEgtDd5ot4GNq4wGA2pC8jx2St%2FEp63wFCbeUd8jhFXBIUGXj1nWKF5lDP2AMs%2FhjVIwr9g1estfAFMUjyUj%2FxMijlXNplHFrgISq14jHRbX%2FDkdpBkUmvsmzIhaSSorgWz1ON1MXmoZJemaVdoSsUWNbUDrLSuprGBy3s17cSn7wsa2i%2Fot2VWP5U%2Fi6LvU3MO0J20eXhhX7GxVWiMeYQ6kBrvoaTDauZ34aze9x07r6bChod2MIIIciehr5TB9ygNdepV2FR2PD4cMUhZqsruY%2Bcod8u6h7uv%2FaHkQj4dsLVXm3gDJ7FQWo1OD9cKySOuXcXbjlxTjAdoNva3Psf%2FHdQ5LiA9NCVPFDmUxxXQbhJrRDbOr%2Brf%2FdZr%2FDCA72N9%2FMbOHs1cpa%2B%2FaNq7YUOTTnqrKWAP%2BLmZvQNKadR0sVFJoLA8RNyJRzS0PSV9jMRoVSUtaPEjDlqMeFR%2F6eGx7NvmJKnc0WbAVdMVSEF37jtDcCYUlcwkJexwgY6pgGc2uz7q4twzHavTTWlhi7fdAXrFEf%2Ftrbm50ZqEEsYzskGSGoRYr5YIzjf5EpKl0Z%2FtF2MbutEBiVCazxraW2CgkQg4TC7iynRz091eJBhJqywqFLN4H6YRWvP1cOVk1uQ4cQFKhDxC43Q%2B6FjML19Fa0okthkBtSRXUFBOAE3A%2Bm3HFru89huQ0Qwmp%2BQon8LuI9VgnrNVQu6FpZidnk2QVOMFEhF&X-Amz-Signature=4abc9b5b0e8c53926c33dc8c4fdabb358e6ee2ff5048f431b0d81b368ae4a73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
