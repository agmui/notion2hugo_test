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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UJ5GI7N%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwxBiT9GmO7a1%2FBsG598HrYi344V26YQ9B61OiZq3SSAiBemif%2FCzpeKrMz1RXFpbT%2F8hLl6tqwfDo9O6RGH9f6TCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyUU9m1pCtoJJa3aKtwDut8FUBGpmRDUeY%2Fv1PInkKikJvrExcU9GheOGVUX9llG0BYPLFvuosay2nIE6BV%2F6GuZd9%2BEhYMU1lsyqq59ImqZJmgWkEVBjrZQsWZuOAG90QHuCUYF4y9gewu2nBmHLEemjR5gEydKro1LJEaZyG2FkDm%2BkkoyngcAlLmtNEi9zV6h8kgP0XSzYQB%2Fg5H40FSBb4A5062nMDQc6HKSy%2BE%2B57g8Voy181d4EwBmgtrD2WIUs0fnXrLrkHoyZNbgzS4TCrDX%2F45w5iwTRHb5ZnVu%2FxNy3pBnOVi70jpO1tJW5GxPQaLvpXap0pYB25ncgkhuq1HWTyv%2FGY%2Bv2GpE%2Bo8wlTSJwq6OMJI2RK3tLQid7nK0bUnvGOM0AdbhXUShKPbqJcb6%2BPCYEuCdLhh216lM%2BOKvAQcAYBgLCtra1VssKP%2F0zgkZL5E4%2BA2GV%2BqaRwxHS38kD0DXAyycvBM8kGQWT6YJl5gGpHr7JVlzkNw9LIMyk1aSE3OAJMWw9g756M7XrUAp1skzioVCSvxMJtXNGzNClb7sF2t%2FGFvExPo%2Bgv9TfAH9wiBPKv9idIoQ4%2B07mmhutzf9hAQGs9ZIl2QkbQpZ%2B2LbICQB%2Fnc2EmkRv8%2FPkfZNK5UEnWMwm%2BjezAY6pgEPACFAeVVsGJD8KsLx%2FLg3Y06qWDYH4h%2FtGa2DRfFCOQ9wmjQNc%2FRlGoP0xc1cMYEi4tDF4q5FUE7HJz3%2BwlXd9nnxrfrQY4bK1%2BfCtahwU8exa3W3jn9aHpnzbbxKBelEwm2z2Dp9yp1jiOIGw911EU5hjwSZxUqK8%2Fa4QWHeuoCiAqKuBQbHZufU6cZ8gdxa1SlWJKDJbVFEV1mBWPERnbTN9UAa&X-Amz-Signature=4c0eed709b0107a2166d3a30bf98e11ab05994c92f5af0b1d1aab5e87c3df675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
