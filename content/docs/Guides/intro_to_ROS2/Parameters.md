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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2SU2EW%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCke8sO9TVf%2FKtYGpD7vQiAp5M7C9rPNkPnkEC%2Fnc1GJwIgKamXdNSg%2B0WvJQGK6pdg57yshToISj3cvfzxDRZvYkUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIABSdAXjN%2FlhZR32SrcA8%2FUdCM%2BW0aVSFmZkGNfIOggUzv3%2F3e8VymEqkCxtHA8eFzRQ%2FD3Y%2Fde0f9TN94R%2FH3m8DBoTWl1BmgSZO5fY8T%2Frqu6CSCxCcoINBuQWwtqXapI9bgyJmrtgcWoq9H5Si4Z8d8gdKxRszhdgCRede9UczjbhjEiUd%2FRvTNkWIF6zA9mGgws4JLozJnknKXegl1aPBT47p%2BVj87bsuxZNhsVusap7ebhSCT8i%2F6uTE5TNIKh8Sn1%2FAwo7QtS2x%2Fgr%2BOil9yydSxotRkl1pVJeLNXkC%2Fv1LwWA8Ypb7JJWSLBJTJEQ6KnGxsf7nU44t4DjRwQhVvGYwPcqibMM18R%2FdI%2BKBDnyMOqAXnCafKEAUClaaAOM%2BmXoocrMa1pzdluDg18b27a0khwmNOrWBQ%2BCMzkTxynMt58uMiGKTRmfSHt1CEGSa62Fful1N5NebGGUIUv3xieMrtUS945BwAvEwiDiRKgfRCgnmF%2FRQWPL1PJuGC3UNY4niRGmle1Ox%2BCVoNXupFibH1E4oBmLsuSr19wyx4G5MR%2FG759n%2FRw9liN%2BlQD3Be4xgUs8DnulPZ8F4lWxOZINJc%2FbXpiiBE9ei0zUpJ%2B3%2FH3F3aAPlhU6Rttdk%2F4cIVag6KtvMaiMKGQnsEGOqUBRphcSg8kEq0CGWs8joUWvCD%2BgRO%2FiGt8bihtqA8NDf%2BrJ1PeC1n%2BN5ufhNJ18vBdI7qS1%2Byx8uiGw2%2FYw%2Brge9wphhq7bxrRobaTv7Tuo43PQQ1zBtc5Sl7huizHv5JPD6FUrmG0A7X%2Fz%2FOQrMWEU7vysmjVtQ4iub4GnM4yOJkXTnOOJDJNWDa54u4WBEobHtGLWFBY9TzoSqnpiLdIPOOfGKnv&X-Amz-Signature=02adb164ee76994eefb84c87f5fad2c5e29e573e67e0037c9738b00dae43bdde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
