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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X37M3IGR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIHbhRSRzOiWD7lyEouvJaaiOSe0vTHSpG8MI49AEE%2Bz5AiEAg5wBOm5OthrX6MjnproWXu1vmFt64RjvpPs9ernpGBsqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl3KHNGSBoBGNbLwircA1fKmRBFcqt7EsbNrfEejecOrUjSRto6Y19euGnXfrVaP6RENzOqPUyhJUj7ap8vtUdpUhLaxQ976cZA%2FhfWM4gnQPBAnX5BvxgGr%2FUh6K3pMjvbC5LFd%2F%2BkpoISVJWPQtLKI8UBjkN3%2FBS%2F990Iw0%2BHoJ4kZgm1wwjTXlWfjcaOFK2bhxwmgghYVfomfzlmWhvSl9tmwM1z5SV%2FkKKrnwWfa7JTwDY0tmdwNXW5NcdYREMUnTCGbLjT%2BKe42IDzi%2FIiSUr73DgKDVzE%2F3mi%2B8n%2F%2FXvxm3w9%2BiXh0lVkZ1UZjEaQg7NeagAbWA1t0XA2Up4QJfyhH2yhvtkDVGzwKaW%2BgcerXR0A5z35lZgstc6ja2xEE5H3oidH7bhTQBQsR3fyUxGs9QgLOuAkcCXSt5tvyq2lS5JXuUpGZc7RHsi9O0ijGQrQfIYcP%2BOBjP5MjFwIS9Rr7yTXgHCZYbIVmXgKcq1%2BJTiJUWRM6KFG1b%2FCKKNcuDJeEFn%2BNitTBiSwRg4z1QjXCAs%2B3LTL13U00Hpw9eKj%2F2sTH6OV7dkEWyDjQED7TWcpURmK%2BFvBdfRLYYS3bycigZmDnLazY6VgyDgpj5i1KUyyEtpr%2Fi%2Bh7KZq2QrM1%2FJ%2B9MOSyWRAMLLx5b8GOqUBr3%2B7eiQzX%2FJteZk5lcQqWKUwfmY9jS1O%2FrPX3HZU3qrxL4QzzL31KoTJFcH5F5q29qPyCMD%2Bk0fSrlYjRGAzqI34Psw8377Y687w8Fx4ZIH%2BlNPe6cqHSSqZzwDxq7dQ0rq1yG3ZabvTYnijFAC2ddjqXk5QmDqNLssBj%2Bzwj%2F2cQfCLz7S90qD68XwFv4iDZL4iVycQdApwC4yxjrse3LlD7mGp&X-Amz-Signature=3ab7d44f00d962f55cad1a4f4546da7b6e70e87283dbb1d9e4acd04be60fbdab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
