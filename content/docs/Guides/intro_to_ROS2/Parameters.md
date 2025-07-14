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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4G5PR5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T025334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAarr%2BP2NMgqRuBDCGHAjpyU4rXbw%2F2DESIbc%2BQFiN7%2FAiBNMyywyeUFtLzDTaqoZ0pCowcyYCBduJY5hErR9iMgGSr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMCNVuDL4753Vx%2FjFIKtwDD%2FNyBN%2Fh7%2FdlFsW0mqg89aILkwo9JTPOmgB1hCQSsJoOw%2B02fqQDH1iRpXeGzgPRpGMC7BhsnJnSmCO6FM04dvqhixQUNifEoT4Ps9MLCOs0XDL5MYbZ5EQt9qkOFcgQYFCoYtM19z9iizSGfYobQK9N%2Bog%2BB9VMO8YpYLtaOs8FyrUGzROmuiRrkDuDUHcujjuNP5tyg0UG1DHBcg1pMjbdomZnmjJKAgm98EVPd6yMB%2FJHvpe3rz1Ze8YozVtSBY9GuWbuTiojofo62rzs9XO5TDqFMhZ2d1zwHrjRHcXI66w4NXpHmB6cXie%2FMt%2BXSKYJNLACQzaKxwkDn%2FhA%2BGmD%2Bhz3m5oHnn3j9xeOku%2FhteKgHNiIUBsDRMbsrDfMTItKoZGagZgIYjMBBPN7vHNivXaLQ6YY9BEK%2FKApXnDsRHymioACKHyg4Cc8SvZxsbXkZIS4QbLg4vxzR0%2FSQLfSw69hwG8slc25zyE4Zp6hmwISUZYxwUO2ShsofTBiuqjKBQ8R7Xnhwg7qR7QO6SL30yUGvdftqwaeZ9p%2Fc3h5fScbL9fRPYpEl0%2BZN2n1cVMM3PA7kZoLOmpy78IqMip6m7v9ATnTZ%2BkwwnpOKPfNa%2FgdIQcRm70xr2gwrszRwwY6pgEmTs%2BmOwDcJgJZ1Jn7n%2FTdpLLjgGfjuKjhid14vqFWro%2BNXlKTqKFDO2XJurEW1zI3RKRpj9FaH1tsGoX2QE9851SvKOa9zKMrAoWbUO0rI5YCrdR14y2VG5FyBQ3JmnhdHkMKKkQpvaMy5CILmppiBWrBP797iFvTnOz9atctuEeApnbTUgGRUWA3r1M6lMYu%2FBNvLzPXXALHDzI2cRR8rRyk4ama&X-Amz-Signature=ff07d8ac333abe50ded4b0bf5df21f74e797b358e5fd27df72948044386479d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
