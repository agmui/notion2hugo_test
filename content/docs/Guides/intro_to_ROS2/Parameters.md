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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XCIVXP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5QSJ0I2IOCpTD2YliJvlivSj%2FWgTmvjvmc54zAd9MuQIhAPdKEJdL8uEuZFTgEuY5dr1fP7KRgEBqdta1ddRnEXmwKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyflM%2FSRZzfUJspzjwq3AMlZ0OJJ97ayRisxVyJXpddcORM%2BDjgmZ%2B1%2B4xV4sZU9pX1oVQw%2Bo9Jm%2Ffh%2FVL2JUrwmt3byLV%2FZeVycKcjz9ae9HWem%2BNMb%2B3N9gkOVn2OEdBDpinboL3RTHyK8YtuSTRcGJZv6pW%2BeM%2FT4BYSOulvtVh%2BQ98NtaNYnJK5ZmOY0%2F7UV1KuAJ%2BfBuE39mb0cilHYSU3IZqIZowgHMCULWhNLD0UnPMQVYqt0FmwFLex5gH6OvOqXEAvnYWqWU6ZHwnaIF2uFgLZTq%2BW4IAoxfzZPwKgF5xDIYAM3lE0RPp%2FdpAqddNeFXql5ZxXbC6QjFT1NSiZySqbQv3cz3r6HjKl%2FEKB7T35swXsMDRmR6PU8EonnsvxGY3rXvnPtH2368HmICYXQHef6I8VUGe%2BGFmj3vNrMzUSVOqznXBt5B9fOKjcDIg8M4sxkKa0WKCjmASCQYUJEF4Qm24Stojv%2F%2F2o3BGwzqS0%2Bqsv3k6kpaA8cxbwjZf%2FbfFPhU7jselfm2TLUjG80GhjLjYtOq81sBYCOPAWOxEh%2BjJDfDnrlSQ4Uaq3OZZtjTwdaCHHHjHwmuQg68eO6PGXcHjp9Xi8jQ5oDRKYYPT1AmbVLGNmz3ioszzIDaOvh%2BXsKSlI4zDxlfHDBjqkATF5ItLZxB%2FwKjx%2BLR5meXIbZcGhm3k%2FuoZqRp6Wi7UhbzVrwXomniF8BNjnmxJOltZ2apGDUlKWX17uoAGlrorDt9gHZ9CFjDY111SO%2FKB0Ql45tXaOZpjGB5m5VXEZ1tqK5MNqYnLpO7lhrm8OHLZJqyuGk13GfMKpIYbN1%2FSQn49RCNN8xOWTbEG%2BpY5U4T9YKd%2FCl7f5vGyZ5bFZtFuzkjfw&X-Amz-Signature=8e407a80ec9a3fd3a0525966c2f54409be4accd4084392c5ba149c2d2a384b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
