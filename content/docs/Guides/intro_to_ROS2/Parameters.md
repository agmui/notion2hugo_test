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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNQ57KV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvdfYvrijX0MJXPKEPVSexhXLPiaOvYz%2BIIxMXn6P4EAiAd9zCIo5cq6d%2F3IBxnwboGXY47rc7q370yGOtO4ysxtSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4jTTsZlbluYfOr7KtwDL4L8ur7NLpZXiMY69qZL%2Bv%2FyxM5EGLkDhiRklWvNSA94CDLprwMYgB%2FazxM4lV4PfWqr4ab3WFJhx618Dfthq19Lw9%2B5N0q4n%2BhnANZwu2QIKFd4huxETkxvApAOo2KtVEwGNwlFkQk9IE5Gal1gHCmNBURNJZs9o1RH%2FMECPoibK4Md2qp8Xl5pPKmaSs6DgP2RYjanLR%2BnnwlLUbow7ctFAf2bwSZGjacK8e8VFZEBfha92qFs9u1ZrM35vM3I%2FkeHjlsDB9TDhLIf3BXpzoeGV69Yfhfc%2F%2B%2BuPkgMe1Ck8NH9AvOTTbWaHG9UGMm2Wsq%2Bo3m%2BvxW%2BKWeuB3Au8FNDXxSHGuxqvU%2BeuKWnQgq%2BtiTKWFsoDos6cOXpOP3hSWdEdMki4xF%2F7W9odPKSPXdXFcUifqxpSwUb%2B%2BmRC6aHF1yR82NYN9TqnkcnMEski1h0ell08Xs%2FjeRZoalhfJ4IiyyO4FU2lc3poW%2FJcf1dANpfz81ItVFPnJFJ9e7Qsj8yJ8zrJ9QPrv%2ByRSOnbpUUWMmCY8CklCNX31GLsNdTyrAhxmEOZlLRtu5voD5r3BHfU3bbdPOuHmhi1%2Fv9a6o42nCpImOjo7KOOVWiIVHTcCp3SPYo8u0C4%2BAw75LSvgY6pgFpPH2U02nsjyHV64Bu8WjZDNc2UgfL%2FHCAlLOsbUzYAXLTeCj23bty5J8GhE7lihASPOuO2PkfP%2B0r3oWN2Ct24%2BMFLdIK%2BTZISrdBlwX1CD3CVS8MzWQZcKxIhb6n%2FOnjMXuPlAAStnz%2BB7xYXA027NpvoXN3LEJ6ce6YS%2BP3XDamixqEpoUGfg4%2BQ%2Fkegu5ufrrpdgxNjUH9tQqex1VhShve%2Fqjj&X-Amz-Signature=5e9a06fbc377102d66545740627f7aef8bfd209ef42e3fb646cd2900aa1dbabd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
