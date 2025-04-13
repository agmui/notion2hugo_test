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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JDYOWX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCID%2BPelGoL4bm2ihKIwx496nUyAmH1oJDFd%2B5O2PesRLdAiBzUyFDoQSLecwYDqg6X8oe16azMMjJ%2Be5Zy1Kfsj2MSSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUPPP8uz7s3HvPJuKtwDXexsMIPZj3YIvbOnJ8eWQTNDxR9%2FAKXRf37xkCjrKpJRvDXyU%2F4K7pJccf3tXJ%2Bedpqs%2B4ImjvhbQADgd2U97jZlq9Z254sUQvpJm8jQOHx6ariSOX7yJaO8Xi6bK4LITs0gnpf1hyWkxvvZtM12xER%2BqYUC7DKABiqTMihPgpbcc4YebHhnh%2FcRt5lVZWKB%2BaeBQq8msQKbp3F1jfNlKi9cAzg%2FrWxGz7rRr4WSTeGjgq9j6hzT7Es02JEzkdY3r1fBVspiIUaCGl1sR2jMbpOdbfFghc%2FTCwgvKSS5Phr0OiNKNobS6NBl%2FUY7%2B%2FTZSLjLGNBZboF4%2F9c7yJ9mBoAwkor0%2FWSg52y11dqonXfQVnGdSMZaDh0ohPleQFhpNl8fT1WG4jKCg8AesxBaIj5lzIgoZ3Z8HlM0X2AqWI8fIyT%2FZ7jRAIvgBVzP6DQn%2F4bxG3TUT7szNEy2%2FAUtnKPR8xzyEifWu4YIEwkRHxhO1hp9UjDCzAPTR9pOHIj8oiz85uzILUS8ZTnzLNMHsA%2BWvWreVLKCM6%2FKnukL6DzPZwqZkwVOti6YKRtkZ8WYqWptGUJniwH6TzFAILtfX2pVgHujQ0Sxmp3cgNUVKbGAdAdEp0yo7yRtNjkwtb7uvwY6pgE%2FcBtX4Pji20vOjF3mfScDelYGGs4kcZTDA0WJ3phUhfWoQXTPqZfcmo84szn2bzeDyirS%2BOdNKI2Ic%2FVeIZ8uTwiBj%2FNre%2BOw%2Fwz%2FTDBD2da%2BP23UBDF0zJd8JxX3P%2BIkfYqgyxW0Pe0crKCVNzPDghcf34yNpz8L3qLoV5GphmfXrfX3C0RgEABX19ZBB1OX9iB0k8lIigj5SoMEjxQ4LsGye%2FxN&X-Amz-Signature=560add37de448deef33f8ab8d2548e653b869b0b10fe888ef5bc6b860c7a52f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
