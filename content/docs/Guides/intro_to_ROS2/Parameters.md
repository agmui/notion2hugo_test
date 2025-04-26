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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3XTTGN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T121316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF0yFE5l0eYLBpe4m5papQbOgv0N5z1LBQhm9QYiGNZAiEA2PxnRh8aWKC7wiXEvW%2F%2FRZ2pqTMBvb73eb%2Fl%2BWmEQSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFW8X5ucW2tG5YSAdircAxXLSvQchMw4q4ETNzbleeSKklzFmd%2BtKY6B5JRHFGKnPCyIrlyAbbk9Qy5KMdSEqVDKhBFovvgmAcLfLgUenEVcvwXt8xG5Q6cdQZ8lXF48t4LMjX%2BKwWhvDS5F%2Fml5M3d8YKdhwZP7rwHT9cpyY0x1jrOsxHHtyU92uB9oWBq4cfKZTuMJTb1IcN4XcBI63bJrr6DqcjFIRRk8ERmm13Di5vN8mRW47ohMtNYEfrZUQocF8rbInxswDZwNCfGKRG1ieD5jshS1xmg%2FJeRefnyaE58Eg1mmOzlEd60KJg9qdpXkiO1vH1XNOZxqDBvqWTthlZ%2FHwSRMlsWZrcTrxO5vOrXteWa%2BIVYCFZUwwzzjcWlQ1AXlwjVEeG2goOnGJ8VW1enMSgpj9cmgElwQofX1QoosxZ6MKBVPOC6OCpt2lle3585Ub5Deo8T%2F9MNFtZzkcrslrvYxrxbhues5xN4WfvCCPZ%2FIyNtwYRtxHJyUE1veIt0mGXH73PCczdI8CZk3OVlK8Ecg8F0s0oQuNFRr%2Fm7hfWc4fmzTKxx2L02Gr%2BxBAsK%2BmeSAZje0A0LkGWF0EFnTcQ0IR5yZW09zmlEi286c3hX%2B4dJRkhQEfnrBhITXIJTp1l8CHt6oMO%2BDssAGOqUB8KosrZ1T019wrrI69%2Bu4wKP%2FlDUnO5Bms9k%2Bvd%2BWaqR65S4bH6cVTW%2Fe4AiIHsqdUFy7uZS1cbvxIRfZPk3onKQZsOP3wpSofG7NUtVD3owhwlTTQ6v0gLQkM8fFu92azaltS7trxUqdDeoCgVvyqL1zrN2Pr9yr9hEYxzUVm6u32SIhzbmQSm1d5Xg%2Flihcx6vTsbwJG3a1dg2lSFWUO8ezcnKB&X-Amz-Signature=88bdf0d936ba541b497100285d2b7c55719f83fffb6e805f282f6080348d0383&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
