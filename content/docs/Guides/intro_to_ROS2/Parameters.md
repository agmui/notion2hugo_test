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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YQEF4X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDft1b60vT%2Fp2zo4Lw%2BCv9XDHJyMvlqLhmPmA3TbUDUzQIhAPOgIzLUoAjoSGcEC%2BjmVD8FpToPnFKuZXAAzI1UQRWUKv8DCBsQABoMNjM3NDIzMTgzODA1IgzNGWsHbjbJgSxyjF0q3AOJnJAX0b5DnO40k7SqfQzgDI5Uj6ZLG%2BCQQui%2BUVnnrkIlk%2FXA1UEJ2uPUtLp%2BfipatCqi9%2BG%2FCtuJiRxzKfdPXf9jXLXmGfpAuvoutUVgKpPQKD4JqqgVrv2kxlsHkI6gqQ%2FHgz0RDuwtwJPweoERIZMXadwo3Dx7jTTm6EQ%2F5OF0w%2B4YCosCJcJ1xeQtOMvXbFjmXQARZH81pmGHCxI8kWYNqmgI3QjxZLgNFUXGH8u0yJmJgzemw8Z%2Bag2us735iwjd3Xvs5qdFQUOR%2BVTLXlqoLznH8Q7U9Qm0FZvcU3xR%2FbJm0eoHLDALBQjF8XQTIAAHOllHMzDxLV%2BljnMT%2Bli9nWeFNvOWZVqU%2F08RMrxgb3jDYSJuDEuYC0lw6%2FWNLbym8vngBd0c1nBMte%2FyEmu4l%2Fpo4o5LhQBwj%2FfkOhMFu4ouQkNikj%2BSDV4jB0enDd8Lv%2Bkv%2Fg0OlEj3LI4ntF%2BF%2BUgwR1ih6S83b12MNRdlcnTjdvYPLnwPw9W37lZdB2xrpR7Ht9wXoHzOw2v6v4QWGFZqWteqDKtDhd6YmmMCbogiJ2aQ%2B60YR9V90kOOiDTNc2BHGkUtbyA2LxKAH7WbbswIcTYPuQnmCSiqNsCQb3qMPuUeNHUbbDCRn7nEBjqkASIsVwhL%2FQCGofovVpZ9bMWdhwQLxl1NlKA4tScnr9YCDHzTvZZlC1EOFefce44Ic46iRFY4M6OaW3QmJ420unREYOnJbmFbGNevSWAcScsWQSvXQMOMpFD7EUhrQ9OeJYoX6iqsryy0tTlzGZ%2FpRHMELaAtGj57M%2F4JhEFd3Lt7jr4Nhgep1D6hUyLOk0d8kQL3ng%2BxE9Xsb1PLjn28SrAe2MOi&X-Amz-Signature=fe78e01ed0e9529dfe005f6a9ec8a7980cd7958b624ec7af86772b5b364be1b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
