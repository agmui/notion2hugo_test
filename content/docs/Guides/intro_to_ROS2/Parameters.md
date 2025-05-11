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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7BUAHJ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAQGjmxVNWM3e9GY%2BZT1DLtAcAGvuTXFTiKjWYmXRpXtAiBIEk9FwhEaTHDKTWmi8VfdBBUTcW%2BGaSPnqEnekRU15CqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcTN785ciDoE9BesiKtwDQvenEcYRSrGJt4Vr1RVP92vkzwODxrd%2BTuWycYvFY9zeovyJ1dB8FPlMIkqu%2FdQ6fLl5VhSRcX6GPbRkg39jjAwSWM6Uc7D4PinSOmuHPHWy7WIJdynisorcSoQgaMjYOpBvjxh6yjDgvp5tuPy8TtUaegzVMXfNUT6IeVNlzcfVPa4ldxzF1QvWbSxDv019%2BeVZlZZ6mEq5thE%2BuqMXahkug4xRcp%2FeCqK8tJXaByZ9saruXHptdUz6GE4IGdOZ6%2Bpbkh9D8%2FMXXLikInmitYUZAevxTlA8waAXdtRJRp9UC68we%2BToNkzRRoXXzu1ErdswbENBIYfFPzqnNqZtyxMcnOl%2F%2Bk1eZRrOtIWxbKBfhbs4Hs9T7dZ9mHwGjoxTibflrkVwR14yrMAK55QlRHJeNBt8hFAQ%2F8WW5GmgJ1Z%2FNx7hHlBxMDad55VE1V1TwcmLrEInWu4eifopHJhtWVWIXtN5O2gaEQ3pxVVF86oULHoGDtMq6ftQH5uBm4AbvXyTP0yj7%2BX02Gef1U3dcGHrF1%2FMdVNDuCnwYYuMVyNComnm%2BgVRTCgvtA4SDen1ljGF2QRFkV0nE%2F81iDCc22f5W7xJAAbfD%2BfA88j%2FIg%2FtVDdU4LljoCdzFU4wwNL%2FwAY6pgHh8qNLZLDXn7aJrXL4ZPCyblKRO8sDlzRV2psoXRYyMty5XoBGSckENOt2nFOpJ2ruu5M4r4JGLgBF1dbBU1JdN6rdG2t04vJDh0mw37FubfCyxXxLghs5nzUpk%2FJfS4xf8j7zkUxjx0TFMnGde8HFRdTauOr%2Fc9Khqokzo%2BsOcfTTbJuR%2B0%2F7zUlwauWh8v3l1GP29Yl6b29SIoGf3o4GmpqZC9sK&X-Amz-Signature=f894cc4fc1e2affe491630dfc8644bebd7a4fe220d7e30e20d595fee7cc70811&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
