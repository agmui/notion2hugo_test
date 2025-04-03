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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKULFQL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCk4FNf1CG3BPKbpicJVaHqkL5V43d4fuDl6CoSxp8LUwIgQ0cBgR4V2h32fCzr4pz94ec6dSRpLEOor2O%2F%2B18b9CsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR%2Fwg4k0RyqexlRDSrcA%2BRvJLKhXyDW8Onn%2FX2AzlSXIswy1OTYZ3SoSNTgGM0IwPOAmYfhHD6J2%2ByY1r219ybT0AVe8A5rQ7aDQ5O6VdD9wywHEsZ%2F6kRrgfrTxaFmqmZfv6eMGsrpk7kFZexn74ENld1JOP63qStaHbplrN4%2BfdwkqRMSIZm6j6aRIl8H4PvVU9Q%2F%2Fg9Kd9I26Q2xMDrz%2B1wCP%2BRUevE0SBeRxxgMltT%2BuzyeeNvAMkMMq84s5GUAzliZasbhnzT%2F5VDBdBPpp5lflKJRKlyPrPnDdEGRNSzCpzf%2FC%2BjQL3SxDutKNRQGQsMY8OAnMOAJNUy4%2Bdx4pMyoEE6C5QIu5rtOWWFmSZkvVACIONqDp0jRnzybUNR0m7m8a3ZdhYj5j6R4GhxGYe427uZoLWKHtrzdz7lnNCUWdSLDKpXvz6sA8h4jyFQt6POCERY4LO9IxEVNC8dUAeQWBH2g8Szp8aEF42k%2Fi6Xii%2FEC5s%2BlmXqXYl4pjhG%2BIy2o0%2B7mTNuj6ENTzztU3aPplGAbacYM6%2FcGM8CsWfXA0YpsXS6AUKyD%2FycgGkUrRY5gi4NaDNeu3KxXPRwr3Qbk6gRqsmapdT8NKNeGv8z8rnmC2x%2FgcZMa7iCiVMySLK6BdHnX6w5HMIuWuL8GOqUBSCHTp%2Bdw2EMYEbvYEbay4D9HkMIrr9wH7b0gLjDyLiLi2ObMjZKowRqtgOdv1uIK8M6eaSdmxDf1soGTrvJ7jbHoLLjMoeI864ZeBQlmKkf9tyXxi1OXclGO1OtotFfI9yQrXgZ4R%2BMECYsQu2oUN4ztZjyVeIbGrGuGECcUGU8qCy0QlO9IP3FNo3X5o4rZxbv%2BDVctZXMWF6zNquJGwLGbsBez&X-Amz-Signature=39f29dd3231ae7dd809dbbf7ca22dda3b56a1756cf8b6d32bc93b36d1c821c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
