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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YXHJBKY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEaxkvlluVQZSnzlF0S4O3GbpimfihpnrO1nY11EJS5SAiEA3%2Ft1gaGrJ9SanyGUQ01T1LhMYfhIqTq3tycoL42FIx4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMwFQitmnjEI0qpteCrcAyfrCXrJLPUhJDw7egibjoo%2F7ERa5IShDFSEsxKYHe4TOwSKDFzUjx8kPUDEeDIhMNmYBrxqdBCGzna0yC4D5GjXXg0ljq7EDuWTOZBQJd0TrELEbV0a7kPHkS5H%2FHeh4uSGCG8YNNi8blokXlJagYn1R3%2Fi4M84TvTodmRbYmCKVicp02AoaiSBQ0kqpuTzWbaFsK0ShWl4L7I7qbL6gpx8oVgi%2FHxwCBnX7xUaqjN53ZYjGfqkx1g3T%2BGKwYdEgXx3xDjsZT8uYARc06NHuemqt%2FIzcvHOOvmkah5ltCnJa6BY2pczUOrVb6OKBRFV1bLXnETRgpVMyGfYETMujSZzS3jQYv6eF%2FVzHJpd8OjPX0Ng4NMSAKkogMPGUKlvnKLhDC76%2FzhIfHqGMSiDs9LPE%2BVQwrjzUgajwpSO1MnkIdrHjpN7LtH%2F14Dbz6OUguc0VanDlMhLTomC9uVa3JcT3G4kpS4pNwK7Z7uVowG3REu%2FmmSWZIgtNObY6Cci52jY2Vwjn3G%2FD1OcuTIPo5kyzxFIiR3bRQ11A1bgBdO0SqiPY6BttYWgUrDShHhWNZDSO72c5LyGKQ3yRT%2FqE3y39y9BGOlo3W2VanXF5vplK0KrcfHs6Gfhmsr8MObAk8QGOqUBSD5XRgeMeKqF1XaMVkx02h%2FPNu3qawENiruanNDMlHPLBHgUQfWSErY9ixeKiOsRaZdH2QrqssP6SpFEIo1wBrc2SdJmbrzQ8T1pvTzRkyeB%2Bu9w59vbcjKG6X8n1nlTJ9vsJIrS%2FK8huazuaSPN%2FlOFos2LBQER1%2BK5xJ6ZoNu6GJNUI1xz%2F0dEXDBc6wS2wwngjycOpIxXq61NRf2%2FhA5wpYt%2F&X-Amz-Signature=5d964fb1a897395a320779a43945f38a64d951d53a9ff2aa07f47f4633f6f6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
