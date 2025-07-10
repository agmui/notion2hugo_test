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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECZXZV5%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnJgBfsc2S3aMjYVw%2FPn0lKCIvqqSNWBQQFfG9fba1kAiAZbkJdq2fPk0SiTCZrSmlIZAbQkeSnOPdoMsjPNRQ43yqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBeDBbagFB7sUSxOKtwDVN75H7Z19FXTTx7qy2YP%2BYchJXRIuDkJGVqvI1JLPwxkbSvBctUPaodrshZhLsd1Ehy4XJkW%2FhwgnXTiYT9d9TeAVbabNwf6Zb8HSAPn4VCnQ3bprdwkK4vt8ozFN8HCJqm8Ct8Y6WQx64Zgwrb9UhLs1mFxty6WXJwqSPl%2BdDPGJljosvi8qMH2JKSIV%2BI%2FSRXxZxCGFvDG5EqCcxF%2BvezjUPJeJVXxGwKQQ65m3kn0c%2BQOqAyXeoKnSSRLFn97uVbhp2e03EtwA1PkNzgOEhmQYkB9aAuvjEYS18Y%2FOSVUeJc8UIf0vVSNy%2FncNFg4IYSWZzMe0U5BrvweVUrNJxZijUtQs2jM2Jtm4L1l9RNbwa2FLyiXBgS%2F0AVCI8lycHfuNGRYqBH8bAExyobY0KJxqILEcHvWOfsEaAA0XvLtJ1JVrqF8iRreVaL2Sz0%2BMlrbU1seJb6%2BMEfFyjv3FJZnCDvlPPHSiq6m244RXjHR9to7fdeJWe9gfuetNJvz1nndbLlAMvOObdv6rTnfGTEs5D0ZsOULOjLD8Q1MTHyfht3ddj40Wjhph0Spzs2BSbnCNeZjX2gHpJ1MQSU6CX7B7%2BurfNDhVFiSVQZqXxr4Aoqs%2B06hbBZeqMYwgc7AwwY6pgHnR7hziuDGXjfHxGXFOOIzasE5a2s97fxgPbN%2BDdKIO11IFFGV2eV3XASfWpdCcH%2B4qxvTZVc%2FPhR%2Betkhfu7gGCffBnjz65kbBsBbyYO3B4M4hHtgOh5zD60lvix470xjcNxDlvIy87AwW7H4T6UltmIaHRUalMwfyvsTFJbro3gSI1AzmNBkAz2u0Wm0IIZHBDl53oCoVulaUtxocp2zNyhFNkEH&X-Amz-Signature=a2a744176848e894e3c37d02b6bfd1be1ab5d541ab67acf43f9c2d7dcfc5d8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
