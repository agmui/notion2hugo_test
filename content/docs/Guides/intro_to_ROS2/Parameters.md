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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFWL7JUX%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T140916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGm6h603g3wSPsAMEX9aIUHFpmtG2k4IpBp5%2FCmgFWNfAiEA8%2BiEMdqJRoOKzr7%2BmGYjnrD6uKFv2nq%2FX86DFq26ZBoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQKYj2Y7%2FqliiidByrcA6tn7Gltvtzcw3i3vIwpGCdBnqY9yyHJnoQYMWYmlEiyGAdMweKtjlTLeF3N%2BcmcD4FawzxEhyY69o5N6o%2FhBOT3rAkGShB1wIpESKb3fxg8jcviM2qnotwJcP%2FKewxz98sDN7kavaf2WlB9S3KdEMyVt9BHV3fKlUUO%2BCNm5ReGS83n7ivSZto8skh7bMgjoguAqOn8ySo30Ik5DcUEr2bocbQ0277CNEShvMty386mA6ONI1sNIaY3VIUx5QJIR9KtSGAMigJIXpcOcrI8wGoRSpk%2Bbf0qdkf7JtGruVGsDJd1%2BAFUHCjE0zAa98vJqjkV8Tf3YZ%2BudJlGqhpL3Ue%2F%2BIJygz4sCssrrAjLe4rGQ8lYzDtePI7wMdjw2SWlCbJrO8osbblQqGtw0G%2FZzgWjIR4ldmeXBeUB6mLIvCqte3eyOSt69KXA5cDRBt2%2BZCmmXZNXJ3ImbpPiMNSNpZowprt1x%2FH0ky4Hhip%2BmTRrLJiEuLagGlFYCq9f%2F4tO6czyqwX3nR3YDSU9Wczwn5bCxhRBj8%2BE5f1TsFcgbOBxpsiGalORnJKGNANV1Ud1NhA3134Qt8R4%2B2Rpgs9Q%2BHncAtN7nnuTOVn0Pq%2BA%2FGCIyqVh7yHSar34jKrpMOWXssEGOqUBSZ25BNlJAyCeFXhzby6kFuFVsUnWqwSJoh%2Bav91DCQeS%2FhnCwgFDtmQLERld5tUz35ZwYveyiQh%2FxfzMwiU8g3O9pKlfAqQMljZrWfZrKPigy3NJM7FBFDE2qn3KSjrrByRdKsM0ycvVc47fZ3NB2teqawY65J0Ir7VllHdzr7otlr10ETcxdkQOtwJ5eHROWf6asOfxj3dCoX5tHsZmlww%2Fcn%2Bf&X-Amz-Signature=5cbc9ae549f6443d8aff9a8141ffd2f7a3abad873e699edae4ac7b3820b853ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
