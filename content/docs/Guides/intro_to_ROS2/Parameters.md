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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMNHHCH%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwkGKpODXoIA17onAkBmQz0gf7tDFcY90tpMaT4JErvgIgTMA11qECIg9QpKZrva69QiMGgNgVw4QnT7gT51s65YMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDDfer2GBC43L8%2B%2FWuircA5YqKGWv89wwXQAvLSdqNwjqn39iAQjAmtXQ50874QeSGV0Q%2FpDddOIjtUIXm05LXT%2FdSU%2FIaM8FYPduALeMBY3HfNu%2BY9FC1xU46ynDIc5jizgpW5RQD9syHQ9ovlF79TgC80wwWChvdrdJcQlG%2BzszdftaReiDYhbuSZzCVAyYn0P%2BBs7zwPO29e8ZFx618P1ruHbZ6FGeqO5jbOBTMKuCdZ%2BROX02wEiYp0mcjk7Ae60Ieb7Xp0nhrk%2FTq39KhjeFPOiyGspbeajYnNXf2U59cj2rculq8NJg%2BeOg34wg9uVXXpxyhHllOAAGM7TnuiVkqxWZm8%2F4nImgQPSsh1BKAO098JxcgNXzlcVVa329JSCT7%2FMGYd5ZU6RITljhLQ7Cu0ttVkip%2Fac6dF4FbLpHGN8fB4BzvVFfYmnKgiX3segdAzoKpQIV4m8ERKZMZUVHRjU%2FwHa%2Fg3lScUjdExmjtJknO1RssgFF6gXbP0hC0LYw5M6Kn63cbQP2Tbej7eyGVLKE2pCZkZnsUfZLT6%2FHvuAuspyTap2Gl5nWwnDj5R%2FPai6dmhsTR2nIm%2FYdJTQC%2BwLtbcSIWd24iBEIFotEMbq0iRTuJTCwGJ%2BNvNAPdkl6iDzxr7zSppv2MIOU8cAGOqUB%2BRWVv8jJ8uJdAVhtyrSjeccklnIQUzzlBtYqgrrPjVidihs1RLykkAMRykwGKqATgTKzpE%2BBWLu%2FfFZYi4%2F0DkHO7WMK8LC6l4wsFNhnPH3lMXbjwYZnKqzH96F2cbOed6qzPbJO6n9CnjVRY5VHFwkmoF8AJZSC3%2Fl9P6N%2FzQ65JFUFFBdK%2BP4hZCro9r9H3wz6JeLXeG3qsRJRuxMp0mH9Ceu3&X-Amz-Signature=7f5752eece5eb61b2d2bb88c6177c82899481cdc5564e9b316d497403f078ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
