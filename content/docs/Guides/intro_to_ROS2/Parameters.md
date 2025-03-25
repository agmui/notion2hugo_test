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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA6J2G6H%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnKNXBXsi4HODn1TC1qI%2BG72aGPCvMsA3uUpsixeDy9AiEAkSs%2BwZBQAjA99tfqjdKFHelAU8E25opwTEXt0P0K9o8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDE8tJKxvV4TjTsQKlSrcA7vv6CiBP9kYE8jyjyvvZFUXGybNglrnZLUWTHmy%2F%2BaQkbywQPp%2F8hvqUZCQKfaQNFs7EhFOxkfbqKQWRJZYEEwX5pEIIHPw5pFMFLcsn8V9TU7fwoew1n4qWjq4AVlV7LIQLM6kghLy5lXhB9kae1Z114lyOYZJRI0Bx3ByPCrqk0c2XOu7lkxG7562WJKr1phT164GdK98opoJ%2B7OKSvHBHEK%2FIj9DF3f5BLrv7TgS1xBt7Erb9QSLqKGahXACE8YgCv7UROOwG4%2BPoVvvudqXUHXtq1ZHlqqPGTgU2S0GSw25z9yPCnb0FNVF8j%2BGH5UbqOoDrvX1C112h2devHMddbP1eSnYfN15oyaa8nqznQZ%2FXNSKVJsJ9kXG%2F5HPBzOzLUkdMTUT8vAwfOd6AeL7anNnSTSaa3xFhcM2FL8X2MLgLmf2cNBGUbbKmlqzxeWwx2mKA5AoncE33o%2Bx5hjytHNPXd74wLxduUQXDrRqiH1O5dRMO74pIsJaI3gc379YTpG9R5Vah1jFTN3la1eE8z3zPutVEXDDufA3VbZ6Ov15aju1TVcTHEYedUCmeE3OzhmqKQ9CXHHMrZdUJ9Rx2rKPcc0f%2BRLHoaQZwjDY2gCPy%2FmIEwwucLc1MMiji78GOqUB%2BEN3Ag9GwAl%2BuxDxC9AY%2F4EqTc%2FSMehYCGl%2FqXhKp0yoWXcG43LIvoLr4%2BkeFuBQ2QUgq92db1mEO4IdtbqNvY4jrTdpydlewXS%2F6O6CXGjfnnNchrd9ltNNq1Axynceolz6JjMy0KsyK8LVVtgW%2BPKVWxyC%2F7iF%2B9DNP5A5WzG5%2Fhm6TBue%2BQtnDUVkwq7GnVp1qGRgmyWdE5PrccVN6xEGsx8N&X-Amz-Signature=76f4fceffaf8508cf998137b998f34a4985cfbeddc4e562938deac7d97b73cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
