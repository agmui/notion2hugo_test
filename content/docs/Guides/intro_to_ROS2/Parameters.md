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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC35WAOY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDEY9prJWRnQmXcZzK0Mm55H63mZBoe55A2ecXnYKuhgAiBFVBHWYSTh2EZkNTQQB%2FB0n6yeJAEdGemFk7ChfqpeWSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMzF5wonysstwgBc6tKtwDuvMoW%2F6MVKVQuOynfdpcQzX7Gp%2F1fojJaTF%2F4H6QnTm5pIQSZMtoT3MPucNDM6gYj0sDf7kEv8K1d%2B95azmldMe3xjqYP2WT94NcgGlEZs2BDdn7XbYLhKDB0ws0EyXqIrUT7TvC0NlM1Ab607OVGg8LhpZ9MM2JrPjVA6qwL1VM7gT44FtN8pG0Jffmh3ZbXKeVPZpraw6RR2Q%2FGQyaY0RXK87ZA9T0%2FGZVnSgCZeluC151vWIika8KSwr0odZHThc5mYnqijDSn9qY%2FJ3I%2Fss%2FBedC43yW98iC6oremgwvzbpEGXhXony%2F9Ofa87WgyRgx379VDLSXk%2Fs5poIgaUL1mbKS8MKZKYuTZKVI29A92b3XxR8rfA1TPIr3cOSxctl5TekobO%2BOrTJ6QOS1cwKdPY8Ui0%2BBxTXgJ61smR2p8lDnIjrrzBSNG0NkC2je81G0lbU92QNZbqJkNkjPu16uiYBESHWsUHdb5LUMXEoCZtnHIiuUbSXEGlzAGyr00TJF%2Fzg%2B8xv6%2F0CoovM4Wa1nJzu2qDPzdA3jnIrk2DE3dsjEOJsTKbrAm6EvSSypJfiz3YvMFp5i6uvS1VesMGSgjS0%2FcflQ4zovFfAZVgPtJK9%2BXsazT6ltGlIwvODFwQY6pgERLYCID92o8OvcvTh7jjhb291MORV%2BuWin1rBEcTg1hfL3uAka6aZokWZvGC2VIaJstxHfvimmueWexGlrKpCC2lK7FH5QjN5OnpIQxLCD7CNQCeSfxWJUW41E%2F3sB61WrOfHpUjYYvTiJsWPlP%2BlDVm8x3j962%2FuDgI%2FP%2F3SpXKxZ1QK%2FEBe5igFeEIIHYny74nRPuB1Bxs1nEhswNO5whjUSVQZf&X-Amz-Signature=16f716b3b631c451a68e7ffc1a96c0bc5b3cf16f73cfb437e5af9d615615b081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
