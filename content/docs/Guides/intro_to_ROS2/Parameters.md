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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PZGM7IP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD%2FuO%2FBl3ev3Rv8RRFn4D%2BwsHtdsfqZQ%2BHm2KF%2Fy92X8QIhAIdmpZYgckDZxz0pnr%2BWWxNXKlAik0vVSNbCafk2VAKMKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5pKTeFJqRovmlRjIq3APX8%2Bw%2FTyePjY%2FpMnP3mZ2w3ImsGGV1p1X%2FzcdDlpS7g43zIvSFII2iShHVFRK3XpkApvo6kscGauSKFNbqy4LVcZqpU22kVwsiuCLgtIPn4w4Q59h0S7pC7ZhRo5F25JM50lrVsFjWTLKqt9Puvl5fH07mzHDpyPaZrd%2FUdKYakkxcdzrcXnd4%2B9H%2Bo%2FOCR0Th6NVbJjFCBFdjxK9LA56X0imPhSqXZU1ZIoYHkEbrEsfMlMRQjd7HPUtKwrGeC1d395tq0nHDjsfzUZUZcFPJlwwUtcICj4wEuxPGikMlbCnM7xwQmpZCeqybgHjm8Xv%2BwwJ21dRE%2BXHaYAxowiJaXcLEm18KDiQE8KuG4W2sHSo8EGtRmiCvzX5B2ouaBEayZ3leKHaQw5R09SGZs03ORWWo25n2mQumpkyKVJlaUTwKLqBt%2BCPFGanyZfCJmdsaj6gCa6GvNb%2BMOOXAyplUYL40QavDfm1rjmDnQ9v2K3%2BJABjBlNyapqszVeYOwy3f6iKKUttNTFfIqtYeOSlp1KSbKbx8ILwp%2FzvMdWxlcCCdZzLBWJ6GCFCYzG4IFC4XiaJIv5MO1wDO1e5iDZvIRHOJz9IdMm%2BOZXE08WPf%2BA6XFUQeVCcgUeXNijDxtOm%2FBjqkAUg9fzQ2vrALtKazqMSyOeo1wjhxyrybjm2ChZotMvt7tlaHT1lIrP5NmDzhWGS%2BJZHSjGlvmNSFOP899sf6vFpiIuV9F7gec9GTbu7X4PsllhdJ%2FUnseZQomsz4%2F3lxO6%2FSVba%2Bdy9Z%2BfPa8EL9B2x%2FsLirIQhz7tZmMvXxj5PMMMNQmkpniaFwi3ny%2FgyAGYX9IPztQ9nNn9C1rIsqEnToH97a&X-Amz-Signature=100cada5a4f1294762ff7167af4db3a6cca2983cc210df5ed9e90ea74ee1814e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
