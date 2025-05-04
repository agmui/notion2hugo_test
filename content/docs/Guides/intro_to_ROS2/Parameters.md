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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMGF7ISR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDcSot3J7xIctlByWmnUrM0CMyPbfX5G%2BL1qZ7oDS5GDgIgc219LykRiuifaUoL2F%2FntkTplL27RjTcCBWA%2FK1E%2Fs8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDIOIg6zBdEMied96uyrcA8w%2FTBONCEr%2BQH1Go%2BW91noeyjYPVnGQU8pq2yUhOh5ksV4Olof31YZ4M7fNiaN9PcNmVHi%2BxZPpZnhKQe9vQqFyR%2BqGVBZ1IbBE%2B9tTgW5L1S7KDG3rABxiADztkhSE5bNORSAOOD822uwk3B3zt2VEKxdi7GveJ8Oi0mPWgmr7ZW0OUy71RKIqcRdVb6bokxJRg5oQDF5UIPN7dFLl34o3L9yVh0Txn9vtGYvW5IEK%2FeH9DO7EDK8AMe7DPQpUu1t86zaX15EocYnQcaKcVMk4vawdarBnO1LSM%2BwX%2BNzCj%2BbD%2FiJ8x3oOer0RFY29Y56PEeCit95LKsvyhIfTevcrh0qfqHbKHgAV08GVsw1gCtUuMcXI0tsKfHDv7uXiKmEJjxus2pf25fa0m1cWw4EultuapKeh20OuBGFiU6rGV%2BueCvaiSkCO%2Bu4vzJXmvr6NnK5z3DMSWueRUeqtNxvZXwoRb4M3eVTtwJg6Ju%2BnZvMhRho9mi%2BXIHNdP22b5XM5kXzTAPn7otGu%2FlfQ0b7niN8i8hPTtyiz06qNRACQHg09%2B0V6Fssq6MAnWhbrS52uUi7tiGMqblpK2FCO59d%2FXhPE6%2BfvaiLlJsCDOtZ5qH3sA%2By0x9jxwgFYMIG73sAGOqUBQlKpeYt4eDNwi0PzSG7mbZbHQKRiaLF5TuXO9lONIbkDPUKvFJMTY%2FjjwPfQf1e3SUb0nIM9sFZPHwZfGHimzCNGvY9GnMw0h%2BiND6fcp3zJX4BfTV0xABvbSuuBen9yKvuSggzz8WJHOJBG39xR5XWvq3vSzv55xsgJjytkTjnNvsl%2FC3esMNrDsmDNx9vQaTeTfo7EcOr0WXDMFV7xoUhjOohI&X-Amz-Signature=50b5d23b443ee2abf09d03a2dd0320615ae46b6f80131009170c50dbaa2e5d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
