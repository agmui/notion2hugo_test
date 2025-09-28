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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBGYDDW4%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQD833G2iHX8IDP2%2BR%2FqPNaXDPV2uDnWQcWJK9oUb9zU8gIhAO5nzth0LJBmTx0CHu5EWr%2BGvYfcwpmR4MGEZSrsSR7YKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTkTxwBeDqhIotyzEq3AMxMG%2B20rmX8Z3XDloratnRMOFr0%2Bghh5dhE72sGy6ftc5zanMbPxmpgyi9qHtrBO7sdrQP%2B%2BBmlQNctNOTN59OCaM4d5DrTTKK7FHoZBesPlH%2BMqOzLyf7KMMa43iDA73p%2FvPGdQyrJ3zeNix2aUANpWAI9VX4c47CN%2FcCpE9MICCvtUa9r3ItdkfnPrxKrbflvoW%2FRaR82HcC3IuYMz%2BSwEK%2BL01L6QIfNxErG08PmcIyUQ7HEDnNWOOCHyjvs2JA3s5qO2vGzCS8ie%2FZyuMEK9D84foI5ZwK7%2FzAzAZt2nZtUpscT8vILcFKdrcIjkvvtjE%2FPp5yb7%2BOOGKVUmbHBYddkCR8UIBbLf5GMPwTM21L%2B4xeuz8k8YKU5muTcQKI3ZbkmdQ0Agrc1iWfcw9lWOvPfih2MG5A6zuyvuCrBu5v1rWxjogFrhlScJZbXfLIhP5DLPIl7gdiQXKBzB1sBhEAO2QFSZ08E6VO8kRJdxzkCi1UXYQi6cBSpAnCJFJNOsYW6N%2FZbrGPrC2cRIvB7r9xrjykFr4IOK%2FuNr1uhIPFQcAWW%2B25WmrsaQNLSEMZ93hi7Da2W37SNf22iHYSVqE0O8vbASnGCplqCTznLcjISggF2h8j3M%2BcQjDRv%2BHGBjqkAQHWQpTsWKrYnmBU2pSo7B2CUs%2BD11O3ZUhy50t9GH7hOLxCwqg9HUUnSGQ4QReirVRTCuJ03sTIRkLV4Y6QioqeCoBf8TQl7ju%2BiS0C6tklm899DGvpT2peVhUuJoK3MgCgBlTqR4WCbN%2FKEVIKrAvtsFbqA4H0vTfdjh0faaX%2Bd6umHEOwriNSYOxlMZbvAw4vUWS4C6Rrn1ouOAZydVLfZ17p&X-Amz-Signature=12421ab27157d6ffd9507d776a5ca2fab912c816746fbdac1f3981f162e565ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
