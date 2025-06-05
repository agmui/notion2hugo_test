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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMQH6FM%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T170221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBeMNeOtDUGv3y6XHIlTYqGqh%2FSX4%2B5WWp6fJoed5Tw5AiEAoCAipVH09dJfXRrzvT6ROPZ7by7pKRdH5qqaXe5XYzYq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEJHFWV5JcxgkJBF6ircA4NlE2fO5t9gnjcKVwG49V4P2Hu5v3HIXqJFA51bnkoRCFRUAFhOngVr5vSSZG9AZ5YhjaA6RkjlZdhOq7WO9ff3HHfoN6wByOqKO32qcUenwHoyevW%2FL%2F9xRQUq7i626h0iSUyhB3ViC52eN8nRTg0axBmvt9wrmX9j6F6Mr3uk5LsPX2Upcm0yyJmxzLE56FE5iBYidz4vRb75JCbk6rgsNySC9QT%2FOVxd0NowlfqhxvxYz48gAVWh%2Bev7tWEMu8po7mQ06p6gRrsRdymsbNDX0B8PcXSCSpH%2BvK0n%2FZ4Z6%2Bhb%2B78cWlehefvOYYDeYxymCwPDPhuIx%2F5QaaWDlbiQ7lyCEGZ0wy4Z0VtPaE2tU1NmHRo6AXyCaNY721ArFsGw2rfxsSY1i4LhXVI1UEzmolHuqvLKjZT15lbhHV7T8ixumwzUWA1%2BseImnkiQOjBgfAhcNc7up6xIhPWC4BeUHIlYaC1HNsskfRC8ivUkNsL2kIbu%2B4c48Y1b1PnkJrHb1leHcB5zWcMLPI6BZsDlHuyE1ZRot%2FTJKM0pb5rfM4geiSemY9j%2B%2FRdo2LDLAFkwFnHKRqP2JaU1i%2F2CQXi4MmPisusrI0lleTV%2BaGKDFy9zAnIGHnmx%2BptsMOyFh8IGOqUB56aACmci4Ax0K9FXljJLWrTw0AUj7BeMCeAXZiWJ%2BvBcQacWEonzIP65Ah7IAMjaqtvQ4gEu8hj9krmyyXt546V69L0Rz1pIhtBGZNKtan7zAw4xARTJ%2FWOgbD8fR7yKyTdBG2mttX3pPR2J5JhhnGdVTqtI50tVM0cgWF7idPQe1ZT2Es%2BOBOB0lNIrU6MMCaAGzXxveWF8%2BpF0bX16QXIIo1nL&X-Amz-Signature=c7993e41fe2f0fbfa143ad80e0053dcaab2c1d0aec5d08edad7d5ccfa7525ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
