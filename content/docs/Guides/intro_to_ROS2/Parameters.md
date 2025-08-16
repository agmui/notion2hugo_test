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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QCSPO4T%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDhAq2wiIAVzq0MqY5atpLkN3dzn2j%2Fo4n9Sf%2BaygDq0QIgJ3sVRAjzC%2BEgT1uZqichk11bWDOeXibD3T9WmeaSj34q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCzo9PeefBvLMZGI4SrcAy0SPV21AS5j9SP2xteJvpzuDt5PH0J3FXdXf1yjMelbcX1i7XDLuxSMkc%2F6jkDAXlBNjdsgR7sUS31B3z3PrdPLVP04WaxND2HNyw2Ys34QIwe4Gfl9VBJnl4d8%2Fmi0gbB7ErXBBIOSeuabxUvnJLDd84VSiPtaC1WUnYp6nBZcGxPOi7vGvsVYmdC9oM7eLiYyV3mMC4odggp2MT62gm5GGHdt5y8c%2BzLFBgG928d%2BYvyxSiTEAHm3nwFqNkgd4fk1gPztE%2B7TWCnzB0ZKVsAio1j6LiQJl7bLqNfI%2B6S1yOeVZN94mUGjHyZzaio%2Bq2OpqyRgNvTgmhDFzM3Cw2cuFzj7fP1vFMjf86rzfi7dP1isvVS%2BY2z972Se9Ot2RImP9%2BOAwviewqEWWhSGegl5Ik3yavZKBpAgPN0dFUqA166im8aSWuASVhMLBKHO1Y8YudLcahnHAtOQJBAb9kq%2FDgUvhdjCuZCDT7FnUmiuLxhLB%2Fz3Fo1C3BUJM6sQUE2OkUE4fCVGYY5ktr%2B509EU4UzJ3D0mAZ6X6vjZim6KtF%2FyazgBf6GDsxzJp0%2BHVQ4SpltOhPEpcgH31Gf5kURA3cSI4R2D14LAf1qeS1Y1FZz4VlEgSD7MgaSLMLOYgsUGOqUBkZowJwC5aaHrxirS3TiSl9rgCF40ZGluaqNpQhcklo3NPA4E09KT93LDbudUcJtT5YP5LS6zsMAECnCmSxcB%2B9N8WVL8CSMntIHAuANoShve5lQAkNaBORGEPUnV%2BVg9s5pl1Afr%2F7LHlEJy7zoRi%2FPKRnE6ZsKorFoi9Mk%2BQVXIbgmcAKrrf3qMOq9KD2Xu8w2NP85D1a%2BSZrv2kmz2TIDcAttl&X-Amz-Signature=baee517cb8720614f686c477a7cc257191052c09ae50e59ef1f8586a19de0df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
