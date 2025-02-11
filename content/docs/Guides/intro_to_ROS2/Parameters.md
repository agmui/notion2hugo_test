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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULUS6N3R%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFNUpawIF98DziPdoUO1W6buaGKyIeJCyPQvRbL2sN%2FAiBfCD1JIBnp%2BQzMjITQe1Q8iEauPd1VAvqJPXf1hS9kdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW3a1dVFO8fPsYYBmKtwDMXRKEQOYTyw589610Z4pP5htODmIyqt3eW7ZHaGWvhp0%2Bmrcm24gMN0BNz%2FAonGu%2BParhgMD%2BUpeWZJWMklzCdtHBhtEFdA2YUkxgDUYP1XbD1fK6sPGgI8LcX4tCMh6la9x9%2BnCttvEGHpOBiJBXGdUNWVcVgbCn8vgISIN%2Bkr71HQPwAolU0s7QLCSFo01RWBXeByEWy5hdDTDaT64xx86%2FijNkH%2BqKjFpOtFK3sM0IswCzkp5vTxaLz6ihm0j938tyU%2BjXiaY5hCSujUF023dGaK4tz9dpGcRy36A34%2FUx9Mhn4DxZ4APpmmkTF3Loax3nGlgChXarMh2JtjpgIbNPI4rclcGWr0swzUHiFupihnNJLsO%2B2oZV%2BSH4uOkrzFSztp%2F8ofB4ZaznSJ9nDSt0tYkmlq7gla8jD7lItGhjA%2BdF2Qk6Ame9EIgxnJnNsYL6m8AHp%2BK0RyhWpKn4%2B290q6U6sihuw%2Fb9TWpgK8%2BkpDrFbEohhR0UdxodbWvQwMl1AdKkkPzUegNDcMKm4KxQFn%2Bom%2BiYqDZdk7%2FnX9Q%2BhYi912CX1MwDnqsRakbf%2Bt%2B5oGYpNFBc3CETinzbSGJcoWMnPcSCrge9YcJ6Hhkq1HG%2BfG5Ok4jWHAw9PetvQY6pgGjEZ6r6Z07wSTETKNKvYOvDz%2FxRY19ls25AFIxgyir4qqvx5fr6rtvvsYjZo7lIIjG4h28lBnVZPijcBMFA9nJ%2B%2FhRQJY4X8wkz6YDTGMdvvSChKNsEemu4M1rjHqRKQsMHWrS%2FQlWF6z216T7mcALfFQzXk2F5SrU1brXJTRs5PkN2ITqnJpXmMwNNN6A96sOwN1Esm2GqiOvnsiayl0nbMAqE2zt&X-Amz-Signature=754cfa991c5d30dd6a116e89f777d2bd26d5367540a4914320fe3f4230584793&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
