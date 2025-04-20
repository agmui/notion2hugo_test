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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THMUOTA6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGkIM58LVq%2Fp0epdZPVMiZHDc5yx7itS8mnVcXNvR0SQAiBb8d6V2EWpLwlUp0o5%2F4JZkSiyoAFuJCCrm7tVzqb0PCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuNcOsabh%2BUeSwMKlKtwD%2BDOGBcVrbeuAkBPxROPCc0IDuMhFo7sGsuLPWXHWX%2F2O73HOztR8%2FIlZ7dKWl%2BNvI7aRBG3nzCh5clukfPo4CI69l2ru04c5WpOcBW%2BilbfogPvrEztf2p5DNBQ5I1JcfpQURL1EegKCE3foLi2Y7786vux9igF11IQVjqPylAHTxJLveT0g8s0HqAEThOdAzN7RyPwkeJf9lzeRGab1bLAhdfwiCNGGIogz2osrMnox2qOm3Xh5eeedN6hrTNSg%2FUhkLKC6F5wkGcbsW6UWm4E2g1h%2BUJxfG1GpYHKaayfnKucBSkbTp0l0tr359q5Ge6nxvCcXK1d6OQ%2FFJnYBr24En%2FR1sqJfO5gNiRdy5WvNVxrLcFTBhQiPNL7Q%2Bv1SKKXsSJUNMogvnx1iIcnvHfRyBkWFXf6jVa9wSz%2F7dcXtrxCnZIX1O8UqL1sJwlAe6T4eNYfw6fdNpencIy70LPnR0au7a6%2BAw23dp4MQco7nDn2t4uWrpFQ%2BxcXv55IIzKRzeMUYxDbmjjMGZ3P3djc9PBqNrOXzRhQts9ndpcF65b1iI2P0XTmg%2Bv7H%2F7pgMOuRpf8ryUR01W0FaoZ%2FqJpW2zBZcLDZMZYITQA2LyuFysznhEBgNh%2BToM0wusiTwAY6pgEVI5reiMeDHQ2RUrfN9IEVu041qPJ%2BOFp0JKKCqGgYut3Zdq%2FI0%2Fg2ksiGiLuoiLQoo2sQLkXrwL6wya4CXVvZIGi4zao6%2FFQtHfM9Xd3fipthlO45RG3Rundj7fzJMaKOKugbd6A%2F8R%2BMnAxR%2FE1dqPi11dzHOy9Cxgz3d2XsrHhFniGlfw5d957cQ88K%2BBEB1ZBR2uMQ1oD6zdCCaKlAdb3BZyGK&X-Amz-Signature=1277a7eea3ba44fbc72f391a4af2fcc4d9d1da0a8a3b76592847c16cbafb29d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
