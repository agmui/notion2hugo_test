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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665256JSZB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeBApSw%2FQEiii4IPHqHPXRo%2FJLMKSCqlkFPK18JNbJxwIgZDoEfWCC90EVmIFa3ECtyV9xf4mXwqdfaUAUwV1CMeEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2puHQZCIPQp8GCQyrcAzCBXk7cHC8Sdd5Yjhyy6ciyiFDCr385LioLkRSxnMzGKl010NxUs702B0JhVng95FPs%2F1eMQWFtuK1hq7dM4fRauB9BAg9q2OsDfoeyCOK3RSCivalIZBBBvv1gN06qdjfq7XT0d5clYAb0%2Fy7Rs3QswEMOBgK0BiY1byRFAVdLS9QQnG3t0WaTCTruDswnk%2B13w6aRguVC372HDxXw2TTMZ2OzcizEuLd6Le86UPq1W8B52n%2F2UpOGwiHMkOfFxX%2Fk6lx2XFVl9NWLZ9A1hdtWDJq5sNK3Bo6MMgPAd%2FLlBoST%2F80bfNhdRuE3HCNPh2CUemXU0QQmJ0XQL3lWlnFdJvRCPm%2FMYzfBC1JKkDG4rAuba2ZXOQ6z8odp%2FIquJtFN7qD%2BSqx5tnGS77%2BM%2BHBJiIAVPGHajjrn7Rgu5%2BMIMvp4o%2FAMNC6F9pcvnhhex8t8tnGFSepiZ%2B03OykE3tdNdCv4iY9H7IKhD0wA5EpW%2BRYHq93X4qAWaxKZqE5Jsx2q4SUnh2CJjIMXFs%2BmYT84S5Yjx6dNxN5rSJOCJqjv2C3UEN1%2FzX888XWZsx9Ff3nex5mR0w5wqWI9M82GZHUuHg%2BiESEPQpg%2BpDrpkmS%2FqSIXi%2Ff4aO%2BrcAnRMMb0n70GOqUBvDO6fu5cSRGlXPxj9rbQ5DfVTW%2FxoWn2SYBbBrU75%2Bl%2BL9druYv6SFeYKocK4TLDoz%2B1jkXPGT8PXGYYE%2FwgrMfRjRStijd2iHdU%2ByQNwKHDfL%2F0bgo4WHOEXajYMwMxCvRr1d5o3X98FfltMCmQRgIh9yNGA%2F87HCriRm0MZdYzAxBWjFMquqZeZCa9ENQnD832BkjhIRKJDSDQEBnQmeQoa70b&X-Amz-Signature=d493271e82e917a8512ca19705f442e2290a4daff82b4001e1712cb8c7f3eac3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
