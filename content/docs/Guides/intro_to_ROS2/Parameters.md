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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTM4A72Y%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvyCVP9y9p08R98ztUWaiZz0tMZxJiqxfbpZCBvS3LGAiAUQRvyEBUrIBDA%2F06raQImvIKcBWh3KBSFxYOUzO23pSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJP9Hl9hrprnaAMm0KtwD9r9DhaBjW9v2Mr1Ij0Wn75y5gjNZe1Zelnz27uTBCB%2FE8O7x6TPnUPglCaRti0%2BPAAsX6uSmUx0OrNfgeymO0HalT7KjspF4z63jeLuE6pdkL9yloeO4R5D3CyJh0f0Gx2eQpfIltvoguFEaVBsH7I79jPHGaasmP7EvWghnc74MKL6%2FY9xIeZB6%2Bb4suz4SgjbLw3YqWOnK72YwEs0gcFlBA3d7hBZZ0spnrtGaRdWovvQC2U5LbQuDp77emMUfA7I4cJS2OrkQiaa15sSQ%2Btd6Bin5ELaQV8q1x8lRNTaoa4oe3EsMZsMZSBmlms1TaaJ5IIHgju7KFa%2BcNgOjgdJXhJyOS%2BCkt3xyp9I7RTbwR6WQvU%2BWvsaxFRwuCy3Am0txICqL6kTtNQGH%2Fxgca0djNk5jv4eLbTON1ctYfOygfqUppw4x%2FuGpaG%2F2aozhrfRMACUnxt15byd%2FtTpH27jq9D7chlLvZIMX9pLE0l3rsVHyBXvAxxVBheuxpflNOV%2Fvuxq3q2ayy2C0mrnvoxqJZ3mJ79zL74aPWfSd8TGMWDuhbWruynjouM3nLf8%2BDpGTzuF0ulqF6SqsWj60tr2vdDBWjC4Rif1IK%2B1E8Lyg3rdvYP%2FEeyy4%2FBYwiMqTvgY6pgHZ2UAbbMe80xe6l9AZ%2FUnN2%2FRe6ysxCCa04dYDuOkZjWenNZ%2Ba7MgNrcI8j1G%2BlRnWQbik7KswklwZ0alxg9uLGrvcwXVJA6BezowkXJLHdtDSHUbZ9%2BRCSR4Ovnnbq3eGfDbD862GhHsCVsrQxKc%2FmiXFd6JVuUQwxfIyOqzyvBrdOuIOMX%2BUmtLHIa6BCt90Bqj7o084D7kSeiAVc2WyyBIlv9Qp&X-Amz-Signature=53805a6709f5ff9799776427853ceef0e1e93e923a9191a28a263dc1d767e12c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
