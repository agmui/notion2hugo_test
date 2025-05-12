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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3JORVOW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAGEa%2FKSfkxbnPY%2B4P%2BxdV4IWGD%2Bs1XfmC2%2B0GtlK78jAiEAni1f8%2B%2FKYbbWSA9eiMaPHj5WIMaRQhwud6E6cb1gKjYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJkwckpqiflKynJwSrcA%2FYq403tv20WmfD4tbdD73DE8WjXFlrUX1ddFQcN7xBhbUVq%2F2%2BpOS0r%2Bfh5k4JYAgNvNjOX4IdbVaEtUgdjn6Taw8Ne%2FbI%2BdARyABIr6M4wY%2Fmmx%2BONCsrCJnxR241fr8kbe9JcQjQACz33kwI8iYaQdt4Qsq7G2V2wIUffREfHk69TpPeu9YRQcempb8uNrC9%2Bz1vppZImuirOulE42gYzhvfezddGCmgeiwl4ed37KoE%2F8bc%2B1zvQnAAC%2B1N1%2FsL%2BXeVmPLLpPCnV8ER5vJK2ltH4hDivFScbO1GFzkeqNJu9CTdSMYAXS6koa1IeUVM5cF0Vi6qcCBDALeHFapxoMHJsjeTVFWfN6ooq7HI5GKKj07ksd6ZXRDGqmKP%2FpssdGXigca9Abm8g2Qd0RcyKLewFZ5MIIxtJh42CAFLapUcZlNUwNlCvcTqGDUcHwYMJzUnSb32Nzx8AxeonPOm7iGwvG%2BuFrpQXCyizj3GigXn38tOh3MkfDjx7jeY70nPfp6sJOCS1zxkFgp0zWSs63xDLHEK0uE%2FXOQa%2B8EcU9sMYhRhEiKtQrazwL9JAJhXRpH2Dv8ww8CfjD4Y9LU8h7LSp%2BYy6%2FiIaf6GcpK2wyAcepzIgMcgM01UCMLuEhsEGOqUBCFNtjHVsLtCBJ9pVBxjkvwhwWvQGfhZ4WxcqHSJr7QAep4oeZ7dflAPDCcm0N4h6nbNVW6evM071Xo2HVsS8gGAX93hGb50Oi%2BLshZ9FCrKrswkLZanocwciLqAbtzz8T4gLYbBMAkaxI47D%2FJEy13gbfqF%2B5LqjEWAhEEb3xV9RwN74Xke4Bf%2FsZ4ZtmoKMxk59ZpmI0EZYuHR%2FDAhF8XWsTJWF&X-Amz-Signature=b94a60af7134fe0190283fe4711ea68b0cf7631e9313cc6b3315f10b6bd81998&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
