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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMFLBUMB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCBq0xvufmyQKsL8VzhJxBlWKPa%2BsR5IV%2BykyOWPCj42AIgGEqXc%2FEq98EF3yesdn6XNyRH6QK7BdnetS8PNai9EAoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDNm2hWgl9ZrSJzWwGyrcA2LRdPYPlUZUQ6kKWEluoPR%2FVCP9LoSGYPyG0P7C3RZ8HMPvrMP5Ki0l9GcN2Yg0%2FGQn%2BgY7FYowK5CxfZJhOj%2FiK0gBpprnVm%2F8Jc2SrYq1fIJY9HM%2Faof3u3ji54DhTNMctVR2uk2uq0b6zHzhBmbkDONmACqpP9IIBQXTqVzIelfQz%2FLXsmFKkJ3w3tSAK5lZA17CSUQIkg%2BvesA3ey5qB8Csp%2FNLol1W8F4TFSj%2B36v9f607kuttdWUZwJZfNRl1ivoUQr1%2BviFO3dxb2OqGlI%2FXS9jjl7OsRMz0KEAV7VOgczy1GfhmNmZkGSGA3%2Fq93oNKW4jkuASL7g7aTE4XELSzOL32YYkfA8wiJQ2Llr7a0U6ql0vKu0xM0N16%2Fq8wr1HObfMlNK6r9wJZO2Mgq0a9GIgEfVT9kfnZOZ7I5OrwO%2BM%2BWMMaAqq0nhCr9xcYA3cm34IIEFG5cq4x1nNs3nQ%2BKSEq33IdhEJJBzPXIrrnY2yT4x1r0%2BSze%2B2Mi3zf8QcfK8dFEp7goY4WbYiHu2DHsSzDGSIJ9Uk53Ev7NFeCBikDIp3xB5SYWeEWsNPemrxIYoKed4fuC4d4DhF0Fdes98g2tpYUzjMMzUo8TzUSy8I5ddWjBcmHMMPy9MIGOqUBsZM1Xd10dVg9hNhw2D%2FKY8YnhfMjo6H%2FudNutbdkWnorShJFUo8yJgtNnIwpUAeqf2rHuXFVC8wwPrT%2FdCqNOf04EvdbkmmV26KTlBWpNQf1APJjDCloHj3nJnJT%2BeTUc90lKaoJ3vBriRSRX5zpYW%2B4R4Gd58s9Rui5TclGmadVixrZ64SQPOowgccO6QP%2Bxql4r%2BzU%2F%2FD%2BKGPv4oTRAYUxCcWk&X-Amz-Signature=c84d91018eeebd845a9d237cfec4bce880636c5c997bf00552258745cc8ebe92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
