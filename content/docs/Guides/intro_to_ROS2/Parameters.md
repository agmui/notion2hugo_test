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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CSVILWQ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIyIUl%2BffKZy%2BKI2O79FufZJBA5bK2rKwOXIyFKqZU8AiB3N3kKkMpDSSoj%2F59SvIldfAbQdXIrYcKOydpSdkz%2FPiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFFrL0pQmPR1pVoVFKtwDNlJ7j%2BMRUd%2B4ys2ALnWm40FpUWs1gM%2FRoGc7xyfCgn57G%2FlJjgCMmEM98ehANDLV54vPACMeF34HH0RrZSvRpasZyV6MKO7uI8lLFc5FDeaoG%2BeDUxaTSdDu3j0Z95JYpFjZZURYdvzR9Y0fEHcIverg%2FpDUlG%2F30NTexDgdETYvYy5MbwjHKp1ziq1EvwoKXbhC11I4s2NPBEMijYezTar2yc3B8c%2FrEdJa5TMefvjk0PHvnu2%2F4PZlekmYRJtgtvTp1h1crXr7X6fLJjC9ouVmh2ii7Dh4tchhJChZa81156D75Mv68tlPCtow%2FdjI0V5Cl04%2BI5TyWAXsBFkcQJT%2BCUIuNIUega16F4O9UIzlPJTxmEn4bnilIQ6IC9%2BXWgalMj4lWlbTYRwIrTNP4lCtNJXoXwLJhU49hX5jCOrlXBeiy%2F3Cz63kS042RZ6uHrEXzEDHZOeaTRAA15A%2BbDy3AogXwYFpreGSvD4sdXzbH9osf9HwFR3TVRSyJNZHT7PP85qHJQxd7M4aTiZV3d65d3nmNJwtqU8PQ8OPRvQEnD1Zb20ycu77sZixSVX1JDBXrCjYDtANp27bQmZM9IapKcrx%2FYORzdar6YZJKCnNprTk4y4NyPQv30Uw7PXpvAY6pgHGWf%2BlVEvuYX3%2BBD9ebwdh9GV9I42VUQJIguP5ERR%2BPgY7m7c7GyVuFJBi4dDJ%2FX3W%2B119TCA%2F8JikiTuPpFSnUb7uMup%2F8SRkBnfJVqVldzV8KKs%2F%2FRMigShxedBXUuGGA1Xa4hep4bALSEUorqeo4hhL6U%2F0Sy4Qid%2F4ocx0drs07C7vDK%2FMRpZdZCxjVQp453xoHdWXxNs5X%2FTDgGmtYt1Mj07o&X-Amz-Signature=7a9e6b5a6098e915ebc739ce2831c11b5123e0f19a45c7e9375af44eced4505a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
