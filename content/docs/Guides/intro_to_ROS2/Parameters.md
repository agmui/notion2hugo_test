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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKQJFM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJ0O14PUdHoWnJWaaoU8GYiOrZbqGdcXvU6HoZD5x7uAiAGRkKVWpNCmsPNLS4QS6R7Qpezl5dTzUQlP%2BVY2XhcfiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa8k%2BMUGFJZgKSTiRKtwDtQbkPszZppC9K4nWIifTFeXP25qq%2FcucAjiuSgqvqhfBP8I20ZX4S3agM8Nrp3XUSW4JiwDBW%2Bhcv711ijkx63WgPZleoGnbY%2B%2FNFo8CIS2OnD8wbI2e7gySWYA7KTzAGCYwbc9ar5d9a1bLtqAHHRLPp3chM%2FGPQfFe8P12LVEpz2v1LuicJAKkUmTOIEZD4vjg0PI63a2MHR8R58ZTpPTHUsztYhMLC0MdXBwYDlUaOPDYBCnemw7zC9sdas%2Fn9n46tzfrOZ4y5IpL0Z9l12ULAJD8MuP3xJC2aqM7mpHRGUsS6OEZCmALxZvaO6QLuyhlTn7Bf0SCX%2BKPaWNjjB24F0HiY8UiexFLWSxHYQ9uGKpn6MJAd%2BrGV%2F6cwYsBaX0t7%2FxePzKkyB9s7EGIEnkM9FATdfFrNu3Pom99VGeGD%2BV3bYcF5IcfW4PxDjk95VZB3XQeDC1ENDkAUFmfrealRipQd%2FyOrp0U861Shy1PsZn1DE1Jyv6vwOnHaUzlKFed%2Bq%2BKxJkcspcBnBz3gKB%2Fwwj3%2B9hJdfFIMIf4MsTpVdX%2BlxjIoF7M1%2FngQ8O8RIvcZw8gzydnUXbgIifOVf%2BhbAZy7MRJOndQh3KjHMrqSjjfJkZymwL%2BdpkwyazmxAY6pgG3jA0Vfmb2kWH3elGxI9B8WVUtoPbgG7XcJP%2BeZzh4bGOCE0bgn1qm9IHvedKA9IOrjlWjiZ1cPoct8Prx6gzI68FH61LpNpJDw5Xjl6Nio5xt3Sa4m5XPvEbLvsxB5OUsMmGYAZr7Isxyjv0NUK6fdyY5qEZF1NvMMmjuCG4%2B1eJuDf1d9QdBwK4IllI6AwrcJAxaSzpx1EQxxvkJGwM%2BtlDqpT9l&X-Amz-Signature=8fc631f27790e25bd683e9aeda632e6d7389def2e40567aa3eed5a5195892abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
