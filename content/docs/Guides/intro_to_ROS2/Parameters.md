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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LMHKHFY%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDQgeNm8jBMh5iZlKfbx2lQb0tRrBS%2Ba9y1ctyOdZJ6XAiBarhux4%2BGCX3drQGBn%2BplKNwwedsm6b4NePrNbfESn3CqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM935OQKh7sBzLkb1oKtwDGFy1aPn6qJ%2Fc6EjUEsUbEfgkNHIYEtTlAzYhiyeLeA5K4w9EuvRxuoaYc21cZT55Wi0NIvW9X9vzzQomKxnmpFGiRTZQazbk1JJsBDjXPdz33UrcroRTW1YDd9eTGicvKTcxWWfnZeE9wNi%2Fuz7i%2BssVqpJEgMeZmKQv9ONYc%2B4VBo2H3zo6jTr69ql0HvRkrYq76EPmR5opBm5f%2B6eIjLZ2A7M527IRP2bEC4cRwzl1vlMTvS2BblT9%2BbA%2FPU%2BvWfVEwiI7pJ34tM8M3B03ms%2F6Esje1p6NaV0GXMAzkPqjNQKF%2FJ8cs4I83aTsJ4x4M2Q34ZkP0aVjP4SpRKorQMercnn6E%2BdeFFuUG64LBww5chHhF6nA%2BTwn3T2gTIXcAbU7jJpa22grEyQkNFskAS%2FA7ULInK3z3YjKcf32rt3JUR6yTnG3CFyFe61XM6BF%2FZQ%2BF0XYH2HJjq%2BgkEbTbej4kG%2BImzSVp9q7dU3QSiL6ojNeQAxvXSuzWkB2x9q9uk5Apipj8ieZaTapUu3sKBI%2BfKnrrPVGXIxMlY5TeLJeTcOdsg%2F5F1yre1hbTa7AX%2BL170%2F2lJ6eY9u5gCN2Ce6bxR2hCDzlXsSK207eRhH4VN6YieN2Cw84C28wgMOJwQY6pgFOaRnAUUddZa0hYTLId4BlvpZV6VbZngQquoOFjWtRfSZFThRPP6x0EtCcYaSU6xdMJYLocf9Pmcn1wc9OMBWSV71uINRXu6t75RWLSFoB3fHfFWT8O7Uw8jGwlJ7BOzkW1vbmPvHt4SNNDB%2Fg6D8tLIeXCu9FrF%2Bbz2VawLX1xieLZDrcnfsxwLiQjg5uXruS9qBl20aABTMBuB%2BJGmA6aQhW8TtJ&X-Amz-Signature=f6e842b4c673cb41fb6e694ed427b3a95f78c5354e3540124cb4db11ed433142&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
