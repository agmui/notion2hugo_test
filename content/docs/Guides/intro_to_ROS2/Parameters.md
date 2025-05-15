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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YQD3GS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCKbVorXRX3Nqv9ewhqwpPOmjhVwOCNbS7aR%2BC25mD%2FsAIgGgcmvgJIVTnOiBwSIc5f2YLkzbRnVPRgVLc%2Fm1zx%2B5wq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDJe8iqR1hII6Xh4ZKyrcAxs5rbxYmOQ7kqzy6d727VtJcvDRfCHNlWZ8smywCqu36imUHFFZPv8jaLFMzLtEtLZZkfNerS%2F8HGd5VQ6upN1Zu9pVhj4QVJi6vDPBRzhOFyvtUJhkGMMw2jkeDuE%2BuI1qdfWGt0uus5i9Tlpzz4eHThx6XgiOqAfl6GTg1qwYd3JqQtoEpcYzqo0QWw2xEVGJ%2Fa8T%2Bfqn9dsm%2Faf0zDpOrJX7OFFpvLbmndOVkkh%2BGbW0YZK7DXtHd39iw%2B%2Beclpy58vDFN1fDoPyCEUUbe%2B6coH2tKnBYRlHTJ%2F8rdWyVNJY6UYpPS8asaMIXysv%2FEybK84FnwjURtds749Qr0OhO6fyGMu0zRYW%2Fcp2wBRjwSZJ%2B3rbbrU%2Fj7fKZNdQP9yRqfvNJziVfGWyA5BlHhyLfWo2A3ZX5opVuapyWKZAeaLmEP4seEqUQWOrUJH6Is4oE5R3XZyW3YneCm%2Bv9sMCLoZAQAzNSqw%2BKl4ks%2F%2Fh9ZRU4peho5aPk%2FYtBvWTYPamuHNPol%2FD7CPRy7DZ2shNfSYx8BN2jsdAGxCY3LHdavgAS5sPSq9PloIqxNqR3gJRZrpltIOFQYN5FAJy9gnqgVD5QXLj7yVIpI%2B4RbGkCQvt9TfAVrLs7o%2BsMJnqlcEGOqUBjXwnxPE9FaXhRDJ4lyUy5rul2Jg9s2P9LIuLfB3VpCTmrH%2BkaIMuRF7yZu6F6so7IfdApCn8HFiOv8SYR%2BpHkkbde3UcGBY%2BnkSSzSl5vPBz25IP0sASoVgRcLJXNDqZBPjDxRNbUCest3sfT45MVoGa1qjXPpzDkerOmc1XDkpkcj592aIeVvBn4a9ZjdXFY%2B8Qx%2FWMDQb7GpQDWe5PH90Fr621&X-Amz-Signature=9a7d82014f0f5b69c3163144350d0f9a74068b3faa4cee62915792cfdb7b72c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
