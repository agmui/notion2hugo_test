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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCIYYGG%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfwYvKhGdidw%2FK%2FR5CF%2BMM06MlnNoKtcwx5bqXdCGdNAIhAND9LrZ7siJAv%2Feuwi1c%2BIA81TAuPctRtkfBx%2F6mTPSIKv8DCDEQABoMNjM3NDIzMTgzODA1IgwFPhS9RODqZ8VNIU8q3APnHiZ2OCvethv%2FomWZgkMRdmCNBQ%2FM%2FALyyBI92RwrvND55uuyLMNhw0RPKnPTz7zFqyek37VvTemd35%2B%2FOQtfOTMmvgysUr6qTjVg8KYIHZgSlDw2U4zltYFpaJjnjdWeJctGn1zdkwVKt5SjGYc%2FiCNJLRhGlhpBl8lM2iBsThwoP%2Fm6S0YXaR6%2BuQxThR8rZEp3s1ty03jtSIqJmXcPz4vH7RhpKrKfO9WjvWGqt%2FJfVjwYixpOKjW76d8hUCkljyqsH6yGD0HbMa5cfkGBI6VrWN%2BiJBidjwrXg8gfJogDQhC3le9xVm6q35dBk%2F7X5QpYzZWgCbqDeXlh0HoxYXTcHdBprA4BgE6OP%2FtBmfp9e3bi%2BlQ3rQnwR1qvVVM4DeVRQ%2B03Y7To%2FZ%2BUDKi%2B0MjCL8eIejVpMNxc1rWUljbXQ3JwQG%2FpIAklLAzQY4vL8LaarqEl1KG3kfQoL8o7yoVNcuyJyHEbtwjh9zZPTTCix19zot3BZtvJn4KYN7yef3kWWIFCZoVyfx0vQyhFzmAxseSZbnJqZvs1q1nZH9ea8lc8rgBTgEzK%2BvtMSg5HCOe%2FVGCbUTMPQPhjyy2RtyQTEyyXYC1AZSjgEpdVhpq%2BAnPyQGLTtDg0IjC2kKe%2BBjqkAYtWdlFRH%2F3plx5VFIxNeqkDrcyY5qAP8IqvAnq69QTngDjzdjpRDYNj4Tb7MH3YmKCjOh2MuynwpAOvEkfmcMngay%2BmbwG%2BP%2FlpJryhR%2BWFJdYTdk9cM6E8Luk%2FoGDPGbSHxZyMmYA1R1Hm%2F%2FWGpipUdkjbx%2BSJtaZ4kgUD51pog07%2B4i%2BQnQWscMPm3%2FaorC%2FBqQZ5JTlVb3wIiQVartZxaVFK&X-Amz-Signature=155f039e03bc77a730ad67198efe7339c820dab9ee174b424dc64e98b8260945&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
