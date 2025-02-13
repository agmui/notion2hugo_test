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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEEDUU7F%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL4HuYVcgj6HEq54Bo9vr3MYJ2SOvIXL%2Fat3HXNU3ytQIgelMvpptTTSVytjPy1sgReriZlJtjrYgZYk9U1hdx8OIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPkH1%2FcLPK1p6FddfSrcA0b%2BZb9o3b3n80pe7aN4zN98jysD%2Bk133fryH%2FCDA4oKQNxL3DWqo7rlSBwDpFYHb8tsfX5g1ODr8SGm15iKTvKIxziI1nAeSfNt9J%2FeHjvMAZECRFdU%2FgWJzaNkwtBCowB%2BTlbrDYCdM2LVQGdlUvwpz6%2FgkIaZz6vml1bV8tkj28lksFekHa5a9znGRAcyY5m%2Bmpp6fu6Y%2F%2FF4ufPzq5byTdDQS3e%2BckQitMc8B0HeL82T1%2FdgdKDKxFQxpm0GET1uBDhVbLubRXKOxcYYwU4HCVtrNUr%2BKOT0JmHTEECeBt5f7Jo1GdhN8t0GejH7ak433nQgpLvvfTp44yahYIRD%2FCKdLrmyFurQHyfSFGnVziYHQhOVSzm3seeI9Fml6gQrga8w8Y9qFV2LWtWDa9ef17N%2FtySRtKim7%2FeT0QQl62yk5srC6gc61jJh6fRgaXha9VmwqEJinrEIa8Hlcib3c6myIQ9dyYck%2FK2VcXjh6NR%2FCUfmkoTDoVnMK3d66RGZKR%2FWLiDNCgpXxs43x%2Bi1B7Ylsp6DRwQ1uOEOhic3tl9%2B5G1qLWeOkEtTBifJ5U4sPIQ%2FeCw2f8ksPreUkH2DGt8OU5HVII1JYIqTgVINA4%2F%2F1qwEbCxI4POLMNPeuL0GOqUBIE0p9Gunnw4c%2F7NdZN0gDNclKJzbfhkRrWdWnuftihVGkoBjh6vOn1RunW5tgB772F14cO1VT4Q6ycPpoWntoSO5mSwj1Pcbmve1PvO3z718Np%2FKuhI8yMV7gHX3OVBqgg6qQnYs01ia0NjPpLlAGDmt1xFG%2BkYTb9xtIaQXMfM%2BfTgu%2F6SPqVrgc570wntHmrndCrOmzUGFhUpsST3JURxcWOeJ&X-Amz-Signature=cdee40d15cbd856b7c6fa0b3f234c888e7ba4edc59f3f9efe1167558247a6841&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
