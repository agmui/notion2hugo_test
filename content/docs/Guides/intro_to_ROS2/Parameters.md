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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCFZ3JSG%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD7RvbFEQI6Ml%2Fo2q7xyYKpK8ZyMAEMe%2BzSBlkKDL%2BxeAIhAK5OYv%2FCKsZCZpnfsKRZ2uxZw9IhmGTRVC5dPpsLGajnKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6GnqsKcWiepawtHAq3APXavKDdCxrzI22yc%2Fz962%2ByStMtmzJSEXkbpkZMqEEraOpvZr5ssIZMa7%2BwTgDzuLYXGA8%2Bhcn6dCaqQ6AJYl7yrNGdUZg3FPh5Wh%2BqHVu8Vs525G8tDCkD5CAbG2oIq%2FC7WVVoshx0WwnoG2bU1w0I0L94JkiikMut7%2BZCOeUxGwSwIbSyLulSpRq5j1pIrDfWsK3pi%2B9rbAgryGRtn2hU0MeczEdhJIIiNJTVb%2BqQAXwghYytIUEXktYgfXtP5lt1BweWxpetwF9WNqblos2tMC9zS0HhRTR6WfEGfTFRnIrCliSWnhtFwvz5i%2B5jcZIjPo7%2BxRyjsZA51PR%2Fa3h%2BJbExCO2s2mtKwqutfUAR0xUvZq9FIZbcfNfjVw751nraMlZ74rHVngjRvO0mmpKJPJ%2BeaISPF1sTupmsKdotDadRWFDr1omyOUSwzUrMWVTOT8yDmd6NYJIHbaNq6QZ8eO5lzbK5R7VdpIdyxOasgAev0VaSt94Gt4%2FMOR4DfmMG3MhcPBiTzB5YubpSjqir4XgHVj7NEH8Nr25JruYGPpnZg0af9GkW5VK7zTz3bs8NB%2BpIbsizcBnHt1kGAK2lEKvtetaeS8q85hQAPywgzKxFKmkjtxFWcn8SzDei4i%2BBjqkATJ%2F3Kggn22DKhpmdr8yN5%2F6fNAUOHKsGBcyNVYXnka5cmfA%2BzKlMmsI%2BKgOsvX3b%2Bely%2F3r9OOtRHYKUAc778VrlRrZVWwm79c00JOeFUpjrrjxkxjoxlLKqliYwmUb72m4Mqy%2B5oEP4S3Pn%2FllOPsQv0%2BfbEYGac%2FXXfvw2x%2Fnod%2Fbv5h0XpySiZLTAkGi97y7JL3F592EASiMmnTtzqlzZZZ6&X-Amz-Signature=8c68352239dcb81a472cff154a4539e464ee1665531de90d46ec0e606b6c2b27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
