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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEOKEMO%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW%2B7zwWb5Ogxd8CQIbPC51rloXKaL%2B8zaqTYN%2BVT8b7AiEA46%2FBHkVjYgqrJkhYvuexFGIJlGNUxJNSAL75fXj1MeIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOgPatljaTII2UdwCrcA0Q6cj%2BwtFt970cPlMAs7npRlGRSXwOLhTjzdfyTGRZXhEqXy7Qx5HF7dJgUGugI0DPYHPEWZqb4Lft2Tt5oI2lhdtv%2Bq4ekA4KFCPMS2qYROwvjL3xxb2F6UWQ%2B9NStKCBnLxK7IWZEgByUYxHKXOduu3K4EV7vP8LzE9vM%2Bw1sAHmda%2BCLyWzyujQ4jDu79bHM5SYi%2F5apxyjey%2FE3lIeSfRUOqWZlA9cGm9X6cxIdIsWTXxNdN4dj0w%2FlKEZCu1Z542QrTFtyjItOl%2BYHUCxe8IOyFwLQ8aNOi5t%2BnfU761FFaGhC8O7sPURgRGa7WSrYQ%2BmrEZ7QraZFiKPaygc78MUdNXrLKcGnKFUCn35BY7JrvLpmDK5uHxraNAZwsFOmapeHAexCeuEBudfQ8kF1YiygF40bSqpJqgk0vWz5CdhAdqCa8ptgOr2SvUNKk7g%2Bl3kWtyeCEOttq%2BBlpzXP27PGTGPgJOZLXkJpw8eL9XH8qQ5in4B8bAyeh0vnDM8W48GwfGpDYmncyKk0fiQQzH6cJCmXvdaWkY8tDvzeKsfD5dDoxajYDuIq3cS81qd1PetdX9tL0vWuvUuvywKtT6kWmQYULjvMUKB81sElH0fLBCjZZftL6mV6MKntwcMGOqUBL9JmIWR8Sw27mJcNyacMgs%2FcDqz9L2f5LlpvZ9jETLagF3sHBAvLiTkciMA2zWsz8f4o2enQgur74n71zuOpcfNCh3trALrVQE2fVAkSp1BuabCBlJfTjyRSfUZE11%2FAn5y0Ua3jC6fe2CiE3C2HUYnA7rwzXac7USZDXJjwkY2mrlFnn8ws9BOBV0Utf9l%2FUP4UR0erKTr62pWka3mEPIe%2Bt6qX&X-Amz-Signature=22e77b0d3a40af5bc642666d5f0e76cce3326d69dcf92e9307cf27500a880de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
