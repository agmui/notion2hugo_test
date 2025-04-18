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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPAR2XFZ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPLy1J%2Fv04rEZsGKXqPxWg0pCgapANGWn0GtKpsBi4hAiBFqvSxY65cc8UjZhaE6TPsWrE4AAacg4wkRG1Tu4Ac2yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIML7MPaKhrmAn2ACXrKtwD%2FKVa0IeETqXYnK%2BelvAzm9U92Sqy5X1JF%2Fyfy2m%2F9kUUfuH5zTiBUlN5mR8eVe3oKUFwgwtBvMpD81HsymFQ1zAsJuZGQY%2FhDZ9KFFYioMJPCXsazKDHvjJ%2FRLcoxe1wmOV49vuG2wF5SaPBMt7L2X6Z3JHxIGIGBjwmcp0AnuI0n8AnMLSSxQoHijYtjuHzAAvJ4NXkzuja%2FSCXuF6FZxBVbkQIibXWAzfWVyTHF0%2FmlIpwbteMFHsg0TXOvXnczPdjQ4B2oJhkHNWG7c7p8JscOtuYqF7q4%2B3DUmNIc4bFZ2IpmHbdqh4MDbPYRcCd8LjsmRTRkebqb4%2Ft9RRJin3CZf%2Fcjd3FEGugOBxKYLLktGGTBtjCh9W5P4aCyrGstcQiChaXFO0TNToQ%2BWKy8sLowTAS7QejAV3tQwNT4pCBBFdgSaQkY7NXZ3PYVmozi1yX%2Byx9Gj0ZKFqCcwt8tT%2F9%2BPQREJicLsuGCbBfs3Rk2G83urUc4D4UnjJb2dCdmkAz1cQ7fLiflbEfQIMpIHfiIm9mrbGZpiBmuUWvCNjVy1zszGHDGviavtqIaxU%2FKlmPxoXkKLBuD7wVIKghxJ7%2Fu6wI1ELSkoB6p3gT4o28uUbHiCrjGJ2v8RswlpGIwAY6pgHiQdeqjpm00IP7DE%2FgEHa31O8nPn339ROdzgSpUIhReZvvl9i3BDEgXZzbF3%2FqjFHn0giD8ZCOMtqNec1%2FlMF3CRajfy0Dxpo9QEFiovC%2F4VvPyoyzensEqDMudhBxwWfpUQU%2BGeChyS6YVIFdiDeYeO%2FJJTWwcLDinyFh1GjmNLeBZBRvk7pX76B7VN1aad59zK5GsnkRyoGi4fMqGMpWGALfHmiI&X-Amz-Signature=8c8219180e9f03c4f53688127b3b230023b0358b2159b76d1fe0dd337d7fb3de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
