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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DP6VWYA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIHsIh9bEmujBz%2FAWuspQkxZf6Djc5aULvdAoAb%2FXyLsjAiEAvPn96mrn8A3NvySCWW5ee4fP9miZzh5S1Ng%2B%2FihK2Y0q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDwPvx8XQzccKhYgYSrcA%2BMy9V1W6qIIV5lPAWiBKIICBsNcek34KkNPv4qk6LPxb%2FflU%2FG6CMFIWNZ0%2BrRGSeCtGycbwJBMz3Ms4yAAgJvvFCAdeIzkZMREyoRzrw9xEK4HB3F4NTdKU5Ef4JAtHxm0%2BZXtF1k%2BkNZB5BUyxkE8MnU5Y2AqMtG4CV5DArNz4c6GhcBoEZBnMCitUi21jdJdS0kjh6jmZrJZwO6iGoLmw%2BwsEhxbHvcHB6dfrwUAOOVJI7YLZ%2B%2BDmA6oIEOTfP9Xl1ilaDu956fLcS1C%2F3e%2Bnu6A%2FZE2RZ5K8kGHJEWGwKf7IjNg4Jwg4rbCE75KrvLRbhOE12Q2wEV4Uh1k4wtmI9eu8DP8d64US%2BRFtte8qJTInsPMvxan9QljbX95sM6eUP0qB5EBHpYS4NxNgSj%2BRYFaAzxwHHgkJwCFG2bSGYq%2FhZyfnCZOw9eNqC64Mq%2FyA8EBfxyq3iBC%2Fuf6a1DdYuyzDJR0dZuDJ16qOgLpU0c3QE0n7s3SGdq53dZ9%2B%2BObE87btWrmjMGb1XOFkrzm9ou8HmeHW6rqeIhbCLd5AcOcvUYlLgvgC9UFp5fIPmiznQPzEMOGqc4Zy9kc8Je5foMV2U2WJl4XwxFjWVfs0W2aqeqNXctF0W%2FtMIGdlcEGOqUBlY%2BgjteVw%2FWB6tpdiXSP1AJ8WK9VynQkalErLeMELm0FlR0xZrZ4Tw%2BWjzO1O3%2FOZC33%2FaasHFsOYY6OeA1JR9%2FZdT8xu2viIbMQ7CSYfDeglFkYYlVNP3Q76BjxZYtfXSfHsST8VNjXmO31NYytDxJj%2Br2aeucajG0Xv5aqd%2BTV6y%2B2o91jMqKoXx6WhniQZwY%2BvvAXYVcQEX49Hzwb%2BHSamlwD&X-Amz-Signature=e96ea609dbf5707214f834bf37a0c15c7370f4ab6b83bc72ceb4b7d789d2532c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
