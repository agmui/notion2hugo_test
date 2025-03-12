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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIBX7CJM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDyvTjSOsY%2BAQ8wAa%2F0NW4D0U%2F921aM2K0RseowIMTjJAIgZqCcb8GPVxAA1%2F5E6O8mH%2F%2BnHnbuelM6vCCIl1gMdSQqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKMf9EiCMivUqb%2BHCrcA5N1o%2BjRZ4ZTOol3D1bbDnCFSaLI2gcBi4oAel40MyKu%2F0dYD0x7FoCjMGmIFPBMEBVREdJ0f35cTNDBB4E8hPcEb%2F0jPZWwP%2B1BdRSzVl4X7Jqb9G%2B1a384UUIsR0hoCU1LqGyEmxFYK%2BJNVRmYNq6iNe5gGOmxVNNdJQ02ZEfzFRveB5xr5nECUzTVdOK8WGelN%2FboEKDTM8JE28ERXeA6dc3U3IlHyAY11xb83egtuy4DqCPi8DpVP619Uz5TZdj59dQDc7OqHGnQuPbiwe%2Fb8%2BITQw%2FZ8fNF%2F7o6VrCuUWW7alAV9xM7CcAfFxtqHIle6iTLWVqvWmpH4i9dcaakNOkJNYOaRzQMXhsBiI4gJr6uusimgMlkgf72iQ9XuDOe3ibGT%2Bs4ky%2Bny6kMzhq%2BsH8edkCHY79TI6Mde5Bqzqj7XVISFS2WTAtOvNYQ2E1HSb39CupjvIZ%2F64VfEE6pCO2AkV8gb4Abq0PWpzdadJzeg1XHnZ2yASML%2FwMdpTlt07c3n%2BUdR0zwfyyj%2FUmdNXaffvC2HT2eKpVUhq3vZXUJrrAF7%2BsLKv2cKVfyg64vV9137pEl8DwPuyLdTwNhFN3j9%2BWzJAs15qr8pO7AT40uapO%2BTUC1O5kfMIfgxr4GOqUBUaVKN3KSCoPzejLP3rDEcvhvLlkSpFMuYDuHlflgytAofPVN%2BFsAs2ADv%2BkxUDwlBLgff3up7EDnmrwMbXmpF0H1b%2BbqzT5DU9GI8Gx%2FUrhXjxquLmOLJRA4iMmcJYoPUsNCKiJjRPJwlzT%2B4vCqIAkIPETkprlAXBeBOrPI%2Fngm%2BRhI6UtrrFIRG0meGPmdbmt9UjkTGfJsNYo0syYsOb35tlFc&X-Amz-Signature=d65cf6ba0942ae2f7a1b5eee11f9ff0094eed01f7b19b25c6e7c9878a62b488f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
