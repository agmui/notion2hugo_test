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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYTBW3G%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCTGDY%2BxhfikX3Aq056RdTkft%2BMuyxAgZhtFU7WtKGQWgIhAIQ04FXYI4KisJnY%2FLypJeAqRORyVu1Yp%2BIUlEKO3UjhKv8DCFQQABoMNjM3NDIzMTgzODA1IgxKn8XSQklA9%2Fa9m6cq3APli45W89n1acLL%2F%2BU6VRfIHxdvZTYwfvr6mLO64GnL7t6W%2BQnXkuCVpEN55qDP0VHH7sdthLbgFlDePJn%2BLTn7jzBnZ5Rt4gvS8N50MsfeX2Y3Qz7KFhKWguzyVxw8rtGpW4dIcWFOLDhn%2FjEPYUppjLYLwWG%2Fwx8NogcSNP40ZkElN9XPmWTp8LVzC8M9inpDtKXAx6YlNbaxa37vYeOIyrS403Y0U0QQul%2BZTS2BNPQgBLCuLY8M5vEZHnFSKRuER0hVICC5b6UpsgCd6b4Uo0aGdva5kIVBCUudqC5Ccxd7osmgmoN6oi3ROMm%2FM%2Br9fmOJF3qv7F5x4L5C6HEpAWSOYJGWa97Qzv6%2FwqpfusNTuUZFL%2B092y4SklvR4CMUFrlPg2tzfik9P1XVa5y1lylNVRjJSjSWOHyPDvNaz2%2BX7m7iigerFiuEcCRLLQjD90%2FaY0DqabEi6aXeIicduvQuwifqXIHRcySIJP6%2F02ipGr8M3gyZ3Im4lUpM%2FmfQRtCZSeX34Y6cwf%2BCwFgGdluk6VY0p7Hvn%2BlFyuvCMXgPUrYbi6m9yERS0%2BEhAmBgNoxvMppDSn%2BYNdeNPt%2BL%2B6C%2BWyJBflGlZYaulye2GzeJoTH%2BWH6INvo2wjCGr9zDBjqkAZYrkdkhE2B2H1CdDZjcbdZfthVasHLQ8VGn99Jdx915ZLRkcChrVXq%2Bkc65FJ4SPobShLl%2F%2BsW2k8oOIetM5ZVmNe3ovfZW7mLfCPSoVAI7nakCBfS%2B79oNKUbd87FDgBFa7vqWFb86W6OVHWFekUVi57FmXQ6a55zIU8njWXPacqZIFfhJTZNEoM7vxYvNr91z3uMpp5N3%2FksBYiDu4ygUqqH0&X-Amz-Signature=be55de916ae3e39b52b282a5ebb3a48d36b54f8fea029c83d4baeb2466b7a950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
