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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMPZKVDC%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDavkoMPNVnzYDFYDJJl18ASc1N2SxGN3gekamJqfnjsAiEAxYaLMn44VblDc1%2BOwTdicSe01XMEcQ7r%2FhMz2SlDiH8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm50KOw8RXWMunUHSrcA6ATroU3bC3cCRRiqs2S%2BTZNElKJ28O9I4qwCNRlgHaGECj9AOCP3TbEX39t2C5Ts2GZl9TuH2vP9L56EJyEx2cQkxgZrDouFYtajLhIhE8Y6Lj1m%2FEniuFFByA2mIldsFRn7miKgY6xDECLA2NET4kAlERJH%2BJhxXUdL28YDSjz6%2FAS01fRKvvZ6YCJjMxXM4ljegX3AAc6316Bf02Oh%2BwobS4%2FFkl%2B8zSGmhe6ZNn7VaNxeK54VJ99o4qQW99K36m%2Bi9VjEPR2BWVKNgnjGJzMKzpkBI5U58zcoC7mLJb94me3HW1sjJOP9NljP%2FIdAZmWu3f6mkr5MR8rh4wbeGPMrEoftkW5QIwz3arL4D%2BAo%2Fh583KeRfpYNcKXjBOTqPwkT2OqzbxqCeaVYh%2BNvwph%2BqQq9Op%2Ffp7bZo2opSVTUw0vtWAnz3gZrNpL0Dn0f36%2BYFTHvjuCE8WXufhG7D0Fljqwr%2FUAvqXC0HCqY3zjs9KWJWHEPpVuYZqvKkBSgchpni0dNnr5n%2BY42pYeNtF%2B2XyHhHCokI5HgZWXEgzua0siuv9srZVhmuPOMZGkkCdj5heU7fDBsltujId3IZqnO8FqiEUTzZ%2FBFHj1YR51QwQ8zvmfzSABkxlIMPbD%2BLwGOqUBec79Bx4lS6CrIZP4w1sSROQYXohxk5DrxUO4vp7KD1JYQbpUgaS6HbeRhXZr3bwL%2Bft0K%2FnOMN5TZUxw%2BEZ9gGB%2B58chfB7t%2BpojCMivg%2FQ%2Bla0Zxzh6%2Bf11fBP4n31CLdqt4kv2SuMUkyu5YB4nVaVTfp%2BWajrsiZiSZjDLZxazdLy0qOM2uyDoCW5pSqXdE29avDtGLrKBp7k3xk6VHKIgQWKM&X-Amz-Signature=29afa3a2394661729d1e00698e4b70e0e5a474c2c79ea6745acd9abd135b7283&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
