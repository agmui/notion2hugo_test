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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K2B7QAZ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEzPz5FGIuCAUq5ufSvloV2Bi7Sx7qjpH0Xg1PjO11TgAiEA5vTrzxw7uKNPCXjZz%2BP1mVMfnaxdeblr6Wow2%2FFXoZMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJHRtRS3Fptp167sPSrcAxlw9ZiBZD0OP0WYBWGK6IBQLZ%2FrpuQMaQ7HSSCgy498Rd3NJMKpT9oSi9DBzu%2BoSmpcX49amnuOnV%2FD7nXid3GufpXshmYyEceRK9MJpcA257gYTFgb%2FKz2bK%2BHs1qX1l3LUpNQmKFANsiXFOcUIdqzsTisMSOQIEiiyK4aX%2Fe5f8nf2xBmkiFrWf0U9dJvFdlIrf48HoTmrXYr6KcXMch9CjicqOxdKTcAEfAM8coeFcYAjWkk7dEME8aSQ3PNzBVqsZQN6%2FLLYOEP5xHMZos9tvKy%2Fvmpv1YBh8aJZk5LB7cDHpWchej%2BBz0JKkxF06EVd4WeKqfbvPN6LZBBIqI8iBfDCytSR86gP3pADgDXzcdTI7p8Rm8p%2BupU22syDmDcRA0txluzwitDc7mrOnrjA05UKVlrmoxNS8WuQty8quaIaYniaNC4VV%2BLy%2B6hrcDFstb906X%2B4vuCYUy5gefjdJNTlxuORfOH%2BJVmnDHVPccueuM6OZbRc7ZxgDE8eORsTMk%2Bcn7MrBu7GmALs6IN8qIYYFAJD74a2bZeu0NBlLKQ6Hb783hQldXj%2B4WSGLUIPVmJhuzbPEYQus5%2FwOOWBhPIn5G5O6H5Xdg%2FNtmCR9OGG6ru38XaS41zMPa5q8cGOqUBh6wp%2Bs0jaewu%2BMFndkGaDxz4wm3fCvaKBM%2B4m6eXtecIJEHrm0c%2B0KOzTgSlI77tgCXZcJ%2Bp48B%2BrROsD7EIaUOwaSxIonyHndXPBlcL0W5tUtAqWv17Km576F0XuugsTFXdZgUa88iAmlZXiC1qz0I9N7Ls86MmFwn%2FA9yJzvfSqFtfoORXAfXA9UEPbXqRpfzwvOOH0EyHDjauUe%2F3RywS3n%2Fd&X-Amz-Signature=32b6b6424cc91dcb64f81684c364846e2e8f4fec2afbac0f792383d925c3d977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
