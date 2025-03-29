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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTOMHXK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCPvdKC1zbCLnL36M%2F1ltT68yPvlslceJeukI9%2F8hscOAIhAMYE%2FV3jFfgpqELy51gHe9fNdmmpxFsckqX%2FmX7ah%2FmTKv8DCGgQABoMNjM3NDIzMTgzODA1IgyitFxQ00s3zD6eIyYq3AM9BwlkErT3tvPHmKPzQn%2FFflo4XpWQb%2F4yCYWnY3dIbedWUdxPBlDg80eGxg4C00DwTyc7q5SIuw2YtLYArA0hnJPhmW7bZ0OLtjxjFSqM2dSbNJQL1sCri3tSOA9u%2BDYmN0vV1WT%2BgMjwfQzOqVGH2d%2B0fS3C%2BvPIyRYk%2Bu7SDDROGYbFpqiVv%2B%2B3%2FFzIu3B0y6nw4wDhUVpT8csr0PfgZNu2CbFiXClDqg9PWRA%2FT0gG6Q6utafgUGnAgWUAWQCcK8cB7qiC3OQGq7yGeGsAUh1Lw9Ji8GDFqpPVjMgc5bEZIs2K7UdXm35OjfYbBkoGPYnoURP8g0uYTx%2FZjeZ18A90belKrOS9xW3uP4MC%2BBkPgrx5VtQOVFYJf36c1V2e7zNyp4EDzXDX0fL6oaLi8KsDCOvHX2l1p3AxT3D%2BBm6c4QcJgqOjtv2bWDsWA%2BnhxOnf3iAyEuBbLPfjUQcE4HnbY6gWrOlz8OMeY2G4pP9CDgFBBRwTKsf8fO25mjgYy69IGSYMtuyic58wk%2FAbweK3DD1wrx7JL2Zag6fRGYIKopGM6CX8c0rQ09ltL%2BamhZTFcjY1j0BMeKw6clH5Wv5rMPHZzvXs6FRFl0x3EfULYfrxeNwNy2DA1TCJ35y%2FBjqkAXP3BbpGNLolnlMV6wQWhE0yvPnM7AO%2BS1MAvtS3%2B2QPUg0vbV%2FE7H9fDNGThc28FtwoPTQhrxeogFfkmHWUbpwQ3kVhvM%2B0Rt2IipbaUUiG9yC8nj11Lo8wRskAAcw1%2FnTvmN0i1BeDmrLglgLosT3ewpOW%2BdCr7CGT5d5X2UJttso6868J6Jrcf4i3v2wWgW5vwZ%2F3EmCn5mhyJ4TPmOlklpY3&X-Amz-Signature=958f6608022f58a75054f915416193cafff3ec38949773c4231afea010aa1409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
