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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLSGN4HP%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDb9m8Vc2tbWmZjOnPziOidVyNi1JzofmFugKSxoqirIwIhAL437TmtO6l9NBt6DzGrivLZwm5o6CuJlj%2BktF86mYd4KogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFidicFnE%2Btejjam0q3AN77p7a3eg2Pk7lGUvlhiENjGHNjZhT3aoiDsNx967u70U%2BIOJEOEnTGUpJdWCeTCYoNeegqs8dsxakO6%2BTJlb4KZVavRLKF63Uo%2FvGjVoYuk85EHQP%2FoauD42xCFVyu%2FPqHK79BTv2UdL1VhguuBVq1Eutq%2FSTp2Do5VMSYDjvxOZorzZrscz8rglUXvpEFxg0AjNA1NiNiHsILQSEQlRVjmizCBaZ1QO9C5Exxxhrg4gYMRr4Pl%2FJwuFJbtOWPygK8BQtfxKUhMRCEsDNTr3YoxA7XL1%2FdlKlswlSDPXACG4zZN1ATO93E49hObeKcsg%2Bk1wz9TqMZtYOoALmZAcxrX9EmDvvG4sK00urpZMellYdLhqbVN2ija983SFLIm1Ijs0sPebjcOiaeNUJLVJmZ%2BwqfV%2BQpPsxKCKGIjOjLfMC3t3CK3zDGk0GIVgD3p4bFlE%2F%2FWndqGBXIxi6h%2BstM2C15a%2FpmuuoMezbpcamXbP2psEuMTv1w4F%2FVmrNfnuTXtd8%2BseLqkhb4Frx%2Bv6zWajKdDnPfC6F1a50Kz6yoV555BuLYxndHEQiiT0Jk5W%2BZMSQmCwhlx2A2led5Pso%2BYVTIEn7rvdP2OoBx%2BjIeY8qkg%2BXYCnMM6XXejDlxo7BBjqkAUnsHEnAqWjYILhElV2RB2QRqC8XwTi%2Bq%2FGhubc8D62YW9pS5fAw0W0TPkdrpXUHDv8k1oMCEZe3fvjtkFHN%2BTjeIGPsgFNfPVgfuv2O3laNnDUH3tqDL2G9dc36F%2Bq64OsdJNq96ZwZFyufkxYi1ceAMQmIAsPEmPhNZ8ZsmPr0CelSvYByuHu%2BMASy%2B%2B8T7sugt4%2BZ3lHyppGMtYTpD%2BtmQB7K&X-Amz-Signature=0479d984df7074c42c64e9537e3bdf5940897cda13490d152d18e704d16beba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
