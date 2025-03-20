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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7YUCW4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDKXX0w3efcpuuGF0vlg2rVfBug8AW5RXa39F4Ak8IRowIhAPgqGTQT4pu9YcR7%2F71TMCnBpnSdk%2FOvkZDlfyW2KvUeKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ8TVp9lRQk0t1J84q3APna51oSXSmzHKlsFydlkHCa8b%2FZhv1TiBgWiA764HStVBvMon5IcLsZhOHAk%2BWgLDci%2BaVg8jhMRwvF%2FJxcNT6QGP%2FRoQxQtN9mmcE8EO1C51xlMMvXaHLMhTHApuodKMIObWoDdq4TB80RZmk3JvXy1wPU6ESXsc6iKXLbQ9h0VPdWtz2wT5v8hfJyIsDi7Qi1To7erZBJchtnF%2FHMq9GgE%2BU4bBQq5VwjBbX8Xwu%2Fz1o0txj3pj2LaAaRzF5avkD6au589VpcbJWd%2BJewpRpTeaWwZuLSudkWzvecCSiRjxgWGs3Oj9FbUeQe7TdXmWtRmv%2B8dn4FEU2XxdSmnoDMNPbBEXoSSAFfPij9pz8ZHekdCln6zym5OIsgGYl74eSHgF3Iqn5gxUlY8aRUinHBvaOtkpJmZttRuyqsrckPW%2B1Pvr%2Fvmqq%2B1L7iLzD9fZnUGlXGG%2FpuWu%2Fi%2FD3WqGxkZRvxDP9yKmmGNKL3WGh1%2Bdn5c7XI3ySP3qHB3KSyESPrhhmjnrlYdsajEsCGR7oQy43PANv%2FOlGGhN1Nz3xtr3ntABpU%2FkxHdy756zPf6%2FeLzS27TJ0veP7XKjxJeHRDhbn5lu0nzP14cE4GIxvr3DCDg3DiNgsLGlgqDCnx%2B6%2BBjqkART7eN5cgZ66cJok05fbnPHzwURGBPaZGf9DijTJmra1h3Ky%2Fh2yVssmMBwMxkBNZXMUaqsyhTh6cesW6fRqQX0po5PCoQnG0v3Gu3T2avbLFXQXzeVpRjZSUL32wLMrfQ6ETDRsCHFxgOGPn9i7QgZyOT5MBQAi8O2m2%2Fq7YddClWpRQXPvc4RIG8GZDizeKNymU9QTUodhloRhVovp7KgKl%2FYp&X-Amz-Signature=8de4f075b91ee63306b79eb3def3a83d972d83a4f826ff0cd8a5c366a7ff22cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
