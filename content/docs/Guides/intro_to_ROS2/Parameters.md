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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSQEIC4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDjYlKdSuSGQ8wF5Di3hegyJLGJiILvldyZO8RFjauNIQIhAIdnzM2RW9PCcG6uKOQOQMLHVKy%2BfHvTu6mCuWY7JSdlKv8DCEYQABoMNjM3NDIzMTgzODA1IgyOS12miIGTUdq5r9oq3AM7iKwBLp8WkXtoHWM4r1AM1RguCf5MHJL0Yd4XUFlFGWGyTYXeipoimoFgkA7OvHwDibRhyBKkGobIUDkVTq8paAW64izk6eeFqQvGGgufI%2B98ZmD9WO4hmv1EQvhQEaZofASn1zscxtLkShWRdoYRITzEzw4BqiK282sc0p8tPPylsvRdmjMFcgKCm49gvfJzNKyDQdvac2SM1Zw6nVsjkCGCMyTux6DdBG82YUKBmIg1HrkgCPn%2BDYv0uHdmhiXipzdJ7kDY8zp0CFWMSf9SVRpaqq6h5Vwt%2BLKixvyFGAnxcgaiCB8%2FsL8LCKCCgkWI%2FVM63I0Pn24L3WHlQX%2B9JRv9l%2FfoUQiZYG6%2Fu%2BH02rhbEyrq65eVLgP2AJvZh25UdDMHVi9lVTsicM%2FZKMW%2B13Tp1xRDGCz2OB23lZcageUVkV1PijyDjhzsodvPSa59PlqszgqQQBZZte0WOf%2FeS4OqgVVkOZM9JbbB9t8besMXNabF3nBDTVl0jHJ%2F5kEKFsmM72d9TrSQFIMfx3sefQk5PeQDlB20QmSLMtxjL%2FA7VkPu0oDA43ikMeGKou938OI0WwycGP4mUo8vaZnVssX9OL9zd4TAbvy9Gf6pEzk9w4Xz9LHc5Gk7fTCv7%2B%2FCBjqkAQkZ7fJAdPdbdeowCIqFDx3bBqprrWLGecARD257fB%2FsgWwmveZu96Bevp1WxbI8JtyU92ZwgQm50pf7acc8MSpIvrCHX1WPBQsJWQDuEtS2vtS3IseCHdTOKanWac3qD3ZrBoX2j135D0X6WunoqcdO30Z8gyfbLs06shLAdEwmGy1cAisRKZOzVKn9lZfJcUmOz1wCXLxJ2Hf6R93hGBH%2FY%2Fns&X-Amz-Signature=db4ee8d2631cb13d309c3aea7429bdc35c60a591a0e5824de5be69c8b1cce143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
