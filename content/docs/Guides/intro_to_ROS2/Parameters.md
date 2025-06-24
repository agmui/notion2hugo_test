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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2FU2NJI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCl1mpqvnFkSbDVxOQ1P7b8HkyZ8pkxBdFFnu1pdhI1gQIgU01fPsDkmV3AF35c%2FZRRLuJjovXHP3voAyxeTXLQ76gq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEVNHOsYc8ielOsPAircA9k5a3W1FFKAmJgQFs%2Bb%2BjxfcM704LCaJP9RZ6WAHk%2Fa3BVpElg9A5XyVgMfV%2B%2BOfK17zTOmvmajbLJWkXNQheRkDzeoImxX20ktIqVT9X8RzroNqylmCJ1NBxotyh2fD1vLq6%2Bjn71frRrhlbHfy4QPOwi%2Bu9XhY83DJBq9w%2BAWjDoWNbf1i7PDtHPQmCXAStcSfwpqfsD3FGzjY9yqq29CSAmvc92ipqsmt6Lax04IrvWiPWR9q08Xnz7OBwQYznpOiAh8ec9XB8Eaq1YBD56tIT%2BJoZOV3T7DMgnjnfK9gWgEQ5WjsZDYKJgZgQunz5KtYNVdNBJk4FfjqwyQ%2F8bzRan0l73AsWCyPJCQwTQRPO2YawxIj0fwumspJTeq%2Bw%2BZoBB1TP9BIG0yzQh8j%2BHCng13%2FJLyL8gv5aHqu0Ys9EkVKFWQ3JhvSZhHnUdYY8AL7wdCU6cnQgpPogtPXmLgKxpv8xraEmy7l7bd9ndZbWQTpuWwWYa%2B3Ryh4N2xjr2aH1iT3VvpToVxiLrN08%2B1UO2zb%2B5slfUti8oQ50l9BHne6xBbGqKFoTF39pJVMCuFNRmSphKqI7wWkGQKELF7zUrfWOfjrILZqPwEmjlomkAdWf1nqQ6FXyEbMJSi6sIGOqUBlgerJ1e%2BIgMjOloKS8kUrPa2rTK%2B7AsVcJJEKUg2%2FQIId4ZLfyz6O1%2BHMHponDYUjLmxbfTRLCa2O9fRw9sEUo4jFPmDeogdZtlroSflWDzPOhTpgIXZ5RxSWrI7sgWTnOxAXW5LQ7JLgnVsYsMnwzMrjQqGsSFQsXu%2BLRiCRF9byg%2FtHkNPSPYMYccruG61bNLv5TNEfCzEDqNsaBg4PVcWgykL&X-Amz-Signature=9f0404da32d90f600d3f8b95c65330698f0c393454e09649a0ab19e3212d1fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
