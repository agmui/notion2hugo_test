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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XCEPETE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH7esxEKZU6AwBbBLcpMiPP8aoLiOqPzc%2FykZp8fowCIAiEA%2BkN4xvCKcaq9ziXJbwzf8H7Ql8kqiajX3H45sPPSt2sqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRoN2xqPLWIq3Ec6SrcA%2FerVfiJ8pWA4%2BTdzwmnevlJfDK4UB8bN%2FAHMImCexk8JuNpkcUTCRUnH%2FZIhIMtNUpOZHK8wBjIkclVMq7IhaPZTc9D7ZzSwZW%2F%2BbopkYzExkLexuwRLNQdB45VwvFJEx1UOk6y3HjOOgN6REeUPYB%2BK7Fm%2B5hBygXMEiBTbRFHZv2YfyBbEpJoq1uyraqZsup0S9LmZSBFCGAQQGD2VSYkxn8bYnF3oE4SS%2F6vzuT3RGDDkUpTnVQF0580chCOtcB525hxIVGltW1zoxuTN4fRkf1tYZPeRKRSaIhqJRykogMaxywu0%2BQCs5S93VX6M6BCqL6P7YVuZlHWTSQ%2BsjtfYp%2BvvLi5UGVzUwB4dmwchsNxBJ5MnuG5ym3EfxvwHtURECGSlbVlyIOhYUHe1bPyCWnBx%2BiyYIFM51%2FEPWjErm6NTCpW1MCyhxkC%2BhIYk9sU6DRZ4Me89du%2B23PgmS77HLEnGlKe0u4Z0QxHxAJbcyrxLCki%2BmLvkiQ4KJ9Tsa6O6fr1G04ZxscoB0Rd9AXACnrgT8uJVzqk0yLSq1kna41sw%2BNf3CBk4%2Fo%2BWOLDqkkfXmsHTokRul%2F0ocx%2Fe9OvsSk55pgvAcWp%2F8zWKiazSZE0BxwIqGD7s8KNMOnd4r8GOqUBO1TUMfQ%2F57KSEIL2xwax6X%2FBZo7y6Hqh59Ug3rNxeru02C%2BsFfFD4tAXmY5DwvlpXWQ8GsRCkfCeFp6g37FGrnD5DaBSNNSn4Xijyxsw5Om%2Bvs9ugqOKzMLzEmvJRlONqrxdHyvUIljDjOkRsoIZXJi4Jt5SynKcJd6oZ%2BuU3vQOHZTujYA4qPmjmQiHEMtPZFJwesd0nd7JaP1UpqaS5hyWlkZX&X-Amz-Signature=3171c9080885334dc4ea4885e68f92b81dfb44d34cfdd4974c3f020a52eb715f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
