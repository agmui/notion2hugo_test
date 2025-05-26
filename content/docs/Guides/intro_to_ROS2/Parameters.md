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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667OCAV5W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCga7T0kn9VybR75K6y1Fp2AUJTQcp7nK672CRdJQwRmAIgbmTwea3S5PZH9rx2W%2B%2FrArOQBgVVgIPqV1f84INkPFAq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNWOy826d8hNfZbh5SrcA3wdNWY2%2FTY648KLxRKuj%2FbYcrMLg0AwWBeR%2FJt7y%2Fv%2FsosjGhHdzooCzIihuBQs9JYsXk4CoOwhPsjw2ezlfsgp5IUxeaN1GfrP%2F3Z0qwjFjztNyLGfR%2BOvQkxoazNFz%2FhfGBN74hI4X8hyXoJuKlVzHpyXHKhHNl2DTKtyAzYj175EcedQw3jd4q1WMpLKZJW8d5HA7JsNUps1lkjgjN%2FFjGUXoXlZ3fJdehW%2BjPHiFqVKbCtZRTuSVVPZUasWadR9uvfMxK6euEA5O%2BDaKau1Ld8mvjUaosbnl2Qq2cYwk1NCJr2i2Dx4IYoq2c4Jklt0GPMCxMiz%2FfIDltfOiTLn%2BBcDqY9U%2FUNqnl8OkVdPt6xzpDDHT7lsH8%2Fjb52itLDm15mbD5%2BVLZe%2FoBbDIUW95o4FsBz%2FY0r8Y5hi7j4%2FJ33D708x039TMHi52d%2FTPiHXQGTqib9%2Fct48b9bcJPgtwwKDcgPOgATWcqmqp%2BF5izusRezXesup2YIQ%2FfqDSmRiKMGtdNrbCgmwm33fh%2BYOTNviWy%2FBf0aFhvr6WTkl52n9VFDip%2BtleHC8tjfgWmLrsqAfDqf5supCmGzPK7CtvBlW%2Fj%2BbYfijV4DZ9%2FjYyfiEQfpDJPv9J8mZMK%2Bq0cEGOqUB2Nt3Y8Li2kw02%2Bft2tVoEO7QqLqorCyzBbyE5AQN80%2FuGV5i9G%2Fghq5qVpyTnqiPUGQhEqLGpUSDITscLRZpEgEb1qipQvYs%2FGZZWSyAkuauqqLItVeGX1i%2F0SRkoH240JjMBzR84iYyib25BZfB%2F7UYcUIdbiimQm2TuD7uCh%2Fl04WcBFckkYT8v1SXX8jb1jX%2FJAoznc30LlTOYon9SCROR1YU&X-Amz-Signature=5cae1f937cb657eb5cad1e7b457395887d975700f4461140acd627cd9fde670a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
