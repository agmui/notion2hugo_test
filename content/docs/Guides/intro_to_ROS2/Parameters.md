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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EYYL5F%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEmvDeMgPoqoLRa6u%2FZc9lJhGza3HnVT5c2F812KROHwAiB1dY5bQULhQRn0mvGxx%2Fo089T0tB9vtbHOyEzbWa6%2BOyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMVbUZpeXYzmHCOjsXKtwDgRnMtrPldTrjUnAESHh1kU4yRD6wRtQWu3ApF3a2a11XsCExTnlIRAJt67KSlBGw7%2FIHQUCZMejNiJVPbwVwpAb5zEIpMr7XcjLc6Ya6EqKbuLNxLiBXWOPJGj31XGn%2FbZ8ZDScaKbnCckttGaxDaaAa09LCYKmDSpG7fUbabk9BofXyPRESi3lzzQ15BH51k2elbN7W9g7zPweDAuCRT9c8VG6zHCAguZlRHj9%2Bnjrhlezw%2BjPIO98ElZjg9wuI6x12xCTdhcyVJNeHz88543INi%2FbxbNORlAnOvrkGWAlA%2Fbrha1KTXBDs2FCRmf3POto%2BTEPwGqJo8TTUe84yYyC8rLjMj82Utz5SXuskqO938RyEOlcwg5N9uu3KSIp%2BU7uh%2BoeNtsURwTHwLbge%2BXFXfpD7LFGIxj%2FNjC7A8Pd5FoEfyeK6qpmTkIlAwbvTAYKsZ4EKnj%2BYY9pndq8J9PU2%2B9f29LGCVUiIHiKhYR7VnSFSwvjL%2BesbVkXe4VOVGJADcFFODaIsDAaQzHz3CJ6g89PO%2FFXlivX9e0opSYCiimVfvgzIaWlkSPCSmyKah4opuLZkvxggF%2BvK8r%2BW6KYSPnex8WMYm2j5N%2BYtJH%2FHVCVf3iSUsirI9UAwkoSWwQY6pgGw5mkPol2uJkYn%2B3bZ00PRgDnbOZVp7w60Lpm5g7QIHnbQX4BOp0IpxyzXr8iwjriDTAz8Gu5Qs6y%2FU%2F%2BVMBR%2BOfhTjY0P9T2KeO22oMINzN9Ik%2BU2PsIu97L6PuaFNkcUgBlRjoI2jNb%2BoLqcABpLsd11J3dNQcrJEJX%2FDPKZiffIn9iywB4XKmVQdLUR7q4UmcsmagqGQ%2F4sYfjHxztzgs9pWJon&X-Amz-Signature=9a8e66198c8bb3190b3cd26efe8ff2e665e9fb616afdfd6cd082605d209bd073&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
