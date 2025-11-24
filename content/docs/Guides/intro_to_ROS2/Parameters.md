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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTORHAO3%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhwtTALZjLA5CSBOzerSeFgHq4BM0kWQsSm6OjaZciyAIhALp%2BjDyBdtsxicP49TlDSxjF6ClDPcPpo3mXogC1c9jvKv8DCEoQABoMNjM3NDIzMTgzODA1IgxK2ZrfPxu%2BWrg6iUsq3AMfoexcdZ9u5KccDiDPdDDp6hPEUJq14TuP226rsS9Y7XyDXLHmBIZ4f42DuAbzOFyJ9xRZUAUvnukmBAuIIalx6O0i64Qkja7VUUJ%2BiYm%2FCJtVh995Rrvy8Bx2pEwPsoECu5LYthbCUAPN6Ko5su82PAM8WPAz07WTiXwV0u%2BuIfTcBPNwR25wlvfnR1zn25MlJf8DWcf%2BLghN8vAHmeorkybwsB1ND2ZA4bDo5lXVsKgEOolzI0MAQfAc77V5syrie2L2f5yZ0rfIrYzfAu%2Bu%2BHkg77mfKbDZTfcVoprwZJLTc9Z4U1jFJDTDMDd7fxAd%2Bv43NEq4k1ntnLbDCZNv5xj3zDbdKCDayKF9aMPmLN1ZBFjWqoyzraXTJh3SMtoaKfG%2B0VCvPPQw8Vvl9xQDdIuIJ%2B4vhhfqJxD0alm0l1itHviJu%2B0AgcKmjcZ8%2FZNAFqVu6DBkXUpIiODoUl2DPSDNMU2K14756wPf2Hlr14VvMdZILUv%2Bt%2FcHtKAnVqChBOmsZOuQcLENhUbNwCgE2lHbC%2B6Fstn1t2%2BK1KPZwElZKHua8jrD7%2BUnBEwTwKFJTg%2BRSzJOb9g2%2BHFcfKgz%2BdOpH7SzuiY7k135JIYDPDjs1wAPiLM5NHknBTDD3I7JBjqkAUNxy9ZmsoR6csOX0JecBOV0VTKefHdvFWkKMmkbjJ6ZxrJPGuZxnLF6Sg%2F0OlTfReuy52mH%2FOiJSDELiLJGKriRHcZfpq92%2F4yQC65XVMxs%2B5aIGl%2F3BelFw67qtXsy75ZGjBsUvV8sOXH3nmIucFCLcigepZ2E59uH43lctTZZ9C4dC7k5Th70KfNfwLvJz3vXgzFBUOzokFDvkQFScQPabUCb&X-Amz-Signature=d45b0136ba386007e7b46315dc3eefc9e7ad3e6ade023bec454e6afc5bef6f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
