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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKIL534D%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDV0eJKQdUgj7KFjNz5XjS6TEb8ODafiyUnxMvEQ3kLbgIgZKqtp8pThK7ZxQRQlCoCPNe3Nop6FPoltDwngdl2HjUq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPgaW2mlyxzm2TSY7SrcA7vh10iSy1EnAllTMf2CCmenJwp9EI0ERdJYK15rJuSD4Vo97TNlz3W3dqkoWvsVjd6UIzjTZxlIChfngmnqQtfY%2FDqm9rbZt6%2BEHfKt7z7nBc%2BwT1G%2F5syAu81zirRnM9WI0yBKR%2Fdm%2B0B798NMmZQWAR9p%2BqL7RwqPd0hXPU6hS4F22z1%2Bjc2NgsUiDYoTwlxrlBCj%2F%2B1s%2BEdbvm7yCNO2H4suKvoCLd0VShtyiuEYAxEaGxMLi3OzoCKyMSbx9W0RRDnGAEkZn4OZ3oBcLaE8VagtwjHrzhDcbrEUiAaqOZelkr6unq9ub18hx17Sr8Q12bHp%2BAlfZVfq5h8t7IWBnRXBHPSX84Qq5Hv5auQ%2FKmGYKak8c2QIXoOxQkleFxAc9jSDZPbm%2Fz4u9TuapxQT3qlXeGCkySzX%2F8R15m6BhFIQ3tV%2BbETffsEhxXy8xNiDaxdqeqsijvSkPFqkiT4YnipHb6ZfDYko12VwuB7pskK6KNgCNRPtuzb3PoKw6ZMpF7lo2qYoHqTLpy76n4q16hrmnwob6rF1S4ZPlIPpayy0RjK0VqrMy%2BHL8RPS0mpvsKzao9WYXabNKXsvHf9VK8xkTw7TGyoE1Fk99R9n1L1jB9WBbWHZQ8RHMKGS3cMGOqUBclDkyMNJ%2Fxkct6FnIaGmY4rJUljJ8B%2BVlr7fcsiezUgHkZpwDrx9rYRaWW5Jockkq3bPreR%2BsbHBwGkvgMD%2Bl8HVb6c5mBbbopOlDddxXW6XFXvUZgmu6pwf5uqdpKwUbGRMHE0pgxaGuO1JFjfHHjAyeqvS5120L%2BID8CtBxX1Cc3gVTBWtuUdfMfvfYZg7DBLJWtYJi5S6vmFWt0Sz6Sq6wDgp&X-Amz-Signature=31d4a328c52f99406e5d6d0458a162d14d06e9cfa7a317e3b254ce435aa0718a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
