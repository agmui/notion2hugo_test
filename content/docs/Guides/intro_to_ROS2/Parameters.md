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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UW6HLRT%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCHj5l%2F4socB4lrOmbq7XEpt7aDzCrcMVK78J5fvWTEGgIgKAPh%2BV09h2CZ49jERD%2Bkr8TsLte3OwiPazTbIR305YIqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwgEhdI%2FNJHx5fLRircA4pjNHJHrcrkVA%2B%2FNgZnJzA5BzvdplQ7H0qavxiFhK2fPsJdEEkCOhpZJCSC7PSGUnUByP0b2xQtC%2FF7Ri9svDnRYvfWOYzv3Y4CIDmH%2FhoNJcNceZCTJSdCMw3sUBzBS%2BNnm3GUHjFR%2FnDkiTV%2FcSNH%2FJQEA0LJB9c2o7eIte5Qaj937uJL2H7Zy7kbGqgTj5%2FlYVlkcyPPHElAoJ6F1hs%2BFtFsoDMqDiSKit1fYI9ibaMPpiHX1ppirAG0tMQXL9p6Mzr5gHDvpXwksNzpnXk3Dbwl2cr1GXvKwXzIclDRpby6bbth%2B5owZ7byEmocE2Zg7P80w86kL30S6eayTzBrx7Kwhp4WuoxMl42bIqLbmKtBcJ9Qht15nzB%2B3QjQ9dByelWcbEJJ0ju7FbMfliuP6WoyLx4T%2FU%2BFd88MFFd6oi8Gxg7rOIcbyxPk4rvT28gUMcFeG75WuotCDkPCJDQyjXJY4SUMy5qM5L4%2BkwYvL8pLL%2B%2BHG6fwY8e5p6nRtCkDRG9li3oha4QEQ%2BkfWW41ra%2Bg8W6hTLngSNrekKk34MWvWBcwL4AjB64WDRo3GOoOBFGuKYqcBoIC%2FcHC2BVvCPQ78VXpJ7PRQhBtlFqWz7l4O%2FRZ%2FEbd4htzMM7n4s0GOqUBS3AohdRm2TTZPOtq%2FjegH2AboU%2BzLeVvzYfLSCYrI8x9jgJN%2B%2BKJ8E3eAYikHs0CeUIoLkNlHH%2FfvgQuZoDnxqOi6YuhZjrGInzkoLadfiSHRdzAFFbOjbYihWikxsSCB5nXwr1yH3Z3a7Yr%2FGrXOJMBUbkMtv3rg70YSOuOgg%2Fz3A4MWY%2FwnGP9fvLivcIDronQ8SE3c4G4eGUTwjIDTHkmeqyS&X-Amz-Signature=ab40296b2c9410cdfcb2c1b35c4bbf95eb5a28189854fa68e9e44baca64988d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
