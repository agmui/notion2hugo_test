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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KNMTTG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBb8T1fsaEXnFWUKe8Os4YUq3B3D2qSjlEq88OYfGXjAiB28eQGa1%2FRFcGk14p1cL27%2BUYx1ejqRwRAkyM9thgypyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLplWyFYY%2BBkTrt54KtwDofV8zhlMa1i8NMMRABpzlnIBtdnf8aTjMVOF37jTv%2FFnZMPw9CTcvc8VBZJXE5qW1jMJlT9zARN%2FaUeXbA8ykBC14%2B8fUyvyeE6p%2BR8TUUQNecKuJ3bGPSBXBMHZPw1jtGs3ioLf1TB9QBhXddZ8x5%2F4ubbiJR343GQxUAsIS8EIe2zL6Puu0UrQgHAKXz6syOzICLACPKpzXrJA3rJa9olRaC%2FUCOsDMbM35evzg8%2FtCab6nXKSOmz4JQS%2FrtmbE1TkXRBMjSJSt2%2FA5E%2BVddKZOcgOgi6jZc8NrHysy0M2TfthMzqka2zIiu1ox11AAnySMAiulZ%2FsmW%2BfAryNmlMcv9hdnYL4eNyPUetrHSj6e3ZoUc7w8%2F6bzXBlAps4aKNjvlN9FnEFqXR%2FpywlvGLLyuIOqQ8TS0UXlFFBnOzbGQsoYvdi0qh%2BA%2F7OJl7hqU3%2FohMeiDbNtpS64HMy5cJupKq8D4xHAJ9DD37PvBUEUkWQ63HuBjukH%2Fa4uKcvraQzx8KKYh%2B8EoqtWC5oW7ECj3j0kk7xbbMKUVsi83e00Qw3XEo5SAm18iLpmB%2FPi8UEsmJBpIHj02EdkmzqKXhwOKS6tOqijJszaDvRKS2dfy6ACjuJoF%2FndcMwn8zIwwY6pgE3naumPCFQYytjaXJwPzzTEJiZOYX3nU8NduVMYZNyWsbAUlXyoFRsNM0tTc5RD1gkCMqv2E6UfOj97bdJLomQ%2FTRQCFvsdLxDSajTpH78WXe%2FU65t5%2Fwrz6aOgFmxiPPmRHBqIHiLEvD1f6v%2FxM%2FQzI%2FIlvHtSQOQSVwHNgaKNIzByfaLrfOF3rIzp25RE9qtffYqyoaiMFoVqvQwzre%2F6xN7Hbbq&X-Amz-Signature=e6947f5a6b6a52fe1703864adf0503931a2f1f69a590dfd7cfbb458e66f7a46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
