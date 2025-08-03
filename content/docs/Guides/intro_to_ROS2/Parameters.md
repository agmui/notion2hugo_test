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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDK4QB2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLy5zuvnbjC%2BuJoiE8YrEeBv9bxnen6n6OpFitLD%2FrMAiEA0S0NngQbgD0YojQfzPeEThjCIUQKc4aqtSOU1sXrZoMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF2MxV7omKqgK5SQ5yrcA%2BpAELNutdDvb0iV%2F5zoYhz27j8OwMjaPsRKbCmRuvFtw7Tgkfnik9SIkfFqp8J95yqeEJonwoYo36CfvqppjrpISTLJETF3ozNXW03puiXFABZnI54MCLdqxEyBZst4E30PE6pzJ02JJkmblH3t%2F41n%2FMer6S%2BKQwksG8K%2BS%2FzzkJCiPehFdfcT71wgXC90Scv9gE2OcIuzkXRznClPhLkYN0%2F1zMbs5CYFuXM0CxRrhtQSA43fZjqIhbUD47%2FaEA6wQt1LpHdTbhuev%2FsCO05o2qyJSyZXuIR91MS5REwU8fArCimH82zrSUWEEQAHbiQihdy4088F%2FHC8%2Bl4VGKvwTlgEWxDY4pUGIlMcmrZ7wXcjIW9Vx4DT%2Fx%2F5pFSNRq68H8gh9H0qqV9JBvlN4UsrxVys6izY%2B7IbYKB%2FRul4zSlNjMfK%2B5t0ycWKIX9%2B3puYdz0CrHTU1jh7b6y6O3glgFbPJAj4XE0v3Gc724qXFJ5QVF7V0Dwj1tS69stKGYy%2F5znSGRrMOhxZDDgijaJIv%2Ft812dN6KFxEJagHFo331tJAatYgn2lvbsRURQ5SsaLFcYYZbiFT7Pzz16vRNUx3U%2B35V%2BzDjmw6Q0svVB6DDr0BmE1l4s9u47qMIKhu8QGOqUBmSYLOEShGsOSEXGJb3gRfV%2FfL5gUcDQnYg0LMw5Ms%2BjAsn1owHlgFfmswYFT2Jwi5FOAMtfjIMQOTg0jXvqmEVTRh8BmKQGY3bzZ6vglK2UtZrZ%2F1h8kVZyIRUEiuI20gSzpceJOZ%2Brp9RyXw%2Fj5%2Fat8EpzA3QajZOi%2FPK6QQ5iT73F8sYUoiaUnPnxMABWs8%2FzptLzA7cYBkalP6EO7kAsZq66w&X-Amz-Signature=92821b9f055179c9a47160340ed70e62a879a1637a4170f81796f600af2db587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
