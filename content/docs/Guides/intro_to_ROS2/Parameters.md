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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQ4ZVA2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQClh8ye4B16tkFwLmYhpbhhAzz6eluaACjIObiDV%2FGOYQIgEcViA%2BUTKps2IYuTjxmr2v6BktQ%2BkM4xdMdtQouEqHYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNsjSQSaiAdxOVtJbircA%2B4EksqRiX4ZLmFIQaAa8%2BAvZGp16gKcUiIh%2Fk3TCGWUP1DHShqPNilV3zR0foRZtNV4Ik0OTG5NPfwqh29P9axCedq93s28Of1P3UexNeQ0WomJAioNgKte%2Fb7JiA0L%2BvuTOtScNyHqGZ2s2kgSYHOw3htvBP75pCbafANMNl%2BpGd%2BuHP%2Bu5U9lkEwjZqHO1nPnyoQ2q0Hol5IpSB%2FnxPoNbnmCK8ki%2B%2BYU6eyE%2F5LEpAbiabch%2BQ0vkqKVggFnPjSsLxqY97Qz8P%2F4DygVRPrel41BzQjwleJHjQZ87YIxS%2FR4lAY4c6BnEnnvKffYX%2BMqHgo6eWazu2DB3rWOkVN0HPgmOx97%2FO%2FqEaxVgiYv7HkShAZ4pKmmGkumKP97oXkIYxZuKddDZedG8bzosniF%2BJUKsw7XNb%2FU02JFeq6A5pB9r7S7%2Flm818EPHn38TtdJtfSydjQ%2Fdt71ig3eLd1LCBhYP4W1O%2FvA%2FOjBzx7S66NH7S4MkMz8zvb%2For4kw50egtc0aPplZyP5BJ%2F0%2FYFgzTVwzV8r37gbkYdIA2hMSTx%2FOb4tXwgF57hkCkQYH87JuxScwFBPEJShgK0V%2BC71jJXbt%2FFdjiiJUMwx76KoI684d2t1%2B47OpQGTMNK%2Fhr0GOqUBvJJsI8BBXLVSXJaKJwYZxZQqgKxcQMe11q2fG8ar%2B8mKTE8LvHD7DolqH%2FeWhcH9tRYY%2F9k0YLkTy9sGGMvAx%2Fv5dNyQDsPY2KwUZHW21Gvl%2FJJyoSb6t9LQN0%2BlDfHbWVC9Nb34Yd8uIT60wMqXWqYHjXrg3toI%2BC5yNiakbV%2Fg7VuxL%2B9fIKiMDnXvEagM%2BROBcR27QrqIudo5x2OYqaz%2BxS%2FD&X-Amz-Signature=859ddc10dce45169cf0402d45acd24bc448ee65fb4f6e5c4a50069af6f1c267e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
