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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ64NJK7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKEDhgzf%2FgEX6xRTljP2kFtzoPWsjleiQmUstavVgtUAIgM6ukDUPnXNqlaF4ZqIGJvMysIFRumIoTFdIy4EFg0Y0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOiC7mgrp7VIlb3ewircA827jb3I5UjOIkccGTahW0Yf64h9eG7g4i0vbmAf4GjcVTPYYGx390Qfu6qlXk58kKrxrlCMeRd%2FLl1SXMUmrolAO2CIaK2l6lKSfFKTS1vp8Nnp8O%2FaKGE3gV77MCMpLyZk55YRFBgqhH0ZwWcPzENZiRywmMrcp6OD9qmJe2vxGg49P3yUaa0d%2By6qb2UYwOcj5vzrxn1cSXlKLOLFxKfl%2FpCmwnaB5pZXXuN1iMJc1nplSy6r50cTmue4EzntcaZV5XQMk6VKhVpoIq4z9G3vp0LoMWHS8d2zxSkI4amrKE%2Ft0vWqpCZd9WqxZ00tMoqiIP9nHuIKV2VLFbujxIIzjwaSQfP0UgHixZz5FIC3eq2wMS6oidnyr9Qz3jmGc5PR4iqTjNHRhXeix4arS4EGw4vsBncOYI%2Fz3tLS771ZLNAk5OElz6YaCwkUXOkrDcqp5Tf8Ahbgdm%2F%2FJkDsZCy%2F5MiZ547LwVDTNRpoEWdiqV%2FeazVT%2F7hLrjmYCwQ9ZB3h0Awqnu%2BM7EM3ZFPkkeabsON15XNdS4FM1xP%2BIor6Pomm0d9XTnHEnI5AopaiNYEBc4qw04Lg8dJT9ZEsrdbTayGxh32EV99a%2BfQF%2B3onBQ5Xrr180P8HhatNMNSnnMEGOqUBeCTIdFE%2BJITnaESREfnidwvN6nI4BJJ63vgCqIuKq43bRCw6ejHzC1gHYgS1mTXkgCvK4Mu8BeLH6X1I80OvadBt6LeTeQLr3HRkt4AlX5MjNksaZz5NyiNPD9oZWOT0sGhSocaOREJZTXxxpg8mOEAy1CshzRMJcSJ7n4NnZ%2F6jK1eOVUM7AMrl15ZVI2pup6lRp6IjbXVd7xdzaxBGn7Sdy5kd&X-Amz-Signature=ff15c741c484a3af20f9024eb9271c6ca65004e47115dc2112b5c14771aba3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
