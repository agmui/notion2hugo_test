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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSTCC46%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOMvLDnVlv0TEHDL%2Flo0M5q4466NpbSkJFppvaHLYgBAiALIf8cC2XN%2BRpCE40zGde75E3BsIdMOUQq0xG0De2lBSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOpOq%2B7zbSBPj7iiBKtwD9fadWXiIoo5Nb9mmf75CHF1QY5QuLLIdUP6Hut%2Byb%2BtzXJty8hDvJ044VQAeZy1d9B3wxgnS5PjPe8EgHZk59Eo9FsyZ93OUecoKXhwivL35YEnqF2Kf02xOjO5S4DplDQ6UH8RthCPKoMCOSvCekhZ3hUsY2vK9PuJlEJDZGTBqpPckQnAMxEM3TQ%2FbMbInX5bVrDm6F9xEzKLf3oDW0kYsy1AGJsRkA45IvkJB09FizaJrBXI9X8Q43gIfPLbfJaRgBgs1MeU1DydP371jPib8DvpNktrgvbHyCRnEaQ2MbPf5aj%2BiWKlJP46gMSAcmrzpuXgkXlkXcHqTza4i0%2Bhb1Uwy2lC4IP5UZ0hOuxL%2FK3%2FnJX4zIAehYL7hHKEYWcVcClTIl2%2FDzjPhQ3aUmpGg3dedI1LKHZDqAAT%2FPjdy4AU7wiDC%2FVSiY5ZuiEslZ%2BtduK23%2FqXpRZulIm341VAaaA2KWoTj%2B6jmQRKu%2BLpSm7F5%2BvW6KgEQhincjHDIeyArLYtOSqAfAAt%2BUVb3BuhXBab1vzgmdZ32qpiQe8Bml2D2bKiAtodlYMnRgB6fcHRC0cuAdVillGvFXpPy727W8YmEPjpqKeMLo20tl9KEg2o3g3OKjCqbycwwl6SBywY6pgFdVlI4abLf0DXNEUXlhbAMY2fECQs8YrzATf11m5AfbNTrWraSxJnI6o4CMVBC9LUKMuk7cKcX9cErmz4Hwa5xLKMpMdl1rRxtP7fC7tB9u0X4bsgrOAEZtv%2BSIWz5PhtlHnI5gMROnAgxkH33PFzwvxGTrHkhbyq50jD8DY9jW%2FQvvP8%2BaCCawniti3ONLJzz0cQ2b%2FVoxmWyEfEB2J9jn3LyHmtF&X-Amz-Signature=758ae968370f0ea8b2b6f5ed2231b81d220712b0f7f101b9b1e735a59f688cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
