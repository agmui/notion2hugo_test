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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7FCLXU2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDjK1%2BJPppK8Jm1FK%2B9A3wQuoeCYH%2FMdWhPdkDFZEy4eQIgRhFzkD%2FwSeFen5eh1FQLYS%2BSTyZGI1EyMlWvkFTcQ5YqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdBuuD0mcyelbx8BircAzRZUv%2FV47820ZXQ9NcZNQen4reHA05aUxcQVGVyTnkx5%2FxDIhDtvJLU9V9klJHOUG69g1cschlviKBK0f4SD3sxpNQSzovb%2B2bc5dAoBVnSyUTb8hB27rOSo34suzTRWLLdlz0waM0ewq5DHGzOl6ye30ptqtTACM7hLNrIXVfPGysjHAceB61okrbpY130rIjgjwZR9mi30EDkjuGEKRi9l5ZHpT1JBW0sheO5OhvdyuS70XfA4MfT2YeL%2Bz4iLnAuYajxeD9xZPQIow3jYm%2FCpZkB9V7z64qLCX8b6oDihAAQB3YpKchiwQx9K6qJlTb7KecW1xBSD90zEAMpSLsvRkjbnkqSmF4h%2FGH2fmsDjgHa9a3%2BdJa9xsKW87kZsfDzVgJdiNYk7nQxDVlt1ZOwVwV8rvW4CzCY8cQaAoHnuz%2FMmrzAPR03mR%2BWidoI1VUyzQz1MvaNU4ciY8pqvTZgIrbhccZDqlQ3zuMFeIjx2c8WqtzkCb1m9gBLv3w%2FVQT7sm12CT8iKKhH%2BF0geI7qSrnJDjDwtQQX4rGtuR%2B8flFmm%2FIb20TWgpEAgGZkxzGB5HRCSyw0ZdpxFFQqzhEZAX7%2Bcihtv5dyUWR203lzZIxIpl6vQvKFFuABMMyvvr4GOqUBF9uO9YUbRqvif4dSy9Yq9xpAa87dnhue4y43U%2FeFycvYr2SSl3PnvXn9hsJup2fWrZA5Cmyv7S%2Fqzk9BMx80smchaaOj32v9vAsZDI2dxLCv7GtTh8pUUjMHiz7YKJnt8s9%2BI7Y%2BSPX21njm0L4qfUj1SfG6uyNGvFI7sj9nc9jM2xjw0%2BCfiapw52wCbevS3IEdnm148NjimqNXrkjTIXWVfKJu&X-Amz-Signature=0ef872a307bfb1f9762f6ef294630686a1710b147a4ed954371661e386a5c3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
