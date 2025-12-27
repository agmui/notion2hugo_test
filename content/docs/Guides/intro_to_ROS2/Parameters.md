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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CY4EYQ2%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkuu5JrSUfaAoLji5h%2FgCx899GMI7PgQAA%2BaN8bz6QoAIhALurd3hQ%2BXI%2BsIJbai05WF3GoQq2cd39rU6g%2B25d3ywAKv8DCGIQABoMNjM3NDIzMTgzODA1IgyonL7gyBLUv%2FM3xeEq3AN0ZpXS2dB%2FEA2ZpNjQAbxgVzP5CZi7pAubFcanzQVWAegk1i%2FjNV9PhxUpLvCiLVWaNW2HRkeeSaNEhdWyynq1aVqJsroKIp8vpymT%2B%2FAwYol1rlVyAEtS%2FkBCMsXweF97rERvx9bvhGakC5ILfEML0J6yj51FbSCBj4NEylgq3Ukx3TwvbC6o8L7hXWjjcET5nBOFXbQrWTmG78U81a1ki5n2oRJ%2F1dn7aGdpfqxl4RCu9L1OUF5vEyqJbYz96Rz%2BCc5j5V725%2BEyg8T%2Fkol%2Fm7GkR2qkEExTK4d9JCtF8hokhE51b8u7cr5Ck2dgDMkJqMTZ19MdCt5jPV3JA9YNDT4buLTyu4szKXeWNjGcAmxKa5yVE1x5TDuy9vQfNkDbBxbaCT5lphyFERFL%2BqxA4Sg8clV0xnPiDAJ6gxFL1%2F810YweiX3pBMsDx%2F25qo%2BEhniQj7QSS0NqJdMofJq05O3fn0S5TcIehvAoeFEWjZrurWPOGlVd8qLuLTP41poPZlkebU4dGJUiVIQyr2PqRw2bWD0Gx%2BgHcd9JzO4TgfPDh%2B0gU65XcPceAcN2J7OAeF59fMU26MOKgTIwABTQoRUBF00On%2Bfwgs35qanxlkB%2BsU5GDBMJbgxxRzDI6bzKBjqkAcTzQufMfXL%2BPlWFRfLTWQs0IBgwylaPyf8sd7i%2BQMrVmZTxZEbWRsmpGTjXb%2F8QTMpf%2FwT%2F0nTEziEFxz3ikrxw2Rj2j81%2BAPMIssX5v16t935VynK1t8rp1CxCP3JJ2TK6%2F8bk9UP2OmPqVu70n78ptenWd3CIco4kkp9NTtVbYLvmHS6BqRa9ruqhNveA14jrKpzEg4u8tDVTgY73aF1%2FByiv&X-Amz-Signature=a12ffb79029ef1a28e70af9812a50ee09aba92e69e46d8bafac644c571a2dc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
