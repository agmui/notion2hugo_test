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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRWXVVP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHSD%2BxN75eb%2Bt%2BjS6iPMdX0siBcmEDpOSg0p74cXoKmJAiAoeP%2BEA9IzyB5u2yfxziy%2FezR9QBoplOIbJB0hWlrPSCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQDuXD4F7hYl3GsTSKtwD4aPK4nQs5VPlZSwiPHsI6eKQnrIxiLAjtiGD3QlAt7E3E16%2FxLftLS0CQ7uj6hUOGYhpus8iSlybiv5baZ5Qur7%2FmzxiRBLeLbI9CAFSB5E395q1NXvZf1%2FvpX93%2FyJaMDlzB7YLx1aoGJjI2UJVuPHG8bmFVZ1ZISKTKbfau6XJzrDXbA9jAfXBQl5Y4TzxFVIkPu4tPnyc%2BpV2r1QRDOmTDYLgINuVQPQFGDUimvYbH3KgmHmt4fiMqv0h2P5LKauYq97IFaJvHiKV0cWSPvj4z68tmkgOU0X3roAid1gUI2BjXHePYhjFwsZ6H7L3CWhAP5FhEPiVcNJaeo7OithqimqSHZYvvqcMlLuIfYhKx176p5Dp8GfcAd7%2Bw12RInKfwOjwTFPSicYWd0ROwceqPDcLIWPuQx6qHKPSFOvTx1g4gEjJ6Z3qcUt%2FVtbj%2FNnQ9HPABp2ybFFhqYT9SYAtToZzhpXkRB55Hi%2BdAT9mcmZ7hLbkKNozTBXN5emVhpKknAxf5Uf21UrRbMB%2Fpk9sJq0PZpG6nKQp%2FZanKn9hAyOnglLt14hl6RCus5uja25WUSkhy0npjeA%2BM7MiM0I5Sd3o8FC%2F0G8BgvEqCvk9pAZNBBOVARzEJAEwnZz2vgY6pgGZKPwFI8iDkpKGHHkfmMENG0LSrY7SWULkN2%2FTa5xtQN7o5Y25fetuRgx72LWMisxejNBqvhKObbRY7MliWFyU88DgxR%2F1P4hJKzvwVespKkUhYBmoY6i95Nvx%2FmfdMxvETTcHKTySWgL5zYu%2F6tOQhWcL%2FoAjqWYgzeNR69tko%2B358NNfoMMfSWRSIpWtappiwcFV3qKF0HRK5Q9M8xAlWOl7BHE5&X-Amz-Signature=cfacae4b421b806ace7a2e4ece44c73d8dbdb4aa85201877d0b31dd01eb2c41c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
