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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F6HEMX6%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCDvYpVnz4S%2Fyq2jglxgrM9egrNi3VS%2F1l%2FkqrQe4w23QIhAP8Zd6KT73MCnGyVyaWr%2BKamJLWh%2FmstIKnflGOWypM3KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZYoN71h1hvC0wovkq3ANo%2B5Gd9Pj%2BXt7toDmMAgtLyweNBrMs10St3oTx55sO2av1ttKTFgka9z1IF6eaNEGJI%2Bs94xKF9eh%2BOE7Ot85n85QjwbysFRasMcTdbAkZOv1iRWfoe%2BEMl4yiauqvjIIFxv2dX6LT5kI3E9q%2B3u5SnHv5zpG%2Bvhot9KKotMTnANUjGtZnM6w%2FsR3zAvNKRaZeVeVPB3Y0loEtYeB4kOHT6ytIc4M5iy78sDPCcXYhnmfToaM6e8vkOLrWyfHuAgyz0U6lsbmXZZYJsh%2F0JBoA7sQDeg0n3fTVdc780n6QYT0KIM3mS81Qw9hnQu%2BJW9QTkAH01Gbw9P6iBrp6V%2BGYjFHa2Fd0NwxSL5uV%2B5JCSmHoWDvDcXGwZtXPuq1qF4GVPiPSfJtTBPtBsGFWRTI9Qmwn05aVwxNPt9S3QHMBuOKBqxF4ZOQMPxlK2K8O%2BKfGRST9xdDLidanOsPJ78A%2B%2BCy%2BK53yauJwf5e2v09OzUTRbGWF4oKLGbmCwNfoHuwf58BfQ4BhOpd19zGlysEHfz%2F%2F0E4TnKqGrVQ2queLQ658ksYLoOmUfa47YwwJ4SQL7obxRvx70R1f3IzjUlsnPk26w%2FDUa0mLoFx9VweE6127TKFLVu%2F8Bp4a4TCQ4%2F2%2BBjqkAQCjGLDswhV%2B9XB8141Bn0Z2YE19kquGHWZ7sRQpmgbplBxmy0A5VcgWq8ua7Mvz33qMi56%2BqtZpk%2FIVL201lkHRncfozTmRrZm0u8lzQrM%2Fgdpz7wx59xh31iq8KFuS%2FijefTZ6El6SE749w2GmalawC%2FN%2BTIJRvM3DNQYIzAELloI%2Bn7eRTLZ6SKEwY6vDF7lPjlRPF%2FV1FRD5jyoneRG5VNdf&X-Amz-Signature=ef05c9e8a1f0d293e1ab9bde0aa994296256a6ecc71f23ca856fb7241112770d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
