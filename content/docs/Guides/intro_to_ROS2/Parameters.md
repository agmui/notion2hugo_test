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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZKBXHGF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCWmc5HGMprPTeuFB6v%2F%2BupmDp2hp%2FeBlvrH85bfxa%2FdQIhALeHd6l369H8vz%2BQKoj7JJPJwRQtIKdqeLW%2Fqcct66jaKv8DCBEQABoMNjM3NDIzMTgzODA1IgyX20i2HrSKpjn3GMwq3AOfx1%2BXkcaXMga5y7QIMFLAoUQii0hTp%2By%2BwGpwf16Aj8rNBvFVF%2FeanStSm7i4A4xSyvZTkd2Mh0BN3n1mfbzDHAGgHfYynrHy%2F5UvnqpmwkFNkcRjbwQ248%2BqHwUH32HJFf8Eb6y8vi58uJeQIUQbwB0rKIIP2n5MwEGkjy%2FxbAA%2Ft1ILf9nZ8g%2FRXX2955JhHOt%2BqdRLp%2BJ%2FwSwt%2BzyMvI4c8lsalpvWNb1Am0vZq7aduurVVu7ItbGJ35tz3keyW5b1soGRJeuZWn0n4pFT9sdeQpPDk79OIwBLiw%2BGm35DKp%2FeQQT8GiKlZLjZd0i2r%2B7qExJjX2LL%2FTtZ%2BAEiiktvQ0EL%2B3ZCtNou0ovZIxJWXZ0fhoifmT0dmMdn0rHgN%2BjqhOm0NGmJracRPVPHSGCYohLeLJ8MLdOTu0U5NWERLFpu%2F0nppdpGKPgsTUtFIslNh5yAzGXw9%2BbiYsP3LXkrbE2DXmv%2B8aN7%2BtcFyaWxk6Y5TmA1BhBR1F8Dr7qzIH6Lq0Kv2uimPXZw9KXEYpA%2FZwUHfl%2Bi5ejL90mcczigvY57hapdp0Uy%2FZImXK0AU7Y%2F6paxjOiDBvgImkdtu8g%2BEwjTwINThAcI5Xy3OMJdJgN33Q8BYug1VjCZgMbBBjqkAWAAjdFdNyEu0JUliYrdOVFBzPWZFd725C%2B58fZs3U4qu%2Bog%2BIf30MdYOVdsFjsqXei4YsQiX5qJrMUfdQAR%2F6jjEK5VMyH6Y7LrO1ke6m9%2FTUjhChTfswduF4KjxggHpiP%2BYRwOxT5MdneAauCxYAo2yuQaxN59PjiOhh7QF0FkZ836SDbEhf0x%2BBPmhnywcZcNb23Ba8dAFVnAQma3CvnPgDYW&X-Amz-Signature=e9a25b0fef027a5ec7f25a12329a24b838fbd5e1e82b891a0b703567970c8cef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
