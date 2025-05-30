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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q56YJJJY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUuLQGSyyC7J2RmKSwQGUIABwpYKpg4LvS1xbEPR5AoQIgUdh17rCFLaHqIe53gzUKwnUu39sPlWgxVBx1io%2BgIM0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiCvP0VFZN3cF%2BejSrcA%2BZLlxGPrG473rxXUoBESb6nD9flC5ci1EB6k1NuyKDWiXkPciXGJY57hkcD39p9ePg%2FXtmJ1otSbOPLlvBIoavE%2FFWyW1%2Fhke57lxmY0bezd%2FHI8cFsdod1RyQRcVimUXPXORbb08KOzfFLdNwxOPSaGAA9NINHFBSEwgMPxfjhbCKjrqdGdxkZaFG41E%2BoJbHCZ%2ForvswcGW2aG6BAUTDYZUfiNFsxpZRWHBQEb%2FgVpISCSpF5naFONPGZOPjjA05UAXhai1TnaR557fX3cssvPvNcFILGL4Is2Uwr%2Fr%2BKfVmGifIVSw1yy5e0Sx3Z6R9%2FiJBtLmi6qiH7P9c0PhGNFbfO4%2B6ej8nUvb8rsxCpvYcp9wv0LYOicqlf3WvlASDSjQphPTQS%2BBm0C9dIzoLV0IiJBfNvpnvO5%2FjOCNcrtoMwJn%2FZuMbPGGK7VpYvZnHFkJHLURICvoKV2%2FTWAnf%2BYdEi4w%2B2ioYN6Usubm7W7L3UwNuPn7jB4A5%2Fgwr2ZXYdHymG4F5Ro%2BLCEaBczjBueCaNNMHMq3b0aPLsLEY%2BcDUMeKcstc89laSE1R4UchWukK8pl0je0QA6iTrNCnxwOFuJzmhlypUVWe7YBbAh6tCyusHJGA3tuoKyMP7x5sEGOqUBkAhYIPY1GWnjHln7oHtgQ85sCFYabobNk0U%2BUgKfQ6OJy9ln8hYzwQrom6L7lwUNR1XkAEUc03Oy5zpfG3yX4G%2BZR3L9tg6omWIkig%2BPpuOvHHhT9ZSwqDw8nOQfiJgBKgoM5jDLT8N2W%2BfMa%2BPye9ypbGLuCCJzvxjhOfFMTleR6hOnmeuvB8G%2BJdiFPXGcF17i16Ai43SpnbUrKxjo8PXEpCc%2B&X-Amz-Signature=b94ed543e3e890e31b03559623a9ff47e17bf14121a24b332326f78c38b92f67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
