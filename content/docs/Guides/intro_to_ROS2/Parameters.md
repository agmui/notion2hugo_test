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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245NPO52%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTBFJMQ5zSCxw0oX7XW5i9m2EUC3v7NejYa3RksDfcSAiEArBllvdZaDE0BMAQU8t98dN4lMry%2Be9GLSAWLuhBxPvkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGPPkUfF%2FuwhLKznvyrcA%2F8sw%2FgjVfSTGqaBDxxaOqv4xWVyFghZWGgxpOe%2F81C175lhOf6Nki0P5Lyo16NfaF3JbOqadB5KZtevT8OvADIPrY%2BHUo4TP%2FDU1Iv%2F18r2hcsv31ADz1786cNzVrCm9KOWjUHJOkkOh%2BKljKedcJodUYZjdx8tY%2B4M%2FbZPgVq7Ola6VqEizi36KzgOsE8ZHCKR1134Cpdo7YRaTyRbLvFor398XqoYFE%2Fez1UwH5pzqpwnTC37OKgCbClfX%2FRsHUbQzgEBKLLPgHjC9zq82iZiu%2BfKa9xDk%2BVx4NyAR5dMUYA8JQ7w7KpxnHpmn9r7vLmMo232tMgaxd2weExwB%2BUgLdKitIjArUMfzr%2Fb%2BOOrEpUDnoqk3%2Bo4Muxo83I39vALE%2Bs1M1cRkEmwJI%2FKPTXQsGfvmaqxOJY9x3UI%2BGdJXjitvFERk8z%2Fg3V9F8L7PZcIp44PPHgRmrq8Ik8jtJqKcX7TI8lSKfQdjo%2BsLqh%2BN%2Fw9F1LO6R5q4gZ5C5EMj3%2FW5t6DTGSEImd9eHEfge8ALhlq1Lk6fye1jZCXZlDefhLt7OGiYUvYQS0mNVUXaKNXmeVjzbqxSBXnaBeTN9htoevJhJCf4Z10TwgBcU3aRk08LAfVdhEbZYlkMI2ju8AGOqUByq20NElCdIgp3QeNRy37RDvgjEJAoC6TsvEkXT%2FpTaNxZWa%2B6RXvsuJNSXtKBcppmnC2JGdA2Kaeai%2BZ95aoKUXdRMmMGsiyCKUMRB94ZoEm2xFuGgF2ZaWSJG6DZBm51pZrs7dZZMFQ4gLdbv%2F2W46AlM02Gqf86iuEtauc1JnzlI2iMm18QoLC2ZFUQLGJPkd2eiO3WRKXGpJ5cYoD%2B0uvYjix&X-Amz-Signature=766a385e29e0ad3e7187a9a972057f799650a787f1ee44075bab6fdaf7507a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
