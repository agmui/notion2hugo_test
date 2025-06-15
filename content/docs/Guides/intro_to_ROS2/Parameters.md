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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3QBSMG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCDCY%2BuHxW4yZ%2FAMgWPF8glx%2Fu0sAOWeQtHNZh04UbIKwIgCVWka9UVmBOard7GjSYMDJ60Gca3ZEokax6tOfsmpN4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCc4j9QG4ib4AEcGACrcA1%2BDpBABY3bYY8gAqqjPgovJ273jRiYLAMTE6pH0535wcBsId2veCXSvN1i1P78uw%2FsvhhSAG6j1Zki6JycMLbOvTpHYdPyq8C2eUIiVPAvg1zEb3OLT2XKhULnU0oG3MHtgknGF1DInsDCYyGJLfldaXlaUHfHIW%2BTrdcqGHduWjlkFn%2FYyPoO3NT%2Frd4LBp1qs6skeWYxwRNXw9xv45en%2FevsikFDLVCEhqRgY%2BuBvaGbu5%2FiOOgymoAHfDuZog0BMdPNfu8igaAuzlFwOFKU7YB7Tlp804dOaiDusMaW3JB10pslfpf%2BFQ1cZ1ushl3J2x%2F1itLxBTVrIbm06fwx%2FkbEUL3antF4Px12gdlOITm31%2B%2B%2FfPYKidf%2Fd9Gk1ad4m6yLdgl72eCLfiKJJXyCTGFoqQduSQiAAs2Kg%2BohiU5IA76QlH4%2BglDprNHuNusToFZX2JCGhJ0QOTmoHxun8I3ajwk%2FH5FdPRGs%2BJEKAyY%2BDp%2B7QMkJmuHq4HDZi2kZajv%2Beq32h6OuZmo7JddWosx2I9qZYP%2FGUPkR9qthY3GUlMmZ7vzP3wmmY%2BB4YiZVwhFvugQYVxwXZGnYC%2BUeDcetd%2F%2FBfrmBxVtTfSds8jzCa%2Fc27vMHBWuq9MKuEusIGOqUBtSIFYxACj3AI0C4XFvEBRJ0HJ1A82o2y6LsS%2BV2Y%2B7hBqQ3L0qTEG6KCfyGXrBhNK3Xo38oS7klkW01avHgenK4XFP50vnBhcoPLUbEu0QxYACGuXJ6i%2FELHybCgKXTbdqO1nc8VmTZEaAIKvaM1a0ZfcSa98LMM3bfadxHgI2WI7bhf8YQGJgCVE1YiJ0DM2PMbQRx9CMTQID7bjyPZAkSmuKNT&X-Amz-Signature=ee6f45f66e9ed41d49b91c4fc35e992367256514427215128cd4297f5a10dd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
