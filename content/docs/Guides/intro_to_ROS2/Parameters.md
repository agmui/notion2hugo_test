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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7CQO4T3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T033805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Tr%2BE%2FEqYIICuP%2FbkGEDXUzu2hrBBwtslaGuuOXj%2BVQIgdCJLfLwGY3%2F7LvskQeH9Z8sHRXDzWAq0C7se%2FnIyGkIqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLeHx9dmUMkiod%2BxircA5RTbIqIZbQUDip54MUebctcRbchCWySmMjk9Gc49tstu%2Fm9J1yUtySvvaCak9TtTojUIm9iVMSLzFwB4Qa2pyBy0OfENf8%2B83LpKe0TTzA3akqXmA%2F%2BObIf6P1g9HV2eDp8dOK3GLNLsavUNAFqYf7ktrp%2F%2BmcwwxwZnT96%2B%2Bw5Ijpo%2BdxjDR%2BJI8KhgZwHB3aHY6DwE60AyIbTyPGP5CZnqbRoYURJT6PP3UbYfKHLx3mx7zR8CBZF9Eo%2BPVs998d5hJ4XZhKhIrEgrlq93F2GTUCz6M7vOdaHRAQCthumINjDOoFpHlBm8XKFgl7SH9gTTQrNSzaCi1MjTC61dNNM8xqDjbkQ2J5h%2Ff6Rz6M4eYYhDClEj4nY%2BADPSMPIGxLmCbOtTI1LDIg837vYIsJPomp7gVSNs61kLQ6dU1JXTZp67qHvHRHirnMNyhZ6bI%2FObq7%2Bd8aw8C97ELuZNvY0QAZu4NwHrFuAvqFxVVGA9Sye4ieDSdqmI2x0ogs6Nm9rkG%2FPBuvu5Ip9DA7BK8bKfjsxAI3mT25J38yI7s29HvZbGKqJINi%2B4gGtnhFgqiF0XW%2FHe1A0Y%2B2YrWLNXg3%2BtPy9mfP7gyvcxf%2FdUEX495lt093G8eBuC5MoMPWv2MIGOqUBeJxoJoUuWr6%2FYvZcY69EZfOjjGVhU4ww3qNyHno%2BWj4phDS2UQ7imuVi6Mv%2Ffvnu35vtw6XO%2BJ3zezN85WcG%2F64Xluu3SsmmosnYudB7dWGbPWeeSwslE5rpznFEDVIHdX0Oa5kCZQRDihM6h2OSIcTVhz9jXdQLGxajinZ6osKHN%2FlzMn3EjCernfrjYto3JwxI6lWc33bb9SACATispoAFeyZm&X-Amz-Signature=c9221b459bf7340ab963015428a44e709822101fd4109b9ad42fd0a4402c4ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
