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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKF7MQYM%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGu0SyZTktxj%2BXG%2BtcUnT7JlOsTV8EzUclXPReSwl9zuAiEAo32KT4LEbnMI8uZUwMt%2B2k%2FtdeJMmzz6tzOuI4kJPqYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItUd%2FKPorr9EAT%2BaircA%2FivsfK%2Bj2wRv3EVWcnwQmdjbri1IuR51IAom%2B%2F73mya0PwVnMy41z0ghuESOCB237QtBDOZIPAsp0aWM%2FphuEuMOCi58jl%2BVgVmbqVM9r%2Fm0VcseWVG3gPAbC0bIggDjc4CK%2F37u9qhygrCOrV7Oxp2hBOp%2FvvoDpebXAhpdRv3fiL46jGy%2F6S9w8IpJ6ugmmZ4ZSMiyDoaXfB0vWGqdSMb%2FQ5PFt%2BTuewRFVHzlUEgQpqteQ1gvpxMZbdbY5sQg9hLWEG3uZhMCcGWTPVPdv2zk4%2Fwux7AYWMd%2BnHZhm7o1OLpkE0r%2B%2Bv45uT3fjMsqNXn604hht7LTFHq9ftqm%2FHOQ%2BWkrZwQFTJpXm%2FOiVGLaoSzjIhpgpz2OsB3vNkU70hZo3%2FOGT21eGt4BB11Lph%2FxgQKoE8YYTigo6%2BzXLeNHMkDRT3pWJUhRKZissSI%2Fz1n9HRPEuKNLjmiD9vZoX3srNOn3Xv9L3ApD5FoM%2FUNZuTkGUCFZU53ajnpQjwT45L4s%2BtsEzwTMSKqJCNoMXRM3GX2MlYV093GlNa5%2FnyrU8KAfXZaupOq3fOFTCQjzYT3fCiyPNwehzP6TkOV9M1pLdbTNwbq5EqtVhV7HP2tDQb70SeEpn8j4hnOMJn8kL4GOqUBw6VDMPo2RqkJ8Lw5%2BaxhOUAp%2FLRxwTmxiSO8%2FDjE%2F3%2FZWHfOdfKmkk6jlopaIMQ8QzcJOqji7BqT%2F0sEIYThnf%2FSXSAEeMJXc857RUT93NiCtLkrAaHlzSUsvwLvAWTQxRJjooFfH15q6LOKAxreogHYem3rBw9yc2oB6WD7qcLeQf3OOmupFIQz9bKEP6Ykqz4KhiR81DzPvLWmD15ZUeHs5dq%2F&X-Amz-Signature=8f2f96f15a327ddb7aa5aa4a05024f0801b61845f21ca4d109d4403733aa094c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
