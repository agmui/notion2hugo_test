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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTHIKTL%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDnE62hNs0zOly%2Fo0CiBLeD%2FBGnN%2BUC8eB%2FEu29k%2B%2BckAiAzO76pYQEWI1960Y%2FUJONYJYFQu9JRQNj6n4p7vjrchCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMa5vV1%2FZXXAUDZogKtwDuuATo6qClfNqCFT2ZeED0IJT%2FW%2Ffl%2BDvJPUoy8dS2iI68PpUrLaVd0ONqdp95FoASgbdbmAyA%2FUTf%2FP0PJNgPZOQKul3kLs5ENUiYFnfFvtOT89KLawNdklbe7oXaHAl8%2ByQL4ygpYJe2JcO1PsZOXGhE819d%2FXbg8bMJmh6DB0aZ1t0QPKo9IvpwxgT%2B7ynyvwC6GiMNKSgTlleal9uVRdpvqt0v5Qy%2Fi3WULFBNMbw%2FMZGpPR7Bs%2FKAS%2FWoKa8DiMpxvKA2zDfzQbukugbdxtXShvwWJ%2FeZSdQHI6l22shn1y5mAZO%2BM8ElC0psEa2SJs5HI6h1xX8Rujb2IJ6Q28pL3u3ORZypMorAPG6GJ5pzOamkr3Ch9%2FiOCPKpTVq4nwXwjhVrkr4mAvfJ2yPVliONPSv04LWtMFJyVoc2tq84DTINo7p49npuvtnARICa8G4n8NEIpBI60bnXx19%2FaoiJ5%2BZnFw%2F3RhROm3SBrMwZZWu7Aivr8DLHTjjytwF2AClsN61hqkh%2B40sdtnfS9lmAd3duEgOD82aqLvjq6dNEF%2FG6vqI288c48frONp3xVsIRjQ6ZhuEWU0fRLuzOjfqaM4k%2BH1TwZUaEcaXz%2FvJtPaZvvVjMrkY0Pgws5bIwQY6pgG3apkiY8qJFmKzCUK5joCVP0jUkbCiY5%2FVhHi3HbSZ2JydV2JIdxuhiXT3V49ZgCMZoStKEHW0LZoMGl2wMZz%2FlkCIyISrM6KPkMAAMd78Et4NcY%2B1Y7J0wo0T%2FPWoZQdiPZLxR2WXDp2QwVdDROdxH9ZtL7mMwnJtZnOys62ZsKwIEu5teYC6K3RZjX70nieImG%2FE5ulFgxleg9KOTbE%2FVnWWFSS0&X-Amz-Signature=1e08f2727a3a6b7878f90556e7147bf92d4abf0f1f7672266d215cdf889c02c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
