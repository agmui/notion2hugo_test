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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXCB2UY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIBisIJzg3uc01TUaAEaauelQMM0n5toguGGxo21LMN7%2BAiEA93BZePfuYJvEQHlfVrKm09NfHpg8Ep9xtVCvy9ZMgXAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDK9sne9%2B%2B2%2FFxWqP3CrcA3BDmpkt8VFaxGfPg362ZKlvKSy8h5zuTxLTmZaOlgOkNMwCWH3WPlJfyb7g9%2BADv3fX%2BLy%2F8jKx%2FzXrsqPwdXIKNPwq37LF%2Fu4hl%2Fqx%2FlfCyoCFwfqQvu0ixxiRnR34Eh6mQdrH9K5HP%2B9zTnnkMGDG9Ou1Z0Dqwjn%2BDkdMzVPRj9yG4UddYkNxN6VWoXo6cIXeBZBJpgB%2Btb%2FO4U9OvB98moYDVwwbTtYZiaqHvJal4IJ2ScOsHYLoBr6TXiuKGIiTg6qu1LgSjmYgWyiXISnxkvQfby7FicoYTHCclSZJDxg4wuIafa2MEAf9UzHUrxGSCd871VkH0G3f4xSQbydcGjncumi4PS6L5FoOIdQhYtuWH4rP9KqD%2F1VV1VweL74pdH6jJ%2Fucw7ospOoqDjQywAut5ziYZt8uZIa9bjd%2FKZ%2FjK4kME1ygRLgzvoZFsE66ZKRIrz5eYLb7QfG7CQARxXeIZkMCX96LYc%2F43EcVn3%2BAk5z0wwoTM5OCHkuFn1Elll0Mkv2xkfefNxQ%2B4FornqoF2Vr08MhCz%2BLsvAeuS8CCqwXC4GgC1CymxPJ%2BfLp4xWm67j2%2BYwcUCXZDXHtO6n0u9fYqZmUIxg%2FzqfG6F7u%2BQrXNmPPEwe0nMJ7%2FzMEGOqUB%2F70UPrPMTYlBu6C8a5eEZJ%2BLxJjC4DMZJVqXSiF%2BcUIkJZTGt8Id7PG7AvaPgyWylCcyibIvvwMyP9wwGeLl0WE1uayHZrtA4BqStndSOTJtuzr%2B7sDYISRv1iHTTTe04w1BpOBjLgxXy0GufcCRVOeYXrVzG6kBe20gkR16D7uJPDjto6b3PMGsySPvCPbpJ5jS9%2BjhLyCqiP928%2BnN4WQmGdlb&X-Amz-Signature=aeacfedd1706877e2df1e9a6fbe72aa96aa8d76cb303fea14b7c7e7f91f76f67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
