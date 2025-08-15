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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J33MFFF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD3mPfPDIGIL62aoq4dxIOxmnCDJHzLUZBlCeGWIW8qsQIgD49nQdowKgtL6YZx3u9bQvY1WlUgimYSWZaZ6H0sIFgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNN7gLRcr5XWzDgrtSrcAzzdIGw%2F2TYQ1zekNMturJF1DBTGtdU2ymVTPFLV1E0dnE1bJR9C0MK5e3iFnZvFBQf2py5UrvIWPr85tN5gmvIxRa4OwVeo2DPiL3v98mPuFLsWB%2FYRWmBDL55L7o8neOCnCa9AA6EFM8XX3eLfEv6pKy3ZwjMWJrXWUTQKh%2B%2F1QMjg%2FE8F%2Bg9ASnMA%2BXM9gXPyHPM9po%2BmuA3qV%2F26SYdNTGPEPpDq%2BHOZjAlhCq7tq3JfjTlJmbAyuGyaswC2yy5mZ6F5FyWDZkpDZOcYJAeU9TmnW1R2NR1F0NU8SGQGJPDbkhnv5O3R3qedLPcLuj2NHipcLSmNlo3mCBEoB8Wr7h5Ysc0A6LUytLA2xwXqVs8M6IDPbD8%2BzjqxAQNxCxuI3jQfdOU2STBcwAc3OdbZEsA8guAtP4GsyZR8QgG6SHeHoNy5%2FntHlTGKW7hbDa2JLzRyur7nMBr0bRvNwG3ew%2BcA%2BmgMHRgaKXpbpSCWjle3tdFyJyRacSOKzHe2wIdB1aGhC5TdIl%2FuGqs9L129NKC3z81bClMimPWpQOPNmev1gUtBWivDMPTAdSWAuqFZ91C0tqGdSyvKLmlN%2FISUt4eozD%2BEpcLMI03E01fqfDZdWgIOyjT8%2F%2FprMJLY%2FsQGOqUBIo66l1jQocmzq0vL9OXcvOq0CAXunMHN%2B6L1iXdX7mJhLYV%2FP1obXc3TjV1wHUSF11d812zMyHUpox0MbluaPHuN%2FyqQaBWwvZBiYUH4XidIQ0y00YcXPvwg93HXbpzIZRMnKEddutLskPwaIH9Mlb6mWEUOpbZs2Yi5BzJtlFd6CReHclbyRMavyu8cdTuilo0EZjHFVSU%2FmYurFnYCAKRIIprr&X-Amz-Signature=a45bc31accdd900624dd37fe1560b611a2cd0dc74b25e02c43e87f7d3efd6633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
