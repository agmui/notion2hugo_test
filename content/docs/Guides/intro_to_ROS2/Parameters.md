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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAYI2U3E%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDxlOMofy5A%2FLJMbyVP9h1g3TAXpn5mNHkxkzWNcxCJxAIgMbwf6x%2B36a5QOx%2Fyry21PsMw9YeiRl3KhVmazGmFOKMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCkZuZ1ss182Nl55ircA5dLkmM7bQV4d42SMqm%2B7H%2F48R7tjdZR0rxpGCrInzyQMsoygKoQzHEg%2FmtN%2B9IkvdakLHaEGXr2ECWpJl1ArkhjluIb7b1fgr%2Ben1VkAfAw8t4bHDOp5VMFEN1pWNUfndrh3SyXdrTU8uPODG5Tou7R%2BSoQFZfrcOjJX7%2Fc1j4gwkJcmVxFROdLcthB8dCZZNt99BQCGOw43TwZB41T5Cb%2B3DDFc4vq4Gkqub91oLGP8h3Iw6%2Fm1jnw4oVhbDaI%2F%2F6XXaayiNpZobMSzpRu1QjDAmtkCc%2BtUWUbDnMGj5UzNh5zJ5VNIJnibTZS6reaC6TSqoXaGxM%2FI3VIOsWocC3c%2FTKqc%2BE4dMLJq8i%2BeBC1k9iHXpnIfFTH2EVO93GekrPL56Ueuu7nsgmu948rFof44RkgIO5US35LPG%2B33BQvho9F4WctD7JaLYh5%2B0j8j25JjpHDVkO%2BgHFEsrpNx30YQmbeaXVTcV3mYdodiWBcFNdM2wa8afp8FbrAxnaTlWlRG1K2OWVYoMYBNRSXWQJm4epuhi0AJkbfIgEmgmZfmDItrm5F%2FntzADH9c3I00BvZs7tNR92KzszUCuYcDbzddhrngAdm2ZbKCO0sIWDhAqZTXqaNXyANk7H4MO60hL4GOqUBRrqZHGuK2zVsOSk4kxQk%2B9eb%2FTZmwlhWy%2BJMsl4katQuhoA6uhmnV6m52ZCrAfzSkRniEqr27jV%2BTBcAdDAvpFIg64vPI51eqT8e91sKkunzZihYa1QLTobvwE4nvfpS8s%2BBNOtD2EWeE2ZOLrm92wzjwPp6Vklk440VK7J%2F6MVSd9x2Kqs8sjJJ%2B%2FcoZGYGkL0IhqsFTdQ%2BO5RYminQnHugAOLG&X-Amz-Signature=d5c9a75f70c8d2f146a84283332ed7530b0cfc41982feefb3a109a79910b22c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
