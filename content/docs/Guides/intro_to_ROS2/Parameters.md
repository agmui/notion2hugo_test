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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIUHWI2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvDQcVM8a%2B6muTUZJt1gbqvvAzhz2ttQeYqOtap%2FBToAiA%2B4SWxs%2FB45Hvp1wR8g8ilHp%2FpzWw7jgVIs1xSYKRdgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM2%2FoqC8QoMavM2UWXKtwDqMbDL6FDwNOqzabmfc9Z2SF76%2FpKA07I2ReRQDey3zCow7a4Y63QfiC5MeEGlDoUIMddS6HaCpHTerXOP%2BSve%2BURsJ%2Fy75YYhHvm2k9piJV2bO8Al07MSWlcfsSd6wLGo%2BoKist%2BiLUvrToQ3exYknqxrqQCoQUWfjKyLqorwbndgvBjb2PV3PfRjtaGSwteahJTEm2yh6t%2F1EHCj%2ByHlDsW956OW3cLEei6T0Tp1jooiu1Zb%2FPz6yTrAAccnK%2FK0Ue0oiM4P6L6ZBl1pn0ILu4JXUrQPfl0oh1Luv0m%2BNwSdmWbL0jkgp3n75R7Qf64tw%2FJpijDu68nJV4%2FXZqkPUtcXM5NgwVwI%2FAsbxSoVtJR4wA9ug9kY%2Bx2Iaa7aDHmJsmirfC9N3tgiPx3yZfp9xCA6%2FEr5%2FDQ3rlhm03beQhRlZFTkbHRfVHHIFL5liiDylvl%2Fm0X9Brsy9eVWg69mcL9fjGtCO3lIKStqekKZQqa5hzhFtAJKqds321ntL8Dp6L27tNkhK4VXCaHt7KpV5uVO7yDPjCsE3ucawgj%2F1l2qcmSbu8XTFkHC0bh7cM5PSPWS7E55dLNmGo4kCz3NJfvY7LOUH6zzde1O2jdVbEAqkyUSmbeoM4ek%2F8wxqGUvwY6pgE4Ow5voyFyaCoxA%2FYiPhh4te9e5pmkhKUaV9aM%2BiMGw7bwaJJ0oyodtdOnO55vwiuKCTuH9iV1KrDeFv33cFOJTFCRTJUBhWxWZMnnvlR24ed6HNv2RFG0et%2BFfQABo1ncU22oeKa2RlWObXhbju1NEpL8tvSd4HwC7bGaRonM1LWIDfhnQUPqQ4djDrqjbYmwqfw6lZtDzWcehJE0L%2BCfVyAiYApM&X-Amz-Signature=9b2a3b0143a45fa3c7cee2e587b01ab3d9a6dfce4a68469ac5c31fb03e072e12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
