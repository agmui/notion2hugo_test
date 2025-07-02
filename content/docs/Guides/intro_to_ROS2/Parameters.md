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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMPGJQI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2MIK9NDmo9YPNTopmTeRztXNCHy4HKmHwW5ByhiFylQIgF9nDiARmHtqhLXA%2BTurkRM3gF%2BXoPTXSAFzd5nXFytMqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKm1qCvbIl4Hb8qlircA3YPgULKYK4UFBNOXHl1IlKeb133Lg9m9XiJrh%2ByAfPAYEVpY29L5j1bC36xIuDBy1Zytn9vw73gQCgZLuDky0qr9WGALXfn%2BjB0uBhYxssmGRwuRoq9s5dq%2BITddIbiiirchVFpOp7DyDFZASDYcliCkgdnY7w9RLO5BrhZpP2DvpYDEuGfOHnF8BlyYks8IpwvPzwLTI7XuRPX6bq%2FphST0MEycD16ng0Aec4Yz8wc1K%2Fru9%2Bk%2FMDxyIJKRYdCZaVCQFw%2FWgi0zrUXRpiFTQH6xD3aU6QTxyPsWFeahWAR6kAKpLaE7R0ufY7d4q4Eg8V13Spv3OMlzC%2Bzzg5LZDLhme6ldoQIgRsKmknWI9HeM5jNwhdM0QHvnwZOPa5jQrPNVDZKHCE%2FqdcTgVntlglIHVogu%2FV7Fd6GX73Lr4QJmN8%2Fp4SXHzo8s8uIL5%2FpwhpPDVE%2FIJGVAPCfHIfVs5qpZbgb4T%2Bx0JQa3qZguTneUV0VKB%2FxMTq82cep4%2Bbi0yaqZOl5bXUZAorx58YNk8dJ5bckAU6HuK15ggJy6jYTEvLJhHEA8eEo%2FW%2B%2FS7VhpN%2FBGvtHMDF82iUS6MgPdf%2B3xXcd7buS%2F9rBiwHXdWGRamDenrnDkQ7mWF4zMMKTlMMGOqUBlTKTxfjntkvcQy%2BmsngwPwOm0uPz25Aj8bNeOeRAnpThHDLWWhSCpq44w6i0YuqidTIfw1mIJ7t02UPR2PDyZ2Eetgfp026SBnjNzQ%2BKQHZnTqsF%2FyVv%2FUIWmHqAFXVhGS0ly%2BTvDKvgmT9twU8E1E81BNoWJia1ElBZw0fHlSrSqQkR5bKrsII9uQIO%2FcgTfB%2FAOhAI6eqSFucsFKKppcckVSR1&X-Amz-Signature=15f9ca5329660296354b9c2ede569d7b4322c3127c11926082eb41fb6f3943bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
