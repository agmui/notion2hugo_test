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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FMS665K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmcp5Re05ZyGqKyAFQh1e3KTXP4GDROzxDw5%2BPn%2BMAXwIhAL3xj4z%2Fv%2B56V8czMu1vUTWQ39u5Tt8Bj79b9W25HqjrKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1Bz2srA4YRb%2F0fL8q3AOk69ZMdXbiOnms8ioeY5tXd1ssYDcjKSwXAroF0035doarmUEs6oErAcGG3oXyMtUTQ4128yjNT68JpgIhsTzj3r2TUO9lEEAwCCDJttIIAaK2jiSCqsKCVWmphOkpRBmCFoZJFKKNd59zSNYsOO5QhlZKZUlmG770iFCLrJ3Y8ZrEhr8obcyIia5Nqjo3zE2pSk6CjRQ5cDWw3tpiVMx8VQOm8yLktUYT9eHtLRGxYNXjiUQXNj9PLM4CigU6voSnbupUINqonTbPsXUCLTnZtwWa31LC69fRaZ6%2F9AP4387yVq%2BkgBW64Jy3LXLvwzOqNJZQVXbMyyVTGtGEhXmOV3D64iPmYRew%2F8F3vhhtTrTSFuV7YNRzz8tZnl7pyVjUhaYnLVlU0n0N0hbfSB%2BX%2FTnsunfpncFSa3GPLl9BJS7ZZukCEpfVdag8dktTphKi1obsY3%2BL0muqJRqsq6zD5yPolZPMZcWa%2FbdDz%2Bq6mntgh4qED5etArEI5XL7DuB8U5WeMEXuUnCofzslU%2BdmXRQ69nb48%2BX7h2mkodnzJq88TQqnWIWJ9Ht%2FvmR7qgNveQWfkI3Nu1vMjGZkHKjtIFpa%2BoMfs7w8gguNVo4tQGSTd%2FQibkAUSYQXujClsazBBjqkAbooIQqOnQEJVO7p%2B3x3t5xSbIsRvIj3I7VQY0Xe7jSueaXwSPeJUx5OGcwlAR%2FUVtUsHKrlQNLt31rzrwzOnb8fgBwHb1fMkfv71Js2OFA2gL8rUd2zXapwqPn%2Fz1b90uWVxnPUbJfsQmlUuyCWsT13T5QqbhJz9xg7vVAo0CZhKCSAD4s76X7G363Qpo38j0PnD2ET0MvQUkTbJuCiMSQtVoby&X-Amz-Signature=d321dcf3677d1cd984b323b8827a425257c427dba580bc4b2623c9d0422d082c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
