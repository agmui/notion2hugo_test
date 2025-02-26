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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYIXGQYK%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCki%2BWEyONY%2F%2FX8U6chD%2BLoXNuxK%2F%2FbcpR3u4pAlUl0MQIgeQm%2BUBckWw1vgpi5hBsH4e%2Bq6LOXOOZh7H6IYNbokkYq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJJWVaPE27SXVs%2BxxCrcAw0dtoPqK%2F2zl2RPMalmulhOjFaaPMOk03cEaLva9QqONAgqHewceplQz0JE6ZAzwO0yYTTAijSIA1jcX8NjljN20CTjOMj4Nb2ADEgRMZ%2FK6x5Mxo%2BvtMVL6WONoYhMSYUIWO9TipWtkpSK%2FDMJEPdPjM9Bz2q6cN4SMagclP5w1snjs9Lo8gqVPDs2%2FNpeEGONETFOKColTPV0JWfbn5Sv4i6vpVxQR%2Fs%2F2SQQ6gJriF8bA7rWI0ZZrJvnOZtaFMqQgSoMyfxki2zJL24ZDSvPXs8YPi6Rb3O6tHqUvztyRgTsFXemVI6L6BJ2FuMoMFS6vpSa%2Fi2XDK3AP2qz5Pn7t813Hvy3HZ%2BhZM2sIxuTR4B%2BaiV%2FgEvlbQykTqUISheFqPkznZ6EnQPL%2BHqX7xI501f74bFtxrapa8secnHolFEyTjh4eSDVaBIw1r%2FLYoppdkefZ7d4k%2FzVtjdTROlO2AVTb8zyJQjtUJTDFsAjPtPqX%2FcMmpyfhdTBvp27D8zMQhPUQr3RiAtZ%2FGd7rA3OIFvW5ay%2Fr0l6Ks0AJ3hxO9OSs0Xp5n1VzpQo4BkrACGO3p1gZIiNyrplQHTC%2FFG04S40E7eS3TPnfRcsBqPEOO6%2BPsbI8BwVvSvAMKaE%2B70GOqUBCKTNq5mlmwhEQMg4xUN5NpX%2Fg43Rv5IU%2B5n5j725PJt2lIbsT78c62X2EvbJ03ATskmKpJ7Hu%2BsHVoaKr1kXloY%2BMvonBcFpiMgpCa66z7R%2FtXqcYCCgKuldKduXqEXBS9hXuXEODmJOC0%2F%2BMtE0YEsIFHatC3xHUNl%2FbJyAEO%2BNZ7azZ6lVbq7O%2BKaJQ3g0ydAiBDX1MhqSfUhkkKdXp6uLn1OP&X-Amz-Signature=738fbbcc2b6ba740a60fbf4e1db399740b114c7b46483f61e766a284a89f6f90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
