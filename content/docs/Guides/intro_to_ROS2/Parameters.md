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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CVOVMDK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVu5hE0%2FcPEhS%2B5M0MTHHiEc66C0whQVY7wQmHowBJFAiEA6gky9e2vCD7Bs7ZonkAnFscxpTJvUxZRlM9CArEmUHEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ssNxmdOrQMo5f2yrcA%2BVtDVp3p0K5ftNR4j4saAydJapx5DQ%2BlaCbFpSL2PkvM6gOVRCIVoriw3Ms38dhGT0MLCe%2Fn3vZ4VfTnsUgpTqGiwDHVs0w%2FZzUhZd2CxXva2H6EDF7MT7PiTFtd9f7DJ7IFxE1THYtxb5MAoLVZyo5xxAVnXvd%2BqQGWmZ346uYhozjuaquTMac0KkIN4UA9Z23RyYJL7lE2q%2FDKUHbIDpq9hhxMR4wNUjj7qq5xJBeNWTgkJrkxOLUDNyyneQla3YRmK%2BSigxu72dmIU%2BYYLFHOXm13bA3OnJiJu6Z46eZprenqK5MduVKRulQOFY1%2BIxMlorNUcSpFu%2BigIFm6ZGYLKZYYEjCyr1b1nGIHFtJId1aV10bVSFnP%2FOQCH4ZPwv6xUc3wmjgHotmHmDk90u0XzZvfCdMU99GSHiI%2B0hq7IKL9UK5EqyLu9nrtHJ3dsQ9RY2L%2FTJm9wJyHvBLfJ3v0cMvc4ZHbtr6iXHCAU7tsVzZ8%2BSIMQ1xzkeuM0qLENq5kiY5PKrW5fI33tXi5Gv7cnZ%2B%2Fu6QhXKaqUHRUB2khisNXJ4Ii%2B5SuRMWd7n%2BhRVKtPEI0PvJ3M6ZYdTWbzwHlkn4hbHJtmHd8SeKSGbOl7YhaOz92xsSSCrIML%2Bl97wGOqUBQjVU8KQOto1J8NDADPeYIFEX03c7W%2FtDl10BsoCuCW0PMx6iVWJLqxEDfsV5dk3AWEIrGSA2M5d%2FmWqvdnsAPGuVGFFchQEdko3Ra9SOXG3%2FBvNrWuLrCV1kRa96cTKOxxpEY7rB9BH1oETis6EnS5wRQ7dU3UnDPT3cei%2BsjCeWoYEhdS0O5K5MkjGzhN0xP3pouECsYmWzXuHmjHSIRVnzHIcY&X-Amz-Signature=280048972618276f5bebf1d7cc7d9a723c339037a5b243086e88aa72b8ac4760&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
