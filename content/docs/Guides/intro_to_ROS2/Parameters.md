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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TAIS34B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDJRYW2tZHrjVIkxMTVq1bmXfNqTLqUxk6BGiiuDu1EqAiAmMAuhOHyFvxTlPd6hCq38xPpvG3qgBBLm5fJffFrdkyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM6NCaiGWaL6iCGMNNKtwDNyxDWbtKuUTSDr76exH4E8O2q5mvLtqDqbSONuUwDrcwwPEDehzEPqm%2Fw%2Bf%2Bxps6bp9l97MOfO3CwmnRaPg0QJDnn59ei5AjBNLsfvny%2BEd0y5HOXdF4t7r6PZfBpk824uOhROQRFMmgvcY%2BblZDvQvpSVs4b6%2BGx5NmincK65D2vs0fgjP1Cf1HuMmduZ0S7X9gMIejIpf6qXKhjbKXSNa0sFhwbItoJfFtn%2F%2BPS0lTsAwo8tZz24UbnzyKoInFp8IeBNrybJkMD1i5O%2Bn8%2B%2FlcQ9njxyoJ7Bt%2BMtgXDA%2FXea%2FPraswgZEc7yd4qU6tALzoQ%2FQo7YD5FZLINz%2FrK%2B8TcIAiY%2BSJuF9OKry3Z98%2BEmyqteAnfka%2FWFoMYKmP%2FyaciRNq%2Bnv3kYz9K7X%2Bb69Eppb5XD7n%2Bd56d%2BU9Jtdby6qgY%2BpBiuUAkLOC%2BZDsKI7MUC0CLjXbJq%2FZngpcz4SHERuW3WzAEWNFiNat6izQMevhXm3JMjTIXxHrPsRKh5vbKqlkPpwXmhUCjKBQprGEQGsiU0KmgVICfYB8b4bAXal2Z0tLDp5r109BrTT4eR36rYHgos6eriF8hOY0cWpe%2Bp084%2BxH3%2FHB7C2uEgKxEvULJdhe1luaCU4w19r9xAY6pgFA6d69%2B7EVOhWpn2vUs12%2BRlVGzF0BJnkROPVBwrVE4HSPEFJsXyHnijWUKUzK1aacVthtjPAPkqBHUWRkHO4OpJqj8ClThKZyuvlEiaBfzjodHUltr5pgF%2F34mkMzOqE28%2Fq4wMxD3YWluaXi0woTSaf0WsCNkJHkFFy0pz4zGnrXnW72VPkoYZA1WM9kJuQNPirzcSnv7OOKawnni0KFNizSQshz&X-Amz-Signature=f6052f5ec0f1e31fcb2bf56240cd9dea3f3ff6b8e49fdd001b9aff3235f66ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
