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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSG2SAWL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPUqScGXP6y8hk18V6sqLjwOj8hKo7lLUKPaVwBDvQkwIgQ7Ol%2FrH%2Fc3eFVw7bST5CSAEuQq7lTMOHmhJCWlPOEf8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtC%2F6jf%2BYX3kJxXGCrcA4e8E0jaZVEMcxWI1%2BogT1DuGGogiCRrhxYexWHUJUIzW%2Fxigqus4ogQqHzpId%2F%2B65DIHLbbAPsbJtZ0%2Be6i1YF02xyKgf8onEuoa0k2k10JO7cekpPN3%2BbC%2FoRzXUSJxwQntery%2F38QrOnTdHB8J6OjGvuh9VwiV%2FZJJ%2FrKdLWQlub%2B%2BGFMr2h3jscDdhf%2FDxSmag7mTp36SQsMPHx4avreV456einAuKzzmlCnt68uT3Tr1hm9uy8gPmeJfHeO0P2xvbb%2FdRM9nKgafXF4%2F38ZwNFna%2BidbjHDythALrDKe1LtZtNbawGiee685JtDt1wEt1UkgnAwms2BQaK%2F7%2BKMQPOqu7fVyc5QGRn%2FCkJVOKchJn26Nm%2FKCo70kJ7tRrHxew%2BoErqZedV1jdIVAXL8z9U5iBnaOY5%2FIsdlW7sW%2BQdVQUdDKJmveEId1YUV3GAzwg4TZUlnoNn1f%2FKcyqiC8Tz2qRyIyDb9dWTiQw%2BDrNWknztvfJKI1WjZCm7FbDQwydX9b%2FU4cP8VMR53WxYIU82r4frv1OXAHY2WoLvVpqfrZ4Ki54GORMhKMdQonEW9Y%2BRSwkWrdogK1Hi0SHWIstN8CCTMkOpXoD6ezoakpvwmNyAumnjcakSPMLKFzMIGOqUB6fuzrxSNm2UbdzBc6hOtQbUxia9obUkkyus%2Bwv1YblyWAGUgCUPL89dZ87unVwhvucyzQWrWKCKs95UPy%2FRwXqslWjmJIlvVnjycO3%2BWngH91dQcz%2Fe9DCzsPyEfoaQpJuxkPevHPAsnD%2B1FdI0c4GRYq%2FOeanp9E4RHWMPWid5T4sR6QE0xdi%2FdYRz7TKME4x4ss739WBuGvJ2HVK4mjupVgLlw&X-Amz-Signature=a8e0c68eabb2ac5cb259ca54c48f51f34c9e6f92714f88fefa6d17cd6977c20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
