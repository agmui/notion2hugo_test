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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7Q44XX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQDpCrmG9K%2F%2B0ShGmifL5ULb6sA9MX%2FUhbUA2EkWx%2FiGigIhALn5Px6%2BukxKNSnI1PoaybM1rxSW0apshaXRh6ZhGnblKv8DCBsQABoMNjM3NDIzMTgzODA1IgzkDlMecCxV72P7YoQq3AMbT0LYnaqeL0vUlTiDitXOSXJtRT%2Fx%2B81RtNOFkjPbe%2FnVGLT0RcvMyfkv5mG6UbFTLYNuawlqgijvY%2BEvw1sBw1dHJ4ULIwQ%2BQ6lbXlPdw0rVR6vMNxqcDE4jzajPiji%2FeowCzvET7JVTDox9eA6M2xYgEfpBbGt8b36hdTbIUIuYD739ocO04xFXbWaJyy6Nhsgon2OCIpL%2BA32mBqzYR0uwJFCCG5Rlp8jIKD%2FziLhQl2%2BX5rojkYTSvI7uOl3oRiIk58ymPuA%2FZi9EDGnyQ8dHzia8auw62d6BdQKCsIVKgRUkZQb%2FTQF7bOhffctfW2%2FuhBIN%2BGAtkNimVQ1W9UeuBw5ZUoQ%2BjRfKh7fP9OKyYX8wpuvFXPF%2Ffexu%2BM3GpD4Lo1Adw11WurBNWlf%2FmyahHFG91G2gWfU30r2OPSN5FK9QxIFcVIfvVQ%2B5biiy5gJAqsmrJ9AeithrdJkvQbZyU0k%2B0OFbq%2Bz94LxNcz%2FiGh8l0wQ7lGAeGR1EWxpYLjzUKf3eIKS43CHo9gJi2ZfhgseKxl%2BRK3ulJ1y%2F841VTxT4dSwqNAbdi8TJBu%2B7DIOOkr9s40mK%2BMIaTOUmL61r68%2BpApgKk5t516HxjOLvHiQ9nQL33Pr0uzDm5s%2FDBjqkAY8MtSb5wdpE6l8NOaIE02AO65MDS9kI8q8mSPzqc3ZH83SzSaQqhYA47wF6Sg3atNGG%2B6wqnnMaUfwSyRzSmRV4SMjADUvs7847Bkzs0PRUjwbxDtg9%2BOO4WjJwmK0nwfB7VugLToNJWLCvNExp9U5F90UVBC%2FyMZwaY7bGvEbPDV%2FRj8QhifwkTVgi1Un%2BJZX9P7ONxWZjQm7KqK4ahFEwWBmR&X-Amz-Signature=3accb2ecd43e5b6984f0a9756d32232660ef8fbf585deaaa452ff4fb5850e73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
