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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634H4CE4A%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm1XUQunoxW4dXCmopEAr%2B0QRzHHSmqy8SWmc%2Babtm5gIhAIDaiKjma6vCBl1psAG%2BDvL9jT1Mac5GHRPxIX9ukJ3dKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0o1dM4dg8QKgf5BUq3AOA7YSwULw0UyN4clqsS7%2FcjDZaRi1np2PageJnEcQD7AMXvR4YI%2FFjbWr%2FDIVUAQek2qnvLMY2v1oHCMCvv6bdWH9HT5swrSho52HHAggDi35hFATMRnOVZchCtP0rNLQuJ6BYu5%2BXGtdf9IfD5kuxlRnYS8TZH9nXo2hGusLXthauaLD0h1%2F1jSVeR0QZXVJziBXMgcG80iPxjfca%2FVpw5Qf2OWhi%2B4LOcd8oHshJQTj67Qvu7Pi%2Fno%2BgvfDQ7jS5klFNTLL0qZCJWGQPHvSEcXNaoFBCrBwDu8ZxtbKddcgE8ndJsMi4CONRgvIOWgCXz1BNfdhoR4wx4EoOY%2FkO136wqE6eo77l0qovfAC%2FgNDG2TWwtRMLKN1gudxiwjPsNJtWLezZRGDFnqC1pE3PpFScNxPEt81lcvRsC1R8x9FkP3bb%2Bp5gvS0sGPREfm4RrDqWQq8XrT5Cl7YWRLIoC25kwntFNhIT8ErrCDRVkedQ6H%2FiryEd5UyExiS%2BeIuehDYWNlEVoU%2BakQqM8qWDA50%2BnUnPEpqIQmgDTq7zMTmOKm9y438BjbstGwGD9PyfgWB6RPQapopdNFGesl99uNB%2B6ssQQbcobIgDYURXMoUsmnHhsKqQr%2BQ0VTCqmsHABjqkAXxNZ%2BftI7U5CThigNatRuOfvr8URA3Qn%2Bw%2B%2FxI%2FWPJUwoMeSdtiri7OMw51yCVDZDVAyN6DVwSIKeEuJCtkurj7COw2ETLzT1FwHnxEyOA57lWIysd1X%2BjgbtfQy2uET69kHyTb6L9tq0C3PEGTU0oQVtlWHWcQ7g6EouncFScCi%2BW5Udy5tKex564mRSyB%2BosP048Gl87LK7vV5GmQz6%2F%2BekcG&X-Amz-Signature=cd6b8832ff44cc579cd69135d08139d6bed450358fca3e3dc7e1efcbe09d3506&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
