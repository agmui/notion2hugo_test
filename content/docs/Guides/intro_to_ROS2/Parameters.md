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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGDN533C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCjUZPMtATfMWQE6kFBwMsARvU7r0AIuMDinumcnZukjQIgS4Z%2B4njflsrZoJNkun2DsG9s3dN6KUQkyQ2vqY6eeCYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDhhHetOL1qPvKRYZircA8eZUmceRfZoCquuTFnzhsU3YeDbKPyOU4latPRi%2BE0UjK1J3dGbXpkNy3%2Fkx0xyjNcRDRlBAd3K6YFrP%2Bu6XTw4KFSwp5YmXKswihsCZi5x6u8ChfZXsa1Bq3oBje63dmayEOv0CJYwUt82d42lx6MfKbWJ%2F7kZvrBeWa4yWllSe9%2FxAxsUBL5D5EayoidKSDBslC27gw4xqxYwBByL4Ist38m6CSARKU6uErhIuAIAmrONz7%2FeJ1Sjc1%2F08t4TcMkpYTJvd1%2BZluBnbU8mbIxcGSqp%2BIIYIJNaV50cKfwMM8E1wnj6rczTjENJH8%2FoRkwIX0ZyohMEnNbfwO66MCsMLpsi7cZwGHWoCQ%2Bf8LXpDLpra5OpEXaLGYgi%2BMukA9l0y9f6bSSj%2BIEWnr7CqmLJVinhsTdfJKNdrZSYw4rM4c48Aft7cK9Ee9dSH%2FFdvRFbgZup8cNDDxTwKHj1INJHjNZVyCqb%2Bc1d3drrnLQuFgSUK3KMXmT7UuBT5jjBi282FemJa7bqDT%2BFFaOeHKJgo4n3yxmfcmHXKT1s7A7kjDj7VIbWUE%2BGfesp4P%2F6aHuK7ZZZEdE3jdhIn7znGNh5jbaI8Khqsjtq1jy0Lzl3YF%2F8SJ2iaaq1oQa%2BMKPBk8QGOqUBZvKOLRz8JAGeED6Hrsv40XD0FtcZfVlOI0SBLnate7%2BvRsG9usRbRN0hVRS%2FeCapyWph7l5MeV%2FSmFrBZsFPSc7%2B%2BB4arwpwUxGOc%2F%2FHucCpxQQxjg5V%2BSgp5sq8lWFGGdhIVYKSzoce1xoXZ8CdHIwxT4uquHYL%2BuVPyWwXPoJITAJBAkroaqI8ltTCgtiGg9QNdLUwT2CWnTKgl6kdyR0HOH8%2B&X-Amz-Signature=a047dadba8c86705a34582b92d075f3d31b31fb7fac371ec664faf45308906bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
