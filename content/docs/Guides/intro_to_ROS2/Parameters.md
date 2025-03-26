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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F3EGM4S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs0dWZwsgIln4vNYFnvOIEjc7BN%2BXrJLrLU0o2w%2FkddAiEAosKmAnpdbsBa7rC4Xp3X3K8scLF%2B5VCJxOl6WRwncYkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBoi84CgtuJyotkxTyrcA8nrmVCgAMirCdO6kHJq1PBBko%2FCLG5qh%2BfpRmkm3Cidl0RmxBQ95NvcVOraGrJ%2Fs0LU187GHy4vD%2BLbNmJ7cMyDBWtkcFW56DwJMXn3OO%2BUMuK6K%2FTGQBLlfbrHXqF59jf3MhAycwFulgXB3FYmtFf7DMW035Tv23TwJpn%2BCVj9jwKTYt2Zio5Ts3LELvNytH88Rorw8RO%2BgnQqozZiZyJZ4c8tf5y8epGYLEyEh0ij4kuK2RVZD8OQq3gK3gdc3NZ2F%2BrFMpDn%2FEmBYyQp74LRN%2Fxvp9FdZznCuom1s5bhe9wz8iJbYdyTz0aY2xwsyxUAZGt%2Fc4ZLY8DTMpBQjpaUlkYWCn%2Bj5mj9oS8AOZg9%2FSx0WPPrEnYQ3sBPztl6NYP5M%2FT5bcDaBSER5WB07PS3aeLwiMe9C%2Bisfp%2FnHCBQayAOX41%2FVnMQieFYS71ZE6aEeMGv%2FEZQvkbfmsFNpC%2F9bW%2BDdQ%2FK%2Bn2vD4eOEkP%2B4n4UJa%2FwsHdWAb8f6OoNEegaQnXQdgfybFtIZQrRPfpPt6HSz6Y3y0kzvDWXs7v4CnXohagv78P5zUY74JgfDmmbgCcYIPIQT7DZEXDnNoKZpMCKEnz6Z9SNOuLSnykpyuDZjz%2Bohsr%2BXj7PMKK5kL8GOqUBKHx9%2B6EQKKaiA%2BBV3StsinT3rhsV0%2FVbkhKp4Cwf1VEJV7wKtdUTQIcCVquzcJ2dErd8981aLVk%2FTkcE5QoAIRxL35T27nx1s3sqNY97vwtyMND0qzGvuCTOmpdbShRCPvwF2Be%2F%2Fb6GuuQO1VgvcjxnTlwEWeShOuy0C%2FYcsNIhUUhQ0PNpUbeNCvL6B%2FpakCDAlrHcE96hgP7gRHNv0FX5oDJM&X-Amz-Signature=930722d7e3326c336ebd81664a5bee97ee76d4ffa18e4b2fe7289f7d298ac540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
