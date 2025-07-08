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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPCNCU5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T034406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQC%2FGPOh2dqsx0x9GUMLuTam3%2FINbxUQxJ2RDhggj0uU2gIhAOHJ4vyhrvsR5YzVFcWqAokxBGBh3DF0mmmDbhebYOxuKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwelgqu%2BHVGP8bOrHQq3AMzWZSiB4LRSpCiu4uH80nuY9r4jty015YvQZq6jq7SbSfg5kySYSEnMYLV7Uo%2BF4eU3VDa8Uj7%2BnlneO06TucKmW%2FFrMTfqV2oiSy0suM6M4VWMiJToq3Z4PMP2nE53Dl7qUVvjcowoGPTwaKDWB4%2FEGJIkXRdOkcWhxFLHWgfqUNRMzk7xYznyTH%2F434p5PhNPYL8a7mSvX2p3yXrGYuG1DIm3rgy5isnMtnGUVYkaepsZoX7crrdZGJj8u3FX5xYbtE1pABEJTgzluoVrdSz%2FyoU1CQ4losTMzhzJqXakIRQ9vuL3U0zdz7%2FFhpD9F%2FXUndhT55JrR1A2NwBr7v1LIkbiyVhgMtETkwD9WH1hEAHYU792aREhCgG5TMMcsGF9jDShm4LemeLr%2FYxyYQwro6b2qSPPEBfiJ8Jzzpb%2BFTofdgpDFQGkFz3Ddaqa19s01fjld1HAse91RGA%2FcXTAezH3bXGXeJRlCylPOmMYe7YNFw89KSM8nqksUU2hbG6hyb3PZE3AKU%2B5MmBg%2BSX0n1%2BPATB1gD4nbn8nnPwYBZr9j%2FCOtpNo25s%2F5HUdQscrYeXeFdEOvJ%2BoYDGeHwWS2O8v9Jl6Gj6ErHvvrPJzAU0pbUaxUfe17i2RzDbhLLDBjqkAZNTeGF%2BF0J9d3QFrJFML3WbamQNcpKKERio8IAxPqTTIJGXPlcvzoQfv%2F%2FWmla41Nckoa4RrF%2BqDNaagIkk5wRtE2SJ2rjRryNQDrn6DRaT4OtVdcYnoVb9YfCgK%2FdOUFlduyvuiknFubrgTDJVjU8xZSRegDRZl%2BOR2Pp%2BDFL%2FXakVmQudRPYkRLEIP4%2FP998sZQiFoVyL%2Ft7im1p9UthwWUOG&X-Amz-Signature=6354676f35a1821e607eec7d70ece24db6b3063d74ee1f3b637707fbcabc931f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
