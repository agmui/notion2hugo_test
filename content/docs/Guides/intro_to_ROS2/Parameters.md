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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKR4EB2%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKf3wE44KVIe%2FAYbcdBCBw5SGABr9UEpX0c%2BtynNMqxAiBG4Phm5WybTossly1xy72PzNR4FikEocrZQ%2FhIqPRepSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JxhXRL3VGJepC4dKtwD9aNQDbbSZCJUQL4PH9geZL9uiReLv9xkRG9LLtlCgcKG%2FPf6Sbrfgh27D3SNCzvZeNEF9NNDVOjfeAUgu38DEC1z8ho5mIuhLs9oOJHLaW0nOiGOjzqtWAYIQuXz44x3ozpqheRXQHxKGWuDI%2Bh1hHLmeD7MgV6Cqq%2FIOKnIuc%2FrHcDq8j2h2ei3PdcN7oXhJUSKfh0IR7hvRPY1O%2BoY6vSIv2MZ14ViFo4Z7PCoQZ%2FFoctZ3Cq0FVjQoMKkpeQyRHtncRzpOQbpsR197Qku5WK9cqSbtnbc%2FvL3QeZRjm9IggCHuemn%2BuPNiJ8gcAZiEfmw3z6oaDq%2FhYB115ZpzWGO8K28flMmPXIKmBlbeOUjRfWx95SnQd%2B12ixgsr88bQY2g6de7m8eMxqbl8I1AJGf47JhIgkSJzjedKVUjVDv0p33jzcJt1%2FpjH0eQwX9zSGPfJwuW8LUHoqxQv2oJVBV90w0yJQkl0IGMveebDV%2FwASEZ1Fwqz9PS8klwP36vb62nU%2B%2BALCw%2BmrP4A9vxtqPk%2FEitV1y0gnb9HH8YuAwZpJjgiaprG4h4xDsOQ1ejPyLWRZ%2FxgspuzPt98nybepE05JKJx1r8wUf%2BPomdoljMSDGuVxsAIVICRsw2vn9wgY6pgFmXzRTahLjxdyPwE%2F1iYDq7FrxwXT4836wUhKLDMMBESwSH5HIAkopBWnd5n828L3%2FVKCVjRzWRvIbTEwxXhQulHIy276gM6uDIfsS6duROELC7nv7lctw10zPsNh2Vvur5ld2Ai0ofcXYxWC1IApg%2B49zdaZU0UhkbQfTnZhf1q4gzbmFedjPtJcaXh%2FFJ0kP4V6Msd%2B18A7IV35JVaVSMmzF2OT7&X-Amz-Signature=be5aeefc0e100292f956d128c31157bbd93cffcb5c9560c8325760801653a1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
