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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOBZZOS7%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArOS0ixMPJL2P1qY%2BzhOAU3yecv6NM7L8fs8UMO3aonAiEA%2FQxz9Ij2%2FglYLeZ611bcO9PIhAWFaeJ0Gv7%2FAkPclSkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHio5QHgJCfjhRC99ircA7a2WZSFB2eSxEnkODpXnI27ZjktfyfpsU8RCJEu%2BT3%2FF9xyPbwRI9qP1LtyeNLhtwGGTt0zk%2BNqFs8BhHg%2F09zJ0%2Be8zmPpcVXaJfy214F1W%2BqxMNqrorHzNCjLbsLXMfif7XFdJLIhV%2Fi8iA4nFyNRQyozo6jHdLtNs%2FmhJpyKRimnO3KWGO2TkgkZs0Oqx0jdtTRy151IGN%2FW%2BO53JJlbyknwluQyN%2BKvPiPIAuy%2FX%2BcWVnQdy%2FqO%2BVOkktIp6nlI3PJK0jytC4ilcj4CdLG3laLUATXKWV5mrFT84TO36r8gm66gDfTWsDmDywrIcb3WwVneSdrCf6B50mENWr%2B0GKavajdJwMRZUsSMk%2FEUNLwa3Hw9Vh5KuJIC%2FMYfWlmky%2FjOS4o34FHx5btscMtnLFsM6ZxNdYmSE1dUacYqT5CGn8bSnQWmpQX%2BxqD%2B6msQ8kFcbKN0RqQEJmCGTb%2Fzvp8YRcGKv1vqCE28SLOcGeGX3zkqRJsRaK7n5XDYI3zd0op%2Fvg1iBNQ6b%2FL9%2Fr31FaZjWZYpUFnfLOXsoxBL1WDwqtIJt%2B6EPAi7S13O6efooXeqpzRUw%2BIhN7we91E5xj7OUHaBZyHf0K6INVHvT6y1nKXKt3L%2FkqKVMJL98r0GOqUBMs19quyVe4oya8g4fYWsedwgjkrtl1sHww2YUJMotBAGjPHWRF%2FgxFeGlR3%2BA%2B9B027RZbamNAznKOqwsC2SI8zAj7AQ1NwMTY1avTxu3G5jVAWvqKQ%2B2hT2xOqFtv8InN8JFbezKgx2oJSmz%2F82ejJdoCftYhbd3o%2BQYmigNUHToPTBEIGyR%2Bp4qbDbbKflVRBDs9CB1NztoOesQ1MH099zf3bE&X-Amz-Signature=78974a3d6f7fd98f31a33b323a1cb3b26c99eceba1c92c4136199d1f52527a94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
