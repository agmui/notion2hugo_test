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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TI4HJR4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8Jz8aWKc8tI0TfrDwwiFOlqkJ%2FOtAhvQl6gviQfzXbAiEAwb8h6s13xy1rj4mrMxyfzJJVP7DETGndmpFIyvjELXAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqcsD9uGfIJ5bFusCrcAwTq6wXymhfUaAtJV261GDWLGN6M5qsIARQLhTXxCpVxSz9w6Q0yyBCGenlkZZG0N0u%2F5a06bkIQBQBFXk3VTLrRviUYbzDFlbBOzDFdZV7YWsxEU3vP8YZ%2FXyJvHYaHcFgvTYGRZv680QH97jVC0HpX3tg65re%2F9InGBGdyJY%2BvsABxHYVLSZguxU78vzULZuukXq5YMGsIzNslr%2BbVdFFhe1gMxmu4zwgyvJDv2T0ql9f811t1WQ%2FemnUwqC1yCForHytCtKjGv0DRmXdsmsH6JwtqonZI6OO6g%2FuotWRZgZKxZVTchIkyD3VdM3OlXIlvcGUe9w9V7TiSUuKKRpeZf6H6r8nWxUm%2BOG20AkDCJAL8HNwLUaZjcL0%2BJV%2BRdLTICgguIL1EpoKd2pVlV3YIjMH4g8%2Fu2WZ472%2BlBb%2Bk%2BNgYMKtn8cPyGJDk1LteY0nyghS2MZqwsQv4HO8LTNF7AxsQqccaxKbl5rn4pmp6VJJbQy9fN2h%2Fn1JBiv0YTV0DT8ZLx4tLQKUMKJqKhTjwzqaGfFX373ukGD8VEcfWN5WBkoRvRWvguvQzHKtE%2FQkXMMdNCt%2Fjc1DhML5%2BqaGECU2JCGColLcEJ7CopeCyEASCo%2FaK7c5myUDNMNe8lsMGOqUBMrpS0DRLgkYa1XwEjX5zlhwuSh5gS7mVJZ%2FJQV1r9I9xzAKCAR%2Fq5MuB3HXhrAszinIpxFsjQuJjtSnN0ASc7X2rKEcZpEglQwbxlUedu3kp5EuGSzBmvRxuytkB%2F2mVbcTRYjSK7q%2FGw7c32YXkhTuoDTqFdTq04r115%2BmEqPR%2Bxr2tVKtUdm8HehrqRANcNWyDWau%2BFL5W3G496QzZTPAuPWOc&X-Amz-Signature=2bed832bbf376d6940b31e02fcdbf1063f0d2f217299b3e42213f31821665d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
