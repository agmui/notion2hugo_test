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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DHJDWUP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1dNJ3EC4ZeVMh4x59iFSUdswfXUH2trAWtqiPYoESAiEAllWfipKcxKmtIodBW%2FNCPQCMLhcGihrMhUKBwLYfop0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg%2B%2F5nzDtBk1ObrEircA%2FVElkP%2BUUQYsktVpOPhbQ2XJD5WywvDYAD297b2vL4kAaRUOlY49dgFLPdpVvPNbPNyXSGmAwOu0JdTLuisYO9fHEuZH4OScHux8ljwNr7xRo%2F0gfxcuRUZcWcmDydAXz1CQal8h0ue1HdarSOmoAuI2S3F%2FWHqBHeqs5fmWrVfm%2FO%2Ft7gKqAiTMLrAPJzAQy6fomLIs1rzMKS8597nQsc75b%2FEYe4muAKA8PkFbHw4w5J6QNqPLeQQG4kQ7T9AOQ%2BwxIzqvVj%2B5C6G9MTMc8%2FLbWoG64HL9vIqpN9EsXo116Nid5qVK%2BdtsqitN8SY%2F7ubcVb56%2FczYP8SE46TfImUUwPfw%2FmWKnJSKIpUv6ET6dX0J7Loa%2BSG7wvB2p0LgyRtBOrEwSXmx7t3F7zW30k%2B435slKzwNhc9MtXvXCpkAqe34lR44ctspuxCex59dSt2qzk76gYNiiCgdzIA7EGRkjUEh%2BfErUTV%2FaVff9IZkVCD53uP0pxaRUomylSZlsuWMolrd6loUr5CIam036%2BgsENfbYfBP6Xu9NtIkE974WgiPbJ4rU0pOYw4kGwVnaGOyOcHnHH1BD8kCHNbtk4sOvW7oSb%2FweJYQgN4NODxOEGCmJfaATusoNltMMLP5sEGOqUBp%2FqdWABdE0CE4tv4%2FQg%2B4o3%2Fp3Pf%2B9p%2Fcph%2B2Y%2BGUoasGHZDZR0zKn2ImysvZegwRKtRw3ZogfKyi5oza%2F%2F6jvwx7oGJHoQjJ%2BksL92SGpybaaAPYEmz2qV0kiuPBqTnXI%2BJSQ0CIby4dHf7gVVZ2TyPCEI2IEinHRVf1yIQYpmH0NGuGYUNGwwNuQL7PcNwnSYvaSRMiZkoydeb8JYUkZ5z5Tix&X-Amz-Signature=218a66a5445fa2def4f33323089f9a993c044bc5159ba9ec0e1a5bda153d25ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
