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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S56I64DP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBELN2bdMeZgdBMfPy4LEaWIw4SdjLV8TpPlq7Ev%2F01kAiBSgHLC74Vs98q1iVlH6HfJW9a2HgyGmogMcQprAQZc6Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM3zHUNCs3U7jFM3TSKtwD76hpq2Ir9%2BDZRKlBjz6nDYjVo23cHCHyGAncVboPBdIbHh3mhsx49GVzb01UK6ZoPVQUc3vWAeUC29Jz8qz5iKBRtpI6Eq00uuj3KPU3fm7pJO8aqW2EA9yiGvCd6JmeI9%2FPw0op4tVSF8P4n3jFu44DGhw7RqNNqCqlpU5BZYI5vEsKqh08pf55psHoGk5jaKmDsJFNt4bRqeMAABEUMnonm2EASC%2FGgVJcrD%2BsCbPF2veLNTuH2jjxxPQGLJxiUHp59mG9KzQoaZuk1%2BcAP7vaJhCNVwLSW7WBmYdPM8fp1zXFx3J8tu65r0LxB27eyn1jQQDHEzm0HjgUtTrULLfd8CjTy3nqLcd6zYg1uZvO3IH3vECc%2Fby0dtyg%2B%2F7%2BNHtQC3xjGv%2BXPCap%2FNjLmLEPuN3wO7RzmG%2FA%2Bf4FfOs6duZymfKtH%2F6NNzvucSd%2BC37fdKUavdnM8cCjuDDeA8hvv7kwxx3k1acm0ZAa7dmqegzn08I8xuu58Rc3Mmn6BkzmRwNk3%2FApI0i7uE1MhGg6pJvibTipYvbFB8QojARvqZOnUwy4S%2FbDqxJdeGIZohYekMj7vhxBK0gxV6WyYQD2zwFMkxQAR6%2BWWp0p3e1OG9HFsOmqmAFk95ww8oDGwQY6pgEQbl5i1haIh%2FeAhamUV7xnYAGBQemsBD%2FPej4oCm5%2FBFmz6pEZb4QudZ%2BGtVWYQU28dVOwJ%2BdY%2FNhAOctyZcjme1laNoP0bMbVk4bQwwh4v%2Bg%2F81Lj3m3bbnf4T1R9oqwYv9r2y7YREZx40z8yp73tPrJIJ9phDc77Fijf4PPCwQk5dToyj5BeqHvekLO9dZFb7Xt2MkpvlzH1eap5iEWYagn%2FMfOB&X-Amz-Signature=5c4fdf7d11bac0f07d50f5298368fdc0928f87db09d5167513400f8ed99a0a20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
