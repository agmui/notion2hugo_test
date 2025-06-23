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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T4V73A%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T024852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDwaRbOp2nlHdzbmA%2BP8XJRQ5cMZjqwpdkNEjagCJj6WAiEAilwmlEqOJAlSJUqsJzw74Ui2NDiLimQ4ltatwq4wK%2F8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqP5wV5I5O58doGQircAxz9ODsji%2F52OqhNT1yTKeBfgdp1SABbyF64Q5o2sFlVPqnPPs4O%2FQOESAu%2Fo4rJixChRUJ%2FhWsygTTITZUKmNLXrYWUBY6LXa7idjjSuBp%2Fa87kVcbEaXzwSHPJ%2FN%2F%2FZd4nWNtLor3e9PZqZCkuY5v8f%2F%2FJ4wkcTNDNKUVg%2BvckMPyl61JhDq1u72SP4VaKwtg0mwbkiVG%2BX5H2PP9Bx3AwAUpZj9TwHahcDJ0nkm8MnXnQ1H%2BkjTAaXU8AKiGm72eP3VPyriZ0ImJwav8Tzctl8%2Bjyu9S6EjYiOQyzvCW%2FyM4D41qb6EM%2B9aWzlTaSXsgA2Y%2Bsubg5Beb7%2F1sHxpqeDC2urd8ndlLN3pqnB5Xf1tpITTq8AcIsnCqRXgWzBCymoCMzvmPbbJpAnnLPKOI5eOUlQ9WF0UdPoaTlYFCJYcm7msd%2B0AY4ZNL5NDES6bPZ2phHot%2F8BNkSV375oJWR0Cpv5srXwrrn4pFIaDW8GgelSFOvW0vnjHkAIWBRSF7pxeSOpXjpZFd1c228y9zYCFkkNHx381pHD8z%2BDP584kUNFETvF0L9vIt4lYxCcQeIg7B4YSUPejvHnZuhNw7CsSO%2FvrzMCmCkAfKjZtT6%2BEraPh6zrhzdt1qTMNDu4sIGOqUBuhidSejseoN0aP0yhJPRBoU7WZsy0Cp%2BXk4n41oJ5xWmhKK%2B0EZycPw%2BdhxYEP%2FzAsvO1SwVElG%2BUm9C1Psxxaez5HUD2VulcM8FjgqAJbqtzF5JLYqLWUKbdjKiZkMJTJmlMfGm0NYp63FeAxod%2FPBDS0%2BnZEzcA81pu5AEQX87mEn3lFgySSOZxqQPW7WWpiuwy7ir%2Bq6AC4E1Jl8odpAwJrZ7&X-Amz-Signature=34c233a1d068a2562652ad2e0762cb0b43f066da458ceed8e61e18f1c10eda11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
