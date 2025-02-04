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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVA2ZTGH%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCgInQLLh9u08Pd7WBUgDZdGtnzJ7udxklL9gkC5KEe4wIgIj2t%2Ffi545Nh0DQuf%2FyNptjoOG94hv%2BnQCYhJxZ97Noq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDMnGQdg0QT4CXz%2BL1yrcAxHvh1GFYv28EVOJd9lYSdAp%2BpRnbYXrkaNHKnmHTCzDhMqNifLhx%2B%2FMmCyNoUvZMfpLnXznpuK3F4RbfOL1%2BwaYZObOujwT5PyKHjR8okuAp%2BAjUFVWOJCTFfdN%2BipchKItQ6SggK8m3giVA%2Fo9DPr%2Bedj9rVNWltV4Vbyc28pkT7%2FZz7ope2FKSuFOjDkHMonE4dolUgEjYruovMpEWe1O15ADXfsfrWKeDfUp%2Bb5%2BnbH0lLz%2F0BAtRNESXNo6jCEyz2IfLp2SmhiGiCrNmcRGNxVxkxcfQee%2BEN0o4DryXkItK6ObTrABW9jVq8hYtJ4Q%2BMUQSvKJ5Yo2Vf7CYKFfqZYTYTX56HtHU3eUFKXQ0Et%2BrzqlHAH1uOXiTwLNroapqqSQH3syViEsLmgv4C7myzv8WM5XFfvZNpa6EqEgG7b4TJre6uLzdfYoOwF652lapHc7F6hhEM29BeX8uzEtEJHulqHBOCh2EMQHxFE1qn%2Bzj8hUSCv345Lr1gqwNu%2Few1aEErRj8SP0HsY96s%2F8RnZm2ZwxlusqH5Jw3WxvKFve%2BMjLmrOeFsSqLcWQGU8pBLXDgc6F%2FJSmMBDlDHj9grvInA%2FYBs0U8R%2F2GQiSYarUAnRHp09aYLQ%2BMJ6%2Fib0GOqUBIIQWKoUEau9o7l7X7JoT1CPKLZgAypc%2BThS5mFyldJy191c5%2BDC2NoaeCAjziPc%2FfBuAqd5aPrdfyeDBZHuE%2FtaPIzzGmFO%2FoYX1KibOMrqb6vybYTmonR9I6Wf5uXjqjUUI2MO5ryx7DLY4A%2FZ9BzdxPHzXjhC1p44lpbHESG1NQcccA2HYHizYfMEg5AXtSPC6DrZ6hfObl%2F73Tyj9QeLavlDO&X-Amz-Signature=627d7e659cc93dd8acb331510b210992242e884ba666aa633197ebbcdd3b20fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
