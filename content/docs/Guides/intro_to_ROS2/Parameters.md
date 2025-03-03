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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFXPRLFS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe8959xg7JntbM60N%2FZ%2Fvl3avfnsA9%2FqMSbYqQV9HtBgIgFoFYvam0Clnk6K5gf%2FulpcgMd1pJp%2BH7yW7Ij6Jq8%2FYqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESqH%2FOKGQyJdq2lmircAwWitGm3D8RLAmwM2T6k7FP5P8lgqP0elOoTesM4JujVCo%2FgqZIcgUSxQPS2DB%2BVGGUjX6W1illh%2FopA6f9wnaR279d%2FRM4%2B82V%2BFpyMnRRwZO1eSLdO6WzL0p8UTInSnk%2F6Xz9B%2B98JIQlkVkP6sneNN2cCeOPLEcQcBCbm8oOqByDdGOzcwKcPrpRE4ZmlNMnAB8OCWju2ymLaO2vJ%2FtoR4LOCy7%2F0mO6OzFy2Md7GLUWeRkmRvgjCrIVKZ7pmijyj6Ngg22LGpNebSKa1dmOjEpyfIFNlCSJKRRtuL4Bd82ViyYy7%2FP%2BZgTlTpXNZqzcdjeU083DiMK3094Ed7mQsDQhzCRcTlOxmWCaITFpN3l4hchUjkY%2BkUIY2WtfjMTJp87L10S%2BABaqLpwzJI9H4E7kXeUMM8eKEqZzqAEbNHOu9%2FkWcgZu29llMedvpkwuHl2daoERlfcKWq7aKTJoNV4fYBmHF%2BLfoXnpQggqGNngLilcrf2N6yjtjgWoDLMnYharuvA%2FxIm3pzp7jdq2ssRc1pgPOYh9nPS7dDqAMF3%2F%2BdMuqwstP4Md2bEIOX%2FzzJG8gerGRLk%2FsWiCebNq7zA1qMv8mc0LBBd4jIwAABdvoadOUfqPzPrjvMO2clr4GOqUBaZQc2rR62RzV6m2wKsANnTGMd%2BrFlziu4W9348UJLrRRj%2BVoyXt7Jv71OCWmku56OBrznRReKyHlp4Evpa%2FWsdfHM5kKpNXeH5C6j8KGgxq5EeFOE5nLT8mnH2VmeO%2B35fVhkd4ugf%2BtYOOtFctyU8M7ro5t766XSyDNRyYFgbqED%2BTgVAEk6mcdQh7d1C6Xz%2FCBQu0P0ztKl9mC4SSfp1W2a7R0&X-Amz-Signature=7c1a41c06c4cea9c8dfafe95d44dfd411d8bf9637ff5f56be51ea0d9ebec81d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
