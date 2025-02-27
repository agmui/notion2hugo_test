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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U243ISW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC9U8H8Vr8ieYedS7uGKQxaMeHrYA2dF9M7B1IpuiALHAiEA6Wuqxwt8Bh9xD8sSgFr49jiCN4ilDsO7eIkEe9S%2B4u0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCxpGhKSQkqONoW91ircA2QznxnA%2BKfNFWxJB9v5ddfTxVJb10i4jvoOSEBLtzu%2F3tUIWcukFiqunrzvTDZW0ocuAHy7%2FJ8G8vXyvlF9uKpvvjnZiD7RvAUTLs6uCMCsg9aDB5nDWSDg9GItcYH1RJaemtgyi9ZjeP0a6XHxCmRj0kNyEyki8iMU8oYfVug6XlNmkUQhYDkI%2BRb4zIs%2FltSoHs%2FfKOokVHHyb4Ixg2oXKcL5vp9VMEsvL1Am2W2UajVZ3jEEAcCqxLJPqj1vqkdyFQ28spPKUPTzp5vMRH%2FEDRcrMLBv712lEEV3CTleRTRRorwOMnMtH2S%2FNmjUHsGcjPB5HWnu7Hcr33Ep1upJ247r9SN1lwFi3yz3Hkrmq%2BdpvZoVV3ahZ1uKVuNsDksUJY0l2gFz5CW59tkbBBXz9ROgEwFW8z3wB9jYZpT384gpx2Dw7c%2BRylPKbAxDFmubQBO%2FZZtHPx07QjbP%2FyX1jyhMkgbsgOTlCadNFqGgQuEP1K2ZcgYKmpGjGHi8mP68oe2JydUvM3jj3luS4H99VXoJag8neWCVvj1KYwuATfnSExeRwk4hz5WfL5EPu5nPs%2B76VlQeych4EAkKlVWMFB8RAG2aknbwQQOSiEuBT%2BbKKuih6F5p8x58MLn3%2Fr0GOqUBvvvWPf7lWJkSdFYxqK%2FM5NIQmjEjkG6nPBE%2F40xfrI9D1cge2KZZjgtqHIRjraJ%2B3UAu809Uq%2FvEQfgRyorh1LARWca%2FMppUuSBpJyD44s5c4boForj6%2FTCS7Xl0uLiJv%2F61Mof0D1vgL5cmaIdPorDmj4%2Bs1mZEZYmCHNpUl27%2FRvJcHL7atg5Icfk8fw1eGbobEVizPTllJei%2FJb6xgm8GWBz7&X-Amz-Signature=f437de311a42f5928a0358c9e5664adf78b22716238f694d41cc9ffb9eedd512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
