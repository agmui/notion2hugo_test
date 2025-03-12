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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G6KAT7O%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFs6MSyzs4pJ1aL7HawxkAm%2B0wFldeVnE0HbgzgKOB8CAiEAsQkMqg4MSBwd4C0VQbRRvtiMV2MIBZagOPPBd9bPd2QqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZu%2B%2Bymp5tLpIPsGSrcA5GDRFHpTaw1kjzEI5s0OAKuZJ2uNnl32%2BEh8ZESh9XI%2FfeYzxsCeJaYf2YOKvCTwiuyEQ%2BeAkOb1fULsch7Q0MXqMIeo71ySEfPdXQGZzjwUoWgaBjYHqvU6yv5l%2FZs5BAlmVPF1NTlzBK0s3FsdAJkC5VeJ9cQAbe6rP5SezFl89P9d%2FE0f0U9IWVx86wPHHGMEhCG9MbLwjEbmEqRZMUP%2BvlZ2YgXhQdQkuiyFi6Y7vg06cT3yzFwTNR5ES%2B2DuOuysdpGO57wpcoeOoq5jLpzrXJPNV0pEZ1ithpJkFfHSgO4f0YuzsJwvABiBCu73tHmnD99oydMmVM7rU7NiELJMcVP6ZNvxWV0LZ5iAUpB6LLugyNb3Afm0EvD3ue2UhM3ksJ5Xuo4lRmLsLWDQYoJl0ybLozuTQPSYJV4YXyFF9YpgYxGyZzAIfuo2ZDXhYXs%2F719oa%2BgX8d77jh77qZbf75xG4FEkqCaO96GvFr%2FpukODugR74bMh9kA2LspoZWBI9lioYJfuY0L1eIUOHtHBaJkmgAydlP1SJmWv6DjAHTkQ3IQtWfzYwOphGpjjECpI%2BgXS%2Bij1PBRDTFWynjjbthRPXOewH8M4nMq2mi5h4QwMQOVzcZMFcVMN6ix74GOqUB%2FJ5aYwd9GYuN4i4IljO8UMzu6wClzbcNUCDLaSh75uUHimwrqnoqaY3sMeDkvXYhOAAYfOrzPnWI5%2BvXjOsEVC%2BfesM9DEQ1%2FfbiAXN2J5FLx3AkHYmZT35dy0Cpohj%2FwguoJIbKynbRd9gagAqHWwpGc0B8mHgbOST45QmWVmH%2B30EAt13t9Nmrl2wdxINgA6DpHMi%2F%2BVzoMzsoLON%2FXBXXQS0G&X-Amz-Signature=d6c5de1f3290692ed90c41d0006e14979e0deb026d81e0c27d794c074ff122b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
