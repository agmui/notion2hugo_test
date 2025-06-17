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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYHQJMG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFbIifmythW%2Bix3T4dWNXnc1YB23Dm3fgAQ3mJ0nnEyAiAk0ze%2FIPfXEuUzsxqciFWOuck0%2FDDLGI%2BaRURBsgesIyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMJWR7Xi41E4aAAttgKtwDSGcBBpmqU8dfUyfGv1hyGGNCKpdx5a9vqTPTh2%2F1RWqGYtNewk%2B10Jk0KYSuvBCJ30j9UA8WDTwlR4cI1j%2BP7atP1pzMrJldhXIR8IYoZYN3CQUnJzWATNRLcXxKW55E%2BTNj6Zcaok%2BHjJEW%2BVkOVI8%2BdZxBwzpU8BKj4Y6mZfFRHB5hCQ450EduAlJlpdJtTcB88FufsS3tuXqxH3nodWEq7DlVLtFwxTFWqxO%2BdMJp%2BLSlnPuA47wFWhe7NOkiKjSXefKVKi2GKNXwOOueXmAGcrejpZZSJSBl%2FDNdfqDsXSfWeRsuukls8bTgUSy38aO6BnSntmbtDEQd1BAgutH5qPYRYk5uK7IYsRCa3Bw2NlGY%2FqWj2Dc37%2BOeLYHhKtyuYgWEE00yEyogw5wAn6Rf3Z%2Bbh2kfBNvi%2BdY4PXDliYkudvHucBD5f8DJ8t9CR7D2V0rqeaGEGMAfF04jRpstAFk1%2FM5sh2LRan%2BPAMry2%2FUw146fHKuFlk%2FYm4exDy3mYoBN7lm%2B4Htt6qElFZV5ghVyUD7dyua%2FoHijyGqKMrq2pg3YuLj0Y8oFjppPJWBiXjGiDKACHpSucg5dAEyaJEjknQcumUMuZFqeFGLRWyJdScLc%2FK1T7N4wxqbFwgY6pgFGpZobX56jWS7Bcv2G5hpMJY2XrysoozcZFlTHAUUhx11vx0KJ2QtWwuwQ5Kikv%2Fw0zirzUDLYbCbp%2BeWh6UHqy0VJE6nnDRjvNI3VueTfZxbzp86zhKhy6xrm8u8oSmjIlRqfTVbuwbML3tMyEjppH3Qe4w5OEJmy0iSySbUFUVW53U3AUENkxq1nCDvRWWprWC0fsyKAH2J0lcvXczBvd8dVX%2FcW&X-Amz-Signature=e16a6f13cb5ba9dd1ff35d2158e823b678163c0cf11a3c76824313b353f4496e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
