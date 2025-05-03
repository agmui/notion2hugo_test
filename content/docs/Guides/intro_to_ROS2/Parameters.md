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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KR24AG%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDKZ5fXmJUl5ao1W13Uh%2FVPiBlyyPlkUreeLc99A9tDuAIhAJTOfjlMfpidWLp1oWxNfE9fAdxM%2Fb%2BR%2BEjfd6IlrGt9KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRyHDCgvuEJ%2FwhvgEq3APcu%2BzkUx91Wz1BRuRbiWgsuxPsMoU1v6Tv7rmvW5OXAzNqQsFH8KUlSzIo2BxTq0mbb6eA8i4JXW9FazR2wvXbHjlDmGA9Y8B0bGowW1ub51lRGmaiiHZr6xqjkjlEwt26vpt03N5NwbKoUlP7KMk92MYs8Xa%2BG2nC3TK6YQAcFobzVci3n1XfNt6nfuQQo%2Fd0fLE3mK%2BiyKqgxuetLimUxIXqvLp23NdS%2BEtUKbmR48uSNujNuJ0hfMPu8Tt%2BpXK8uA2BfrAC2ICyDSLdEubcXsV5Qb1onRSawlW1qaREHOL0IW8nrYykVBhZy6roys2%2FELZXjz98Yy2w%2B5nAygyrmNpwt%2BqjWRpiyya0m22ZzJfUaT75XmNtdOddeO0CilrDDTcBf72rApEtvl9bHbPyzN7ilufWlD1jX1x0TggzUC9dfrxq0VPpfZerDJ%2F0DrqDc16Oe0ZuZxrM6%2FZVK1NvtaXT5OjVQHwj%2FrZbOrItHZVkoVSkToWDXaN%2FhGRstCYgCThcY2M4vqF0K3pwnUdwYMQyi87wsz5SPTGanY5w3WrGj2wkYbT%2F6iesUoN%2BGeRxk45THef4lKpPMcjhZDFujaPQruhX8adDzM%2FxNTuMR5bg5iQUGBLDZ1AXDTDShtbABjqkAR9XSimprGrr2EAPH3IHXqJHAZs7s8brtxD0n2efidZ473zbba%2FhvYpZ6NFkYEjyVjABo48%2Bzdtn%2Fx89k2vYLx%2F%2BhST9%2BunOa3oZdLrHgMqApbTiazprGvR100cd9yW%2BX1l6iDho9xxIFG%2FYUMxAf3h6PJY53TlgZaJrVdqRp%2Bj%2BBT456JIcx8KJcgGm%2BiZHtdRCfrY2jntOUPZCdElf19JrIh0f&X-Amz-Signature=19ddbf52f2d76eb39e293931b1d1883e9dd0470165f86d353412e6987e0de99a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
