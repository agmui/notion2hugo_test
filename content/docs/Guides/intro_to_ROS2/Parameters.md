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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTUSEJE%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvuCNUsZpFF1FtwdpssoljoBnVigRE4GEJGxR0aaOoWwIhAKjRmp%2FkPlnL3xrNRDWa5npEpOuKForrF7p2oWadABmoKv8DCGUQABoMNjM3NDIzMTgzODA1IgwmO9vQd%2BjZ1ZXzKRYq3APpjFMblhBfLdBNmiFXpL%2B6kP4FfUAbX%2BXXLmdwK3BxLhlKIUL1eNm746j%2B9lBL43iClDWGGIVOsMZxw2VWpjmFNU5g3PBTlaVMuxS04ChTNIwm6zJu3LEm8vWdRwRSvetVwWSXABfm5mx8Iur64zqYfiI9wdGSpjE4lCKxRz0KfulizliwG7fbDxLXkPLZpFfY6iHFedMRQDOj0Z29q33RKSKd62qJpEZ35XMhRHtoMArDLHm4LDAoEWgjWaDBrPaXe9qM%2B1pPnUEWpy8rBVtqDA5wJoABFTEQZ7XEzBy5xCwCSNWL0M1RtHD6xzxwjEtSQ%2FH1qnmLX1Jwr0vDsyF6We91vFWmK0v3wG8KS2c6Te9ihqXhLS%2BqoWJ%2BtvufsgrRyG%2F2H4HoT6Lx6IfzH8WKH3M%2BhgKevsRh8HqbKzqwVgex5guBBy6BrUtkSjzSC98J9UryKLyH8YV3ochUx2%2B6mDcpJG3IoSf626313Xz2ufxD7h5J1bxhp6QZgmOq1z7GIXoiI6NKE8NHJfaLXdzxImzoqzoqxvdG3mrN3fsgfQIwyuTM1jLSHqu%2B%2FvtrRXMDnHpxEkgcSMoXPmqB4Asqw3kHJIAiU4Da15LaEtHLx7XkGCw2X2gLtbd4STDKirrABjqkAfsJPlF6rdpNutWe7F1enlH9hBFiRMevTu38a7ck7tsvFnC4K65igJXpz0WyDLlo%2F%2FIvkjcQWLFuon9T1csMfHy0JGSotIE3BMJ%2BHgiumimdBnwW7G1rJcEdOM%2F8kdhNyYzUxXoDGNJ5tSNJyR3Z19xpu5RnYjEveK4ssGm2MVQQwY%2FIkFRS%2BaashlCjlslQP1WvmLjdIfKK1rP1yurgw9xvJBiR&X-Amz-Signature=f620c2789ead7a9d89e1e7c07503e79bfe3913124dd69b73f9c5c50f7564548a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
