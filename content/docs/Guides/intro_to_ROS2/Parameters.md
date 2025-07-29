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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KOWV4BK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICEfAsNeE6kK6%2FsJXa856yGItWHfie2fYAS%2BAlf8bUCvAiAG1H%2F0BPvb1WbKvyRHyPfc6Ow6%2Fs69%2BWDOfJ%2BwYAipZCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyLOiPEGvd%2FzF6LESKtwDxDs2CG06SIvJVhOAjxWca4w7eMi%2BWR263rI9ub%2BnU3NBUx5XGLFeGgyjIG%2B6P9YKZTeiDJTB570P0b2l1Pm1zHRRdFYYBGjuvWZhp5ZElByg6loYggt4UpRFFVK82JpHhGwoPg1O0ugAOlp9elGez55IoJf1skxA0HjYgkV76lhZ0HDm3H4SSqHoSv7RFb15uz3E2VbNzjh6dtYVhoGGVX1vV8u%2Bo3vV5okJmEp2mcrqORzkhdeSS8OH8f5jRNLbJE4im4ljRc7EQLYwzPwrWU9qbgiEHFH6Zleg7Po27WXtpH4AL0IbUek4cPSNBB2pSKNCEnhMeb3a1G34y3BCeluEPIFoZaW61%2F7ykdzIgNUSuFD%2B3fsalUVHno7PtYKYtpMQMNaMaZXxMVSwp9CZS6Fh5gIpBHoGvbsvVzdIfDXW0lUySyJC%2FO6IO1IJNmSa%2BqUaNI00frbVCt75dEJj9z1kVB%2B%2FsdoI%2F1P00yg6J5VmtBelp2CiriQQ4E89g4znH6nxQPkgtgkqzsxHPLHetH6HAi3VtJPmhqxv3eSg3lMLknRhMq%2BAEpnco%2F5p0Fk7XFbUKmMU%2FLEpgOj1eTNj%2BPP88JW5Mpp07FpHz33ZkMiglRuUqBpYqN%2Fmn4YworWhxAY6pgFOTzVXEDiMA%2B3AWRSR55BFX4lTbL5tVsaot72zza3qqc6a76aX8GJ10cMVgy5aLiqI8RYSRRvPcqNCLOdDnXhDYUhKAthu6EubjdVEGsIQg6omznmJesprg5ucuC8%2Fh7valjscQLk8sndxixaL6A1COnooZCmc3OiC43dQ7Z%2FXaFSql41948X3BZBOgYcE8mnxm3QsZJEORk60wuptaNbscg2ten5V&X-Amz-Signature=75f0fa44e0c3f783dc52035ad0f78957ff9923a5cd21e41038bf96e17bad00cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
