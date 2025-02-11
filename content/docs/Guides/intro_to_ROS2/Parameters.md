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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5USHCI7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6DaW%2BgJnIlK9moNpPoBh6bAh50tdVAMjutqQqXZFGpAiEAgsg881MBFn1RMZ7HjeOrZW5RW9lRWTUyhApbMD8oHIMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfYFeddc%2BhkGdnGWyrcA5OEJatOWJv%2FzZsphwxDxrDfOoS6mmx8QmBqli2Tal44xdvlT%2FudsaoYK7RNqMezjnR2O4mw3FjHdP%2FRd13OdQVKRYC6fjsk34s5K2ww4xbJYf14%2Fxba2d0V5HlzQ1gfPIsMZAy%2FZbZuMAcYsqaAF3XDUanuvuqHuS0be2FFG6jdOoDJhXNEb93zaZWnCZ4lXMjBWwucQHUqeCHyokUxcyb6IE2XuoRHJUSjCX2qPb1m8nkCDtcdIRF%2FULtQWKI1Be%2F%2BHtVq44PrM11FPrmUMXex7S%2B7VXCOSSAdtfnHtFuDU%2FXqFOOz4gas8VUC74JwZ7udmsrK5SnBIMk5Ophn3TZccZmrvp0s3PYVlTyjbFfqeRBy3esTohW%2BCeLruXX5voSMIC4etQZBrww6PizMoE6Tw2RmrzjivUpxEeAw%2FDKBGe%2FXaL9gIGWZQee7mNcTSsg8XOktZscV1vY9p8PZxrvAGti6FjsKUa85jhML%2B%2FIMB46YP7W7FqNtmGCX3AJx%2Bxa%2BZ%2FjzlTgE5mo%2FIgdeGxU2dv9l0AEyv8IuDgPV60Wrlom90do7LQapirgF1p5ubNS%2FGPv5cX6QVkKtOx8KRm60g3GPyTzlmIDZO3qcwmkyIr45uefYg%2BjSFBPQML3Brb0GOqUBmK4Qa%2FvEn1nlab4yrlU4c4%2BT50pAT%2FiSNYyV%2F%2FNimLRyMr%2FA4XMugFlZ%2BidcaDzlqs4vhCd%2B8cDUpZEh%2Bn2VSFkSsri%2FNmke2Os%2BfaJDlZPfN0WFotVGY07BQpKZxfUSnX%2B%2BtNG4hFwK3Fj38qpS%2B4LGZMQ%2FYpVsRUq8w%2ByllrBXOWwo77DmSaQWtS8BZEBLbjeOKwIBMRU1TI%2Fm0YyaUr1DWqKq&X-Amz-Signature=922c322dcd03bc4f032feb7d0aa17f46165e3feccdddfee489a3ce175421d106&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
