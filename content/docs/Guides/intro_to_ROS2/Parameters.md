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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFS6RPWH%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg1eHmDicQm07TqBRLV6s8uhNZzFU8SSCqZqsuDbJnOwIhAPnfrG6frSIS2Eid3oYT7rVuSoJiCarspM63m1aSfDrAKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCLkNJpTn%2BWzt%2Ff9oq3ANanoMX84adrFJj%2FOvBQW%2By6VyW30xxekqT8coH3dT0Njk5z7zhI2clF4wHFgPDxWv72Wl0HuyCNM0koCTkK6nuLsVLVuQmLsHnekzSi7pY7pHMEtQrO7Upi16BVT0qfO3WXOkBA0B%2B90eNqKbXTl%2Fn8Oj0gk%2F8Jyi6L43X18jIcRq1VZQZqzm8TFVOq5mN8cmLyBh9nFLV6Hnm5GPB7eQm7qRJn7OvVlB7JSVmK4TAdkrYWmFWrbMI%2BGUUP60gSmM3Da06JgBRz7wgwXqIwp%2Fr1wO3TVwv43WGqdbJOPnwntml0BzX8P4awzDWMo0xpnT0XkWK%2Ff6MPu7T%2F8yBxoNUh2GBx58rnSzpJjtEsakBaUg1SQSImiXHgCl3lzsC4tJkM2TcxZX%2FdZehC%2BehvFw7pTvfEuz0Z7OghASjHt2hmbrjWIZZbGA8bN2hqQXyfqW7RRh1cHFkBPQJ8A7YYtETeRt5g0ZKMNqDKSJUyA%2FFJ3wwzsh%2BvR0M4W%2Fx5tEDdibJ77fLPUq0Y8LJGLMYrGpPVDkSYxsjjr0FYJdj3KhHGvbAfo5KWDd0TbOLE7WyVUYk60nV47h6iF6Uxo%2FQlYAt%2BXzkSfglyxTm4fO%2Fmr8yZJNsGYlpdKoHvwFxcTC%2Bg7bDBjqkAdApjvhkAuUzB1tw4HvqGZZC56Lc612qLemyNyLdAmNey4joRro6dVwVv%2FpNV%2BKW%2F1B8bWcn%2BEVqCR4F7kAoWjxC9UUSU1uY7%2BlaCPYlO8%2B8GZZc9%2F%2FQuFT6m%2F7BV8j5ilywn5JQW9QhyYlkMaG2ez0mYC8dUE%2FHfmf7B%2BMIJ0MatoGgFS017WyCtS4A2rkJPaGOjbc7ZfAa0lJ8pLYRxME8tcxH&X-Amz-Signature=720bcdcd9b953e855cf9af5a000d33ab70d0d7fb21d106a3132a5c69ad177540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
