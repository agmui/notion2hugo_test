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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFJZSFR5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDD68PhBag9SmiEOS85DnLbbaBcztkCDOosNyrOAmNpcQIhAP8GwI24X2L1phmvQJPZu79FEXU%2BoltFpUu8o5g%2FV5fmKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FIY9wLs1leH0FmUUq3AN8QhaJMJafUcKaakqoBDVEDsm9X8jtvNwErq8SYs53ilii3bo8uo1jk6Ht1csLWfExKldlRk6Nk6R2XKtZG7vk0%2B1o7lntik0IW3QsENAOsRti8dPh2feqn2qR3kX8qry2xRXAMOcwwPOmFE%2FLD8RoSqfdDjnFVfxUwifViSTPq0Qe%2BPKSgJjjr3hcJhm54OtOa2hI%2BoJbMRm6EoCTs8%2FLWfNKxuvXKXh5Wph324gppnKdL7CGw2vzBv7N08h3%2Fv0Y%2BGN3lErZQxOav8vyq9vhuFBEQDnyp36HYllLJY1SjeeTTams%2Bv8ySMjrfqQwZDMycWSETlq1Kp3Y83uTGVeogVwu4%2FaJOcU7x3JZkQNvUMJ3iU1P%2BN6%2B1ElXVHZ0BB%2BKE4o%2BLFZTv%2B30jWW4rf31kPOiqM3g2Dtrxv5ZcwUrBBwAIi8n%2F2bheXIr1wKPTIeppHmTWrlFsoLHYO1BwzOPdTzobdjbn7Se0eNL1keFbly1k1EqzsbTuYgwfqWgrU0fZlKdX3EPka%2BXOJcl7M5aTqWJwYw4PqHHJE%2BTUm2UPVB2N41hAlivzSAn5lrh4eDjWsMS3qaZhzW7Mnfiq9eydzezOoxGENaONiw0Z6RUOSdTW8gqYzk%2FXciDrzDyk7rBBjqkAZeH407NonCWAfD3lCHj9z2NuGrBbrxRSAxeS3aPREjlrQ%2Bvk3KI5GDi0knx7RyDXqjLhyKtn87Szi149YfxI2D4t%2FWE7prm%2Fyj2XidKyZupLdyw87L0PYb8bkUBYNoZutgfGWthKKabBqu0Oy5G5JUQ9LJPHZSvfy%2Bf2r9kTDIBajC1q%2FA5%2B%2BRXdm4Qyt4jqwWYdY6XgjonReKnRZEm1HrV1t5N&X-Amz-Signature=5a405168f7d057d0ad495594d775a996b1375ac9c24f4359eb0d834c8cd38d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
