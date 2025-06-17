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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDNCKI5E%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T121723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrxFtlujpIiqH1t3tY6okjvPK29Q73fvDeC6dYXoRbhgIgcU5nnHy1vpk3xv0TmY3TTfFbMXdy64gn60L%2B%2F4RUAq4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFR6oMilyyadaidJpircA6FANjJSosytSwCDd0TP1XsUA%2B6somel8BqA2dLjfRRIDuDA%2FHF682zbFPy8c7VryhhPFxf8kyMZnYrbPTTUu4cVOWpyt2VEaAe1F2ny6gdRW%2F%2FiBEm35CUoeOceNAdKMuJjPQgyeW9i9ZFI4UXWMKH2ZKhFtRZemYQd5cybvD2GBGDpzCtp7c%2BE%2FfVEioLdIW2fp6FGWeQQnTO1au8QR8pRvkvJW382aKEDe3mVZGWLJPnnYiYIGgjf9eEAcXa40zS%2ByyRn1rc6wyeLBafuFRwW99vDWCCokF%2B59rfQmgDBDv3ZxaCxQuw%2F1EFQqIRCvIbsWLWYZEZo69MpNiMqCHkdRF9G4SswI2%2B%2BvX8OiGhH%2BY6gurPH6NN2fBMLVy6rzP9J%2FHmFUXfqSzmuu553TBgnZz7TOvwzjtPmASdXmD00fcvFZg1GYhXxwXkMyGD33XocMXSwniCMEXmGy3B6kSD%2B4srDEOsq3vmL7trYEEbRFLOXVS%2BPTFUvVSDYTKhFELXiS6dENC7VuR%2FaRnaQ8A6u%2FXbobqImiTixpULZrqDjtfSj0IQmV4A5IIg9Ks7BgumO1ntm19dFAygSPyFp7Rg2k6ZF19HZyvKvdj6u0QaS7HFOUtLGZRl1A0N%2BMO%2BmxcIGOqUBn%2BZm%2FutvhvC4wNUiEU%2FiK9QHOeqFEWVvAI4i81ZivuggoG7eeDs5lGjvds1V7lSee4NJui6lfIhux%2BbGrNwX%2FZaznCRgDceFT%2FpkdZ6M7mc3YPWAyMHep0HVd%2BwL1MBCzgt58VVduPKT5sPA8hGN4KQCBtzs5HMdYACCp4OCBmXs9dQmYZEh7Olqcxmp4as3JGH522VVhtI2cIgz4B9NUuwGkowu&X-Amz-Signature=2b40db11a8b11a63588ee054a8a29aacb46ed76b84755ddbdf2c6a1c5282822a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
