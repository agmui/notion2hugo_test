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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHZH3TY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpiBs18iGrFJ6cK2sVwZMGRmpzq8AGm33H1BXwFomPAAiEAv6FVGpe34m4tA1EAFfzANS8FAUn7pqfzSFPxDDSob8MqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtyrQArQmFYeIoIQCrcA24I0%2BcASMRnWfTSvI8%2FU0T2udrVUuce%2BDSjRT9vI02c8FApaDxa4MD3BpHVx9BGEjW%2FIjoGkt%2FNnCRPbWwr8lq60CoWSfaXHG0Pwu09%2Bzc4lv84zA8k%2BHIKVfKH5YvJEdja0%2BK7JGJDzWU5TWcpCz664Lfc3xHtSJYach56aZlWzwUq1IkKqpo6fUNN8DGAZJVAIgtAgqydpj8vw1YYDO6N9z3bA7FgQnFZe3bGA8iu3OyAlmKYYQ9HqlX8COgnrKfYVedazMcUQ3YTvj8szkhDYebxHJltx5kr2ElgFOj6LiLEGOcSTwaHZEtNUbP7zkZgVMmXuWzm%2BQK96Ai7A6dGrP4gQDU2Camgt85r8iqVEDWxu%2BJS1zzSiS%2FeR%2FkCrjOhPdm5DF6DH4CuGIQB13aKy8EH5FyKUdW7nx4sAoP1jORsVEofKe3iXYPXgvS74gaR6ZPv8nq31hecY7mm1TuEVEPhnlFBr2Z%2BhPmiEuHzkm1Zs0lIBAL6XecXgUB7wOszdv%2BcdixJ76478z3kF7Mb7DhxlfLmFjZsYDp8OgI2Vz9X%2FJbEfKcCfqp9ahbt2Ree5xDeB0uFimzHPaOyWMjaXDZMgINDRgwVq3v8JkLIT6eZrn3aLraMDOx5MOGL3sQGOqUBG0k3iw49KFZKFX%2FAB6wHWl3iEoikoCGhEQxfAhp%2BHcYxc7UjxTR0d0dMvK4CzhtdjqbE4n2IxFX90Av77%2BvmUDkYena5hnUHM2ERq0XXbezagVzxQ18S8nJsRzJ%2BfiFJXuqOHVwTtNHNi9BzfeILEvKLEBDPHnGMyRZpoidyfyMsBwKyrAArpqSBQJv6anygUl4Pw5m0dZWlDbVd0FUajF2bplzV&X-Amz-Signature=38a8c6a4c0b9448915153d1da3792acb43a271cfa6e9910ca647727b84c98a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
