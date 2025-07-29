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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQJFMRAR%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAni1Iy%2BF0MdRtftYyHYaHs9Yf700hiHhjW1D%2FIfZnhRAiEAkIznerCFQS%2Bnq7fB9j702YqU5E0Kzla8ZOWi1tn%2B%2BlMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2eCtVD%2Fio%2FyLRPPSrcA1o1IrLDuOGDCXiM1IQAYDlYLTEFxjvzRKIB8lzX9v1qxWf8c%2FEODgy3vFUQrgMRQaVhU3WGCM2hVi9EUZGaJYuaoQa99xnhbApP7YG%2B9YmfOicardaIJY0uJje9DGnWN%2FFNsTbjwJxG8nwqfR7PAC1CV8QHPxI%2FYTQ9bWNeM9InUmuOJxLuChm7Jh7R79k99rj2IjwrcmZDXht%2BXLt%2FFsys0tDKIe8h3lA%2BaXtOeYAoslrBDSU3MTMoKuR2xoQM8isN4glc1%2B7I8AMVZm%2Bg3CsWTyReVc2nEkabAjYuAx%2B8%2FSSCzWUim1CTqHPC%2FI2vd1wqbmBO31253LlQHpPFuzk7j4sMNJavS7F9KHgXvHtQXKcViwV%2Ffm%2FrP1jyHdjvC2Cyb4KiBKzLOGSh%2FkKqWAtrj5%2FncFiiWadelUOys0zFFxrRmtkVNX%2BbGMR7GxbYUQMZR8OcljqUBv2SkVGx5%2FDGRaFoCdOj7FvT7fqRJfbCgE%2F5qrl5FNI%2BO7xcyYszkijtpsyJ1kVeFRzSw0fg%2FSWM8r0adYooHYtpdVrI1FedO4NktAWbjLelczZ3n7Fcl72Q%2ByKC5n%2BIaAosx3QRGLNmXJkrEBNcsdvryfqn%2BbeblFe4VUgHju0HqCXkMJCupMQGOqUB0pnfNFMqKC8E3ci8jgZ%2FoVtySiJCoCA8qo%2B9%2BGkyGTB%2BgVBwBUffiQSg3Hmwsfyckew0S%2BIrjB5JYChNlFV4XFVN8xg6W7TG02JBNmtg9Cl20cYMtfd5zb3liymvs8wOVFvX%2BTt6FIe6Q8ocqj%2FP6bF9eBeH3O0ZcjtcitDK05Gl80L2QPOdsIV8suWzQ6wRlsBq5zFumLdTGyL83chdKhn97Yvp&X-Amz-Signature=b3e95e5e13e0e45c654786b529e7c4660c89987eba29ef2219fd37ab85beb92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
