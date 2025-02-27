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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVKSCQ2X%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAKAfe885kIY5y%2BozmlfztRjrdo9FXEURl%2Fh4QJLqZDoAiEAi%2Bk7XX4%2Bwpv6Q%2BwTZYe73T1eaju08JN1Hv2PPUtXPmsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOdFF%2BcXiVksbzadPyrcA4XWfe8WGgr3KO%2BJSRzcetuk6YAHATkQiAyqMpu1iZzC%2FwL4H1ETZFGnLQqzBsKb%2BnEpwAMwC7uP%2BYQ009BAM176kc8wNuNCH9E7A237MhTNzDD8VcoAWhSz61%2FGFM1HTa%2FYzfv9VZ3kiqhMUVnJEODP3%2Fw06bxx%2FbJRne050JxPB3bt%2Fa3Pw0Hey7CpN6C%2F%2Ft%2FNA4yKJkHhzLzggM9IUJl3hYj0EcZ7Xo2kAUpAyXhAFm09yF%2BQQiQsziSrkJFXGPAgH48Pl0WcLKShM9kY2efTQZvrZMl7ytdXSWS3j0cZKXjYj%2FHzukuFo8rntQzH9Eslu%2BBLLrw2SDU%2FpFGQL2hRid4efYa46%2BI1BRPsPOq2PZs2%2FRCHh9%2BJEnuadbJMk%2FyWjTcJ9lXwSeGWyP5zS8ODChkGdEMows0gRSupPja2mOuLIIfJSM%2F35aq35RT30hX7IwmRB82ROxINkDFyNCSlB8cLCvu8PIBluczrohJ0jDpkCLavBNCB%2F1aOyZAy4o67AOvyJpE7yuMHYISjVd5FAjMd0Ez5Rx9sMsU65pfHtSEYfZYqcJMJ60x0zAsM3ORCCLhfSLwac72nyKSZDvC%2FvxXnHhl%2FmxcTGvDqst20C3N600Z64E%2FJGWqFMPrY%2Fr0GOqUBCEoGjtIWpeOX3w3IE7XB%2B1UIYt%2BKLl50%2B67Xv9%2B4Amtrk3AxqBrjvDC8NDbqcJgeTzWg0bkQecbtHhY7NlixgBp2yEv5xliMuSuhIsTErqRmZdEoBvloOdKbDly%2BsEsBN3gxKBfar6P8Msl0GBUVZtayMH2hLxkqOla4dqiaIOcoqkVQBODSC7KOcfPq0T8TUSOXkpJTLwO%2FNKgeuuJHQfqmkR6X&X-Amz-Signature=2071f41beccae3ac0105b74f73246c26aeede1fbb6a5ba74fb1a0de675afcbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
