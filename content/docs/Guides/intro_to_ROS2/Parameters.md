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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOSGCXL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCNKQQPWTZIa2HmnilfZRQgthF0FeUvHzlwywhs3jEyMAIgdOiOULTMJGj4oDEXpNNrol2PXXDXvuRN2LwXgJH3G4QqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkdnpjwUihMQi7WySrcA9DrgrnW8BVtqBeHqI%2BAe%2BD8oq6gq%2FEbfEkoSNM2e8as%2B4Px0KWdq%2FAQfMpfOpo4RDCTaQmZBREx5%2BNicq4ttX%2BwUocxoKTurwCb%2F7HE83TI5hIipK4ezna4F4yyxMT71MpcFUPoa9zUwOaWTsiahAbjh5DodUV7LpR84udaOXvMVdYBbCyagHTm95yXxpEBARYwF4Bx3c0bZi5fYjGx79BVe8EX3QbFYbG8ZNxHaJUo3k2McymjpyutyoqUzqbYvYZpHYNMZCtYugJgO3ZAVYmLS6kjg3d33J5Vzt4RavYn6P%2BW9HUrsQinzZRqGypJctHwjty6QCZ69uV9h44dPoicFDzpXEhN6VTjlCWTbwzkY4QTTpawAqmlSbaCSKh1ExS7swDvoI9%2Bs5xytDFtsx%2BJoy1H4kzwM7wIXnP8e3C1tEwi9WwArppm1FDNfLfNGwM2uJTpBQgViT2DxiFUghsAj99A%2FUnt7Ne13h8AVkj834RYqyfpZSPuv8wOvWVn2AB%2F4aiuVYhHLLp7NvcXli0PLMpSIBhpPFEaMDz1wBWFl9kCeIhArkdwvVZLTJ4e6nj4P%2FxFDGc1tO8gOSZFzQti%2FBJLBAQwUsuzW%2Fuqd84HvhFl9m09Zt71977MMLigj8AGOqUB4QKXOz%2BmUPiA4%2BZx5tlpzjzYsCtLvPCn6cmPaP0K3Bn11%2B7z9t0gwzlNeVfLmZ8w8bvPsa6guq1FVaeC7%2BhD%2Bn10mx3RG2w%2Fh1nUivKx%2FoNwCSW8hhKQQaE5z4qttQe%2BNqJG3LDjfQJ1Wx8PUMw54KuZhRoH4qELO7NGllBLie1F4ZKHNWZaAtpiksFfwntmdM5WnZnEqPK%2BKR0fo3G762zd%2BQdt&X-Amz-Signature=4b6a42ebf2778cd88c74da06bc324356d0567ca3f2e46a51f3128b992a110739&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
