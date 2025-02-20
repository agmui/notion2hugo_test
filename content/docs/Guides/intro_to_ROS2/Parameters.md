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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664T23W6N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoDFnlhWdVX9ZfPobXh6e6TxrqVvisNHkffC4DMFNF3gIgIyhvxWyn3C9Be8VJSCuC7iz2ZK7uLe9Z72SzDy1p5iQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BAfNoVb%2BjrfWrvKircA0o88pzJajg0OoZfaZAddJT%2FI5ib7f0KC%2FauLHOE4S1HzQZajC343VNKvwGw4gEuv%2BBGsjWyanDdXvyVdSTCctFUtzGfgMCUxd6EYML5xiukWRMx5PGig4YHl%2FqGUGDWcR86LMpI1BRfVTs%2BZVb%2FhlcG3%2B%2BRLmMeqcN7zOf9UhPPlQjrVjddipdaEqUg7BWqrDxytzxTGh8x96Wsifrj6DQUxk8TMfXtzQ4dnjlqLZILHbTsfiqKx0VQksTaoJMM%2FyNOSZG%2BApBAMQbNDIU7umCjcJMEHkOWYjeinwH4eeCsgvZNMIh6cwVmbcz6lN0OYIQL9DytLk1%2B2ecSQhncb7SOmUOgf20HlupkGXEqglbWqP3uhBZ0JnQUPhwPHlYSlMC3xNmQR4MdDbu%2FF%2Fntw3pDWRtFxF68PU286pITnsZiU8mSjk0RWnz4irq9Cmul9zARF2mU%2FgJLe9s3LE1RF8T8gTuqrRPRy07sajYOVjJRh5bQE6Igt3QB4fV1cOp31Epl6gl0r2GM%2B1Q6r9s5zXx6zzevEG2Z%2FXZRFJibCw8NUxhIGAdx5A1X5sCd%2BoNrR3cwcp2pSxCn%2F5NI67n0fl72itS17uOJXg%2FPw2QluB5Hltk%2BGY2a5TAt%2BztiMOHK3L0GOqUBetDOizpRtEnIufZfT0orKGvBSuauc1tMYZTFtzV33zhw1CTiGmB%2B8gvAmZqbyAr1d7TUavDd5ZrAbUXmUiUKXS4xsTxX5hk7M%2BG%2Fofz%2Fw3%2BoeSei0CMGdSNcbnA7sKkSvkqD1VX5dp%2BIMpfJiRZHxCLb8Wb23no8zrgw97uoS0iyXjl%2FcbQkQCk1xJcA1L4xIOOnwUxf7Nuspb3ooQUoCq5Sb8bs&X-Amz-Signature=40a276c60da9a759c958e2fbb9a179e56cec7ff11223a9d06a0e4a5b2126ec57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
