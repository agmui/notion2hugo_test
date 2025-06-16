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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N4GROSN%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDI6Zw5aVVTjnuQ9GbF7IFujtY5Vx4g%2B7IE7sNoN1LiAQIhAOGuIexlnzu3goQPMbes9R59gaCSQfYjdUaPblTbdbOYKv8DCFoQABoMNjM3NDIzMTgzODA1IgxM5qnH3bR7KW56cjsq3ANz8ED5AFhMLDbXbIE%2BeENOTljpFSdlGFHB27YBimgjv1mw4rIODKD1dUe4E3ilTGM14WIP8mmLzCaKheUGAGhdf7Q9uTimJmwqoprYftlZwnB94D4A%2BL%2B1gs%2FGoXEzGMiygaSZOv2EULUGKc2v9CuwxJpHsExdhNy%2FLkp8DZHB4JW2YKa60MD9v9%2B7al8QbHaP%2Fu71QMn36u%2FWg2%2B4jaSbMq57%2Fdu32Owa%2Bs3AoVUL9wgxIeqlmQJ4U0z77PJHRi6RFXvspzaq0ahp7rxuYGbVRVHQYflBQwCiCLSuKxKeD2ujxwrd2IPen35bA2PWQnj2g5V41kABcpMqGCDjIQCyJrWokxfL3nAG9GnFZ8rYJ6sqjz%2B%2F7obcTx6%2F8S2h8jbiPNtkZAxt8vVM2itIwYXVeB%2FciWVSRoNBlYrb3URfh8L8nY23B2r1NqqHUdf7kS3sS7QwqDfYEM7DPim5pp4tOlMA9oWBBlWWjsZJK0xE9PNGGLgzsOVPVJoDxhzVuTl7s4vX6mmBHG5iLz0VzlVRAlZ0WjdiUo8jVOj6u%2BQVIpbx%2FuNdxizX%2FWL9cA0HcrWlA1PSJ7oddhoAlkFVitDMzZ8UWaJLWStAFcGFwNF0FxCiiycSdPaf6eQ61TCOtL%2FCBjqkAZidVziL2v6MHMEyC3g8wtTlqjR8m%2F1RB6TrJeJ3FdjQ%2Bd0jYZUqTSX49VNhSHgEhkxoeVAswa9wjlc%2BAW9KSdwj1lvDHMpwLYpe%2B6Se2uuV7tKKTSf93lPlV6qVe0REtzibgtdf%2F589Gx2KztuKFHtW9H4J1Nph%2FbqKha1%2FVG3IFFleIP%2Ffz%2BAMET9W90Y8T2%2BK1IgDQPK41SR7MPDlUOwvbfy8&X-Amz-Signature=d325cd6e79858e225b4283aed9c066fe43a9db80f98c3b096f0fee7e1f347812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
