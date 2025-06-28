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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAXG374S%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJOfts1v5D6v9EXPEXEETXn125yVzwDFKcSgM%2FHGgG3AiEApu0qRNXwYTTCfQB9i16A%2BEeLXYnKRBIGMhPelmR5zx4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAz29zbtCBswiN1d3SrcAwqBSJUUlOdYPetqPu7K%2B4oz%2FkJ2e%2FchDvgwH0IP1563hGDX4XnGhYqKPbJfGYm2YaLGH4eMUruAT7zu8EsgwiuCEs71lEb25tbq83O7q481wDipQe3pyMPC1zfoO7QedLeBDwa9vm6FBGgUGMRpc5x65ebY7CnjQQgRPlCSnv1P9UmWCwKVXh0gtmsXcahrVHKGBiMK1b8HbmGgMOww9p%2BYU6xe954%2FeP3nI9IculjlsO2bQa77P%2FGHpJC%2FtoA0M41Xdgy7biy71e0NsHmiTE6avALdCFoNSCT89iKbMLZL7thD1DRdVDSSLvUvno0C87kz7YKg6im2D%2FR20NlXoJdu3kp6UQ9gw7vMwGF5aywsU8rGacDxemcX6GzUfqj5zpbCi9FqWtSXJyRRn2Sc4A3EgVegJwHEdBdumfSb1dAjdmB0ItGUmTRBHUbyl1qORWM%2FQjA3EYl%2FsQd%2FRZMulVcg%2B4yOs4wKwkBJa0XUVKkzBP85WPcasociHC0p41YQQ8oYf0%2BUp%2FVMsUhFlmCpEm426wO5cHJb%2BLJJNWxaBFXWW0NAXrE7Qx6YavhfnlxKOIAshsxz5YHNlMeJWcw3rSUPI49tke8AWLHDx5e6THmvOQUNYB1Il6e9jJ99MMWo%2FcIGOqUBihMTV4LrOUPLRH46B0%2Fm%2FsOP%2B2CXGDUuXuuF8SLmwOdj%2B5xWstmht%2BdprNmE2cTQxaDihYUlgDDq0E%2BImp2KQQzcxPAir2mF%2BlbiWadKjzIcyoAYrlV2zk42B5gLC5rE97CF0PllMXG9X4z0fjsYmm%2B3B4AsZpkvlMWjA%2BxVGlp%2FgPY0DGUhjmNX7LKzM43s0PeYd3ev07d3kAo7WKUys90VGAgr&X-Amz-Signature=e2eefc9f5a3ac34883f623f48dec25e80ac7b1268aedc3cc3283d15b9993f553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
