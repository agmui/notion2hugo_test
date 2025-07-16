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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNU6CEBZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDi9I9fO284PfiGUldhJ8hdr922u9uvnVD8ZtnUCTHllgIhAKkMYa%2BpYiPU9D0Q9qipELuZW2moliIG9ELLeX5bUdk4Kv8DCFYQABoMNjM3NDIzMTgzODA1Igx2wIivB%2BopNu5FsdYq3AM%2BhF4dhP9N7MzUWfa9x4OspaL65yX3Ob9%2BJD%2Bj%2BgC5kbgLcajg0gjQKQTkb%2FmTeQiPzv%2BSQE%2B%2BjFV1kd2MkT85pPO0uKGKLZk6FugjWpZokb5ydiiIOtnyUoRiF0MSCeS%2FDVtSUC5CqXc%2Bc1JNqFV5mcbq5h%2Fpe%2BX5tX1%2FJxhpVO4i2Jh96Et2Z28%2FoHKdfPx%2FSTJlQnAMA5lpa9ayOqJzNSf1JBVZlFwg6RrYRxfqWF5uma7Cau%2BNmXH3yqslJFjCB%2BumJES%2Bqv4GsDFvazJz52GRpHFWYMImMAVf9XwQvIYzyIHGuX7rNicH0Agyn%2FGd1Fz5wyhHzMok4dPF51shZtmZO5JX%2FqdQ1aNaB%2BNEOXsm6BydPbc4mSmJwkd7vdS9WPc0vzHfdxJl4ezz%2FwS4ixJhsnKaz0s8xIj8iCRpiHkUEj3KiG8hoOxGY%2Bl65w0g3iKXCBFPDfzWl1V48HAMKcXsKXe7K6%2BiMNm4EmqblwAuSMQ8H9H%2FdC%2FlkZ5Um6OvbDjzqonPvAZ%2Fwp6BLUjRClwSEcReqslxzKOXfNcajeal3%2BVSjXYNnDsErXL85x4QYMQ3LrxXO6jDwoBFvnS1nmVtScq6DOBxdPqC5GInXm5FcgFu9Xq4Oqv34zCS3dzDBjqkAYmIGljJAPOPJe0sK47AnVsleF8V60LuFRUcs8WfyxIJdXeQ0EbQBBaDl%2Fu8OCC%2BEEM7hWdviwNJbkoB13cTvFxRdXvJyRdRqrD%2BbpKCqxJrXS0xLeKEu4JIERwQKkiyfaiF9o8ZIswVPzdub17ypzciha31%2BidIO5TIwHxd%2FgfhTYRrt5PIoH%2FPijIX3PDw1YboE2B388biRkPetUbC8YXA3s2V&X-Amz-Signature=f44b72ca0d8828a1d5d2e008f8ef61b87437e89ac3caf7f15e8ce7300b6d4831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
