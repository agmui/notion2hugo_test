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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666322EEE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDpY3WBX%2BViy9V195DSsPrG3xks4FdYmFhEyaaag8BOtQIgExxM84DYjNOLN4qpSqyJUAaCF%2BNsnpjdhTbdWNDDVjEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDM5wUw3KdD%2FmzPWWVCrcA%2FKZJiUVSdHWyT32Zcu99nW%2B63vC2rHpezoHg51w1A%2BszU6pHI6tXhEfDZjYFHqGljSAXPvWeifwJOHSdIMMNigOKYVVy4fhMEBhoAzUbuh8mL6kIcxIyNcR45qpKskhccoZVu%2FwL%2BMnCU7t5JogNKbhwkec3xd56GuHcAKla3LG3IYZpbMK%2FqhxC%2FwJV1jXQsEiUAMam1%2BnOl41m%2ByjgBqHSoqepUeTjwpaamMhHTJyd2LtZLIr%2FvZD6JfECU7nFujgKU%2F7rGeqxw%2B1KaIzfO7NGbSl5jVFTDI49q6UjsDN2rWf1b1Ct9TvUU8dvu6a4unBqkl4Ymw0SyxiNf7FGhpqdS2T20nzlnko64r5qLLKLzdTmNxhga3KPKJWIiluMBEi0Et3BHSzjBWm0fELa1iqqI9reuWoUozPP%2F2v70vCoCzeO3tapvlvrXwv6NoubVJkEGwWKEgCjfxmjvPzP1aSpXT%2BJhV80NhW5qzdN9JYsyR%2BRDd8W%2FNTrr8ydZ0C6W98b2MIXIPfo8mDnmb1plEpNV5pDmR9LNgxd15gMzvXg92gdvwx2Dlib4k2djpIElzNf4gT3odJtASSA6DZRQ304PcfqsD4hGSrnDPqqFTQEcrnRwfFd%2Fi8zWdpMJyVhb0GOqUB6v%2BJNeiXxciAZ0xuwo6L5qz9UAirGD3bX7z2NAbK0zPL11XwUXUM%2FMZMKihawffASmk%2BYSGEgT8u4DOHWkxNGp3tOD%2Frc0HsnGREr6h4c%2FAI85XD9fofAfN3ASYqyaSMbRZ7rcOU0pd14Xl7rUsKo0lDHCLhqM%2Fs%2F6WLKaHnEEmbtfZ67ekKDyNOosnyMZYpgv63Enj9ampOaPA06wFCoMYHUj43&X-Amz-Signature=0d4502d5661b739ded6f2ae817ebb8b07db6062cb08f26bf01ba7567ef094c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
