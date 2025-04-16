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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYGFRZJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu9ZDJeQEHNiwSLX8sOJeQvAX%2B7B7i6eLmKtUKOJeyZAIhAO3WWSTUGLr3Od6h4KCVBAoAYSDA1bh58MHdPjOrY14EKv8DCD8QABoMNjM3NDIzMTgzODA1IgwgrdfOJaz1PvZBqfQq3ANKu3dJ6HWpsJ6uS%2BBylwkN7lA3IVEW04uVFAq3Vux7g%2F2q58ZTBL2D63lQ1LBzs7j%2BmQRnCsIHoIO8G8wuLzFkMYowFE6S9CMAiJHgOrg%2BxZ6o9s22w%2BjfPwancCF1r3hsA3jU7Lb614xar21Nj%2FkYpeHHr7leDB7UNTKkHc31bcuPJ%2FUDev%2BD8J6vLQ6pdi5fzqdVfKNXVjoqbc9zoLM1TM8Yb6U%2Ful%2FxFUOoAOIOMtPvYmwUfd0WH11HF2C8K0ekfwiUAgemfcjAu6Gn2pabzQxh1ioKxNJfLNyUN1DTqRn5HlGb11ZlXCdCMz2VpGcmNW%2BaaT%2BiVjjJobgqsijRDvHUz%2FYmcpR7oa0v%2B7pmYLiAM0jRXVARtJ%2FplY5GztMwbmrFeTt0ZhNl9CIqATU6jvfHW%2BOrl02pB5WUWiGSPl8cjuid%2FVOWb%2FCR%2BY491NhARqvcSkUzV0f1mcodqyJEP2VRabadFe1lU2vPcJp5pPGXtkY%2F7SfoPX45hiGDxuNP5coqZdrMbliicQ%2B%2FHuNxTlcxG%2BOxeP7e2OfUmY4KUKO2Cq3coDUhp%2F9OxOSA12kPSP3LBz9yAhJjvBdU7l5bYc24Gpb1pQO5QHJStkVHKoGYzfnBJyaiu25jijDTiv2%2FBjqkAYLr2plbuQvNHfNtvppbUwzWwg0MLVyZ7MOEsQcZ1sjbR0u2K8dx9nB4BAjuxuiniKcEghyhIRPB22FXsHeTpQv%2F17eklPen%2Ba0guW%2FcW8v9WzYH61%2Bpx4YApg4tvvk7w8OXgIZ%2FvAluF6yHJ2tSAcn3%2B8QuGWHMIWlWhjuZi5SC%2FzpgOTp5xVQJSnibBTeJ8yP1QG7BNOBHjHsrtgDGHJbneCcR&X-Amz-Signature=92202dd137a3c605594d16ae11da43f0aa7de41f63b03baa7ee1c6c015b9d8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
