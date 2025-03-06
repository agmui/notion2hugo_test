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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YWBKEUJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T003752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnxYtWG6FR0qeTOwHG%2FJiMmAEf9yT8WSgBYkNpfihaegIgYyyAVqv7kYez0QxnCYXGG1aHBbAJOhCMrsPkeLNpXEkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDFE2lPyZvpi7ysORVyrcA6yhBpaSOANUYfrqCEdqB82IDqqKJPcDFdDeK1ZtCMdjHtsPJPcb4Z%2B1pggupTkAQgDkIbVQtxrtEtkCUxTsTgz7svB65QNQEGh4%2FNi290NAu7IBKMfmfbwXZFerYTzvSdiRdTePD%2F1pGscxEGWX6YoM5uYsnr7c%2BkG4dTQbBHqGAUmexH6cEgwfQ9QnkMBHtMUG0ao6%2FobIY7hbMIhh69HE%2BIyqPWWeGLPlA9DoUqrd3WzMvYLqgTQhopiN6IY9hLRgCBX4%2B5gl9uBCcP6HZ2ccu6RkZVpa928dS8zRD2VqIDBBpHXiLnryRqYoduiqXatfAH7c3ojd62nX0m7NHPtNuDpzmkHPL15Z0M%2F7IlMq3uSV8WlP%2Bdn%2FnB8LzcJFaOdRJT1tnfcftK5UH8IpU3Cp%2BoHrObum%2FLS8e8rGNoxWJqt8KS%2BGv%2BSgVr4x%2F5%2FNHKkumuKdkoliDOLzCcY%2B6xwjr1oHPiaCY0S6cZc%2FJUUyKcaKrsbsVv4rLNMyYZVlYWyLtAQSucInw80%2BfMOBvfRiUsUyf9uDyMnadaTM5NBzUnWHQEo0z7zqnhT7t6IcDUsOuooR%2FqJmNAyHoUKx95aksjbEz2tjvtxqE9S17Ex5w73A8JwDkzB9NfoFMM%2FGo74GOqUB04KhvunprF1IT2lZiWbgByu1XaG8pl2QIC43fGAZ07%2FdtfByIcKPRnKpjkX1aSrlmmAmKPBb515%2B%2BPyvE1twTZGgb4tknhtdIeBSyEc9FfhoI8L7TyQSaetsjRkHZ8xOE%2FoxektkXTqfwexhGlV4aby3AQWFml3pKBS6RmO8bti1U82he2qqv2m85i3CqQ8wMk2i8ZaBRcpqEW0%2FnuPuHqzHRruA&X-Amz-Signature=82e1be8847fdf82ebb610bbf2c6e04329d37afb3a41a5c5474ca18a281742605&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
