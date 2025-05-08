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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQW3VZ2%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbqROC%2BfUgvg8Rpa3KM0UOSu4qw6%2F0Zq8QBg8W86TP5AIhAIO8JkEOJKxM%2Fy%2BfTJQipWWZySDIhBCZG7XVferOQt%2BIKv8DCGwQABoMNjM3NDIzMTgzODA1Igznd1kvR4TtkzSIM1Aq3ANryA3D6mCf%2B%2F2QDihKbZx9FvzZPZ3Si6Ftg3dQ4MX2YwyqQ51ieK8OD7vg9p7W4h%2F%2Fo4rWBq4GhxDOfbTIdQqVWCQUKUujOIiMMndI9Er%2F0tZGPzjc7SeUvsaKhfITQxK9CnA%2FqCE7IdczLWZNTDBzGm9L%2FhoErBo4DSGX4T1VMM0nbQ8PfGc8AacqbAFEHrqUhk681akYxMYA9FWibmwSLoErjyaXHTsqLe0VjbZ9xR17XpZasTXo%2Fs9OVEs780FHMk09hA6FPQSD2WkS2dW720WKYinWw9oGhP0FUdgCFlU8R7C4wBd0jxFAtoekxR3X4%2FgAnBqugh6rX%2FGUfgzc%2BbQMbF3Rq5yfhgtEf313OIHNLWGoZgDNQlzWr4SEwYlD75IPgxh2ZubPwecmUm22zllD%2FOZaAE9JQ5vUY4vvLGTrhvFOlu%2Fq8Ow2mtjjX8o7t9OE4cb16aLnCQwoBhKIXRgcNGXLEv15jx0sNhRWU6jqESpr%2FHt7ZORh0QXHllD857H9BH5KhmsoT%2BLmjQ8qJmE9GitAZj%2BrD26dXOLvcHS3DqaY8w2FwcKIslfCKWvOe884cpc2cfemSIbp0oz1je0qeGKMRb7L1Dy3RRCdXRXJ%2BXK1QiqUR%2B%2BuMDCawvDABjqkAS%2FD4p3tAZy%2Bqhary7IVn4tCE61QO5qcZmW5HdKz0ZbODEFLrulXpIiyicRzeb8%2FnpIE5h1oryv33bGipqTe9uHSDN6pJVl085js2E3uETD77eE%2BiZyljdw9Ocemib3zNPOnX0N%2FVveWb2SAibCYgh%2FKE34ER%2BQORn1ZT%2BscrzRBHb%2FKAwsLjnNEifVCfltkx4J22LZJwAkT%2B%2F01mb8IEZGXpfYC&X-Amz-Signature=fdb6bfcce03b01c021227341bbb5f68bdb37cab93d0b236f0928afb3341097b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
