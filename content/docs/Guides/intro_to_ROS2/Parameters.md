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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466232VW3XH%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICWX00ov4sshwxirKcoyKnP%2BiOBLUePmPOjAhOXzXUFOAiAINiYDfKV43xVZ%2FRxQlcvFvKI%2BbIvaNptB3hgwQDKF6Cr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM%2Bf%2BXKMIJ6PS6O5kGKtwD6ce8PlrBI6NdIz4qCpe2xlfZAuF%2FEsEjya0KdxXY7krHBreOurMhCxZB%2B6WdscadVBUhlLTIsWC%2FA%2F%2BsfeWzX5G1zy3PJenHsTGHjkH73n9ZSaPz9zjygVmplrWUc2eKLtpQx9ySh1bTYHxUbuxyBNenbi7Q4jKg3qhJPZAogqN0pZrRNyOURX8Xa5KYOC42UKJgk8NcuUiVVCkkapGBqXik1eFNeNIsHpwek88wsNviFCfGSN%2FA6W%2B8wr53deM3LU9V%2BIoQ3qQ8i0A5g4M9a2gyxEzomn%2FVLrfSgoG%2B7vhNBQ1e3vfgOqk5JDcPokOe62Aqyo5yJPUfzdYAeSzR1bI8zf%2FPTMTHieTjnk4v5nxGS9%2BICsEbQOPQ1O%2BOzSd%2BTHAUzdcHsDuypfeJXQuCi5GnC1YLfEHuJMFxGIOkBgJNzRE8bE97enTKWIlPUdvXeWxSnZZMh2qGB9Q7%2F6M%2BTwiKzG%2FPjrVAZ4eePsqPX8UHisZ%2FvCNdgH1qpJ580oxek5YOxXI8zC%2FBrpuAbdLjqyvueXNT%2Fixa9vsGk7pBMFANVZTxR5Njb6JR12IieJqPJFlcz%2BbUN7qpvPllBbM0ej1k%2B8grrHVnMELz0isJFYuUMi3tKbilHG0U4UQw6tPP0wY6pgEMw8itpQZPpZxjzUwdx0%2FhYGAG67uSjYvyk8MaR00uVp9QN9btvlEA32%2BsPm6Ya%2BYYDhhXHFklk5d8GNUXGudeDpp3OHC%2FoigQA%2BlbGVZ5Je2F2Zzwv5fl1h1az%2FLJhNDJE5lLHN2H2NEOwmSZ12JcpK442YksQ1HlbK%2FUGowmL9HDK%2B2CmfPiDcgt5slKUY6hYMW5P5LbL%2Fr%2FNZ93OfhCysYxp%2Fv1&X-Amz-Signature=4e9d38b4700d040b37fe5f2f05c8cba63481cd4eff50ca27b4a7843f9b3ac3bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
