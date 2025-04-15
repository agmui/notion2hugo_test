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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667777NKBP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0dnQShY6A4krjqcyiHK3s1cIXyy68NQ2zF%2B98MvTt2AiEAjfPm8KPtWb9AbwHS5DyV3bKKN%2F80mXsAWTgw4Nb7yPsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD8o%2BSd%2FAPgL2vfDaCrcA1Imgwge8991jXnRKOTZbTBInowGVfxiyzRddchdQ%2BmkEAbMpHtgvRzNvP6D%2B19TAV7ov%2FxsS0lzb60b2yF%2BOtD38DevcU%2FwBQmIXY8XsOQQIvhrhUHBcvixqNH1nUM%2B3xJ%2FFxNk9m0sp8MFdzf2kL5FSeNNjfhpPRXAwFl9EOp3ljQ4Ui0hmIsetArhjKSroNNZPjueLBzvTT%2BQHKp4EMgQq0lgNq9sltLn25NuHReYKIrq2cjRESayoG%2F6Mv1MTdQ%2F0Z03qDdraaiaakZwyxOIeEgkJc%2BunM3eWj6tS%2BZPTazuHNz7FR9LIm8avVa5ZGZDoAi97iNopBRMYRateHIbQSIwTwkBUAvDQBsEOtcYTy9WKYUvqxWS5XIl7TB6cudx%2B4RupLVtRZAlcULBbbGzR10pBA7xp0Wi9vbEsSdadC6zcVLyftMzKOu0v2uiRKW1rQE3vrX8RtkNnN6iCI1Blr8wN5%2FhQEcPdYBDMAhVePxofwPSOCoOPRWC59WHFK18F4OMR3TUI8J1ynifnkyU6GTh9I10yqYUPkFw41BcCsjcuZLIEfm%2BqTa57XGgX96s9%2BD%2FfcMhCEwlfa3Zhnpnw4LDz5W7DGicfP%2FVh2y7R%2FhQXMuc%2BYjWpdW1MNaE%2Br8GOqUB0rZ3HegVB3mgiA0pF3v%2BQhDYfpLegSwt4fCOQL1ycQSsb8fuaGT9y9HCvuqVmIgpED66aWkkFdCf0PWkm2mCuM5VqbA9Ehe6V35wz4YIO7yelh0Ae4r9dudtaFxeeN6maMk1LJ0lq27L4tzcmQlATINfNTTzuILXp2ko1mBYVBvIB6qkYTqFA%2FQT1ot5%2FIzom5ZoFPSq15glzxEltedYQ83oz5rQ&X-Amz-Signature=070d38bc4b89c849afdd16ff2b1cbfe1809932543df85bf7610e97a96a32aa79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
