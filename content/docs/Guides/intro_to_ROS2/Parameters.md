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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5VTUBIY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T022808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZerihOEHZ6y5XGyz6RzX26q0zuxVu6v1n3Z7S1BkvkAiEA97iapoIzegAMWmMIQwpTStOE4oFdLThJQwz3JPZRHo0qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHt1xVGKDA%2Bj6f78xircA%2F7Uua9GxctiXGeBVADPDVzWqW6%2F3u9E6Gl54WAYe4KoJTG4%2FV%2BymQgoaYnfYeoCOjLEwxXVh16iGOblbyyOwRZjBNRZZuwB9XECa2J1onf2fpGEHPScYcUoEV3St%2B1otn5CI1ncPn3%2BNCcDIDqYMa%2BdisC%2Bh%2FbOBgmz%2FOYV4Z2%2BMlM04d6km%2FQlyBBnZuXt2W7wLktV9JZ%2BCNLjRsYZo5MznyD3ATKG7CuwNUUzlRCmNRfA0qBKZBH9cr9zN5%2BMpOupOxRior2enlLrG0lvC0BmOxz3ADcUz%2BkCYRMpeR3dURA%2FCMu%2F%2B%2BwdvuAs6Q1piy1ECcpzddVuUcYPdnsPjkvxziCOV7eJwniMF0K2tp8D6JhX5Lnl3IcwIGmzSzA6jMSD47HwINDYFTuzNBfcMZuX66cPq4wWAo4ePkMz7IulqKGX7B%2B8MMEN%2BL1EN9xRmplASoXxRqSr9ZNjg3HiaceD7yEBmdRyWAiVQm7e5d6%2Bk3Z8LmVcdTq8Ml5jZZFASd5vGwfIHdlFriQvF1nayOm1YrucFHUuL4Ag0072en65JWQT4zcnDXQF%2Bb9vKKQ4rywFJdfb8xN5kES%2FhwaIatnmC6bjuxVhTn3kXb4CwN0CqpnTvlhqUs6MZFCNMJejtMEGOqUBKpAWUav95MJ4EGxtferoxQ82W7DtvWSCneJmssujSdfHGA6%2FYGm4TR7ESEsRDE8pgOvIRmPS6GMOyxWeqFsVmUVIpfwkhwiLrADYhAyfoyciILDWAPn8P2rFMRX4vuCSAVtTEJjghQ%2FsWFzdY2iQMwp6NgZ4yLvSE238Or1lFk5criGQil4t3hnnpD3NdPCKbwpT4o7itsEAT4Jco3Jtx1VpdjUP&X-Amz-Signature=092638bf5b3a78c933df3671b014127c00c3ad786979ba769799dd992e0b35e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
