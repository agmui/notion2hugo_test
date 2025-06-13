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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQWALLTS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC5Akut1POJOkrD%2BmDE5xuDwv6O%2F8g4ON9RPhI4zT0lngIgXCHUpAZIIuj%2BBPyQuAQXSJI1mftkHQ%2FICQF8PA4CyDgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIivtPC6Jl%2FddFxXHircA3R9%2BT2ifYcK9wYf36nIXeFhv8e0RcMtLXBOXDezdF2FyYJfA2seD%2BCAvTQ85CR%2Baf3GUUIQ8JMLThbFMJXfUONsI8mLfsEKMWUSy2MQ74OLQexXI7hKkRpwsg0n6ZIKur4AoYmQ2N6oFX5tQ%2FN1D8U2L6Kc9hQwti5WYd6ATBf6LpUzdU61uXwg5pNuhxwZ0beEPYGgavtRNRs5N6F5lbU4n1W8F9I73irroWEGcguWj9cJUtyc9V2WXpDSzR7KtNGTUlC%2FjBi%2FUARNYXiRRIWRi6RAyr%2BrB5y4Kj%2Fc0XhmeyV%2Bk6lHGaVFw3fLRgUTV0GwUtFApBzHbIQ8wuGKRk9Xqcsn%2B4GfRC0kVEBGpEgf2CsdQ6iHgunpXDV7pPVxK82P%2BwrY9dCvzTvIZAEdAt6umsCfgQo8S4nbw4z5l78Zgg38akWqG97qPAXFwWslFWAsk1moIK5MCGkhRHXP2Vkp7nEWPDUfmqO%2BHDKqWBJwzas7cT4U4SQBmGsAE5oluxDX%2F9rWHxQZmQCgk6zypVrj9xckblhCSahVWZFP6%2BK7grLkx8hNF4XSuABi%2FceodtHHGYQbfItJDNyiBXw77q680NogYDIR4SSsBbD9K2lFUptpzeR%2F%2Ff62SIo4MKCpsMIGOqUBG0SLGX3DLSSu%2BbiLq7dPqT6QTbnVn3jIO1KqPflwNrNnT0sORNhP%2FRwxWsX8BwrSQeAkKxZExEyz6%2FLeTdKRJRSz%2BGO7nWIgtQpb%2Flmer3zpvtUVjTImZ0UOrTT%2BVCKDnS1ZDVj47nCe9t4ZqieRsjjkXOLCb17bwQj64LXrF2jY7hRAYuAD%2BAWrTu0tFKm%2BOABRQxCYgiQQrdB3mEPLaZfCc4f8&X-Amz-Signature=66204f0a75994b3a172a8d9172d694338381f7b15dfbf6732f5602c2083b742a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
