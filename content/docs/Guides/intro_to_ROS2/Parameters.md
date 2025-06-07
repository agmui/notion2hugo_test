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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOKIQKZU%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiP3wOHOqly4ET4GNtrld%2Fg7sw967F%2Bl5fnOSMvgCTCgIhANqponO1u0viXU1PvCYKqfKvl23gS4rZTHj4ni5R5d%2FjKv8DCHAQABoMNjM3NDIzMTgzODA1IgwtQ0iXciARLGGiEyUq3ANp1Cntkazu85TQTiTWQCeoW1bCnnu%2F7e9X17OJTbmUkBf3dXzxTTbOxVURgRFwmlOsj7e%2FXaCLFoaRGhZmC7bYYp27mPYXi5klNsOGxPNwyMqmWls7tzDkUzXzC6gCoqUBE6N0KBAsp0WKG4ef%2BNYUuwLiWajyO%2FW6AD8RjbV9TE0hdiyDeoe5ZIdlqZPxpmdZ9O1hzXbSWC5nW1b6pXKLpwaNeoOvr6h43UYSuAVsT%2BsLgkGiLN0TDi2KA%2FQQI02ktNbtH6COc1UiR2TdVofoXARrmOpfe%2BWg%2BqB9cBJqRTF0df%2F6o%2BMLpbddsqSohunH8cTEWfH2L2ag%2FZAOCEBrg557Buboi7Ul3rmuvQ6Ub3KHvklY6fzHTvoCS%2F39ORDXjr1xDLITR0Ve4NxCYyEx6d5yA95CL%2Byqp%2FyUGv1TzIkZYIQku028RLC2zzYYRiVCEDrrxmZHRdsYufF2S%2Bycgv2mxTZAdQT26w%2FeHqOMv%2F9cwI2LgNV8W7Kg%2Fgd9DracS6i5hkwM0lImBV2MtGurZZqBKI9hOuqvLt6VOiosWKzGsPmkxp2Czf8He9%2FuOXK5NVOV4lJNCIupV9XRwG6ZsqW5isGSkWfH%2BA8SHED06dh%2BBhjbaIl7egZo4zDst4%2FCBjqkAf8%2B3tTadgnpXrDViQ3jSxUJfl2RwXdSrms2NVHJjsQ3lS7r0r63Hdm3DfZAWA2x4x5PKF1aoSTyyjMbnR9rFvpRHQI2LNx0IysGb2TPvl2p0wVXwkDlqQ1xZJye7ZKWUT5ups4n%2Bgw7%2Fs6sX9XGTR0sd4N4b4uPWrk%2F5I5020rkt1zD0N41YosY0vhEZc5HshSmUsBnpQuvSTxdmnx5go7fRXg%2F&X-Amz-Signature=626787e75f803c0b18dbaccd64ffac4ab7c21b36ee197fe655d87e2240d927a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
