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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YKSZDO%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICHCWRqwk1%2BiHzemYTHN1E8Uxcadoq4JH1ZpVXwZrsZRAiEAh7rj92gTICtEQ7rGt6A8oiAFgGMoFqr1J3%2F1FBEw0RMqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJXT%2Fw401RDqaF9CircA9YHHBaRbWVQCVQcjSXM%2BbPBUrTudVzitGbfnwwm%2FRrwR2XXc%2ByUC40AOvFbPish3%2ByDYXx7R1Xl0TjiHqWyMJ1TC3aSKgHWqjdNJhUf%2BgzludCjHUEcj7tQc5RJ1gYY5w0tutpkf7lPcek2VHG%2Bpx3X%2Fi1%2BBENA2%2FmzqHOsMEeFFCa%2FwXZRsAwQ6nzPgME1DIBvMm%2BNFKULwRmOB8KtkD7O6MQMQ5G7OLX%2FdDXBctosTFWggsMfG%2FAbkM%2Bl3dN4dKk2y64tJYjaE90MTgFz56oFR2gguwWkVfFz0pnHc69IRyoBFPGAtk2fNvZ%2B01eLPST3GFU%2BFemtTdl3u6kufhpOZqoXbUoxuLGL5j22MfOFGd7T722knmJhU9SjyQdcRKrgvpKPFxeReg5G4tc8%2Blj65zW%2B69i0dyaBfB9g2TLPRSitJJk1v%2F6aF2dPho45Z33fZVSrXWMJq%2BHsQmmsTF2mFCgEaKiXNqj59gZfF6Sq%2Buz7fw7KelLVMd9Oe59N747k8GSTPUGsvf0MfReIXcAzRgKKQpPtN%2FcqftNC%2BWopde%2BOi0Sk4DPnRP%2FBsIGsh9x9jxsdnYF0iyYu%2BhHxP11Qm2dXa0LAViPe3RgwOk6oZT0vx5X2ZD5Qu8paMMPI08AGOqUBhQMZgSNpsogf%2F3FXvC20I3RFO%2Fxul%2B96OEIZHrb0IMMpWe5HLr%2BzUG%2BIdNgvJAG7sYUIf3EDCk33lfmrZTIattZ6O7UHyhzH%2BY8QFJDUYf6mVhFxEqUggdZi9aeq4wxH6HlESp5BJQx38BaJR8cdb0hEmJJkAB7424CKkLOBe02L%2F08rc0kZjVeG3TRilIq3UlYLH8CYcuxh0TIp3IbljGRKXbvS&X-Amz-Signature=871810253853bdeaf17beea2e4a0b778d41ae1b9c38de5c26fe0eba5134b5b71&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
