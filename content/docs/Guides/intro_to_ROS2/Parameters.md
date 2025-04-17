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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQDCZBGL%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIby5%2FpC5iWbhbWthvj16poOgPpaefnRFjd6Q73b8h5AiBOIGwVfYhyfxGU4eJu7IopEevRULYMeq2Tl%2FUm6tAjgSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMhH7fYHg%2BLmliOy62KtwDTs0h202cev6wK55y0zYe9MMQcakuxUyNrWcXC0%2FsDP2gBX2qdA6RGFJAdxg%2FmbFf555pheRDz4M8%2BPvKax7sj3K%2FtLgPzxw2J8Cpd9ceFygRMtt1bzZT42epFtGCpDEwg8Ogb8tD2TkdFqCWemD5TaTz0%2B3okxXQNePsvstYKZLwe3RqNGcymT%2FVzzn4HIdvEgR%2BnOCgi9XgpytPDnRxv5OCbpRqgRJlRChK0VujQsnEA%2BpI%2BM2xC6TZ6zTfLNQbTC3X0uK8o%2FB4csN%2BaQuDOZn4HkOhMWO8NqE8vTBz5tHRFBxD1n9VA5%2Bc1SOFysrMXwmnDs%2Bu0zv8qcU7HJzeA6F%2FEBkZfVRseCpHXD1pV8gZ%2BzRyfIzPYw0cxh3RKWPeh7NSi6IaYh9g%2BziHzm1kByaR8wuDjvp2Wzdu1SD9ccpcqqlmgbX91K8DUfC7I3iPmE4YN9mKOcr8CXLNHIfjBxDxtr%2Faqn6QMghbwpjoil7cCsm2F1SxEpc5QGQLswIcAbJwAdSOv3s1RSgvhzoFjiZfU91qhQfCgGcpy7eZFrsZMbVceAbyAW1VTSIALik4K9YQEsLYqRzB3yfYIvzuXHW7t9o8EHChywVLVJXSiIluFxBjJhfPdAuySAMwpq2CwAY6pgHP974QndzIuo2N7pIp2mbuxl0G0tBz%2Fmr%2BgfvEv7T74QrpmWTEnRg7nn9OcAnVeNZ4TmlWAOSDMZ65a9qpiwQISibt0bRuKS%2FWWuek1zoqdkGYfoNrk5yaf%2F%2BZ6VSGNxsfXRrzJmkWzO4yHdJMvi8V5BZcDzOSVVcGmBl5UDJZdtI%2BwEupObLg9%2FP4VwmDK0X7ZnGqxzqSU3JqabyiL69LkTXB55E3&X-Amz-Signature=87f07ef6cdc92d5f68c5f9139b04d55d69a9ca0b79e420073b97aee5c5ceb21f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
