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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPMSF5RV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBNVOBD%2Bz8lllKtIz6kVCupLb%2FD1waiP1u2Iu6Ynr2anAiEAoRD1twX0V7lNaUgPlHv005K%2Fa4R67lja8g8lp6zkqUQq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJdk2UsY6ww5BfFTjircA86u1ibZ5LF3BGUQxN3cwojlp2hmsLXLi2abTNV2Zjaek29g2bKJlnUN1mIKIwbhhxQiPWO%2FJVOo82u1UaQpgkxdNdLRMhSAPTIK7wbjnsY6Wcyteas2aJSac57H%2FSjpyZN9WA4qz%2Bw9Kd%2BcOHV23dp4JoRa5J0W0YjljLUu%2BVodrs3Q6RQRe%2FniqSUOqSa7PdIBzBEpVrSvE5QwmqXYscHUeydfaerycycRdzncZjSFQDlTyTEf4zIEjT6xwHpq3GWBqa5%2BPaWAfIiSIkng8ugCm0BjnNoBAHTHeN8N%2BFaOl69eYyfVLVbwvC5Pvp0QPwgkRDb97VPx%2BHu69un7dH0XUlzCZ4uCX%2FtpqQxDGjGMIHZUzaf8H4DHuHxsb1pI62P4ZWSlGz7FfHkN16fDH3zQbrNBag%2FbrL2XwTYvsxiVXheWi9PAH6JRQBHlsGEOihc8ju8hrHxQUnF5u3rKoFvXSf2dZHqsXYm0nR%2BLPPvv2I%2BRFIUoYw3WBgDqfm8c7NThtsSPYwiT8ZacftxbPYWFSvsdec8bFOhHohm3G2%2F3BWeyvVA%2B4ho%2BfHL9qCi8PaAji5X9kNgkdGcZnd5dNi%2B%2BlH1K02DMimlbrISXD0mvS3Rs%2Bu4T%2FaI8o6r6MM3l4b4GOqUBd0Tu5jHWyh1Z%2BWudtIHSEfzrXciCs%2B5MHTye%2BRlye3jF3Q%2BoY27pSWNrsKnIpuT%2BYSpt6UYTz32xb2EWnnhTeVWxmwMf5bITgEeSH8g9FvCZnxzEKR3qTW%2FNHaNRq8PvwMBRfnLHV60%2FkEmMnkONPo5ZQDt3ZR1wY6rLrcwLXe%2FEU%2FNidbZHahLl7DyQ9HyjbgL2UMWoTGBlHsW6ue%2F3g03ouctC&X-Amz-Signature=9a22c53cc73e944a756ecd463258e98116895d3866332db959d69db43c559608&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
