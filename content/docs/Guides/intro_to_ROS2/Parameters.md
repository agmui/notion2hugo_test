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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ63ZRL2%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2kfjNPrvyMkcAJWfmcAsvT%2BAhnOe%2Fw5rNqCmtJpqccgIgJjkYOQupn9ilKxqvTZm9IocZJFGqgB8K40cMVRVadM4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQD8ZdvrIa8NF3z3yrcA%2Bj84AjZBrhkc7NP38EaFolBwYFndpn4Lgs6ZKW%2Bktrz56G%2BdVkAx%2FaEQnbYs%2F07KUG%2BuSAneGfKhS4BMAGWLSegLe93DX0G67s7HeQfYgxOqyeOi6MJfChUDrLao6j%2BCgvLOpLAvL1jahi6011gdEGHLv6Au9nRufZsel9J%2FdJp%2BF1v5busw3Iaaua%2B6Nv1BS5E3hlVWHDvm06Pu%2FNxExcpkjPEguziPrj5DB7zvS9fcxHi52r6UF%2BFA88MZ0%2BOrIcfBKFq3Jlh%2Fi4DPVC5wSoBaqB431DobHAFVWM1yO6vTgSWJxhbUimISkxGccxTeZQqUKJVyOHw5woPS%2FwO4MtXxVxcOr0iSJHmuZyzo3e169XczP8z2RjR2wekpIuX0%2Bt6yapBRsoU623%2BZopjyRQnbVGLN6bDqsqXMEvWFUlaD29bFBgyRMF6ecR3OYoAQMLhH77uUgOe8iyalVdjQGPufRic6Na3ksU9JO2BP54a449ds3uKVJyGdsoP01mI%2BWHi%2BKlJ%2Bqme2RtbvgRdYZhewLunCT%2FkUI0QoR3lCwonWYFu81o%2BFvZAg9g2XzxXZMC2QVPnkrWNLbNWN1XSRLgQWLeUXXds%2FsGuVT1QqjjJcVvDmHAq8NraIq7KMIDypcQGOqUBLgys%2BfKt1gU1RNRgCtmkOibstxZjrTu0SYd7mUImNBsiCPvSSrHspdp5VkebpA0fQ%2Fxh5a8IeNlPdSrSKIDWY28oMWSSOGQY8s0AyHM9jW3epAocRrZ%2BR9XGSPWqelaBHCVgaiRJctLkTwm3SN9wRS91e6v%2FzxiIdvq5OZzNJZ5TgMhemN1YrqRox2cT%2F4MArMWM7k8RdKHI7yvR7zGWuU%2Fy1Ua5&X-Amz-Signature=2e6521a9d11a1b632329faafc5b0f507b313ef09042de8a71bb1cd8458b0aecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
