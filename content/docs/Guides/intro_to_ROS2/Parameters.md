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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7WWONHZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T050909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDGW8QV5dGpd3CNFO%2FFjpMgqwzcZJ0pyXqiaAJmBT2j9AIgHmrn73Cr43eOLKhzoW6Mi8wA%2FJPtR%2F10FQJDQJrt0hUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgblT%2B3hgQ6nN1tJircAyHyWRQnPP%2FiyBFKCpE8huI7N8cdK8Qf6T45Ru6NOp7QjpXSa8g5D8kR2kdx0IClL3%2Be3bGCAHJVOwACnU8nK7KdrP7sA6tNlOyDZPIoV6R0JC33ay%2Frm1oihvI2V031tR5awxLT1Tw3kii9vy9yxEzkGpopLEnYVqz05krOUrTP9LqhParLLGMBh4a%2Fto0Ixz8nkth0oxGwAGpFQmfPcI8%2Bfb2BZ9xVTskX2QqUz3na08D%2BBwglNFkNLPDrVdIPKS6GhNWZfFvq8%2BZWnFO9imcpA7WcluU3u1tystdFIXGWqVJ02aIkw3rLfnI4i3aaD6hYtyLHiGH7PWdrDvAAR%2F28uSUGHHjPITpTZ8%2F60y7ZnUiMn%2Bwt%2Fh61CxoyTmKA6%2B7EG0RzV8ATAyravMEu2xPTO5VYUs6CA%2Fm8w5TKHwTJbQi70znqT1jf58M8mYoIdVVFLyjCc8S7yu%2BOVnvHAKhJoblOjbtxnfVRAC%2FV8UkffrE9DM0%2Fm58SQ4LeAy2XIbPAhntOww1YUUE3KCNC98KLqn8A6lILXNeAghqZNLe3EB8OgdRYjjTkEf%2BivSxU5ygdtmvWgSoJ8fVLF%2FBI2ZsUlgr7jHsWiXA47TV595ReH%2FJmWilACgpii46hMPny178GOqUBtghSoBlOlTCBBZxC5m%2F2XLugkpFMZtaMpFPDRxhdIuxVaqXgbykqnPq%2ByJzK%2FxPuqqZwQ2waLvxMJBYj%2B4uPIFqO%2F0KEARgoRQ58sSi3fo8GIurp67lXBV1xWEaEnZAWQqaUxt6dtqWgvR7pbxidj%2FA6MWKbbHr8bW3oh%2FtPfUJtGuVWmvJwY6gr%2FrEXgAv8eO%2Be9qbqQtejGoo7ijabSWzKZq%2Fa&X-Amz-Signature=051e3e7fda4792730570c7e6d4ab8791c820015636e9bd1aea43de5547df77da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
