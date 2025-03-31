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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7Q2WFN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T032955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIB%2F%2BjsoQsDiBz5kKvmsEPhIDAJNvjufSqe3O1VLZjP4sAiAks4e8QjQGt83qQY7qSeINyrQ3ek8a7eYjltdBrespXCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXPuoRb5Z7ktcEbN5KtwDuM%2B7WNkw%2FXr0x61DGq7kloAOEHcWTZcLEYxU750X5ayaIYfI1oqDukZIf2%2BVL4NWaJQz0Enxe4h04jpOe8lLKR0OJmoc17YqW%2FjcCEr%2FwPc8jg5xFiYEXFDHSusp8NciFYX36G32iTMB1TU%2FlPIbdnd5vc6fXdABvO2oftAx4dayKKOuvDyfHTyv6V7XxeyBmGN4bKcWJxou5g8nXNW575g17sOi6mNvSuNtqatJeNmEIorjQT9FEr5wvQk1Ql3ZPuQSmmAQ67voy3BlP0p2YEOGg239MUQ5otiC4JpU24pUwHC3jPtMzzK4nsfq%2FlXBKUg3TKkA%2Fno0WREm9Z718UgeIh7Op0iEhFjcOFBPvObJYH7BTAs%2FacFF75hrf1L3%2BZSdb3o2Zy31tVwR1YzmVhFt9pJ9Kmu5UlL85qGduSEj7FPdQGXiuL5N%2FT%2BJ4U7OiLygvG5ZuoVWrYvP1ZdLADneL0gszyFxJTxPwGMCJXZcNmbVteo3TwRNu80A5W0BuBYGXJxwRBXaVyPGvYRbYWsR2gMAkygOnBvbgLY13jsDnDLhCCJI%2FZom898TDYAxGCNJljXwWx1iWcqc3qCOdyN%2FQO27w5BumeX2l2sozHy0weevZcnV6r4BSugwiZWovwY6pgENDTl%2BSZ9yNcG7Iv1eWVMWh8irDY3RpnZQ5ZptU0N0cpOvqz%2FOnyY%2BezsGsWU93E75Q17dwPAbaDIl12QhlWsOfdKzAJWNJ6WIt%2BrEOcUz0WFvzL4GvQhrXjviGMi0VDzXILljk9KdTLLaC2xawbjYtpfhNUn61Shvm8hCSEvajvowjertgiBivM0kwQKKste82A0HckfistesbIS6JXq6MYJrq%2Fxd&X-Amz-Signature=db7990e8e58c706f13eae784807c60572c614060722fe8c28a03393b8e647452&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
