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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637RWWU3X%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8iX86%2Fu6cmlaR0d%2FP0l59SVpZEtiqeOC1EVsL57RsjwIhAIv3dhnPdEe6OCQSz6dJxnz8heTPFnSi1heAejbw77BvKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfMzJCOkqQzCCcdB8q3ANvBxGK5FYSjmhpgqrtYsAPAPoZ3YnykOyee1M8H0lLb%2BhCie%2BCgD37j9vr9nuiiJje2eozqEGjJ27OXXl8cNvlxyADRxgLm%2FH9s%2FJuZM%2FB0r2bZ8ULfFlBN27V9LPghhQ6W2WXp5ys%2BYoVAKKsmfmJ2zvmwi%2F4m5YpHFNZBUiaqo5qv8cmxUTmUSOBMz9dHkb%2FKq6jDPjurc415jV4jM5KNpnF%2BD6wsCjj1Z2t%2FCbmHCL98XDAnnKTR1NmUzoAzd5D%2BTjEOsjydR5QtPZ8UunIAGS183ZUqI01lZFAXmoTT9Ums4G4zjYgRYCz7VGQa0eTLulDZCnhi0hSsYF9F14SzQ%2BnljOZ5g0VAlnBpaWqGbiM3oDY2FCkAfuqJ1MHux2HzO3Yen%2FLiPaU%2FUIcYYQdpDpmMgD7Bgch3bhReb7G4kyXBKR9mjLV7p9DnDmJUlCRwbe6dFgBo0Lpuh%2FPm6LTlrW6S%2BO05%2Fx0OxWemLSPLTI%2FGjZWjRKWuwkG3oH6AExN0CphDsSToMf1%2FIJKyiok7KudfiW%2F2MfJYmDsknSCeNgh9StMAN2QNkR9AoaScEw8xPAU87lI%2BIIXqP9tKADCPIll1vdbd01cCxR8YwwlvpbhvmjdvmkCyvI3JDD0tfrABjqkAbp4DDuKL2tgBuySCJkaPoGLNx43xVd0ej9o%2BwGn8njDWlJrPRQ0AQyOsguKOos4G5%2BD2DF%2FTNM8EO94CsAnkb3kd7gCId4UYKK0DilK2fP4wBAaqOmTuVAJ74IoKY7MiIleZ3amx6TesFU1EjNDjNMdhmACEP2571h%2BsxYLHvAGdV36Nz1MTpWjoUJdd9gtPkp%2FdDrwalS5Wcc1t3lk2UnoXZID&X-Amz-Signature=d58173628c5231e18abd4f41d7c2ff868d42a141d85196ba1b1f3d68a9d570fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
