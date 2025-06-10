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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYCGLZ3T%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyQP4%2FhYnO8Jdz34eHkw%2FRENp%2B9Sp6Dn0vXCtmgmqP8AiEAuV3pZJheKWzb80%2Bz4NibSz%2Fgb%2Fhem6suSZ6JALd22vQqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMW0RTHk6JtMU2NtUircA7adHzf2nwYGiQOIDXiCt2C4hdgmrVAEbx47ERwrlMmcUIzUcE%2BHXSjtioVABGwSd26e78vGxi5gvFb4IWr0AgAnuv1N%2BK24IywF0dMlFVme18hbivzU1t5qojVHK9vkOhIrfnkU2%2BdVCrlVqPuapXRfZWKO89zVWqXsm8PqnE4UMeghi7vTLdlQlig2%2Bq6uFcZUn1rumf4EkJpXZvjxxoSZnjbZdRL%2FYl7bvLrtEfEnWBfTL7EFNGcr6ZBVxjwEijKi%2BB9aN7eY7TfU7fEepi0pQfvnaX9BsXrlayOgwjLx%2Bmxz1PVodEC%2B4yB%2FcIRQGegVsVvYtbqGOFk2CmDEim%2BHNxtDt6MWIXwi1zxtCE9WJcTr5y%2BDlWVpj2dYe37QVEzSWRKV8%2FXSupZeM3iERZSduc%2B%2B1ttisjEKMcbdqbsTUHdFUOlOuPEWTQzp6xH0wUVOWv%2BcvhzFznDGMD6bcSjZjaRGHMDGuALyLO73wSFICOzmeMh7hYcAFh2SfD2jtCYV3IUpY1GDqUIYsWvWYL4prz2WFB8MC5I8kL6aUUrHfp05fdc6T2zDsDgwOooRkfuaPuRjO1vCS%2FgiGfRwveVVlfTchXFuEwO6%2FfGzqAAX082SN9GNjcqtKal1MIHLocIGOqUBuqUgDiiUYL%2Fj%2BC6aLQhBfdw0i9X5cb1rdKYsakWvjSzoNzhGl%2BezbVFsODnfG7TeeyTOm0obuegjNRS2VGL1WBw8LPaBRnsUUNjCDcsW2dqdCuLOURHUDJdLK76jX%2BfdMiBDz%2FNOiIYCCmggYY32Hp3bah4oW4MJ86nsEuPsPVd%2FDL5DnYzmLSLK5yWBl8UmeUt67sIM%2FVpyqOb%2BjWpJqTFIymuB&X-Amz-Signature=dc65b319cb9a0627012737ef5f811e23b522ab06501479c4b09d70b40913f434&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
