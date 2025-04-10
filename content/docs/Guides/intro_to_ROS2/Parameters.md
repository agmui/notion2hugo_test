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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJD6GLS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T061235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAH4lf3WX1i%2FufFy2QUfCSK8xYX95mdlCTj6zbmjrEP8AiEA1RzDuuHpTaALLAmJFA8ZzBxtpUEKbNZfr0dApSeYhNUqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoFjRMkpy6YL7l7hyrcAyS5TBZXjBgheh445oDBXwrgU9BbunzgELgn9rP9D8FkuRktV3J5BJ8fLsKH9DVARKhd8k1a3pozk5%2BjUKMfpm3Z41aha4%2BGNRRNDXsunpaIu52CF%2B%2F4k%2FyrpAeHD2PHtS9VQQ5nX2cTyYRTpdRJu1Q1fill84DtkbwYqLw9RsvcL5V96k0ubO1VDbnWvJixk877ucuvEsh7cQWbhV7sleQ6IJaPa5mGItw8ogOegh1kqyOe4zfeIXlkiuC4QgNfTv4xIZI%2BFZGyZR8O9E6EKkFuzbEpXo3rDkqp87R1LzjiKwij%2FeY9qHqUuXT9OUSkn629S8R4V7ToIx321hTijuLr779AXxYRQIIXxPWF6rXbhGR0FG%2B77U07qdvdTf9UncgRy5ctLrCF2y7Z3m6zK86cY6m2kVczIoYy5dvJ%2B6suD1tH1LPhkSX%2FF7smHCxzE7A%2BVOoSpBO04u0l0t6%2BdFIDqW5HGIqRJyK3upV0LxWnFJSsOk%2FLKYwiu%2FL7nY2aLxLTViXmREH3tA5uZzKVQx6OL%2BUOfkh9%2FYpHZIV%2FjgntoRXeqqV5jOKT%2BfE7R6b8fjWBtvLxMOv4HQ1DSH7JdhF%2FLMXwlq5KV055UROYNJTAyw58ppVqJugqky%2BkMLWo3b8GOqUBU8LKuGBlRTZboyTpwBQ25fdz0CxHbeiSb0Kwen%2Bjn34arZZgeycwbJK7NdHxRmnM2mLRDbp6GFHbdyQNrEtR5fLB%2FwaBIYLCTYOJuUXwWFvR%2FSuZyBzcNM2v4uJ1%2BBzsFolksMZYqJvtmkgktqLKBPpuA4KxwRNxAr68JVBS6EhuFcgIime9aVspdz8gSW17308IksCV5Kt50u7E5SY4%2BxUJMld2&X-Amz-Signature=7ac80ab14b4a4d46d7e30fe009befe137857eaa3e33a3efa6e46c7a20b7da8a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
