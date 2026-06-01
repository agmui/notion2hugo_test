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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RCSITU%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCYc%2Ff6M8ftUCJQMJ9PV996vNAKQ7j7qgK8qBqEEO6iCQIhAKL554Xs2VJLhcrMoOt%2FnRi7fKxCG0FLfoGnW0jod8R0Kv8DCAIQABoMNjM3NDIzMTgzODA1Igz%2BBcmS%2BLLyAm6ieXwq3AMBvL3xTNQDPaRw3j9sfKTJELdRZeXVnSKAOeaqYj1FeG63Wd%2B6j59xlQ4BRhJOnpDaYVL23%2BHTsJLZ63dh62oQXaqW7wjgtcsGD95jWVDAKVigRUSGfvAqkaVFEe5lthwC05zJHkPZcuaFkQSpPq7TKpNxtysTa%2Bc0Kd3khNGHiu0LgRjv5qZlqqbF8AkRqkXovIJo5EPChKv6fnsDZA66ozjXdYjmZUB2LchIrNdhcCkSSuhoznNAeUhBjjc7NNihcJVsewAWbUMMNvPxSIvBqufNYjLUJqTTzSdfZfNyn2gZmNPeHsz0%2BLIupZIS%2BA42bYAdwEHgIyY9mVV1sF0qL5ttXEIBUCwXjpB0Z8HNd3xxLZhozcdqgsc9eFDAg8P1BMPeFcanCqWHer8W9ywGZRPb%2FOwI9liu5fQHCpMKSNprc5P0D3FJzuJZPLJlCpPci6Hzg%2FsBloXITEmc22Wc1i7O2XeCq%2BbOLX5jBudOM8mObyQwxY8cKaYxA0l%2FkfqNSGw3ddFy1%2FgMVBSYl7QYz4l59BbN4efcEgtlbPBt2tIdutD5A7dfjHzUD4g3uzSlhx7jCHTghdZ1KUKILr54iFnGNIImRL2bA1AjPqsv2t4II4kqRlbOsVy0hjD%2BpPPQBjqkAY5O2MNq8PnBIW1nHcgHOLBPEEya%2BY6%2FZAk4do%2Fp1YmmcGZ8Ms93hIvBuHEj23Ie0J%2BCRfJykx%2Fvvmve3UsIIOgrykBRdpt%2FnDhL1p1s2w%2B%2Br84lY3bmFO8sZ4HoUvsJJmBI%2BoXouvFM917e9vqdAVouvj253EQtsyOuVjKi5jV4qq7rAcWvhMO0h9KNK1DchXby6nTUUBwWSyYl4dQsjbKgXoZC&X-Amz-Signature=1178e8a73275dbf6aef9753cad383c67128a27cadb2b323d0d0c257be1c4208a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
