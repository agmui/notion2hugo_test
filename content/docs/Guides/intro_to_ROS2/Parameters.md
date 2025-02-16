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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YD6GPVN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE3x8FBTCuD9NtGhLGxBFSaomqHfzu7PKsoIiM5%2BOk15AiATw7tQWfdVmSMRDjSgJhkN4S9XqX6gl%2BgK90RagODFYir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMINpAgPq%2FEu6alUhGKtwDn2ESyKs84Etpl2rEFhICeOzy0wNzy5P9dDBx48sXcIvFJsEtHU1L8OjM9mg8n98CHM3Lc%2BDx36w%2BXzR%2BxOalHaPlThuy3mMA8uJGC21TKGjfRPklCrhC%2Fi6hP7XjZlOy1AvebMkUHi2hETlHItChEAyx1JRJFP2HB7AWvEk28%2BwcdBfWVpQ5fDl0xSECfKVwat0pZIEGUjALYzWLtZB4Ldouenx97YybEU3VON0Q%2BBuxkOEOn8LBnvcyOAAS%2BRLaaOBJscb373Tz01U9%2FCrorjbztQwkJMYD1igi9ciBczBJaJSoJ0A77EtuSOC1P8twJWCM0scAkiVS9SpMral9ra9IMeE6KzQ%2BR4nJi8VEJDKnDUQOzs2rgiYpXGSnffujyO34yjIO4jEuJx2vZX%2Fb3%2B5%2FaGKkpcw0WYU5wfardz4y5GFkWZJv9m8lqLWpb6BY3b9MSrtGDAhOG%2FAZcIMJeLG3fgUBoug1WEA3aCV8jm1elv7Mpk4pFTwqRjxLdc%2FuTtJNe7J1VZm51l87PYbmx4aiEp1%2Bb5pOG8eBhBspd2GhKOMSoegvvhB41OJ96KtP6YTba2eV9Mr3IGhAI87uOKp8gI0DhRGco4GIHNGf6h%2F%2FJavE9RGQef9hS6owiMDIvQY6pgFcAbgXbAdK%2FOO7iruiNwQG0ZkcTFbDkii379a6NrQ8h0k5lKbTKhLzXmTta%2B%2FULgeE8o1teZ7jBqvOsnIAqmjjI4LR2SAyB5jIf8CB0%2FhWNzel6yHpCE39qkl4isQOxpAup%2FMPCbOKE9mKjmSLe0ZyCoba5Nei0zej3SGSxqDRCA5CPC6j2N%2B8Rkf0TAqHUy%2FHLiYcr%2FpyH3dYCE1p%2FRJUbwGonX5x&X-Amz-Signature=a2b3cc952126d1ed03d02800c4f0e47757d0bb5396679decb99f760df2ea3bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
