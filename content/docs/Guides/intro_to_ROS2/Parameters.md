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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPUSZA5%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWGrz7QvPBX6W%2BM5zcOle672T25sL%2BFRn0ZnWe2ycPTAiA4O6ugmc2%2BT0i7BXQrSq5UjZhl7lefmTms6WheJq4wUyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuUYqQlBdTumL8bvYKtwD01cAg6COlSIuqVyUOQSVbqOFYFGFRtuUghqL6jJ5dd4yR9cAZ3Hs4O51PPkI9C1Y9lk7KQQd5hLz%2F2lcWIt6MLFJv%2BZ0Hcl1Yf3kZDCSG5ca7byLkSBqUv9l%2F74fW1Si%2BL9mvxl6jfwYIhLPhyFx86bH6EKghD7m%2B0VVrxrDPbg6FhdG8n9MFrKrqqWa5HoLFhVT8q1PYBj8aFM4vfuoLfqRfNX2OcCYAXadLNNrRRrNj3nKRaDj3IgmB4gmVMfCY62eGovlHns0lTRvP8lUZiMtm5kRR5tEosAJOhuN%2B1HQg3DHl0Sqf%2Bo0FA8hJh7iusoomEr%2F%2B%2FqFCiftMrbEtoNAzMz0guGktxt4XOLLd8O%2FfN6QSH5iJAqlFXcf0VK0GZV0yL4YKPbdDazLafTETGHMzvTN64bxC%2B%2ByJnlrrjVb2IHqmRhCBBBnT6tqZ9Hbomtwy%2B7tKyUdgWrtPrmwUmZr3zqLwYte1LbvBiC3A3CbNvMgsxEq%2BOWtnVxcXGRoLWQkejn5ZdJv%2BW9FfjJbdrcl1NuZa4oV%2B45uD%2FZr%2BUDbX%2BfguhbCb%2F4G9VEYzT16zj0NHhJEpa%2B5%2FZLXwGEz0yitwK%2FZ84oLlmHihJa4oADHtCLDotHp8LuZry8wl%2FSMzgY6pgFrwxmA22stj8FmI8Va9mYkssp4yhNRx1kHkegbZT5sAcLoKZyHtOAlqDVpyR00SIDN6OY1fH9XTNA%2BsV6T0NIfqaPXfaSEKrmi3KPyuIPy6FDzs5f6ZAHG2ByFcFZUJEAObvPCteiOwhLPPntTV0ZWQEVMSLy%2FtFQzdCQNip5VpGWIkd11d3750e5SzaIEQk3JtR4PW2m4X4EhK2TPD2J51d9oM4rk&X-Amz-Signature=ab6a8506838f9f82a9fab48faac424a5504bb3086e14b5b5c5bb1e74611878c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
