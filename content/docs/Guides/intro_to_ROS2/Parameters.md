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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGO2WZGQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaOlxqWCwLX%2FEnklMtwwDA2RNcepELL2mAUEnQ0xbA9wIgfqTF8IPfzKQzWHXLTU2%2BG1uGs4vGoBEoaIPefCDXM5YqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByZrpXTO317pxbQFircA85%2BRtJ2hbSXUvzQZrFTBUOU4tPcJ8%2Bq%2FtLY6ho0JvLIm1cJQmBlSoIT2B%2FBd4l%2BDTZAoCYZEVcfUwZwXq8KwEaSH2TsH2sQjSuM8%2F3T63MjYU3SxToXAnD9srDJv8RWX3%2BiH1v0HJXD92RVqC4%2BxyMJkPSpdFd2uERU0sl6hyn9aEcPfKeqKonfiGt79AjbhyfsBEhp2rJA50Airi1obfVJjWrKFySz0RTFMY9GPudV0am%2BuzGlw5prnpn7a%2FNv6TB3FBVfn8sB92i42nmyPoHsmssFA2IG5cB0whHayQssWoRvrrAyoJAZJWMWTZJr160JptzEP9qwAWcYCvGxAT%2BBaOJL4O8hOchj13OTBF7X%2FK0eSc%2FMaPRusgr74FuAEX24yGW7dBeNb2tzFG0E2u2JRehpiBy4H4swD5oFg75iC3gXy8IHE5dqPQrB8asLKY3OxvDGG%2B3e4QCOSZNIBM6WDVEYdRQzLRQZUmOAubdcRsDzbAGd%2FHWT2yHG0pR7iJqCAoGs2TEDHzxWN6lGR1bNjJi3TsCbRzyeFQP3%2BY3idN%2FdgEUHApcoSpi4GO2dLlipQvYdlVrNw8d%2FOGAVdKWpQAz0bsYakFgp4JfHHw5jt6L3fkreY7EwQnolMNbJn74GOqUBnofk%2BHvwYTiOznsv%2Fo01848uHlnvMr54d7Avu%2BbYvq7s6HQrVyBBniJL%2B1qHTrJnG7OFlGw1jMxx%2Fl8WoKsd1pqUZGqFZ2LIye4zGY3z8wcrQE4wky60wIUFIBYvZp%2FkGfA%2BSuVt5OcP6Xh6QW1kRNtciZi%2B8UjXSCag%2Bbma09DM%2B7LL3iBfIo3IAWuKN1NVoySARFTrt3XZv%2BibiQK%2FlqkLRvbZ&X-Amz-Signature=58993202fb60d9abe8c86beff624b445022f412a52d3f2fbaff7189ceb3aa577&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
