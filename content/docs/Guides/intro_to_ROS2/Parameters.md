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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ2RZFPU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyFUPeluRk6YvJjtKib6Q6CJkkgIFYdOoOEvr60sa06wIgTt8h9DlXwZmOgSpnPBu1WGAIXyFL8fd7ChVUEg0QVTMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNhrSNjagR2u32JzdCrcAydvK%2FW%2BKad4E6be7r0k84H6RhBSrDE2fGD3wepqBbrif7cUc%2F%2BxXHwJy9MlxoqDCrdYuNEaEiPlEZLclgBwrHj5L2JgqmtLXmPhuZEQyTW6q%2FzD%2FmPMOAPqwtt2R8UWs1ZZADzZAqEzY%2BBMdG8Jyj0vZScyTHxtgxA8cxrmCSpdbNfEEJQwLClEhXmcnRUVjmbyrm8KI%2FCdor0MTnF3H0xKGqLZyCOuD1ByWP6%2BmvVpBGiJ3dxdo3kIq2%2FLmqWx0ynAD1rZdBOqyj81sXZIuwwwWi4TWL%2FyuO52fj34iON5jPq6s95%2FgA7B%2BSiThnC9jZbdBXSZQ%2B%2B0Hkxrt2vpQ8DfSNma7wqnbJn3CcWvBOw%2FhY49YGA2Qq7e80%2FWgEwokApL0b0KFqgYJazqaoH4APJZ1FkZOP6eYekF1i6XoKtL2AidLw8AXeEKbhAYom6BOq5Yr%2BEcx5Px7K3PHKYoxAqz7iOWoFNettJ2X9O6XNicBDVpDKDfBVHP7SYX5zNMwE35WXDD8wrf%2FWCno6yfnQJTN6rcN%2Bxe8DBgX7EJTdPXCiYxEg8lGsRuVPxGMuCRhEjuDNBXL8gMhyAPmjjjoDgzhHbTBllYI9rI6xL6rld8gV2PcQGPqC5RnamdMNvl88AGOqUBvbUhjZsa%2BmN33%2FKf4wElAOf5vkosDn2iezJC6Pus0EB8qnGykckyVesFb67HuBlnl2idTXcbWEivOnnf%2F1rnKOm0WaOWY%2FLsUiXWuGeMvPqlcGgXlzWvYr%2Fz%2BmGGaByoKavm9OqkVy%2BMBA2CXmcv1boPze7Re2qo%2BcBJ2yO%2B3jAM%2FVmAlQI8JWEP2MErYk0xozx4FkjWG17C98iGlQ22QOr9MEhG&X-Amz-Signature=a3cb6568f90775ffbabf3bbdcab79faefb767108010aca181a9c1135d891ee5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
