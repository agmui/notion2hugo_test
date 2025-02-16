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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EFURRL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsZlxiZmgcGHeBoggGArlV7cTR9cAxThQTyM9cBt4wVgIgfEASciZA3BxQ7v8NKfgy2J2WY5%2FWV5puYCpLWizKLJEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBxALoaPxIS28%2F4L6CrcAwDkZFwnPTSdhhod1jyCFXEKzYSvXKGDQhVC7IQJ8Hqwpxb741EoLPYDP8hUH5inHPzKRmO3sCpJ7tTiYennS4a3Cz5Q1wlYMkRFRwWTz%2FUhC7bCXiOJCEc1%2FSYtCrzFn3etn5Z9u5ltoSFonKv%2FUyjHcMgaDsRNBl5gBfYLox%2Buxr%2Bdsa7n23tYk4vfIv2e4Bjo0IY1YitU7cPBIzbY6WM4rFT0T5OUbWdUcJNGOYK7cA0VA46O2lQxtNfwG8evs9ddtzcjT4t1%2BKliYBr6DKD7ZYvDGE0l1Wsmnx%2FoPQ4kEO4b8yU6e8tRCqCu%2BWin4hMowlASXKLjHfR%2FI%2B%2BhFbefbvI0S7Jw4ZHYbTKVqD989FyjcaT2L%2FRLtJo7Oz5BPGnjfuWH68HL6%2F6myTQo6oo9iZgYjKTXeYaNoksBxLhOs4UG2dUARnoM1KQQfZ1e081rPUfBWhKFo%2B4ODqrzEEgNikOGprB3oUwPzHBlQEJnay3OBWyEsDsmFwaQBUPd0Fvk2F7eQR1H56nj51zkm%2FL5lE%2Fz9ieOjK5cNmJCjIq7TQt0wS73s0ROf02TgPRR6sr7pFY3k40lqcNHGoNeKc9vO6%2FFYinjJ7WNVA%2Bn8cWCUxA9dJ5vJqQfpk3OMMH9xb0GOqUBKEoJZckvLzk04TcsCQeFh%2FoYQ9EiJIzDKW4AjonKllU7Suy1s0EPYxGPczCF2vidNbC3Pft7K48uejQ7KsdMQBlT3sNV5WGz1V2vjZ57OYzgvHHIYkTm7Pr%2B6S32RPVr4Z6ApjZbNCV85uAynmjauRzuG6MVT%2Bli7xUOErMS7oBG%2BvaMl8T8BhR36lG4N8J2E%2BOy4AFkZ8SZezeHA2BHsdA%2Bf%2BDB&X-Amz-Signature=0c3fe9f6af306dfbdf965a1ea23079cf58266f5a2584e71491e1b2851bc57d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
