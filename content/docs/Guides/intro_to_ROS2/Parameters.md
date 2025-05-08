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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3MURPL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJk%2F9lKBa6Y4o5bj97XXyb%2BMMQyTKohcqCRD2hjULJKAIhAOUNMniwo%2FRUYPsfWuBpnWIKBy%2FlfXV6KqTSngZBfY%2FaKv8DCHkQABoMNjM3NDIzMTgzODA1IgzXhX1TIIUbjHtUEEQq3APDigdGFne8C7B%2Fljppzb%2FMWEl8hd%2BC2C1PfA%2BrOfnv09rRHFnD%2BBCQA2bDHBSHMtIMPUO2lqSANPtA15XbalWhnT3prXyZgayIkqCstReMA71acXGkUNaJ%2FlRJcojHvYQZfPGuZ66yiXts9pDJsf%2FgrdjXQQOdBW4l4ZcaFLFLEEfVxAAcfh%2BzFqDPuVPJ6U%2Fr89DqvHCpLdpKjIORTX8%2FdeJI1wUUwoxS4VbRG%2FL74NnTNfgERjHhkNmxrCT%2FVvYrKaONHQgUTvuHQWW4fxQPyUhfrAO9VcYus0MRMB7muqlxplJlv9T%2BOZHTcGkMGl4F4tyJ72aqzUzDo35Xt5OG98KMDqSu38DSrkRvWBEOujZ8vi2yGkOfEbgPmMltnxzAL2ypqxEXK05YFXIT6bjA7TsN88AQDdxdWfKVR4k7%2B7SOophN0OfCs4kODe49DpsaCSHKp7Kp%2BM3yi%2FlqPOjE4bjOBVpGSNpQqDueYmq9h9FcZyqlaUrYOmZsrcszkrzOl0vDuSBzbOq1zub0GqIQJuzRFwAUW4NWGJs6L9ZfvUoiM6fR1JFDkQGc1OCaSi4FUVG2eWnqT7n4XpfOCmr9rn3ItFeF3I22Wn4UNc2Z%2FNddjC5sovt8KTmeizDumfPABjqkAXfI4i10kA%2BwSZ%2Flf3B02eVXCFoSHFwYEbf58P8JOxCkRvdxH%2BU2l2hafgoddH6NkmGnKycEfYnvFlaiBGsJGMNcopbujU40XaXjzVbrsBU9wdeDNsKKzguejAtbM0Qzf%2Bmgzv3EQD0nxVCkfHUU%2BMIATYjAGA%2Bl04QM1n1i4rcnUX18DRVqPDoS72Gf0xi82oJdmsXLVfCu8BYL8gpoeLrGgVUE&X-Amz-Signature=938309788be3ca1afdab4b4658eff1c021404723e26d1b0eecf2d9cf4a2007fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
