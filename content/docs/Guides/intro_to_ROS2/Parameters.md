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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHBR2S2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCoAZIxFCd6hB0c6JnM%2FPCrW9kR%2BgFmELN0a4OEbXU%2FAgIgUaX6nLQburswDZzQIE4GcvcNqnsXLg%2FbeM1O06JgIgMq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNB%2BCsKyc0TM3mNnMyrcAyAPs8ClksunDcjSqGr4ada7QXCIRyxXD8qhYyFxf7lRX3%2BW7sDWhDFRTWflcOsaKbqxOK7GFtld%2FRD4F7rMJO3J3sqo57BXQiIfRGJArUBb7mddjzTqeO8EnBqyejgiydbsVuKTPZlD%2FR%2Fp%2BP4sFzPB8G5UAJ4jNVjI3y0IlErC24fiXoYBaKsQpdvHAJjQWFsjfgKUWXnTFbCBF5Z01Bacd7HaFVyyEVMISHYomxqdmI%2F0WQZstG58zNzPZvV9XyZYmwCxh9TC8sJzl4HlVVC18oQ%2B5Br%2FD3o7ByHzNUuwkCVPHcXBH%2F1gvvu%2Ftlz3mru5TW91sZO711aMfZsJ2633a1td%2FYdj45boYVErAfAxUiJeKF5O99c7UoDfmdR1%2FClFDWlEfaLND%2FPgjWe9jzzEF73IwgNhVN7UXbo2ARbikQ9oIIidcTC6M2R0xd913b%2F%2BAS0I33gqiEW7cI3fHMb%2FzHFs4LCeO%2FTEfIoxznyH1g5XI%2B0SEgCvXx5O18fSdOQV6qV0VqiJcvBcssSlcgxxFEBNhKaMR0%2FdUQmJpKu4WNNqd1WhidaCLNqRxB4T2D1aLDRnS9K8VCicn8seLC23t%2FoEtj8cBvPhTw0B31%2B3OXqTa%2FLOLXjJxWj2MOGuvcIGOqUBf4r6GOtcFz9fa%2FJ8%2FYNDAK1M6MEnnm3NCnnvCWB9G2RB8oa%2Bhfs7xa%2Bex9X9ZyNOjlLwj79CMax96ZHMTD1JArHqCe%2FRJ5rtxVu2P%2BArODkd9hOUHa9cpkV8LoAjWoFy2Yx64LHiGvgqDzl0DvLWK8kG8Z3a%2FqeHE%2F1zE4vj7rXQ5q5MxvLk3vdJPlKZC%2B9osVlJhtAmjxlfEf8auk69EeFNYb8A&X-Amz-Signature=0aab6aa3ba27dd7577b3ef86c6e7bbca27dc49fd1853d0eb171966beb67e5ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
