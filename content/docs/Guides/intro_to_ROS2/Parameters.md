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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THLZIAJ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9YDUwTHVaiZY9KHLCx6xqbjtubcaPALVA9uE%2BNUCdCAiBj4XUjmf%2F%2FbS6iNmfHljR27oU7Yb0sGObuWZMT2%2FWgbyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM2L%2FditZDgOo1einyKtwDeu2pU%2Bbix49IrKlEjKUe%2B7UndlP3m4g87Er%2F7TAWOB8dLo7Tf51jRKkk0h%2Bh%2FOaRL56YbGID2F159pgVjM%2F64pNVMEQjDzcddflgnBvWDXow8VjSLGV2CUV0M3ah0E2Iskm91JnzJ0yEQ4vkatrzwBuvl%2BC0hcWOYaTy%2F2ooYGp%2F4Ob7EzeHd16fS9tQxKS9PPkNvwF8MoPOVgezU4yArly3cXb3wXijNPlGpf931lFZ6Ac1mOx2qY5%2FR9L0C0x4OVxfIQ49dv33roGlz%2BU5xEC%2BvYp7beid31vU%2FaMBh%2BCqB2L5Rwhbr0zjbjH2CsENF%2Fj93gA5EZBK4wjzOs%2FzY44tN%2FdLdn3V92fEQltcjneQ3AbIqznizu0CqOcQs0HO7uVrNNSM157nCoFaImZd8DhnrK10ag%2FCMglrMaQcCcUTYa3hu6Ebaj1%2FHfppv3NtbMg99l1%2BDm9qnLzAwzzKfN%2FNDiHmhJCrt%2Fkohr4bhPnO9g5uUIKiUhFOQDrivrBX%2FXBojL4HDr9cyjm7UOiGmYmAEjuV%2FxftFUY5lAhq7vVV%2FVR3l3TSbWqMQVVbAHYm8X6xY%2B6QrghOXg5eC6wGBm3diw%2F42lWcBt0bXhVBWcxpEOoLY8TyHCtQvaQw3qCfwQY6pgGhqPuBkHN3JgBAo40cpQ63qqfQrrybQNDLiNItUznE%2FJ7h6Neg0gE7vlHzccz6vIv2GzmCV3%2FGt9UNu0jj51vqp1k%2BlkojkdL8vq8nu3UaxTX96iCp8s9vdVoFhUQOqRIHOE44Rpsn%2F9bUCo1vyKh2rKALUDY23Q74vpeUFqcZbVoyXg4OgTkuP78DXlSCrLhGQdfmJgRhqgtZLQ7TFgb%2BztAtDexe&X-Amz-Signature=8379c13553399a8345d0b5f2daedfdffed66c2cd659292f741ed243718f832e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
