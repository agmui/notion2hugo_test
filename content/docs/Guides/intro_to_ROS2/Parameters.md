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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TMVUOBK%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC%2FNxddAaRvAzCNFJsw2oE9osR%2F79jiO2vtETn2etNPBQIhAOOCbdhRoxl1HZrtK6wu0266RSOsOzoLbz6%2BuzMGFFe4KogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIZakDmJIuozeR1vEq3APFea6mDudzPdP2NiqZg4Lk41CT3daa0U%2BGsO6l57XjBF1h5SDis3QUrutxlf%2B%2FmZKa8N%2BE2wOip0zBkrheuvL%2F578hvPkHFWBNIe5XIL%2BelQvKE4sF49GM0hhcUJz8Fyw4hxZYVNzCnr3NXeavuBBKAknaiqItN5kvuNwdCWothL4xROCNRDMAlFtgkkY1zO1tlbOVvfg7sRyxg%2FiH%2F9KHvI9sZCN5pOIGXqSPh2J3pknxuJlYBd2QOPe8Wumo3dTgc1moaWF5M4sUoC0GOAfNNdvLGj4DmP%2Ft8GaEKEkAN%2BnVPaeIa8fzfMwJ7KrmhsYVhA5Ztk%2FOaBrURnyyAhZucgq7Jm42%2BKepGbx2HeJhHp1%2Bp7yZbh71D4I9hFWxs%2FtPl1Ahliq6IVIHCY6REG5azTTW%2F8Hdj7hMJ6ZtHUaJdo07Hr20FOuhJnlVdv2V9JPvEaLec4v61d7rxfBq%2FH4VyrnZXbq0BHThdq2oyrqOkmAEcq97MgpgbNxU7PDOWz3MHUDfELT2Rk0QgL%2BwtnEM6OipxX%2FNX8CgyiZ7A1XPlYcAJsCjW8EiSc9AGhhyTW%2FlFAJjPd%2B7CtNm6V4p78AVLJnbr4xchAFzoEk8m0SXq2AYVcqDa2cK66dYSDC22Pe%2BBjqkAfQeU6FIXUYYsJeWZLtVVz6upepaPY5ML0RhAUPQIxW79xi9Dz56fKKSTsM8BfHFsTYpn%2FkkLMusf6d1kWkFnfMyWvHoOuzt4s06vCdToxv0PDeMTbAxT1vHGD7MCjGc97aVJ%2FTasSULNhREpODeEn7iLmTBc8toXxNJqdDGsPkJa%2BN3HO9SPKKIx25bBYvKZg1mNkYz2ETn1fTsYBIqTmV4N32u&X-Amz-Signature=86e379def1e9d47524b7d02753be03f35f947794c55b19242a53bff42c85eabe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
