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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPL5NOTU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXuUczzJvYegMtFiwiUoWGbKL0mkeE6Vb5sy9Y1L0h4AiEA5o5DMJtfIdcHGQHkd908YB4ogGL2HxSUfEQy%2B84hUFMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK39O2mySHACKPTU8CrcA8M8Bfu5mLzhyYGuqX3v%2BQP0OIzOFe3B%2Bb6cWf%2BUcDaEJLuJcfyAD99uojKGSnHj%2BivA0jvO2Qw2eYW3Rjj8IvWxnZ57vBHWx54jgZHcXdcgEZ9Ck0yNbhNsv4ve6ntqn0ZvDQbgwyfs0iuU%2FC28OVV8iigki%2FGgyr8V%2Bi4krnDEEsGrvXkoevkoqqG8n4NtSdpW8aAGdqzln1%2BB0XtkXeHugdC%2FMBZ%2BNkTd7OSOzgQtdYgvyEmLIaALUYMBAkea2tZgewRZyUngfG2P7vVZ5%2FGREnV7xvQPpoIcQrBhSZ%2BZIvMGUf%2Fojng8lUzfVvVXqclIB2b%2BWrScscsePo7RGZs%2BkeU0rCRW78FtXaXW%2FLl5sR1IUdZ%2FMNEHBjJoI7X82Dmd5yDhrEbPyCvCWx1DCYZTS1rQ2u%2FA0YS3Xy015n6DklxemGyphnUdK2RvErOFgwJUqMI0iZfqR9kjhVEzLIYvKcpFMZe32ky0IVNHSwJAAoWDAkoE6sarJEVikCcdvD%2FqwOa%2BQbURqbGx1LD644Ci5sWVuMvpKXTrUuQfMz6yY9rrv4g2vfCyUTHYMZx6%2BYdccltV4Cr4wCiNQpCAw8jKAPq69FQScVLfLDm%2BASHtT0XYxBncC3Pv6Dx1MOWhjMAGOqUBlK%2FFGO6yuFvQTr6AnbwoNUaEd4sy20P788OYxqWKiO%2BGjSqqkrCKuuioEEEuGzwvQXQtNVEhuVrX%2BopP9UOI98eiEHrwPvBk1upu5aOtgc15%2FpFF1Bp8At3DdMZ6sqFNA3h6Bf2WazroNdow%2FzYc6k5zXJgAfgH0DsjTr5rWh6dVI0P2v5CJBS3V8dhXQsILWUZbqRnOawt5jy2U6qBUYDTWrKdR&X-Amz-Signature=18982f47f3eb1cd4556a8bb126f191561a4e7fd9e3043029db7c9566bc60d100&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
