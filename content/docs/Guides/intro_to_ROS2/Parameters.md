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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PQTLYV6%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCcA3I%2FlJYvSrrJNiECV9hWDnauLN7Eo276XAJn9abYQQIhAM49SNpnUSG%2FwwpM0jyD7vtp4w7c71EE38DNYBqTRfr0KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9txf47ReF%2FI7vF1wq3APLXJ6H6vqgEQaPqmAOPayJ1iXsf%2BrtlCKSGxHI54c%2FYGrnamYSYe9UzbeELJtQ0b4UVyu4gpm1%2FXVKOhnTPMth1iHviOEay5wzU5AHXude%2FUwQjZDDjhcv7cHeXQBeM20TfhK3aYly6LtDz%2BaIQYpz5y0HSxbVuC0qFKWaBb2g3roSsJBHJYuIxaSYHO4OwS3NwF3VW3OgOlL6wjvX1wsyVs3XAT2A7g4wYMr4Scsu%2F08xaWJTC6DPKM%2BMlwveE0LtQLhZd93Y0KJbZSo53hD66pAxUyz%2BSQSdXdJk0%2BOBHNQph%2BbGJVcfAe2csmZpzg6QuYj%2BIKGuxuR20PeGnfi7O9cYZfghf%2FyBKAJ6RSdjgxvmKFGFxlJHkjYzmlSSkkLc3BwPVUiIqp8a8%2BfAwtd%2BRd3MbXV1TR1S419ZWunGBTfBOt7Q5%2BO79xA0C8eD1RqgQNhO9s0LM2jant1ENxiwbvdW387n5c%2F5Apn4sd%2FK2k4Pl3Y%2FeTPIoNWbyHCEYcQPY1nPNCSzianaScqYIEYOVIP4P%2B4rm9vCj81guathxPWQTEPnVGc2HlqkX26tayhGZnWuD%2FjfYFoOeNiBkUWqxVZdGI1u%2FVhP7jWdYJ6yvT9kU7nphCLxTwXXZzDZ5b%2FTBjqkASgIUBkwyci0tcr3WFzFCxpDWg2toBYSjlrim2XYh5oW4M6izuSdZr91H7blx9YvqWhiwUOt7PVVmEwHcmjNOON8aUYxufgv61LiPOI93zIk4YcVeTmkSRvQEKT7VnRE5hiOZ%2BTPm7ZiNCyErJ%2FKqbeGsMYs20lxie4mw%2F7MreREVQOdXy%2BsfpA9oEHTBkIxaKK%2F3FfsmF2uEXfYB84UOmjObee%2B&X-Amz-Signature=5e570f47e0f99ef4de49a1e037af695fe7ad57b8f35906697e3f27ee628a6a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
