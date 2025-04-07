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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DLM7BZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChgwiDjBwB3gkicRutrFRv4XPN5%2FNqIdDJLGAmLyu2ngIhALUrNhWQVV4zXEZmYe6qHCbXPoN7ObVP1MfXB1QyiiBdKv8DCGEQABoMNjM3NDIzMTgzODA1IgwEqiirFdVjMP4hMioq3AO89z5yFpJTNUmMDbx5jwZir3RN%2BIrg9n87iecs%2FfaCpReyZ3zBifcbVY8jS4gbIiD7M3dTbgEFLNjaABiTVgAbXBOyyO6rxLmaatDT7HNDr%2FwfEHjkUApRiBgd2JJNPHystAesK7NrhBqR64uRc6rYxM0zfkHqvLIEwD2e5Kui7aun7rpnqiNfJXBdZ1oSAX88SI%2BGHLGwIq8AuSIjv3sbpjZWr5JhShcXhK%2Fk6Ol2BYZ8duUvZtNsd7hF8ek36oQSnp%2FK7TCFMxqYGnXwoPHIbszyGfUxvj0LbBeiuM6k4hZnznJmDAW8vCBcchM%2FOcQQM%2BNPuJyMIpSPTLTrVZBTgQcDvHYiWQzDS9Oiaq6YBuTxcoctOIuiv2fZ%2FKFYzYIeWBc2CqgXEmigsV8euVKAo5tcluNmXF3DWxqEdfV%2FdSLt6gCUCCSBZFG6siX1BjDa%2Ffx6semMBQcOOuOD5%2F05eKCt97RWNdk2BjgFkR23TST4Ep6EqFu82rty1zgca%2FtI%2FWvumvfl2kNO58JWKVVL9H%2FUFFbhfC%2FXUfCrRk1mdzsWlV4XoDsI7ViWKTac2rZkKSeLPfvwzyGWVINsg1EyLuUx1z39XOZoLYu2BwyyyHAI3Twbi8H01SyYdjCC7M%2B%2FBjqkASL6jDcMfptLwTduhvSghdnVggZwsphATJ%2Bo29GnFk6%2BrSY4UQoFucCvz9w82FD9sGNMTQbPYfdAzXgO00t3sxrLea2V%2B%2B8qOjZtAuMwM1Kbe8rywv%2BM%2Fz8R2Y113YkKO8dx5%2BVs6aIRp2UmW9PEcqOttJljCentRKpI%2F33tNmSUxAWBwUeRXZPaXhzMXyUAnoTmZ%2FZRwE4eqUe%2FwuWiofPntK%2BK&X-Amz-Signature=53fb78a61c7c954240f8d576bf6fe3b5faacdc9c50cccd6d4f0ebf538f3f762a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
