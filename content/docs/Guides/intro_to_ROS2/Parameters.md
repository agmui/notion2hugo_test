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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVFGBYDV%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAS2u7AFflCq8B9S7469bE0KWdlcGNsF5GvCIaP6jHKoAiEAsXa6j0cvSCKdR8vbH0h4sSwhZ4wgn0LNeMOvdOINUgEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk7d4Y5UWVucPX6lyrcAx9wnGEKiKN4t5BPHY6YQJY7ltc6Ka3Z97%2FeyuvtzLBIs%2BeS6FUn37ddKPYgwRVwUR%2F7%2BFEEXoNL70j2Q2%2FxmCtMDqZ05lucl%2FAC4LMLck2R737%2FQrDE3qROJQDPOySP7GUaknDCY1S%2BKNxKyqa8hVWV%2BcaZgJ6DB3Ts8SG%2FBpGZl8QPnl3P5e6yQb8t%2FE60ElRpKhQ7DogAFzdPiHrrayPKZ85stJMtxjmyzb7YahIqVmxN%2BkWimAnlXKWwdV%2BwsG4MrzU7xkaHrlj6dY8PwOEj0HhfXI0%2Bcj9uxP41AFPK8KMwAKybk8vo%2F3zWubmrSueqyiZZBaCDisrz4DCrJtpzH2DCqREwrGBw%2FgRq86blvwLdrjgWIf0wMLso9zkzEpTVC6AegQiesGdcdZpPYEPsbTb%2BF%2FL8oqQyRwcfKYS%2Bxls5lyv438q7b6ZEwM2QPfLqdeGTja0Ywmvwdixd8ntYocY88o0JiZ5kljGmRVn%2BGyZYeEWPHRoGjxREA5IEiZmovuFkg%2FehJvMlJBgBV2c6NQdgx6UDUvc1pVg63dws4Q%2B457IkssZlS0TaP0A3TAuFDo88qMQvF4SH4bu74wnof14bEvWp6xPbsLHBpoVfZh1pFq42oL8s%2F%2B2NMNGKn8QGOqUBKxQnOzLq%2FsM4uJr068SXGG0uF1SRpp%2FpIvfOqzPGUjpc57%2BHD49k5GDVW8svEP1cB3ZnHZMsTtmZM6q3CAlw55IymmM6ZsanXOWnFqxgjNEWRP%2FZDcZ9UjZl%2BrUMoQfpjRi9EoLaH1utpfaVGr9l33Z0kH8fFm3OzfTKHNE7QsJ%2FOKImMjmJ9g4NlgbcpKTIf2Hk%2BLx7NvsMYhviD2PyOH4bSXej&X-Amz-Signature=1058fae60bb4ea91440961e52859c248ef9c0902eb2eb628908067a3025a9d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
