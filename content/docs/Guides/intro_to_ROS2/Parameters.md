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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXS7LUR3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDj4ptheGFaO8gnr%2BBRgqiUch4Oyd%2B8sJFQAtCjT5VZbgIgMrrQkQUIaUsWxfnN7b253ydfr2I9oGtotDq98Fzkkf0qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSypsh%2Basn8LBN5circA%2Bf16nFzXQ0nde5l0sKhnWtW%2FULwCJ56EaoCVGfeaTsRk370rliph0rK2O1vFsdObFJ91wS%2BxsgX%2FedRtW1D0Zs2rGkwNzg2oDWpzM0WjrmP3Zkl9kH43T5Jaair7ZGrFTYU2C6t07qcmHVhM8atd4mY8B%2BP1bc3yHrWFtra0vMxyfG%2F%2FH%2F9OjYDpJJJbJfg%2BeiK%2BywmrOvaU8m9FpBbMk0Q1y%2FsbfywAJO91suWJKdu9sJazIvaMSxtQl2QU5w5giDsVAWvysiHrzLgOklhLzzyy7NZzzs%2FGtCEfGKowt%2BYaJx9izgU9zn9%2BxlOaiLn5%2FJpfK9zvNmkDP0yQZF2TzRjZEDmXBb5c1dLE%2BL%2Fg4zsFlenaCWWbkmCpKUxJL34n487juqGHvks9e39ICMCOT5Xyw5WuBNFCBNbmUUHvRoLGlCAtokXFB8Ra0taNrmrBiGGS4lHePCq631XPfXzTpKvuOEQE1%2BMk52%2F7z%2ForVaTAW%2BiQ9nm0YPbD4mjoUeuB3csSw6hlc%2F8F3TigPq0sbYHdOxkX9%2F47dIX%2FO%2BwiJM1gSUN8a1%2FUmGF2yXt%2FdPykNCv2B8TsFyzIWuw%2BAj6W0daqP%2BWIz3jvMb2G3lHulE21mSmm%2B8t9PQH%2FOmUMNe1s78GOqUBVgrrnYUDPF%2BGD3sDw4GLYIk63q0WgVSelNsLXWiWwDpOoMas%2FypFiVtt6%2FVnN23B0%2FBSPxeCTuBdrN1WHQqoqa%2BnOirFeG7tV47JXPX62zHuaACFW8MEw2NQcXDdfyCUspiqPnboggIBO%2FNTNwdAKMvibIWfcEgdTP23xSUz%2BGgvfYLmZ3HW2l5Sp7eoE72L%2BAE8mSTiSHLqgteFG%2F87yujv4wS8&X-Amz-Signature=a94b1f81ac08c2fd3f5d3653e0c209ebb2b36f6807f92e0ece997a5e9671a3fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
