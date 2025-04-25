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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSDMUV4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQjkSbcWFjseSlGvDAnULzVFP8YQElTsfWCI0hJ3XRrwIhAJRLPlleACjN%2F8Ti5uXONiIgUSDDmh56JH0g7AZsIY7BKv8DCC4QABoMNjM3NDIzMTgzODA1IgxCLCMVs0JNzbY3TdUq3AOhmTpik9886CBAqC4FGWnUIjOTs3i56Mf%2B5%2BDEgWYH5BXrTH%2FLzSV9rZQI3OTh4akPQLCRpgfV6B9PpcY2sYwMZfAu1wI2hieFEy6cNdcPawRqpcJ%2FIWayE1PkkAuQYmoUkQFWkEEIpLV%2BGh89RRP6qUc8SS2ZADJNKEnn%2BBwMpZwXOvWDpCNPANuhxy4oSvwlCLJOIuSxOZu7Pp2Hcc5VM4o5jQWBBZ48D0S8FJ9H2oQsYMHrZNZ3zjutd3Wxmhds%2BQnIKsSN30ZbYSWg%2BcCCol8Go%2Fi2NMFAB3lEKJ8JHUc9rlNcbY%2FcLTW5yG3RZD7RjmUKizreBeJbGrdnZiGPXWYUMyTDmpbmZZapQwjr8z6HwcBVRIGjqlEqE0GOb5ZcuS4WVN%2BeDDM1124Oekz8jVX6VPNpSlC97uKqazenXKK9ErLaAoAFxmhhMHFhsPW8wZCZU2Cpxjv58HrS6YfktI7Mfce9xFl9Dvah9JuVf2B3JU%2B5Z1Hl%2FeDr5b67px5nrzYzLVlpHMLYkbTNGEXYEGZmjqSFzmqSEHZyQNVhgnqFBOMkG753t7CzGwHyQcGmlG%2Flkn5x0ceI%2BBZ8beK8DJMLTI3aWnXyI8YpjMTvJ53myKzzKyuTBRY62jDa%2Fq3ABjqkAbK6DE%2Fx8VVQVVuDRehLK97g39nBi0YA51CaVlILrAkgd9A9xfFzLu7wCk3FRZgevc3S%2FlvlpD1WuMiga%2FZcfBsUrIzHxZeU%2BOVbU54DROi3B5airu8ceBkNOQpv3Vv2vSYbG9PUS2zYcdPbdk8fMZoU1mAg1cgok6hRBuYOkVQ5igjMbnTD%2FTVZgkWAOglUU6Z6%2BQeA%2FRJOpGO1N3ChLJDZb%2FGk&X-Amz-Signature=e42316ad651c6c916b7c266ba9f7234a35a6f8bbe4f0847e5eac44503783d5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
