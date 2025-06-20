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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTLWRYC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNJgoKZQQ0IHmeAPMF3uaZsq2vN8tJnoFhuLQePuUnVAIhAJe%2BAEaH0ig0bQSrY7gOAU4FLPIO9TZFxO8VM3srE4S%2FKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLax1EfWlMyNjfrr8q3AMpMEGzo%2Bqo9RAb6ftPywrI0uUpxWDPEzbKKnm0FMifSxwprwNrXFJZmylQMtZzbU6Fe6ICDZPNlsBX1W6EfI5E%2FgcY8sQgmrGPQeKPy6GmtHjEjklkdHjGCmr%2FJ4TiTHDzC4d933U0nWmqoG3ZDHeaBSIxjJaKk8rb5LaUeO0QP2wkwTZpQFPhYcJML%2BH5zbFLb88z5VvQXh8qvUWRUFBaYA%2F1s2rHrYlv2ZXxCir7KBv0dcdkktXPRhMXwuo7X4ejzOvAiANKDnStNVHYYV%2BA9Gelq98t1SABe%2BD4tQfCHKJWOCOAVdhpU5evJhsVOmiEbo71AZ77%2FZPBlLyU7767lA89pE8c5tzwxG%2BV5dQ45%2F%2Bey39F1qqVw7wDbz%2BN3eg5FfhH2FqBKdWMthsM2ZrnMt5CF5tzocrtPNQE0bxwaUABi4lhmd73DwAMX4NJs%2B%2BY0fU3lpacqDzjr%2BPDT%2FarVoov%2BK%2BN6gFNIbuHVhExG7%2Fib1KHFyn7tach7tMs5t6bwlIVToZZLnc1W%2FoOqj6NY0km2Rty%2BFMw99Zy86QY%2FQBhQwbIXeoANCRryjWGUF4SIFvuRaJ2tQqlj9wwMqicoazWWV5rajIsb1kZelE9ryrkSNmVOCsI7cmkejDMvdPCBjqkAYgxGa%2BdMv73JUg1f9FET1T%2BaTcrpOOlWPkVESIEcxftxekUScxrkddYZ%2Fui%2Bn1g%2BzDGH7aCQJTkObeK6clJuF%2FxfRMUnR9x3F46gkkZRHr%2BCKNzyxvkFKkP1AKchvm3O4PtyIqaBl1m70JL3CEMbSkc2lavL4NWXWaAA9TKyNkknaEKkEszLkw6BYUUxsphtqKIvzpRr4LgoKAX0BrCV1HU37RW&X-Amz-Signature=452130bc7c7e89d4392f4029298dd92a127812d37479a929ed6b782bd747f639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
