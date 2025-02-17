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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KDYGFT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCcSz4qz0gMtm5zHCXjLIqc3yObBg6A56x2C2O6%2BGiNzAIgaRwNQFn1g%2FrJmatcSfKBZD0xGeYaqNMp%2Bx8OaPVro9kq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLNBq7uSE951j80NpyrcA43sfBa82j3Xn7YOVTyDhYIk%2FymT04wz8aOvu9VBliv75r%2F0h4j11dJrLRrnHbMiDCvhlTklDmwGqDjBVQF%2FOnVNHzIqMKE1gOUqkCnvJ2HQIDQuYY7p%2BFbtgUhI7Wox98q8%2B9r92P9eSifK%2FYD2Jgwl9lU3uIEuUmjlJt7QKlvbUXhAz8qXkVEW2VEwwoDUYFy850FGrUARiy469cNnsaKyH42GRZZbbPrEzUBHdeR1%2FswDmZa9xLGQiYzL4CWmC1XVYamqFhG1JFlobGCk8%2F6FZuKikKx6gCOQDVJBzcEqG5DNDgxOv1bweSiPCV0%2FfxOLQ8ps%2BQj%2BFiT3u48NbwA%2F%2F85qLciZ16TZYUWyX6v%2BPsXB7RBXjB%2B0NBrOL7kOI9haylSoDfgcajoJQoBQ1hh%2BceDtJP%2FscIDItQalsfzta2VIzKwKqxNbEE9eLlwwV6WrHcQvQW2XCOPzRAwvGNc8wXySiihtxr%2Fd%2B3yAlitBpRwtL40s4OLfVhvn1n5tf89dLnMqYPM9E1dCfZNpf9JsTU9n%2BRrLuKozQL6wfhfR43o6LmCwUVWr58g3W4pz60MKD3Z4Opf1hxjowkFFL64cCF0KlAGrBfTUrXW6HH295jqV5%2FZXxkjP%2FOtMMMfCzb0GOqUBBmbaBzZ2x%2Fg6RiE1R4IAzbI6YxPV730T2rcBcuDj47fnBKb8HIJhLvpECnbCWTg3tCh%2BdZ8RJUpQQPRqDJYz%2FmVNW6uvFA8IvLoDWEW5L6GRwaJ3YkbvUCWz5EbItLvvtgb5UdJGlHE2MOhoVGPdRpydGoW0mAdHU4NXICDztvttSrinYU8EVjC%2F5NOkOJ9Xo7ut0WXdaRAJOFaQicIC%2FXzfhnqB&X-Amz-Signature=9721357188681da4436fdbbf7257a3bb59d65259f36a346af0aea0800fd68d03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
