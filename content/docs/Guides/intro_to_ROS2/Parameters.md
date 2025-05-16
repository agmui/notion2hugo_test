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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWID6DU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHahW6NHjdlWZt5H5UZ2rETLcT2%2BHx5HnTjptpgKySSXAiAVvW8vcDhPdZ9dzwgDz%2FrVrQf1AzyM9c04qOpsD6Ak2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMg03jLXWWd41IhDgOKtwDlhWe4g5LXEyft4CDNmL8ephe7UjTC31YMzScNr8P1jPoLS5UGNHi2vyyEBZ7EoZXimkKv%2BRCcsCOXOwPbfQiDYRrD4rvKO5qtK1hh8626cI4Wn9tTVNsIyNxL0YcfWia6oTLqI%2FkMAUOhd%2F9nSo1xj4UaTVgrfNRXyjYDVNIfvAapdxhh0C%2B8pij5o6k8imSQNwEoEOFntWtr%2Fv37ANl9eKXWvB0bys21gjG0OI1HTkDKwQ4VkDXt7rfsReG4aydCqvc02O4V7%2BTq2kAzGVwhu6wY9n6EYMMqwRwRNOKvrLAMRgqcKr9wwdruorUaO7MedoQDVPwzMCVwhLQtnB89d8lSc2dhev2xP21dp6DLG3DOOzHdI9ljqb5x6IwD0LbYbPyTIDWVgieZ4o%2B%2BMTJH7qh7VpSZfRdhjtunXRjr%2BUJKJRhypHuW8l%2FtcKozGNco6aDpRF3%2FHR7%2FC1YwpryF8fVKL8Pm4REmudVC6PVXyMT2d4uVFjzYQ9dSTykXY4rOnchnZt1WOlYSUk2vVYfuNsz5eliRn%2Bo61yZ8%2FaXZzSBmvZWvjgjaodGtEQKTYuSyGvHnPG6a5dcCXt6ZQ247zoDkRmF0HmwyvvVJn4I1zN59qw%2FJTXwM7ssbcYw%2B8KcwQY6pgEau9LGHcsFkatYW593zJSfvvw854o66nUm6yFE2sRq9pFpN1HaconpMfDOs6d4z6G4%2FTeLKzQ%2BGwBJASinIWCG0T5%2Fd8rT02VFLnUDEVS58ocS9osjny9Ua5PplZkQ3nKZFHEyOam%2BgBl3N4K9d7XRsDalzRjJbqCzXejTFiuufDiO5iEavGKg7G9X0WTV20eBdCEWSA%2B5px1qMmLk8mTVbGQ0fur7&X-Amz-Signature=e61bc257cc812eaa0dc5dca87047d170c286b70661c58661bbbf6b3b0f5d6e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
