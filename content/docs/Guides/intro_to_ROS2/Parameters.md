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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURD7RLX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp8wyzrv9yqKH1x29cak1b%2Fc2L7dUOsOmNih0ZaYH%2FgQIhANzGtAcnh%2FDLMotkornoJNuLSq9TQ7ZSdSl1fBLbc7u8Kv8DCBMQABoMNjM3NDIzMTgzODA1Igw81JbRA8djrJYnbpMq3APcZoXeML8QyC4u1RSi4uUfRJduQRvefAtguneBInC%2BWxOUa1MdKuhZpD0vl8JeYguxVnUNKfSoEaVCKP%2BIHruC1p2Ybaz0B7wqM3X43q7xYeoLyRY2EYweUwtMxhi%2BO3Nd4vA%2Bb2X%2BZyUH8jlVDQgWQQqopt1z4zM3pVv%2FatL4vORn7K5vZu9nCOwftxOosf6QyBAw49IjPmCklVl9zhCqJLTi7ACDhSeSJ44KGs%2B9PECQ5HrwfVuo16QqwFwHBNHsqpzcaALisosxgMyJuBQXTRNeLLhpGlPO2XDC1wS8f7pGR8nRWmDjOCnhAnwO8sa91xAn8eXkyT1XlSDtrRKp5hJ%2F9XWxTlp5kpwqA7VtvGbPqAplECyDpDP5%2BS%2BYYy8W00gxdEv8bCVa%2FOUwads0T2wREHtkNQqw5sKwAJBnxLtn2msLFy2nBIRTdHNUF8BWUs4kuL7f10sr2kIsumMxW2bvgb6IM%2FjqAN7jV%2F6uccRswgH9rW4Zey0kksHBkpsYP%2BZXyO0VnONllx1I4c16KsdLrW%2FTQngR4hy54%2FNQiKRfZppvnzVtgqqgowaH88saQjA%2BOFjPicDY02h%2FxEMka6irnwYqQISuBD7%2BrP%2Bz3eeUxooht0Y%2B9IxVejC%2BwPO%2FBjqkAUOhyM8R62R4ceo3ZJrOqlGuUGUz%2F6KdKV1afkYoYJee%2FPRv30msJ725X6BZLPUms6NWDpbAr2Xv9LD7sWy8TY%2B5qc815IW8pnGGMJkfP%2BuZdFevNtI%2Ba0%2BLyXt%2Bzn6%2FZXxBw878G3HaGsNXk8NbSEXYBCs%2BC6Ej0ix7KbXTShrlCqrtEVzosZ8C1d4BbXlH1f3VmHvsfBNPCg5CM5rqBgm1BlYc&X-Amz-Signature=aa1917e7c5db5ae84457fd796c61f9a7309b8802b2d26b9f0c15edf058d1d17a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
