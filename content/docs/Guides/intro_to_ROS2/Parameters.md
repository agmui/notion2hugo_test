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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZZMCEMN%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCduJhDgupRKIUidd86%2FmeqXLoTTHVFL4fTWsDe5bnqDgIhALz0oTwSYPtjyj%2FCtfYlFrEAgQ%2BQUeAyht4E3RkCnXaxKv8DCBsQABoMNjM3NDIzMTgzODA1Igw7khqkVwueAOs28yYq3AOny9y3X2suWFQE1OtU6wB48UG%2BiVDyEC6sUU3TCMvpXU%2FBmFIOgGWF4Mv4C3gVfsxxxNHdRwOn%2B1%2ByfEi1N1%2B5PlgeyDilJQ08kbMLsyiuanxcWTQrNMpodhx7w9lU%2FapeaOqiTovtWFLYl3tWRfnMsDIiqQcaGBYy86vQ90xhOF9uWP7szmdvy3zV5L%2Fi8Qx21T4mDwjdobpeNttuJ9NjbA8DMhShSR3YaI%2BbFdMUw3wpwsnaJqSalspBeXo%2F8XenWoqcdurny0g1mXiL7uxRSHmkQvi7HLBL7ClZ%2FSxHGm7Euj00lisFzGvA8ZtABN%2FdFXJp3Fs1AbIBFts5zYd14DaIPAE33IVGhn0dfLCzP5FXcge1kKaEOd%2FyxvPUDiX9ekLHvR3oDAF%2FucZ1bBhG2kyWJGQ%2FbAtihpjnH8tA9vd9%2BmSYUll%2FurCVKOx2GGWMVRQAkwVfaw2j50KWIilCPGxtn%2BnuaJklo4yb%2FfGHUqq87aMgd2h29MUSgUQmfdf3D6X87UaDPfpqaj4XuNkw3gS76g%2F7WL3eBh7SV3nyj%2FTmOFdo21ml5ybNIgNK%2BvNZNlXUTM2A3rqrz8DhLdEgltcCWRhstcvEPkn5pJ5ffSbYJQnjxYzW5PtRijCK79XLBjqkARp0SaYgopIydMwVOOoHwww2im0QPKAaf3RLsCQ17DpTmkdIvWkR20kVT1g%2FW3qiwiPZ1xUuPVh5F7GNlsDaXqjzA8aGKvDZQ3DvGTFl%2FhYw7alMuxCXGQyF4qtl4o0tcu59ofB3Hx%2B2TUTeC3nh7j2DYp0skFyA2FWmZREJiqr1RXbB1czjuD6vL3hQYjq0DFQzzEPAuqUAiWluqYMw01measj%2B&X-Amz-Signature=5e2fb830f0e4be5c11b7d82a3c0e43587c6fc2abbd3eaf3be8124f704b55cf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
