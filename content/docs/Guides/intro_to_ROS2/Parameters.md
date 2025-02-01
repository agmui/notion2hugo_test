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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUASA72%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T021028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEJpBaW4IXhf0GoxEvTbUYlthDnJnwCSswiHozQuGIZAIgfXyuPW8lfI7tHe9%2FSUo3fpavuVHq%2BbTPG0%2BGSsJgJlMqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2fM0begG55gU9PyyrcA7Ao0ROTolLMRwS%2F7UrwH4Oh1Ap8kfCnTquds6DrXRJKPql5gAyJ9yGM0uZWhf0%2Bv5SX%2BHiMxj63Bg5v9zKO7oo7drckC%2BBxxzKEU6a41Vn27O%2FLLpufs4Lvwp5nGKV%2BA%2FR%2FQu7VZdYLMDepWdBh0c%2FWjSxvYmlhAPPwzWvNWgXJHT6cdaR8UQx%2BId6cwSCyya0LSrR6tj%2FP%2FU1zWIX33d7IXNO%2BVuxLvTCu267UvpBNH3N7IkeoTrBRXsJeI5thTc1gfOdc%2F4M%2BKe%2B1qqgK1gPxJWJ57KItf2z%2Fw3fiXakMYzw0E1lnBvCR67pVVbRA5i%2FN5G2Pe5kNM6RDGVmZrRimugNMEjT4qOqCZdv6GDeGJ8%2Fmq6NpCpzBuqLWPevwYNYRGrxO65fx0BcgrPk8Xvq84ez6zUt%2FOlIqDUseiPTRi5bzon9Q%2Fur1RqPnQHBtzbv0luGSwoHhRfnt0aSFJqiUNAuJ9HNxXiO8CAQpt%2FVa%2BcjyQmxXGJ5x6ni689FwV%2F0hyVOCoOemQ0YGB0Gqt7jo5QEPZ6r%2Bn3EJX5AOpGD%2BEwtQnNF5AWH0bdc6HmoWJ46T38mlaUH9R5sbdLNKMx0hi%2BxOxbluG6%2FWec7PNftZrbRl1RaltR4XpxVwMMzu9bwGOqUBKYJT%2BjK1bHf3faeiWAE9%2FRtVlUQKDB4Peq0SWh3rukPyRVW0zYmqMSLBYI84dLtULOnYTeK3S4dge6p1BreexfSoDMJd%2FTkhUawXdTElzzMH2%2BNl9kF7o036Zmvt73vcASwxyUKA3mUSF0lEKZPLR8NRH2UxBqweeSFDt7qy41RDl%2B206qsetLozsHo0bPyac5S%2FL%2Ba22E2hfeVASk53j3m5Utcb&X-Amz-Signature=5d340073af5fc473d873dddf73de90b96690475f8cfb6ffbe145560aafb9a407&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
