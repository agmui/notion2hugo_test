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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCB73DX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDXBEYdq0RCrodwZjwBVvh1p9byuqYg9f%2B4hoBUH%2FuXtAIgcsNlOipxWgrSjR1csjbmu7k%2BArhlhED1%2BAPgue84B%2Boq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDFr8suDLYsRMtevCXSrcAz%2Fw%2FbC9EljFhlFyD%2F%2FR8%2BamJS316RZjmE7o0PDBf4BnL1AOuxHK18RjhXP9TWklYqXQTT%2BydanAEt6hSV6w13pUZnVDSZAISX%2FvwhQdipR34Bm5iWzZbQzT0TZOCq%2B%2FvrLT3%2BGiUuOxZvItfxp5SCJt8%2FwaJKmPKlYdhzgPbASS3OQ6nVbNzzn4sWyh7jfGEBY2GBx2DGXXRAudKeY43AAGYhzsd8sx9y6MiFFUauRdVvxFWyVdfWTGQ4b5WwG%2FEIUAcGKMM00EJGDgwHxlviNzGk1EKdcYpoDDO6phc4AtemtvqkvwVHWUcRqre82qD1mof3F71xj63EoEJRwB3i9NbKLhZi5sKCD3OwWi9oRz064Y%2Fa7jpE9NvEsJccNzA9daoGpvSj7tkiSsKexNbmS3ZDYX0bi9wS6zSnKAx7aMEwrkG8WVSgVvC3oNuBSOuiiR14VFLEuHZKGzdl9oVFmtzavAlB3aN0PFCVJTI6t7Uk%2F1%2Foj0ZMzvI41x%2FeiOXwW3FGYL4RHK6ZnhCAWgTpvKcPyDriALup6fngANWbyAVHOL1Bbmmc4C%2FFqJsNPSWmYuAo7Y52XGwo7xrsPqykBpdqxqG3z3sALjy0pg%2FkCee%2BUgG6w1UKZDfdk5MOWDyMQGOqUBvmg8U%2B6LZqpTExaZ%2BCXus3Vupb5TpXQ0F2RpVYFWotwlVpg1kJFr2rdbYgzbPIKAwIzz21Njqpnh6aDBD5BIj2Ez6L0%2FguRyWTHURguJJKY%2FTZ%2F19v7MYx%2BcvtSAx30RsokVvd4FmoXEWJX4r0qi9orinmmo%2BIbFN0O0ZHcR5tb7fzxmbkMXISz%2FbHw1ZdSMXCRL%2FWaNGqCOARPePXbIVWT6T3xY&X-Amz-Signature=c75f744b13aaab5622e4cd0c89ef87db59dfcfb6ec9cd4bfd5a389c4466cf849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
