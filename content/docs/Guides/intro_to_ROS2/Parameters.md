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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WJ6ES57%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFMDS8sQ8Byc17o%2FN1qcHwGDllxEXa7Ox8Pjbg%2FdBeFoAiEAsZgMb0Z1u3IZxSzHkZLgRVocKHNOlyMcduVD9GsMNLsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHhTKsyL3In0UmneAyrcAxadSVGKyCYT1KraxsrsQKCL%2Fq%2FugZVL3M%2BZjquS6%2BoAwxfAGj9pM3CF9wZClf68%2FND8EeDkT8VA2fPM5Imbs3oydCIZL4po9k5kXbsvqERXlbx9mZwIKHippAVX%2BPGaWvhqr8RjcusJ0m5KVSu7QyQqJm8fokemXyMFejsuA3X6spdJa%2BXqKLjfQqUU3gG6KPHE%2B1TiK2NQ8hxV3%2FO0ARE3KRKmtZGYadNNVXdRlGA%2Fzxsgz8FWPsim%2F3NRGxlxVAF0ogu%2BUvx4BVHE%2FllcIjl0fdCOtQR5OUz0w13s%2FInxf504X4WAH2ZHpgixeVFIXDD95vkGRnOnsZVCit%2Fg%2B5KAHWPx9EOdge7viRrJsTcpUqxyFlJVsSS8ugFIq3Y9ODRHvCAdPG34t33fa49NqwwNyVCFT9lhGK58Yel%2FLN8DutL3vHhJgQl5buhmf1p5TT8xhCPuwxBlefsm3iOhhTUoO5CEBQ6vxvkMXHRktt3dvXhacQIhXvtRzamoW2Ubj3DNatEnIRGjDhA5PGNmJWI5Bxz97eRxVTNwk%2FS7ndhY%2FJAKnDaDKEPqHyKGw4SXWK257vjNOm3NTXso0Z0uHsNHip9KLDjdKyP3KAR52%2F2c7JG%2FPu32Lkj56auTMIuDsr4GOqUBvzkVzjnHHySYC2OCAveELOVdWGQx3bxMq79dHFTcQCNL7BRo0QR5VFSuypOAPTWwOgG866q9g6iATE%2FX1RCrowvmuLVA5SNz2f4m6ANGXSMstCW0Nn8XDBw3iqZzHAVQFPSBvVm2TW7zj%2FdA3%2FfnrdvTR%2FZg56uVq8R8v9jatXrTg1wCsO6E1QqNqdBbCqaEJwf0p88V54%2BQpCKip8G%2Fy7k4uZHi&X-Amz-Signature=0c1dea360f1ab5e9ccf62bdffd1ffd23760937672be0a159cbd7e47d686b5f31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
