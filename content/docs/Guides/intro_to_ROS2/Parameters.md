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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGEYZ67P%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD6TmUb2zZHriHsF05VhW79V1YwcCsli9w8VTVRGmnKxgIgbHm9s3mT6xxuVreG5lChrQX02VQvIfCv9Scl9Vs95k0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDwKyfokehwRpqITDSrcA1enKoDKY0s3f3SYueV4QHaifwNjQMYzCB17I21QfBBhtfNM85uVkYSNo9q%2Bz6vMroGYm8O%2F13bYRjACjW2nRGQIHD6ROVUugOFk5H2LZZ7RI132y%2FB8GfUzPXT%2Bgp1mBCHCSBviZIoQWemfGeI65rA8zaxxba952ewGzM1VwHzicAgVSiguXdUT2cOJ1fsQs113ajzT8yAr4sfKwE%2FXUpu04dtv7l8q7mnQJUJAvsyBhcAGFtA0hGwztKcrcuMvwEOIzH0nB4HVuXCT4H1EKzQ7035iZVOS2f4hgzEnVNs1u%2FfhqPWMgwIQidnYPPry3u9O%2B4L2lCH34S6PcJylbEWzGOYXLaUe3y5V7jGWytu%2B7HJRw5hIyB6AIHeH9NZnwT63YT6VNTRSE0%2FdMM0tKg3MYDF%2FEpSkBECTarzzClAtGrd0mzaICOHehpH3F09i7ku0fSFsAYNcQQJrIOH%2FBekarxDBmqkLriLN8CFMnUcbFUr%2FTNen0fon5fkTg3i0b32j73VoQBmRcEkPBWWq3QOBv4kpqrNbeBT5uKOpfNay6BA04eauDlMhip%2F4KFvDL6pUw5mOnOdlbbbzkrrGRUajRLyMa2ZLxiR5YLzo1kx54%2FjQJO6bRYQ3n57cMMGqzsEGOqUB9of8hx7FVTGUrr7ZqPeuFr6kQ5gLeTuskIbDahPbBye1wF96K%2BkY9IQ2eXHgiwBzemZMTHCBiGlTbadBPCxXyCWGf5sWAeUttgmOYFD10mwoO7Q1dGSRmjEeLRy4v0tKhc%2FK9RAodezS4FTxszelIplilVA2%2F2RlwtZaVzpMSefVNmSDeDPQnKsqgJs4LRVzb4olcA1O5iPl9ixNdtkbe91ywotB&X-Amz-Signature=e447657ef248933c69e3dc8ce9396f03961cf2bfcfd0468b9f97cc581c081f82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
