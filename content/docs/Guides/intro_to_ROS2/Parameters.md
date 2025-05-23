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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYQP53O%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEZhqv7gWgwSC3XwXs85aBwzw39zw7MfLhyJjjj9%2FjsxAiEAk3xKhk%2FZGTCtDIu84vCSC7ev5DQ%2FF2KTSPcgeEoNk9EqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAH66mxeVsrA4Y4bDCrcA1gwzNUTGpQy%2BHWxp0v0tVvwz2OgXwJxKii1UQmY9CJ%2FgjCnI%2BPryGDhix6fyFgq8HB7VswrWmJGaYHi4VPUMlwqIF4%2FizmgW6x3UDrZ1ppbcd5vtlbdaSFnLSqxfGSJdzSxIcUXl%2BWFxFZLSLTplzOaB0k5LM4WHt%2BiI7z%2FfL3O3VVM55eGD10gDHOeTcf3lW8vcecGdJeWGQCO97e0hEUExL2kDlw3%2FMce4o%2Be08kqD0sR3hQK%2FirCNTO4C88qaDWgb%2F8j0O8FmfGWqxvhUIieSdJwsn8ZUH3ewwrDr0HhrMNOxJB0hWGFTD5nYK%2F%2FySp39wfnfWgGrjAydseKWKafxjZdJC8Ka7qufNDz%2BPCRLkugtjuwPipbAsTyT3%2FIINpTGNbstWgqS%2Fe0ZD75ev1DtTHwUpt3QEIYM6x4w7OZPZJBTc47naMcGjrxLLkk2vek9h%2BcJ96A2klMhh4KIP%2BmuenBIO8agJomtgbx%2F6eNOfd9II13DOd36YI3SBRnUQgI2ZeMYtT5lZAvYxmmX2Bfm06htPQ3K2Z9P%2BDkqa59gRe4C44c%2FEjMd9T8yy1qL%2FhSgM7SxrLFpmQMfV6Yn8DTSIOsyW0o0gYUM%2BU%2Bhj99Bo4egYSrg%2FfboaX%2BMJ7FwcEGOqUB7ZrSBHtnrnILyUVssuMhXHR2iCJQrSC7NNq2Lkyx0oUbm7ZpZ9p2GyMugjzgoInBggxSPV0klMChV2g3D5n8mrl3e4oUoG%2BN5M6CJuComU2gzFwvDYeIZFiqnKAkm%2BZ1uITwYqkmS0PzMM0LiN9v1K5kehWvFNtqAfch5DKK0eYU%2B4q%2FalbYlS%2BUT%2B4dasdhvOj4N1y0osTf05rR5HSSoN%2BDtAqa&X-Amz-Signature=b81eb650d06ad3881db9666b5a0f3bb124ca2c73bb6ddeee8486fb203d8a49af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
