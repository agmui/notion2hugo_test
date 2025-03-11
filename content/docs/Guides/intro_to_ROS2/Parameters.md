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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WLAVM76%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIDuKOEQox1U8Y1yslP8j5%2FeUrn3ngKfmfy9ALl6iLtQRAiEA%2FlEwcmsGgs8AS76FHFD%2FXx6JaH%2B45%2FB6lrJKfEedTBgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX44P%2F3MU2poj59wCrcA%2BUbP9C7f9Icqr120ofBU%2BPm%2BDO%2BKN0%2B1f%2BID35p8n%2Bx%2BIg4axNQxI4SUVwEjvs6p6joy3pTMeE6vgIPMYlm5C6jt%2FchBuhhgciDtw%2BI8aA0pb3BRA7UoeIT2SiIpCr5jxX07bWz%2F8ZIDENId7ppEP1VJ6yEqKK2PpYQYWSehTEiB4u6cInO0rToCi5H8lEahdyNOXT1LLmC7O5NEDlYJ%2FlLJhLkHxAWw1%2FETpKHXLxX%2FPTtm2qTcI6W%2FruQemStBCs%2Bb%2Fx4UHBnax%2FJXS5zI2%2F3S%2B%2FxqAkjzcCSwMPKNgsM%2FLL75xEluvmv5ReVErwFK8WzRxHwr%2BoTyHtDUYfJJwV2TtBD2NR1pCRk%2BzA5LtLBIoep7wg%2F1BEKlgcSY5qiWJiFz2Q45SpCwl2q3esMrgAs4hKNhk5t6HkYnXWtF8N3jGgCRPEX34aUKuyxpp62DlVPY26h3fulFaC2QuIpzemuD71Kudp7KrOLppxe2TFEfbr%2BupwZKl9XdNC%2FKgSh72O94%2BT%2FuYgJs8KakfY8XI9GBNokxK0uRzsL3lCxVKD5EJZpScMzoT%2BYK%2B7ipRJm59d2lN31tfZ%2FtKqm0EsYU9PajLnGrm9Q5%2By%2FRwP7V1TXkOkp9G9B9cHJK4OIMOLKwL4GOqUB3158dt5di34qE6M5f6jDgAYp0g2QhlP%2BV4tJk8C5uhdFurUq6lNRSwe7lXfi492%2FSHxFjct7rTps%2FKxqHGGLuCeQsVbpi52xPziN8KUe4yEz8QX%2BIRop9ZlogHuo7cRFHQUt%2BJSDiofa4nWVtbw5MBlpke1VS%2B5%2BRwIl03XdZ4nt%2FJASIgrofjM7F7eY2xmCgjnFhmliHSxNyvNamhDpixcA9eZn&X-Amz-Signature=007bcec6f2b4e7ca32a5f3afe7f6b0136f0a0ae7883708b1173b3a5350bf57f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
