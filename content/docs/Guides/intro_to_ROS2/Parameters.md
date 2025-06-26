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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPRIWLR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCEVMKgCvKlHxZqu4AxuNmOIMYp2a03ojcssigd9FymuwIhAOxlmFy1UHAYAjpMrkds7IRaPGncUf%2BzgkGQAa2Id6uiKv8DCFYQABoMNjM3NDIzMTgzODA1IgwgPgm2ksqbMqt7po4q3AN3Ih5wpxvOa1h%2Fi5NFLg5o1ttv%2FvdnF5ogR9coLYhrfaJ3GIZEerK337ZStAzwOXjf7b41Q6uBE9j%2BmDBXBpzQxWHeaU5tC8Q2k5ZpgrRNyNGpGoMj0wt979klz0B8%2FYdTR7YuBaHGzAJDzrjflRCerpD80pkYJDKb2gnNHYgdwFJimWi78G0pF6zGhXwUg76fpws9vGU%2FGh8pFWi6AFQUHxCZF2rr3UvJpae%2Bxj2IUPKesD0QIyfL6pRumIs08SGCpyilJWY8jKy4m3coGVca2137bvx88ujO%2FSp6GrrIgwPpSey2W7h1rfOvCreUyrh7PMPAFoOLs5CuukxUD6dPImdhobH6qn%2F3MyDqPym4Dv044WXBPgt3ozibZsB8hZLUSWXhRCbfbPsfNz23wVs5Q0ST%2F2YlsbEmuBV9MiyGNvJsMq1Y5jhM9RgYsO109MIvbvFL9bvPmymUlxQupb3tJFcmYoNTdwY96rj4YdxnoyPwLERo9%2BGb7ulhJQfsps1IKIYe%2FMdpsCMcgatIAbiSXo27%2FCZ6OeC18LpT1rPjoHsHenjXEvmFzgoZLFRhfUt1LrpzcJ0Wr34n1KA%2FnadseG6GwoGkPPgTZDJpZO9a2Tce5fyCrsj3GpeaEzDksvPCBjqkAUZVUk2ltuPvwNPVkAG7bishIUss%2FHuiAb9VQfeWGWA%2F46vAkGjPdr70E54gZFTLfHYKDRb%2BScntZAqkMLy18alsptA3tDOacc393X7%2B%2F5qUGu%2Bkw%2FpoZN5ry8axLnUV5hQMxIA%2FH2sICYl8SbFM5dCgly8owJZ4ISxbLbE7xFRnTlazTP5avVKwb387LxL65%2FNFT3riifIixvB%2Fi5Wa02iVlSnl&X-Amz-Signature=7635cf777242748d969a8d46f0743632a8f32a5129f5d59cb44214bbb37a6069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
