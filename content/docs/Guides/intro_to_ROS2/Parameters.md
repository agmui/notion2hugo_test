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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7I5SG3E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRpDIZ7RxqpAMbJe%2FkyX%2B4fQmTTBlRXoZfUMxYwPNmIwIhAMrY60ecOEZID9akzuLiSVU5Ca0vc82e38im5p8lfLAnKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYU7SnQ6dVyDC%2FUJwq3APbyfgjV2wMUY5%2BRp9WO0kQkAJlOIP8zodJNM%2BpRmWDVsTF%2BcrZj8b0kCLxM2%2BxqZsYa9aBAYAyA%2BMRT1AnC%2Bu3HtKYaUxIBfWL39YHXbHLzZBFn6XlgbsHr1VsPHgEwa%2FxkCtcYvnYhWALiuAxqGqErN%2Fdc4ru%2F0SJsTL13OP4%2FDQjk8v1juJ9EOnlrP8%2FCqnwW27FP6%2FcQAuX0Ezdhu9oZkb0tHt5WWd8iQsQyjvbXuC9OsJKeAVgfqbzKs7KtPNfByberZzQEySguOweaxZtJ9TzhmY0dRghcLmmjGVPmG%2FSrAvrYLhuOSU%2FdjylWa8oFS0XL7yR0bqRJ8gZRvteILESDtzEzyTMsSqbpqs3ZNs4zW2siUEgPJ0hbhN1oO%2FeIvLaO4IIWxc4suVJJvd6I7lShTwnp5bgflqrw3%2FmyuHypLlOhzYFQL5jRIRTCcz0xCeNmrc16fNVuXMdSmbrE53dkHMuwAMVUpvCU7%2BYLNbnnYGo28PvClnpxXbBcWW5ps6BKvHI8VMWpa7c4%2Bd%2F3%2F5pjgm0PagrBtTOwHrICHhfnnDs3CokfGzt6UrCRR0SsrG11FUoP0Dneltckay3z8wyowdEMFXWvvPzsT%2BXvtkQOP0qK5jurTMj1zDk9eDEBjqkAdsXBIndA9lNdchkf1%2FMphMk5ZhC1qe3ry12%2FBd1jrJzTH3TOwux5TtvCfxbDYd6rrjXLdl3qWtlYlCVUS6IqOfHLIGAPMCTD2jCuTzIOE%2Fv1Uix7sTiBDh14OFvPVyvUnOJ%2FRZGyGXeImNWSQexahsNkte5lduf0cZaJ1q8uEusvXlQ0p4GkTgndf9DOAhxofLdRl73i0nHHI7v3LX%2B5QeubQ4X&X-Amz-Signature=3ed268a027391b813d9892c28d2ff7a009a824d803d75f7bc0e53d87000256ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
