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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFYG7X3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnJRNMem3LxkYghvxjPPIHhQ32Y9Xv76ncVAdVFAt3jAiEAskRhC6QWDxnr6w%2B0tWKv3fIDX3i5oYqe%2FSHrtkUQeVIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPdFX2KNrprY7j%2BjhyrcA69Zuewn6u%2BcwekDaUyutuonJJ9k0dN0MMdSnD3FKxXhlYFw3ObPJWoXYMQqFlODGyRjzr037PCoW3Bca6Esyzu4%2F9ogHH60e%2BKocKTckpcO3WQasE2ac8AMfv8aUEgqR4qgQrM0q2h%2FchyrCQeTCSYU%2FNPHxNQ9aztdlBdWbyYXlqjDGdslAsXQMqGEibt0l39KpL6ibBon3rjKvLZH0XISWBDA%2Fs%2FYSWZUeaM6VcSHgRH6XUPHk0bo5DN6BhOylNrjy1OepPXl5M5Rj4C%2ByffZ1Uutjji616u2T2RjYd4BpFMfH%2Fdguo%2FZqcoTJg21x6uHKWhCdoHMZXprazNVYG4tVBk8qIQse8CP2xHCFejNpNCljjqzoTejfcsWb4oOY%2BXmT2KcU4g0P3MLxMQU9dvgZJZkbf7EodKVVkM79RFISo58cYX1ycIjyW%2BAd1QXyRK7UzKaC95BXV7nSFIJD5gtdxqkLDbS5Cu67vzkyhgQiZ2rD7xCUgU47krU7k1Y4n%2FO4pKZ62tn77nFl4FhEU3Z%2Ba71trrJQVQOrAb19zDlgApY3KV%2F7Y0NJ0APXVpIA8x8M17gL%2FhIoXaOrKsNxiC9GJu%2Bj5GinCx67Ruj8dgI0kig2feCu922%2FqWIMMXpzL8GOqUBGwt39mo%2F9bv6OasBRX2BFsycqCKwsuChJKL55OxRdh7s8T4cL5WTfbgr86LFDgkSwTSPmVssO9G9TTrNDMNQ%2FHui%2B6HOEArdZ62DFtZHTn0p4NHsmR0cEaAg%2FWVrbvPXx01l48UoVRV3XW9SYz5F3diRD38GlLaylX1q9vRPDvpXysh2falIPkmMDGJMIylQriM5GuLOdMDpYmvx%2Fe1A5gu54pOj&X-Amz-Signature=047002122ae638333b96ebdc3bcfb3333684ccbd58a1560e48808baec83704ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
