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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4EUQJA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T210654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsD%2FClN9RKGL6N%2FzqLbzi8QchXYvHUseq3Yfn02JJF%2FAiBKx7zx%2FaM2Vsu0aUwfgYQmv4%2BLaEndL8CLOONQ%2FBtEBSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS39dbuIBxbG8fAKcKtwDj0gWxhwU3q67fARyLNCVn2ZXBbqPj0c8dePenHhlzar8VWefCSPBieF%2F7GGiGJw5%2FeAfyDYymAXsW9R%2F%2BEWRw2ZsDXCXItYnWG55XkRoLBoUf9oZBsOTdyE1UPjjsq%2BPtAAT%2F8Gc%2BJQO8QaVg55tqIHldocYPMK6j8tcKVIWRdu6LFfS%2FpQIS5oW0QXjGj5ikcEpCVjCgm7BChVDsp8vxN%2F59XhMH8szDwxuKUg3eIDkisP5phR9xQl9w9RgndinMgNwDd5NJcathyPt%2BTlSSlVrSzpgdTMRhY0bq6Y0IiEAbi62cq5BvxrTg%2BC50CuQmQuR%2Fv%2FqamHpRHhrFIc72vXzL%2FMAZdA%2BBnMLRwP0Dymz3wN8lXgjxs1w1W99HFtgkgUqqvW5T1ElpsXvfRSFHZO2fsdQ0XR5t07dUBVYcBbWMkgkV1kPUxUlPvlpx2xxdumlqlzRYpqKOoNUwVX8j7XPndutQcx2NAQrsav7FXn8xRbiGPbtTxsnUCMAjh2Zr3L%2FyECO3NVCToOXabIj0GcGAtb6KrEF1ARiMZlLCdTI%2B97kkbHSVrY7EdaT2zOOnW2eMoF0%2FlQU%2BObbFLGl1f9qoyg5zm7rI7sHWaRLYozyZ6Q2qc7zKqxPM2Awyo20vQY6pgF0gs4L2K8g764%2Biik8B6hzHDNW5bK%2FmLAve43mHiJc%2FT6TFGnlZrYiHVnzHFIUohBp9ZoKlUB1e7YJ4YLrMuWS4I7X1JEjWld36Lptv9nnhjaFSA%2Bs86VMXJgi%2Bv0KQEyD5SWrKDJI2OyX%2FzzFXJhB2PqrMEO21EF7HR4BC8igFiGHb8%2F4yRPSmXTWyPaHLhLVmVdVI3GM7Bo7Prs%2BOlHhQKjt5kXp&X-Amz-Signature=faa6416402deb299d64036708e5792f15c8ad2b873313e0e020dad91c979d9da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
