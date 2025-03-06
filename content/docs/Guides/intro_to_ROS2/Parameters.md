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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K3EGZ5O%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrMQ9Z8mXzGkeowI%2BmWLhjpAKCJELLiPHEQf9wNy5AWwIhANVUie7bCCD8HQeWYp28GlNP4dnIjZWw5wCBtYdu5SuOKv8DCDMQABoMNjM3NDIzMTgzODA1IgwP3Jhzv6uVYm41KTMq3AOI2q2le7WftLLMespLmQVGQh7vtymb3rmYRb%2BsKRqOfwCbkwWB2bNoXbEeww6J6SI1%2FM%2FXa6WgR%2Fi8nl%2BJmy21iarXdfc4bkfWCA62zG4wJf67xeuigg0kbce9i1RsOoUKkYLLB0EkXCQAtON0zqdGw%2FwpNNVSqBoskdB1B5VrqUQqOZ5SUfdbQHz%2F3%2BzsyxhPLDObszuRYZ57BuDTttC46ixyprqK9nYhltrX7dzgiJH4%2F5mFOdMWQ4WhKMRvvdAln7quh9bkJszEoOAHIzXosa19hG%2B5xLNbcVSwozV5qCzNo%2BaHhKItNSfKdCaK5C8RLnqa2cUXGgfv5A82MzMcPgh4eodhwI1hrYCJmM5eVtpOd0KlTUzzjCIAuWvXLbwj1UnrSSvZjifTsA62wzu5XZ5PMczxnitOTaMtZKQ8MVP6398UlTpKyQKuVf7Clj0Un0Ra5Mccx3cez%2B4XwhcwxMj%2FBnz30DWAWaw%2FYKfenmYftOs1p5TMtQR7cDXzOSBNDkppfwjyDE3QYv06ql0idDQg9sLA9LfrSfOJWWhpnlqsl8RGCQVSF%2FQfZDnw%2Blc2jUbW7PZ84I2rmdrNbOCevbWytQL02%2FaGcOwc5gTueAwE53P%2FNtD1nWx8IzDRzqe%2BBjqkAcDhbMnRKZjp%2FLJidIHt6FcgCAlFzcNHj30GwUtFvRcGlfgkKVVDXJVoqdpC1Avg9LN8CIjLLOhEs7lP%2F6B2Q4JMOYftL9%2FBhi3Y4nRTE7aUTNDeaHQFkXMCr4kf1gBxgiovjd2o8bQqS4veyohH498aAVwFTMOmBfdn0EsaSRkl%2FnRTwMTSpsp8hnisW0xvYUuNJJExIrspPQ3YazY6zpYuD%2FGJ&X-Amz-Signature=af78401fbf1d80b7b509261399572699b649c9de1a574d36024a67740ba95885&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
