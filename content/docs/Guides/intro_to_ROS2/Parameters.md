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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VBD6ET%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYdJpvVvVFm0ZbWeD50lgphyjB6ierB%2FGb06smLBQPxQIgMaUm0L6WAaY0b9hOJmY8lmlMWpNEv5A1bqSNAXPr%2F9Yq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDGn2HlwjpfogYHdsqSrcA1pdrRoBwMo0LcSGB3In%2F6TYeURsrdOeS43k3SxHI2nZZAaqtgOPbktvEqgnmnog38pf63Ivi9aaU0mj3i%2B545OjSo2J6F335lbOjaPMw9bXs3U9sDYHr0do4cQ71CAE0%2BpM%2FCbHuJmkhIQ44HJ3RyHDNrSkidvLj9W2Fpw63SnjyT0wpAqPVbVBhAtEDvH0%2FDWTXUiXj2vwr%2BI4PtQmtk%2F%2FrbAb%2Bhnh%2Fg4AxAabQeRgL85nwvdAVkBa2mHQk3fyPHhff2qTk3jrit3NHvzoBbC%2BxT8SH8BzgkKQ6l7LMzJ63wpW55Q04WzY1uk6zNn%2B0Zqj%2FUJxNzkjaMGIhbmcyudBuWMSquEsfFtB%2B7x%2FFCncNSfVGxRi2GZ20%2FreyuNe9apM%2Bj7UhlHhsB0xh%2FBeeD%2BbabCygqQR0rOXODyIFG31n9sM7P507Xhbt1R%2FxO4M6%2BFfM5PybLo2BWrOOL6IKZu5eQOYuBHcsc7b2gy0joyvEpQTy0Xiurirg4gWcvQrZknQjfuku09p2CJDqgXDknjOioLHY7S3oK%2FUzrG7CwrZwfcALYEkw5QNADdvBBjX4ux7OSdDuLrAmn5yRKi8Qakk79zjh3n8IXmhaiwDFTdOIdmawjgVconc0x79MPTh1L4GOqUBSg7%2Br2JCHX3aZ6KZB1F4KkjhpK%2BNGWC14%2FNgSTJER74DahiO5jdHAc43f9VU3vIXGBtFeM%2Bo6Ah3qFd7hW4uWlAODnT4Vln73xH0%2Bf24r9PMG4Q53eB0pUcprIVK8Ec%2BOgvsrgc21hPQPi3t98ejDCc94Z9genmUL5i1n%2Fim7lvqVACvdMu6M2tmrNpEDva%2Fem2Fed2Kxd0dvZ2eFCvxIJHiH1bm&X-Amz-Signature=2e58bdec220f9d66c44e442ca1c2ab2bb7abdc4167a143720958e5422aeb5e38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
