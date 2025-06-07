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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PAF42QJ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVSF%2Fngz3pAVRwsLatqrxkZzmW7JUETEe5I5z6E4TtMQIgMOZTSu%2FLmmOX9C0H%2FYP1DwniON5DTM02SA%2B%2FNjRAiZkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDNOuwpwsMAB2RWYRnSrcAxO0OTgt2ZBw6cTcjFh9649ZeU3q%2BcKDoBPEKIlscrqxF2rwIG2wefR61zgZLwjmT0f97N5YpBDq6eqY0reCyGyr3e8nSP4TCauE41idFzVu%2Bv7vdtcd5MePyzH2cK9DlHc199Lf%2BoRLTcIFNar6VEbfZdGdW5Ivf1Ualc3%2FeVzPR2lYeVFKZb16DEVXq2kTSNZ%2BenAAfGR5IhAg0lD9pU59mNPdjc1I%2F4IsRsd6P5llxkoFMI7xGSc5YCvCe%2BG%2FLgehf3n0%2FrHHHIUEoEqnBaEhfr%2FRHIft5f9baA9kO3WT%2FeixNSqelt%2B5fG%2FcV91uABFyAQkI9A6%2B9wtCNJEjcQEO3a4g%2FdtldMU2wyAUOiJXlOpeZ62h5Vf%2Fdx8Ba9n9WF5FfY56CMJ%2FLJiSUW4U7FWJnZ%2BGHNDLRKROkRDHaAc3Tp1AC4jKWCtCpKV0Ycmrq2bUqJ1KfoXMFlbbqdVNOVXfhYRFTBiskwLZ67gJqjY%2FJgSaMA6tdpG3Xo52hQsApQgeAiXyGBVRUXCdeKgDDGwSqWy5JD4W6EXRV19c3HQR63qbaoOUlDHa1Zz8a44SX0cVnaPv0zfFGswpKW%2F1wqzXUUgGQWfZZYH4gFEqxZw0JWyE3xALDNZOTCHyMKuBkcIGOqUBthipCaEf5dZdWFclVdvMr5gWCzfqauoNJ86n0at0D5HepoLM8znm3zriKgnVcpY96DRiadUdJOrci%2BchJLaq97K%2BItMU7QiEqZw9dho%2FQTbvQgubyjmZ%2F7oRYks%2B03AlF3jlyfEQCMV1yeGXe%2BsYz8d%2FACDUtPnDNcYI4RT6AcjFjIsY5yYYzjGH7j2BZm0f%2B9mbf4chtvdM1a2n6ZPtuMgdnwc%2B&X-Amz-Signature=6b148f3c85f670f25cb74966b98333d6431c78cdb65353098ef33ead47d9da93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
