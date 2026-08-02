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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466346G5HIK%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2BQAGEAkIaIzrMh%2FAkCiYzddEMTIu0LwvbI7hxzMQyAAIhAKL2B1ajqWEuScICof%2FoAYw1FeM%2FZ%2BbhcmaxrzPLc0vJKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBCpLeW0wqQ9FvExgq3ANbqo3ACDiSLQqQtuyXDiMPXJIeoEBnH%2BUFQypPP%2FrrujJ5HnmhEtuKcP5kcelPnoZmQQB1q3lL9KPzFE2GYHyfkZJCv6ZG0H3S4XKnbaq44BmsnK7GIT7ia0BHptHRCUSImzga1Cuf%2B6UMoPKpQZ9KjmVI%2FE9lvwerNYUu0R4bpsF0opYyCfRXEDxb8IKdW6CtUrLdHwU%2B6A%2BgHmIlpGDC5BkmyqhdrmhgTKzplvsMIvvzo%2Fk%2FTWuiEkkUSBemSvHH6qkAOdyZ8Kz37c%2F24%2BzA32kfm6rwg4Osrd8u4GgWR49A2vwhVMCpYBFcaI%2B7qAcR0wR6mnRItC0LJ2fgBl0yAA60Hkgej8PsWtBwb%2BKGmaYSr2b%2B7pjPQy8pO%2BbII9OVpcPQkzV9jT5DqGzKPdsv8zM4Lf9A%2Bly1YgDobLH86BUhAXRvrrgdf%2BSb9lj8QlnMdgjUN3QOlsUUDw4NJqQHhJj57ZkNrUoUuUYPImFeOt9QuLV6jbCrqzWZP8k%2Fw0waHMZ3yNkxxoHiQIzIKkzinuF6KE6rs4N1qnsQDc8y4M%2F%2FZiRgrpJmXt7oiEiLW2qXlbAjhVRg97bUDBBfWKMVQgSi77dZZrVVlQiXw5mC9iigfn3k%2FsxE6ve%2FJjCxwrrTBjqkAZqSy7rIEMPrWt4LyumWw3eT5KeP5J0jzEZ55%2Fe2zjaLla2TwImzwTG1TCXtKSbfkPTPXEjZkxdHjXgaI1ewpUohf4S1MVwEg77h31JjkskziKvhHbuzmdqfkNbMqESCss8%2Fp2yILcmeDMwXVnkG4cgMNRq6vlnv2MAMjUNB8Cn4wB3gFQoDvf71xXXtkGJFj%2FyxWbtwJWLeXqYRjuC8q8gmQVT3&X-Amz-Signature=9d0ad14e67a02036361e162e5ab9c46047f040614e9336942ae16a3a8f60b261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
