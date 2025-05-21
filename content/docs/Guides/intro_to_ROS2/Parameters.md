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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIM7OAB%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDh%2BnwTNJxoVnczV91h3FQ4OAwmw4ILrEWnoXTcJ1e35wIgQ0mO8rwpihw11ueBHu2MTHFx9iZJ8KbcURnMU2OyeCAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgBAy%2FCv0GQSYaiWSrcA%2F56lpLcVqOy8af03iKPUBG32Lrfx8p%2BnKd%2FSkjjbbpXWM2CmJkj6XFduoAlNij4Xn2MyNfei5LbrJ4DR2dUcIX1jbUWHiIA7xDEI9WqWA%2FPXNFh10IKKIZMtlaWHpfCCnWaxdIsSACPhwq%2BSOtiUT4PugQV6WKA2aLVwnkuc0aTQeVxi%2BLOlIhRyq%2F2Jf4HaTyZupypX7%2FP%2FuHnE5eo%2BGxeh%2B3cNuvQdjZ4fe0wnpkoxKy8r7%2BPW3ZTFN%2FoW9Mgy%2FpTnyPzWla8uPqBvlDV5NZzG3Kb5DVzg3uHHkJfQBdbSe15Teljmmym5iuWR381dvGUbvRn9%2BK36Wjt1i6CglQLrORpsdbkpGkJVRmrFL8vtCqJ6wZKro5KVVtLbone8xLD94ltcrUB6Yxpz5mfY%2FEgpTK3nfHLKfNf0mWMwyAs1ZBX%2BM%2BgLA%2BEDwpKV6fGzXDF5atzC8V3QTr%2FafS2VYJBraolmN%2BDm0qMdr6QFd9WIYBpHWpHZ2mJhKl%2BwJm9%2FDb%2BKSJXNXEujJnmR1S6FlQXBbJ5814Sixv1oRBhFrRO6%2F5lwC56jGQSKzQlo3BqtCECs1UjlXQRR0OFLHlXS54zqY4vkq%2FNkMrto%2B89RXsFCZgdKok1Z2E418i4MJ3UtsEGOqUBrDBuD%2BqiYNxFB1gwFq9vkEbQX3dNciz9AwW142D5EiJjvoO6EzDO4wIIfz4K1vDxeY9P9j35NV9nbulGMg9Ljl%2FOp1AUdZrJwM%2BmlbbuRG6YpS2uKk8o%2FeXb4z1gyowoRgjOj%2ByMJhFy6uMK2FnXyf0Hjv%2BIBwVd%2Bx2YBcL5%2F0xc%2BkMBsKh%2FZTYuyYgr710sc8W0NuxowbPsDxqG3xIc9OlwKYzX&X-Amz-Signature=65d17994b72ecb8b61910db8f5a2fe58a63a03c836f34f6afdcbd2c79b90bcec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
