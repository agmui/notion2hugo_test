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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD3MHTA%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGb%2B3lLEVYsjEW%2Brn6t1PYQSdLAZNIYC9JxkTLXhT%2BDvAiATvp8FvjiJulrxTUv%2F7qBIg8vP56dZ8URUWT2kD%2FrDsCqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXyG%2BGVwYE5c9UUkVKtwDmQZvwpkOsbbqL%2FcE4Ie8fOrtV1t4yAO27AHP5vkJuq%2FJNrzMtDfyU0Uypm6s5q26RGpIJAxhEb%2FDSNFGNhWmCQ1KDoqgLNPVnJoLzvPdJnTZutp%2Bdsnh6D4IaYB4Jg8UU%2BFYqo9aVhcR9cDNZ5FjsXFYNKo5FFFzGvOBl0oEM0WlCkl7ZVYYv0kblpKvBKcg6322SUBONG0mREQyjTQByqyQS3Ju6ZfvT2s1UOYo%2BdiV6b7nLp1i%2F8io%2FxoVFU%2FBhWzulIQdgLbVJQ9sUbg%2BiFQ%2BIZD%2FekQZVLoc27M6mrEbq%2FkAbZGeUcp%2Bw1FAuDu1tmyYUVkSA3RNnfUnI%2F4vwK1JYGWNo9ZCXDdopQeO7Bj1tLXixj38gKKdEnRGP8CLvnH15jnbvIHAo1fdf2KYsrmdnXfYxzvqLupd5qWWXuKfENSolyIKD02wpRykM83ZZnPR9%2FUaWzvE5Rtz9R4j01Lf7z4YrE%2BskIn4oT3dUOl5NMbBhzPLX5RMBw3TRvtDrvrNXhkijHlI%2Bn3a9WERnnNE6tKdSoROMNdkzrhd0PlrD6CtotdG1nv60Scx89EnKWFw3%2FZSy6WBJeXg5pInzzIvo3%2FUBqe0MyDse9kNVwWhMH3kWOI2YhWuq%2FQww8T5wwY6pgE%2FibLN2bDIEBh6LIDcdgInjDZYVvyLxOsFIghwNQUMNxDt2RqoW1nJsOJz4SDWqBXmM0JjkFtbkqYOkZ5zAhSzHVodUAfU8IVhbqzwwrSFyjAAhNxsB08H3vOb9d2%2FnAwlxR6CWxJK9KxOoXWytcpQvOuIjQtZB6bDRCL89BNrbr9JfH%2FpuMA9a0716truvWEbmVJGfpk02PJiEOBBSt2zzAWxhMda&X-Amz-Signature=e8b897fde734efd137acb6a0fb83d88817b0bc9f9599295fdbc7a9d28437a4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
