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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7AUPLWK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDs8j%2BB1UiJ6Hxw7GpFhm83dC4MNu199%2FYWg3GIIXTF9wIhAPKtxhY345j2S2RY8zwu%2BnaflfXHdjfRkBmFJ3uDJM%2FvKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRWHGIlcATWKD9a5Aq3AOKnSeNmhVCbHh%2Fzjg6zEbIAh%2Bfi84Q7bEDlBh%2FKj4yuC5%2FVUOx7u%2FFN7VExCx3EWVhlLsrrS060gZ2Sde%2BNQzp9EYnG6basCJ8rZwHHy2UFDenGpVEqMcq0V3zXYj693WJ6WtsV8wmkkj8lf%2Fbxu%2FYuxw3duE3ahQZckqQp2a3fJzHqPTG9Ew3fIuJDDhPTEUq9fNVwoypyG1ZOzYnWDEaR12bToHmE9ehQC6dWGvN6DPrwUu9tcAI%2BwvoZFDs75BcGvDejvVxRLvsa2%2FV6SfqhwKtExCnIESmREH%2FA56qx%2FSG8WL9rGFImt853xUl0EE3GyqxIS6KNspaxAu6Ww%2FCKtxRVqMJOlcF1S0zdQgxrxscQwokYLEXITlzoK9SsxnFOHP4WDqihVx4e%2BqxD%2F0ixEMJQa36Dq5WbPXjWdVvi6p2FbL9D3W6ESFhIKCJTsM2ne0ZUy8O5J1dh9OMIf%2BxkUNti9HtjpJaS0HpmsjTwdf43srZHdqHqYZkxNdLt5OTxmhShmadO3jHwyqRYRKQ2UeCQw0TxDWYtgBCM3yd0I42d8Pec77u5c8LJKEnkVGTcOmvj0%2B%2BQfxZ6dkI1Ohz1wt6P%2BGQIERzBr5D7hX6OnsiRHXOSM7Vb7t6HjDB5Ni%2FBjqkAemmjO9ApaQX5ylb5cs%2F%2FS%2BLe9ikiRTjX3x3fYtjoweemt5de5FZJYp3Igqtsn%2FferrxwoAlypWpss6L2qFZYvSRm8F3LLW05q3J0YbolYvr4Kd%2BFKYXukUCX13RViVDAMy0tnfXCwr1CNJCWnlaalCvESdO1TmA82JxlLV2%2F3BXGFDREbeudAKFq3qFrMPgRwYTTWttTAxmrGKfCjRn9hERgovB&X-Amz-Signature=7e182f1d362d92e2e314c005ec805c54e6f5840457fd0ddf6a2be50a331c0b83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
