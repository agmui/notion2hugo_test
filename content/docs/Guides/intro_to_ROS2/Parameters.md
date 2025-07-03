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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3PPL7B%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDED5nSpdNzHHUVsnLXcYrPWuTfFiSw4HWhmYtFBq7ukQIhAJGqkf0LywpvBeFnsavIqdauzS9G7wpwgYoBr%2B2HreNiKv8DCBUQABoMNjM3NDIzMTgzODA1IgxU7cXigejsZbJnjVAq3ANmtdJguJj2FyYZojWIH0gvQVLsnen8OMUmIliyuFmmoeCs0y5WwXT3zBIeLVo2TuE%2BuCV8v%2BQ8N4CW%2FmVqx6M%2BDOmRcBi%2BOUginQx5GBitDBB23mSG2127cQN0eGpz8OwQx4M0Y4WuBYeN44Yn%2FQbN1yGD%2ByGHgeRbNO%2FQpM9CV%2FdkQkd5MhPjfvV1q%2BPnR3Z4%2BYpefQUujwhTfZpUYNO7hea9mHi%2FDIeQP%2FzRo0OjPTYOAvmAkAX%2FzqaVi%2FivbdbfJaYPxVBbM6URl3mBiV0Nc33NGlMDgviL2cIs%2BQ%2FOKN6peDAyhpV0HVqy5TVj0mbcn5ZBZCIE6QUIuBmJb8R98yeNq9lRVlK3Ru%2FiSiofA9K1Sb6aAQgNo9POCAjn0uBGpIb9SwiawknYKHdKu0oZsQ8rryDp5PeHgORmy6MKTEBXFqGDwLR%2FrKqeztiLTyE8VVrSTldUcPkkEZj9RXa6Sf7wn2qJI9eoiSASwXFv7NwDpvCVJBu4GA7yT7a2yQfypklPgkjKuFoqNHRyzKnecps0Bhv5wKSJBzDGiOC9ihDrl2sC6pdCFYu6IHWyT%2FyDElbTaWQnNw3SESyztMuwcsfEh5ENzwNbT4ZG252rHDDANAhqWC4ajk%2F59TCk4pnDBjqkAeZp5JXkp0sgTJdKy0rzMf5BqAdHVA01iFXyJUF9rJw98DmIPPFYpKaRJKX6nvWZZZrZdnB4pBk8cn2UzBwed4OAIxx5N9Vtl9WeJ0NeSRxtOAACLgBLUHe%2B%2B96kkXLPs4eLyLahzF30RzM9ivNfoSFhI2YhntVdmPESCaoSE6GvnVUnu3pLzFvd0reaYrxma54QCZkQ8gNtYJjk8ffMKdoBT%2FJC&X-Amz-Signature=61099a736ff351db6d58aa0a42d8122395a63421003380b3af7b294763fd727e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
