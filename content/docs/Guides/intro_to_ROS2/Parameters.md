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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOOLAWJQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSUye9mKEYgQHqfsPR%2BC2V%2FRTRQcYtux7eVdOUQpAm7AiB7Gz8pSeI4U563omGm1GnuGgziJtEBBMv8n%2B67lDT1BCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMNH4DkSeC949cQlrTKtwDmpUKvRYxa%2B8awJ1uiERaGXyRtf5Rje%2Fb%2BqMv50b45ckjne%2BT%2FS9XKyIghPrIXMgD5OCEdRj4ONsO6Z5aCFzad3DidE4cd1ZpaCfIDuPRiYHUHLNDQUewd4g0kl6loukGB1g05xFbo9huzGxIH%2BnIM2oC1A9dZuNF6MRUtmA0wr92rwzuKfbaupwTQkwTrY897xf6CUGenazoFXmlREx5XJ8coYlhj7ZJC0np2QcjXNDvwbjnC5OIo%2Fx%2B0829pyyLzv0ZO3Rn0P0dUtyKx70u2Gq%2BWH7IMmUSPQ95YO2%2FFSiNCqONkNj2X0rZIhRH6d7Z19USMzYoBu2X9XeIh%2BEfUiv574QWNmcIweS7XapuMXRj3MtGTg5i6lpovpk7XtikcB842x36eNwFTpBHbAF1q3JMNr7og6wux60z%2F%2Bsf6p7qY9HaLysBwlagJxUL0Rxw7uQ9j%2FpxbyU2jCXJCakX4xOkuOh4pI6vA3ZJj90Xi0Z%2Fgf5zFzqvQ4qwGwTlwmcFIQzTgOxdf6Ay9%2F16IN1KGWtSI7WNX%2FTIyO3WiK0ZsV%2FVqEI4RNMRrkrIRvQWXHYleLrd4XzCj6H3B%2BwJpCS3iYkZkoFz2lKFAymsHWY%2BMEZAamT%2BTSYcGlwXpwYw7pXiwAY6pgF07K2I02Fm5FssTWftHjkEVMIQVo%2FQ2lAnSJMYmjQtR4LfsKkjpneS0TB7JmyHay7q%2FcsaPJECcT3IacOHzG3JxFJJFI7Od%2FA6xkUu2xIcj1B6q3Fnlb0134fPo%2By0hanMDOWYQ4IHLVRQVEZSa4feP6e6WC7NpdxJathtclcjhX1WnWzXFTavzDc9ghRKeQt%2BqCsG5INQDcvywEVVV9IdqNLFNCbu&X-Amz-Signature=b4a8e33773f83b99ddfa2eaf5733f97e60f7acb539bb1ff2693f1d813f83fdc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
