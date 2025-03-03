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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SRAYUET%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuqqRvhlJ3D2QBQ%2F%2FYmjuwCqXtpaQG7urBJwWyStqXlwIhAIANGAvf%2FR17K%2F1tmzVu1%2BZicpQPK9LGnrffj2N1b6WPKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEkPU9QuDp%2BZ5pctAq3APVx0OYux3fG%2FjtleT2IQlYY8J0gcZgwVSkeK4JeFBS7O2u3UExowLCK78xY54EfYdVdZYbztQcPe5g02xvNBweogLvLUgWMB%2FUAoAfvFZBxDZi6fg6KdZiLd7l1STWF0vH%2FVm%2BOmUu6xhghVa6w1i4gJHvDV14Z7do5QDmu2qoK1O5LzDooTONLW%2FnMVz4dovo4Lp%2BTcosfW3xF3HzJ408Wm7RnEXKn6oMvjG0E6SO%2BGWoHhSY6wVIfnY1J73GP1Rdn7odnJOnfuqe8%2FmujYvtmXNU3w%2FfuteGOpxm0mXKWZEUPwMnF09U5Xm8nCwHD%2B%2BhG%2BXdu1pz6hVl%2BtYo%2FE3W98WQW%2BO0afkc5a%2Fn9Ciyde8cS%2F7%2FIJaTvniBSkPgJiJIiPg9MTfkk7pfVwP6PtkUxgZ1FXrcqfgy0I3gPLnALiM0%2B9Do4YfP%2F2DDTxsRdyhLqJqF1UxKCrYuZ9nxvQT5YLy8zGu5%2BdD9am6pydoN%2B8fd2zUOep0zCOCo4p3J7b7uOrO4oPSVfuyNzbJx0%2FsoenFVH5dvTopONmXdxuq7eQne9yzvh%2BSlk9rngyFXLNtgE8GZoUk7NmZ%2BMtd2sejT4h8%2FfLL93LkaEM1g3i8p95HdKlsc2UMOrLL%2B%2BjDGzpW%2BBjqkAc%2BhkGXWJyfb9f1%2BZwR3FGudaViAar7mK21ulonU1Vnkf1iyCSxNC1uyaKL6t18O3umeX19z079qX7IL2sKc51JRy4KetUJZdXYnJ6XzBdHhlZRrDiFOHtfDPfA0N3iyT%2FfS%2BNX3shQ1MfjMK2h6u4Gha4wVgQZ4rOJrC1deQx1hobHWwykpS0jFiVOElaBaX6CtPLYWUg3Nfk5QRZy2OnEqadvf&X-Amz-Signature=9fb9c1276293bcbcf0a4bff2d11c8fd2017e8527231497b115a6fc485d9de6ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
