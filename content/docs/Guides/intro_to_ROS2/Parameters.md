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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MOXI3W%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIAFMiY%2FKsF2E1r7yA%2B4dpZcvITGd34g5JnBWrUpGT%2F8MAiAlWvMr9MoHe5JMlVr6aEvGMmJz9FpjCsEeAjs85UI%2B6ir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCJvA%2Fc%2BX1s2UBqUPKtwDVG0OH58fQtVhdm0pUGp0uC3i6%2FueBtanX0SdyDXtm6HepDNy3wVno61M9bUs6okfnXwnYeL5f0RLckXjN0NWjb7FTAYlmyWpSTkn%2BzpcaYOAmvCOU0oRVWAbyjyzxApc1%2B0eiL4%2FwFg7O7RA9tZ%2FgVYxNCO4VBfvb%2BK8Vn8movbHhoGovCb9GtaxFaw2vl3r792SOwpFA009y9F2iG3Vl61ZHctaIB2fbiy4LepxIgyw7W80Dw1MN9Ex9vOzk8pEHFDd2gJujuUmxu8b8DOuDfk7ZPsPfCjM%2FccdPRYuGQO1Fq2hett4rS5ZS3LLtXw2dPvxYkGUWBSSC%2F9HMk60D2u0IJMlv5DLBFrebRP8E%2BnhjdFHOPGeh7WyXOA6FJgUrHWOGT9Jag0kRxoLOgY7CpS%2F%2FLA9nODE%2B%2Bva8c1l0PNwu3oPtgKKuJB61bVRcrCskp%2FdoxtwvNJyrkYw%2BbJA5izuRiGh8J%2FlN1sQaCyz%2FW0bnG5%2FWX9Lo6t9%2FwnYsv0CRq%2BwZKMU80DODeqJgY9UEgGaPv9%2F5Zo28t6dF2p0AJYrrVeWrfL7wXte62akHpWcmMUjlPJehtJxr0p8g3y6y0LHDHkIMOSr1TW2CmqYEbp5CK8CiFZEW43k5e8w8byvvgY6pgFAWCu2lpE%2FQEmBTBHBcycrux%2FJEEmwQrPIXK3bH6gnQ9aIE%2B3RYeKfLNpq6iVcKkyqrGt%2FwxNQ2ptFuUH%2BObGyhlzkRCu%2BZX1mFcmIQRS2lMGzQVpquvQmj19MU8sxnDPpBDqE%2BO%2BLQElJ28bTqwOh8X8xgM2Og4jHsZylh0dkpTsWSdb9p5xy%2BC5OjnvJfqF4sq%2F8i5z%2Bf65FqsLYS0%2F1arYKGpm4&X-Amz-Signature=45af9d2e0595c61d74e7b5748b08331066b2531a3a69f5e83042a6e41eae892d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
