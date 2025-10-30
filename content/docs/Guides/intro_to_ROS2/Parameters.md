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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SFTQ2H6%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQC17NckoeJHIjjOQ%2FsCTKWd8Knnn%2B64LrRfTsw%2FNtIC0wIgSJJyf5FADH%2F5qXNHrNHvl4NFRXyu04NTHySwAxHh9hgqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B50TKhX54f%2BXb5oSrcA%2B%2FnbsY3ddTlX8WQGzFbrKjb8gdpsiLr7WzVtn2jIQlqyvuVnqmIozb2e79XeHIyKLUs%2FLsowRbqWS2YnrgtzEbHQXxzRyzXvdf%2Fre%2FrYr6Lrwu2euB%2Bj9nlqJdm9tILRpfq%2Bt%2FyuJI7xfa6OgtpQzR80aAbpBi3DslrPkA6G%2FXd0725DVdPTys8ECu8lJ0LDy39fJRYxjIiJAJ%2BnFI5%2BVIKTljLpFXi29%2Bt8M63FDTBCFpx86d6A7Oq45EFK5%2FOLhp3BO5jMmYF3HnTDfhTxjg%2BT265Xmzg4QZkKFA%2Fk5JUiVfy%2BT7dCJOsege6f%2BRlJKfuB%2FiwAmPs4KbSWEyJsH8rKPw1fGdQcQ8Z4gHsU9QUlsmgqNwL3sg6kcsGbHgk%2BGoviksd%2FQxdpHwyiR92XkIfZ7i70z4agn%2F%2Ft2GUatikwrYpwkR1Tm1cfZEaLxTXgKIUNAY%2B2AqvdEgU9Od7bj1IHwwZ5hl0regdjqMLJBZ1LcZlCnY8tO%2FRqt7UBz2F90Q%2B%2Fge8PGhXqZYUoB7qqZ0DRVV01AnhXt7iAysDb%2FOVlS2EmP%2F2poVjU8pOUPphGUe5h85uxCcXDGk0T8oorfVRZf2magxbOODAPBjA0l4oEb87CJUZBKaTrUzLMIb2isgGOqUBb1ErKYCtThpF2rg7WIQ00%2FNnvtSJREVIhsOxEDJ0KzTHvkX%2BC%2FhzyzFXuyZhdP5mI7ILggA1aJ8lK7v6FYUhWB6d%2BQZ3hSAj1LOXQJk5gIoPZUV%2F6q5RkEPJp7FIG7ySbk%2FI3vJ%2BExnhpzQSDve8gGyGAEWcfz3wP%2Fvu2d%2BRxhcFf2fD9ylyr1roh9MH1V1FBd%2FrUXXoMuxlKP67u5bmOeMjVklz&X-Amz-Signature=965a33221faa663dd0e56cc49cb4dabe9758766db063dbd94dd3548f6279b41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
