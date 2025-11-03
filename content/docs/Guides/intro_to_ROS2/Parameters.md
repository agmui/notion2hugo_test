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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQ3IHIE%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJrj67RXeU%2Bnip0Q9D4vgwfmf4xYHyTrphIE47GwKjBAiEAvfGf%2FN2Hcv0mJCX0Yq4TcMdWvxXXq6XtfHKRO3w1n4cq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDyI7UKKncpIXiJfkircA0BhKtEMS6tKBCMsEZE0AdI67pCiIsoP1GDw1BPI8H%2B5i5sgh%2F7kgLJiHA32GK1wyvnI6HCFIBVJbeuob0nvHYGyFABx1ksDJazQ98EBlIxTr7J%2BsigGVpoVJGbyXACdCvPz8nggrMEAHuU85cfUaWy77iFmw7Km5RDkL9qGQqk1kOHmRgaDpvaGyH%2BV5byNW4DL7xo5%2F3T8Luc9dP7vx8ESkxe%2BKvThCI1eUy6aLdsgjP59xl3Buj%2F%2B6ueoeQQ6wAISFn1KATgXUOvf%2Bhl7IhGt8DTC3tg8v6QLYNFMIJVx4DUwpo7eSOBCcB8Kxfv7M8s27YFVKi9hyjVkwJhfECZKjgBnKqihOATiJS68YP7ROj%2Bd5lJS6UjVF6M8yqkKqmqaq3rUKsF68s6xnnCqk0UmczZpIbGz3QYA6YLd0kp5OKxeLzkPcYQaREQPCUOVfecIuVLECqvYb85UUTouBZncTDgCv%2FnOuZydnPi3yG0GLf4tsmTkY%2BvLL6KHgxBxTEt6VsfRIU1ZyGkmgYQSvzXhxYd9Q2fTc9YNzI5EssnOL2A2soNozZeGJ7fdlusPorFk0dWnVLndl2bRFZcPEnW6s6d5Eh2eT%2Fdhc1r7d92t4MQcWFv%2FqWBoAngTMLWIoMgGOqUB0p23vUbApwK0H6bGoAd2V%2FQ7z3gKyaFwyI9hrAbCdA7uBEJhLKyM1ydmECy5oSSdDZoPR%2F7D9qgHWZ6vnIxiQC%2B%2FEumCA%2B%2FLUgAPlzY7eewu5cyGzEkHQ3I5idsEW8PSeklIjXABKfK98FfLZbJ3cpr4vPkx2gV3F7UsKYH%2FNcl0BGJx5%2F5cXl3BKzeMv%2B2tYiBgz3YgfBLY%2BbPUsyVRySZK%2Fee9&X-Amz-Signature=80f93e07661255980947f9d88c73f677ef5185de8921a630552d55f54b6d77c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
