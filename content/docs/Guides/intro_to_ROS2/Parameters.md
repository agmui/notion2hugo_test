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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVMQ37A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRmk2ARygc9NRhAgs44rxLNtpbIjIS5v1DmTrsFRC8ZAiEAg1o9syWNPp8umpBBTcfDhf8QhP4jnrbSbfF3cdK7SXYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHEBXwcVuijbDAEG2ircA%2Fh3SnM9bz%2Bv8Xz1rd%2Ba%2Fc9%2BMS5FbaB31B%2FZmVgklnoa51%2FFy0unZmZjyk%2FTO6WaCGPtn%2FpI6WfFtQCXxWJ63EnuDnZIuWq4toK0370zC6GK368tLeD4hp5ASJ8Ky9%2B4oSwhRTprjMKj9%2FUpTqRjktsM%2FYnwyeDpaUteiO9OpgBEjvbmSrgE2maU4JHtMdFXWE4PiyoqV9eTH1obmdwr2k2CN7N1fO%2Fu9ktvGjjfaBXB8SXViyR80DCxOMRhJOFbDwRZKr%2BO7Ytgjy31d2o1EUroiFBIjazjbzNLriq8EpLom3%2BWKgLCY8qSucmlxkeXbYbbEungA2icoFyWeSaevPxTL%2BYOlC6Dco31vE6qkPUHU4WgYaNf5jent4v1VqWKnNtRAIGrdzg77jjreg%2F%2BHdmetU%2FtzxUI1xcKsOJC8fVYo2flgF%2BOZXwlzKsJ2uOK6A2UIVk9tF9IiiizgzNZi7rT47gm1PEqpnrf85HXUMFuHH1qOWauN3viP8v6%2Bf2Ny9zJFcnSIpqr0tvty6P44P%2Bq09kqU6iRYicivBeu4sIA6oBGZgpI0uu5Z8bpHyNBMKpLbeTSJIJBS36TyV%2FoZQS7ZFNFjTHO38RzWq4TliWtk0Ad3tmDiltlwbH2MNSW2MEGOqUBR2lSNTZUJwePGe9ivdOXR1NQN7wxN5L5%2B9DzmFGYzA7t1Go0wyfva9SY1PZpq4GKByIW7uCl7svqZkVuGHF6gh3WxPCYVvuARjuPCeQYpwTAYTN7Gl9fxaoBHh%2FfULAT%2FScmA4sytDEJfudZnsVaLI5sYe05sz5%2BkmVLg%2B58eFIzFLfjE4QYC2UXuFd0%2BsvjP3W6SnXIEZFuUsRRCheQ%2FE4BV106&X-Amz-Signature=df091bdd5ef7f3f39007bb324578f63a1291b5926c1c5a12493740a6d454b529&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
