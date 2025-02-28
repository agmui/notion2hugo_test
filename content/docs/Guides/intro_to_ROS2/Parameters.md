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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZ3SJLE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIAwxhs4P%2FUJ00OBoGfzVJ85JnR%2BoIULwWkKlPPmH8IDkAiAvuLj6viqh4Z3MMQH2APBEomgQdL%2BaeeDcw0xLZS54oCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXP9kdzozLi4MOTFVKtwDNzAysVK3f0G7eq98ZlpqbhJ3kqxQT9owZ8nqdZLgAE1mKbmRPY%2BqUX%2BAA%2B9%2FmXRKSJV%2BOcNJKrxajusP%2F8S7z2PKgwBdh0Tp1skse2Xw%2BdPCic%2BPMjWdtHmzjM79L5XPWI%2B8S6UAmAkQnUf9QT8OcBC4JKZZKYPoL%2FX1KjRWjvVKXDg6iFkGt5HR4vEBccOt1roR65LhnGULzpuyr%2BSvvk6gPhxiv9i3PG%2FLYrgnMq9RhyEcPJaGI9Zpn1n65dZzHf%2F3YvxfRtyRhv7K2u4aFcYA4BH1CdlZxNFTV4kaj9LzkCVIBgX6m0ywzmhic%2B5uqAtkFzAb6IBvRA9IPJ4b4UL7QKxmhtoOuaT7vvPW3bV8jvN4Ki8rUutXasPLG3wjIRYvmFclg4UuyTlenChC9VJqJdoNcxNwAbXySW63FFgc1Sz9NAVsv6niy714XbyATnZOo48n2KU1LeJFHFNrrjQ25sSoDtXjjHEm4kQKx5sL0neDle3GAtogDU31o%2FHRiSg7uvdod92dGUGPV%2FFgWPv%2FT1TVNsqPCokDUSsjyqdFvh9xCN59xCH7bc4%2Bajo6zWK7fo6azsMXuwGTPyi9rzGLVWCfDG7MM3uHjmPq5HbtVo%2Ft01NC3jWHDOIwgIyIvgY6pgHsrjUmOosn0IfVALiKjsw5QOnw%2BLK87GXsN4NfnstmkrhfhgcHWwYt12L7TVFlNpf0s%2FbEyBIpgXNr%2BsZuxWhRr0XGqn0kP%2BBA1XzfmrdaVg8aayeRWvg01K0xU0BrcXMPwYcNy4HYT2%2FMvurFqupjCS7q527e4N8BC%2BLehjYQA3kyNxCIGAYv02A1QvtLidNfBTrNVKXBHg1sTglHzAGuM5Bs%2FXhq&X-Amz-Signature=2789fa79b71892275828920662e1c893a1d3a957641c2510213359dd93fe6628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
