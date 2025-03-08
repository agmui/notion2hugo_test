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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC64HGBX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCy2mpVQtOkhB6eBsgw9Uc9712C9oi17dd5dcJL5X%2FbHAIhAMbUdC0OAqKkRYPwjnivCGiHFwCCLZXYJUtJQovctt0iKv8DCFkQABoMNjM3NDIzMTgzODA1IgwfXdFYyFxn2d4oyj0q3AOUlVhRryuDIYkOX9KxEPf9on%2B4Cmte5FB4ibWgEANJhzgZ0fD7DZph9VGjYcH6AARlxxhqEF7WLR6FIPMqJLbbWFBZxVsBg%2BtEYalZ0awCWljbXk%2Boaq02KApUk4uZJu5GyEODNFJhsXunRMvF7nen3%2BJUz6KMpB%2BQxN%2BJxr6ejNbs9pI3GYzVzq4tIAAEn%2BNuZ4zKBpVB8MO56Zy35FbIMNM%2FzPwl0jYFa%2B2bca8VYQ%2BOibffN%2FVyabjdx9bzQVd5kK9Ou8kFREtBHT%2Fh0YEwzjno0JqNFdk0QWFKNfNGKD1VxQ3MK4fY9A43eIuMNOMo7MfhEo9bIt5yQK%2FfTK8rYA%2FRv1gkwvESO05ddcvu2zLtc9tsaYLGafSMxbQ5Yf4L2n2ssZcFwKfDCnW4B6KWuHTsdABw5Gm62QZ0PKnTMg%2Ba99kv77Y%2FXD7QsZW%2F%2FSXxxcbI6W6XjFBfhOOESwIm09ciVt%2B2J0YII%2BkS8PL4ctmMpwYtQcMQiSjDgYGjE49%2FZwVro%2F8lGwP1DcUpJailFZy48xJruo7FnctVnnV5j5%2F7PBNX8nqAPO7UeFb7IXcDMFynajwz3%2Be06VAiIDh7c3lac2MX6%2BjzoRvU1FRLjA7wAkwE0Tma9nlg8jDI9K%2B%2BBjqkAddiarbHBLNksLgkQpTtezFROodQ4sCz0QhWn4km3vHqGnn8cEQ3kfJ1t%2B0UzRORYuZPMTykOmAZ7fkJDDEU3eR9PJUJDxG6d2iVLye0udI22IGQskqrBepLGa1q%2FxMumE5NGbYq1d3eQrw10NAPI6pgrwbipOSsyZcn11HqjGePl%2BfuvyxuQPkVkWSI9RdqEfBNM2FCWwMv1ky%2B9TH%2Brrz6Ffow&X-Amz-Signature=e54f5093b78dbebda49b3957d3471f8f116345b5c958f310cb80e613ae96d2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
