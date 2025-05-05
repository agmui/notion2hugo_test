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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OFU27ZH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkf7D1t8KfExlOrYCZTr%2FOv%2B2vjVfu%2FlLLs77QVpGtZAiBd3E7cFc11xjqCms9eZTtr1MT00O%2Fwkvf4oy%2Bj6tWKoSr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2BcLtMZvvddB%2FryYuKtwDohEDHeF05MJoum2D6CMGAQ%2Fff21tcJny%2Bq98ooiTpxO4cap8p2XiqJz347qJMDHFTYQfeNBScGtNqjI3ql%2FVbIueI5Al4ZN%2ByntnoNYWwB8WefLcDWXOC5yVKt3xD9%2BtiRBjlesp3YC%2BmdmMXOp32LxeoxpJkzL5AXM86cXuqvqHuw0i4JZlKIDgzlcxo%2F2AMYwWntOti2wzI52uvDW02u75wUwXpZdU1wcS0b6R9bj%2BdJYvJqPcykjIb5a0vawV1%2F%2BfkvFsOFiFA4kGTk3vucTOcY5bOx7q%2BcTYRnvke1dyK3OY%2BLAy60PRF3GsE0ERyF1umubBr9o%2B0qAfAzQAXHpxdCdcyQ2QNbMNofeU%2BSvrLQecYHltLXtaYAmeqdaX6ofFG3gOv1WkkfGndUJPfw%2BZxVZsGDylrzWHuDFlNll1p7sW32tVTo%2BuYDJgli5rP6eLhW%2BrtB93RazIWf0k6GMhPGsiO2CoIHpzsWy5zX1pZK5UDpjW3mR8PSiesGnJHLqpz6Sdm4KZKAp2nLfR9INUpz1jCAPw0o7Ga89veBHN0Cfm2ACsoz8p01KbJzOmnA2bu0%2FB8%2FnLCS4WjUBfZ6pp2FY75z6M4FxluPItL3ZL%2BNoE0mlMyFr9ABgwr9HhwAY6pgGP%2F0lPRQ3vvDzuPvemTqGRXTfGwGnNOPBD3H%2B%2BexJTFDrfAltll4laUBoA8SY63Nph31tfMMhNRYtacDkWAtpgoB6K6HR1FBHiNuyHD4txsd0QbVtf7LvPkoW3o9%2FIDbp92F%2BeHlDlKZxBCRpI5LXdw6Fgj6Zch04aECRCftv%2F%2BvanbDH3KSP4E3EBJMIqcUuFAnlXXxxjV%2BD7ibYLpJpJFylVs3P6&X-Amz-Signature=452c1b428476f9f9eaf8c7ff845b582edf448923f75dacbadd64f905b71b9304&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
