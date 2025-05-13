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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSR2XM2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJFMEMCICqLl8GreQ2ChQ2S2ybmUttA%2BLhy6%2F9OlzwEGTdcZI8hAh9Ne%2FUy12oeWTnKeiaSIIohMWCvDPbceIa9WPF2ZiTzKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWwicRdmENgqx5gyAq3APYAZVjhfbw8E1OsPZhQSxWy%2BcgcSZ1Sb2mo0TbJDUwUNrB0qvAi3dkXTG7TwgkbApewk66OmgI%2F%2BU0AsYi%2FGup3BhdKmn7iStP08efHmX8QzV809US%2F9DBZHZ5LbUn6S3spy02hE4US1Kxl06JMfPCcl%2FF8dGBJgSzwcFncvs0k%2Fc9OJ%2FrcrV3jL1WK2XeVDp1aH%2FP8gCSHlePPor4v9beCzv1k8CxilR5StTQa0t68%2Beeg8i8WMLOFgr8Y7wlfjl%2BghLfblPA6S0l2ibdiYVdmCABfa2SimNhesdrZawSdSluuzQKlUsHtJNQyPTjtkmFydv6uF0FJgcfFf5zMPCh9pDUe0lnNCOENLw1iDPr2CW5l8UbeTHbX7xHDG%2F2tBbHtSuYIhdd5WaQj3bsONsHzYDlteu2%2FD3254r9t1VPQlTzxAL7eFnTR4jfZJIuE%2FDBPnF%2BiC2eKAwDGfrhjwxqpFNqXuMWVUoV6f6FXp3B923zPI6zZDGof9HoHzgdKCDjlc4LHI2eJ6LVqU%2BXUu2xoqF8sf8qQt9myg5K7NQLczYIlzEcyPyc%2FgjCOR2wE3icqVgHSnybQLbU1tcccTE%2B7lpE1F4zd4YniBMP5Kv7NPluuOWHJMFrCi5hRzCZ8ovBBjqnAal6qs7Nh%2FnScn1OG%2FLpcL6h5GQlVyYj8lZClCxzfYxcFO9C%2BMo%2Bd8XD2BoxvK8bzxYZ5uMNEaPD2ECm8fVBqTmxvENGQkyNqUX4FVj9oEts3r6ILCiW%2FVgw3tv5hHW%2FrmZWm4s%2BuN4QaF%2F6orpLGvOhu69%2FjkpuKjbPp5eBvmOfiFP9CG4SryaIP6GTbvDIhLp3tVmN2QT7KAc%2F0NwsCgD%2F%2FF18xS%2BQ&X-Amz-Signature=3b5a42f0bdb5f9728976ff16f8610bdca2df2addf3942cd903b815f402eeb246&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
