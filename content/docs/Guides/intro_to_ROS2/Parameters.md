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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66MBVEQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwPBcnpcJJF5S9254wvy58ZGIfhCwvO%2BRqzvZ5GO5mxAiEAzCUwYn8x7gSEyIgntoZkL34FQ5S8QIWtGQV2UC4lywsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJjt%2BrA%2FZXqszRHcTCrcAxHAicvH3zmUZpuwXd6RnHAU6YTuXhf%2FhVH0IYOUU4184fd%2FVzTx2wa5fqlX%2Bqy7RhPd2zkJXiwlyf6VpbkvdFHwZ%2B8JrhzFZBOAne9rKRoUKaS48z2CWnhgvQ%2Bo4yRzrA4U4vIOxjyxLPfEhblbLcSlbB7%2FeZlyueIHeDU0dwGKNlQotp9%2FQMlm7eqn8i3eGpGKfnd3OK8EwPi%2BycwyX%2BesYdt%2Fu9%2FW%2F3wyFHOghDfQLKlH7WwRziHDlJEvmOB5fMrjAD7O4reD13gQRcr1MkkNCmgZRd003HHJRigdrCvMcOTPb26AF0KCNDfiTrOH87uaSNCDZ6T6dMoHaBo5VOh3HwlZTpf33X%2F0X7p7My7hDdXkeLBTKw6w%2BQH7mY9FJ7S6SL9ZWaiz7XcFeotyU7RGhhXAivNvA811DwZgS9jak%2BR9Op8nmdrO4%2F8rns5qXGQL%2B%2F35zgj3tzT%2Bm2g%2FXycZl5HylYg3IxK5Yv9tU7we7gNs1AeYTVndfDNvUIsr11WKqsOKU8h4V1kQ%2FtAzgUZoJ0tdvCLh%2F5aqAWaHNov%2FqGAUgIxEZku%2B3zOuQPuHtoa2P0pS5U8zofMqgoOPKXS2cQSor0X6cu3wV5T5nG1UYv3w3swm1PDwO6gDML2uisIGOqUBVVZjIp159RZbQ0N69QW3K2%2FMmGM3Cvt5oyL0oT8RfWKCGY6VlKxE3TU0xWt3wjrzUbK5UENtkaUeqtIiWwZF5Qe%2FGFuvThDan614MCqwOlrxp869g%2FSi8tUx8%2FIdgQX8TD3v%2BZKgz7pigJchNIAYoP2haCTOs2F5dOnDw5n56NkvvDDvpHOv84Hi5VwFi90ZssAQkJp0TrKqRf80T8Jex6cKH6fS&X-Amz-Signature=81c7cbc0cc79ec92723080a0169a5931a8353931a5e6ae454df47679bf0c5fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
