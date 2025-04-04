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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EMNKPQL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYOf%2BA4t4U%2Bd%2BeLDQqVNUBmnMU4iQ5feTGFj8o8ZxJ4gIgFcyigP0e3rm9V6tmsfVoCMRW07A2g%2BZcJgxbbLsSBuYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOZ9XOiQeRmeVjRQ4SrcA3%2FIk9Xk97ZLCi2P21C1T9HFdZ1409D8kZwb0uScYCY%2FG0bGQuWc4NMTnSMg5rnsSW7Jn3J2M79TiwOAzbcUVhlZQGK07ygNUC3fUZmuM82dS5iTKO8ScUx%2F74mIzLCSao0SkZdq6ROsrmRYWMBj3%2FsydCpfx%2Fro2qQbWD5sTvW2stMucqQ923avgOJZ6ebyeGbEspGWhprS978fs6uSBiVBl1afFCQjJR8Q8MuGXljX937cJ73lyuf6KDEvuVOt%2F4i0dAAHPo8RXcFsrRapzfFGa3b1NcU8am4WXX8WSGqz%2Fwa1o0RlzVhfrljQNd3xPoLUaGwONwXjhV77asS5gPBqzYySUSDyRuhz129tTQUhNhGoWQvaSiDHxGqx898Xet8QFn849XbNXZmw3o4Hbq6vjohosgE0TaK%2BPM8OToqdnXZhZkf2S0W9IoQyy2skgpu8iPhWUAj49bO9vHjMInIMcyeQG3ppxPlYsYHZi8cT8yoHgACC30rMPwi7c6ZuSSJgFVQoJKLFRZqGU9lOGL6Mw5gUnU1GZoOep3%2FXIMLS2ofCNuTtYhMrgFidfu%2FbnBx%2BGfuKwip6ZWMz9y5Mw8rWmUgHoQqh98FVXtvNt5YRStl4aFmm3jDo2d20MJ68wb8GOqUBqdUckEXdasfg91%2FeFYckSHhm97XBONBhlkFPxv04MR3IvCoE823Q7d8xtshh%2B0MYeLLb%2F24DW37xE0MTa959weFeLgQBQ8DhWt6S8F56NbBA7RF0kVRFUlMka7TIDg8Qn2H%2Fux85QXc2vF9DfHPYTrnG6vlmITLy%2F50p6cmm868ATaGN1QN7U%2FvYCQyTDJifvSa9JCzZLVoSdydHkH62XdhSE5Gk&X-Amz-Signature=5af0af50f7365455b2b54ed1b2d4886bb75fced9c92c70ad1902bcede3b25465&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
