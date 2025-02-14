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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3J3A77B%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIAi7eKlQhgB35g7XmqCdWWIczYbrskMUms5WaqqI7%2BW%2FAiEAtWjc%2BtOWsoLKRW4uxXEjL8CJPaHTm3mUEZ%2FDu2%2FqdAEq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGwPcI%2FjTp52%2BoGfyyrcA8zzElG2W2E6XS8hiv8ZipK4a5ExZlLyeI%2Bhq74oplUI1siH8IYSrPVU2xYdPzMb8db1OYFowz6P33F9sxy6r%2FS2S4zgDsB7P4BM2souicaRN%2BQk7kyxDAZs0for96NDuJHww6TOi3Z5qrqodevXg4V8XN9rjN9GAOAGeroJ48t4MnwOV7TQkxqiHA3wClqtxK7i0j%2B3c8zz4EmDwmFZDstiUOnOiR59qcotdMdTvQjVBqw5pW0dhlhOPWEcb69%2BZFc23EjiQWwsvQP3gajngH6mSq%2B55UmD5YvKmZtgzyoqjladkFnluCwFCpZ9cQuNsgr4sh9roVCQrnLTEel9Ar7y7z043dIVhECdXpzp7n%2B%2FVI%2FuPuLkCa%2BeeWsxApZ%2BAEB3HP5A%2BvI%2BJXLe0YfWGGCx5LT7z80uqxf4AbPnXaedXWKrHrWs5wujXvmNVFQesI62z9E17C6yauXM%2BCdIQFqZQiMo24ePRW16IDi7va%2F19HrpjAzJiBossLpZsXPWGWlq35B4L6fDFcmfCTDdpKldNyDYu5a3oW9vFJnK7iO5nQ7qQsx%2FYYDuL%2BVgltbGXXRTRk6SnX%2Fdn9qWUOSd%2F8qVltoUXJifcQgVSyz3Go2ihUiVZLvyklTNidORMPaSvL0GOqUBy99TiDGyUgn0W6i9KdD%2F2M2oH4gRuy3iipk1Ff6LAtlzc%2BLdqj2z64n18SA%2FEouJA6ZcR6L8bZPm4PQ7W3qvFp7tInrREQItlsQvn1J1z2IVYRSihRVWwi2a1T4FXv9hhG79Mr33A1Rciyb3rDHStJ6oVHEhxCQRYWdCN7NZ52vC6BSRvVD8UQNmYSJGo6MnuiB79teIdqeyOyoQ7%2BQBD%2B2Y3LaV&X-Amz-Signature=87d9952265c132cdf398d6f836581317910a358ce2a7ff3a8e7ac7efdd9675a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
