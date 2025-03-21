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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNWFHVU%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCU6GgFEibpkHRTHF%2ByvhwNa0cxmWQQYi4xWdSDp9%2FwEAIhALCRrMcgHrOo7oSlmwIgQCYXcTh59G2Nq8hlXJtPl%2BWSKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKA77uPD95nzHtjlQq3APo01pdjD2haWFHxldgEtQmE%2FpkHUMmbTOOXtcbBvqOF0N9zeQmcT2K7JpMZu7%2BHGe%2B2ANiNvSCLwGN3xh4VLeqTg4KBD9dbwjcJYyNaYX95ri1dqmcGwBCPZWD1GfJfPCF4oPoUvnIRMmLGSjJG01vmjN4BqSXiLaQ26I21SGfD%2FLbsq6Wpygdh%2FFaTm7wcj7GyxK5ahO%2FCeVs0SOegFTviMNTOshLFjyrcqxwSh9iJSihjWFcjK%2Fs6f8fBAzW3zDDyaq0a4NFklpu12F%2F4TMYS2fGWQAPRvhFu7ll0Yzw3uHYYMvisdLBL%2FYWqMexBmRO4M4ijP0gfy1bOHo3B05HRza8ZHNEntsmJFOfyPx0E0IXVRALeNJkq9W%2FbqetAjQJXTArd4zxj4Bk7WSB4jmqO1hYcc8WWoo%2FK3qcC6uDDcY%2FA8HKK5jlarYixLJ6Ooru0WFajwh9wa5DpS1HNmaBYVrapqbayPH%2FjQwvZ%2FbwVsYpyet6t3pBAzcVnLD26ZLvOWoXc%2F1iESpc%2FBIuXRgLVmEaXGUpiHSTQJHKGIl0OSGbKC3WntrsydeGntxggG5lVGqpQ3HL7oJDp0LgRP1r1MmSYnbfEo8f0BypwaI3WIMhY9gLL6aGRJ3CMjCIp%2FK%2BBjqkAb9xs%2FlC2ji4KWXRpwp5ddjuhQT7z7Xo%2FkFYWTqMUqTO2V%2FjPPqiPxIezCGRcYX88%2Fuv%2FCVarjHY20yKKYT98wERQk3gv8rCKA8G6tFuyB5fYzbmmeO5o41GEAMxkgiayJ%2F3vcYO0w%2B%2FcCS2AyYfhxl7SZyf%2F0dfkuEr%2FL3HTzKK1gEiV%2BY21LiLH8V2pQHomGWTV5ivkjP5TgwiOkPHCvuIUGTM&X-Amz-Signature=a1269fafb96901e3134180ce36c407967e44939575620060cbba03a533eff300&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
