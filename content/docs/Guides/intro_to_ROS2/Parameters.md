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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHGM3MR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlhZslL%2FhirsacxPQjVGFIIHbUOLUZ1f5RWEaLBLHYzAiBzT2w7e6djzaCmiQrWHrm2pEOAKvlxTSUTZx51yvjGvyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh1DvalnBVD1YMLZHKtwDfm7zDNunDpsStSC1Fgnnl8pDNxKGfK%2Fwk65y4PM%2BDAgkj4XFWbZ7F9Nlj8PXyLb6wCIYD%2FbYlK7Dgh2BHXCpYQHkXYkz4m6LjShPf4G9NUDLPoYTOlYc%2FAswXK1hi7U2sfcUiy9o0xz6awZ7YV8PjfJmEzlgvShdrvuUYJVGgqfj3r%2FT3RFdGfhUPilMmq%2FfsP8GKCNdnXf08LpOYlYnUJYydyNPSvQGyX%2B9Xrn6mTC%2F1d5rkJ4iZ2LpXbqAg4ygzh9lKGRzdmHEc40FYajv7oEbxI0L4%2BIwr%2F6kVcJ83lDOICeveNfJ%2F0LnSCWJ8ydNJ9zv4zvITc9Au7eYVcZuinwsxJpxuoTHtHCBE5EhwEMKA97jrw5KDKrbUKI2AYWs6%2BWwzvakO2aJgc2Qiwt4LagtjYK1geZblZGRjl7CIACAYesizmfj3zTw2ugDDdLAKx8GkXkv6FOf3MMbKiZI5nacgkzBDUks3bYi9WV7YngdMsayyc%2BNckY5mL%2Fbf%2B%2B5qo9Jn%2FcEetFiX9KZFeUT5zF15okkWrqOHSyqrlxdrWxzG48ytlKaXyhxwIy2IsipcI0F%2FSWCBr9FjStT3Mtgadl1weZZtIFahb7lfaibR%2BeaRgGOSw8KutBwl1cwq%2Fn4wwY6pgF7oANtlih4cGo6WGLLGViKAhKJstDJCtiS8aoxJxOm1k7NoJyVy6TlLd7FhqXzrTMk1X9IRpOeKCs%2BVpXRIs2XCcnfcOAyxJHDRojuLWcJTQeaaTaUot6g9fSk8zBaqjTtRWZfthsiWU8dCoHgLvFmKkubDuqN3Vagr3mqDO%2BNjrJknu1Esn2yUZq8F%2Fvg9%2FHpMc88ru8HzTbL6ckanvLpCmuL9jUZ&X-Amz-Signature=a0d091022595358884afc58e273f54395d437a348dfd8c1077eb9b88e3319730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
