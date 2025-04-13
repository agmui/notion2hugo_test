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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQZJPLOG%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGQjA9339bj18Dlswb2ffdlff9RBCQqewL9t2s5oc2bJAiAbe79HxFMm17QIQE3%2BxU9VDSZBsIKD5Vm2ZZw%2F0gFlDyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhfqCFgGy%2FiYfHGsKtwDfySFfM29mO%2FNmhXMZmQtQIj0dP5vZBY8uHjnRRcqC5xAn6gYGBzVjiTxQ4Z7gBv7lBF3MoRiBURW41gIdAHFyNhtKi9dhY6R1rHw4KZzLHdVirRR9QOQB2b8fh6MiStld%2F7sM7NsXv0uwUrjBF22S%2B%2BWGvu9DCK4%2F4D0tx6vJX%2FQT%2BW7LnIBoxJyEP5lLqvgs2Ad2glrn%2B26oxU2ZXB3MlacAyYLRNNsxXh08HP1oVE4eXhqJIuYhT9fT7d2QQEaHuiAUOAr04r3orRJT39KFpZWCJF6r%2Fi4A8SXaR%2FSVf%2FzUQGwfdK9FaYpwS1xG3C8M8lH2pvaNg%2FAbpvKcTcwcRTL2e9Vqhvqx5smF%2BBUISPwoUHXdpxR3piYMcVuyV8lb2F0%2Fng0g1FXAd5Nm4HG7Em%2BrP2FhUDcSCGIr4p5q5MThme6KtNxf033RFJWB%2FaaXTI1q%2BGFqfHn4aH80raoFgx2JtB6CsflrleUyCAJVbshcwZiudkqfWmth98298ZLpUxVOhBZCgAqGVuMP07UwQOfv%2BokAlMt9tbyKPZPqj5NfMCViwxsAC8cJuVej7qKO%2FI2tiJlX6FlTHxgjmq9KZhbnClnHxN4UA61yjwdPy5L%2BL4IgVihQhv%2BNyYwk7HrvwY6pgGTdRk7w%2Fh2bOqFS%2Fmzhu73OSjPqXNVpul6HNGUQ76bg1J2KLXDPIjx656XeucPvvzC6sTZEJWC63Ljny1iaHcgotNnqbt%2FMR87clhg2jBuYyI5%2FXhuYGwjUBDqFNFsqjIQJnhy%2BQ01ByTts085NoB14BYowVtE5TheVtZI1gbDkd3%2B6JCuoBhVCLBNU4LOdKhtYLTGrpcSD81E3lw2UUQFdDzQsE3O&X-Amz-Signature=58caa737f588433c52907cbebe5dde49313cd262ce24f9af469514899f477c38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
