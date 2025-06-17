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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPSKJRX7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiaJqL3P6jHARPul66vlsbNZ35hUtssaDgC63Z3JAmegIgN7hwIdkz9Fdl3r%2BdEkCpMI171YuE7Ig02zgu9MQ%2FODMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBVA8TxiPlGbn1j3xircA2cQiBnQ1RF5Sm7p0NnE5vuR7xUkutlWbAN3YCPjNXPA1gganlsahzGullMfcN30j75%2FPynLS5J01dVrBFAQY5ci68ntGcocT3jYPuCfMLfT%2BXOrpcvWCd4cjCAhHYRnMjUHx3j6ymde6a6NaItbVL9lPuFNeKUXExGD0MIcTWn3pxcDhw3cQpiDFg%2BXG59jlCK%2B%2BHe1nhQX5V8f%2Fy9lQeOwW%2BN7Np0pleAhqZ%2F2Ez3PFjWIWD3clZNt7h26oMAeHA4QREUFivGNce2rgIpafYKFK3O62rCJPiIKl%2FHpltNjwIAPMvv%2BRJTc%2BlWekb6e41TxW9CV5xf9uCQdcL9%2BTGsamnHKH6RSIJMyCwsql14RupO9rL%2BRX5U%2FXZe07bpETL3A9KRPu5YiBP%2FW846Uqfj7lQeQzWcZMdyosz0u07%2BUDC58%2BlrzkkfJnNPbaY7FpUz9wtdypIGPL3S3IbT3agWsXQYSNXKI%2BBb8c6bEnzZ6C8%2Fe0aeiruJXn36S91LFqxlr68%2Bpy7h2MzAuGWkoVKy46f%2BWgxzx6pWSeUhvYD69yBoCdUEJx9p%2FrNklLkZbeLb4ZVIVqamCknqurF2dlyoybwJFUEdPxET1QP3cIXrYcYgBZb9fN9eWgYGDMPjrw8IGOqUBN%2BXJDHWipI3YpcamrrO9bNsoMPraHUnkv8aDF50AxcZQrFj3A4YDdS%2BrMANHA10%2BDA1jA8PMPLtK8Xeu2pHbITRBzdknycirYuyK0KHhDwyITZqU8HwoJY09JRzQMGim3r6aOvVlob43%2BkBHWZJhnCIhE0vLooIyBAHG5aTyYv3yj%2Bm0%2Bv7Ednkfr3F3w6kq80z0TRv%2BgsP0JkOpTLHdPnMVTfG0&X-Amz-Signature=561e5358a4ee6ab8b7c5e137c8615d9531836ba9f59b7f34ff07fab9256a17f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
