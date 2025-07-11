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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTWYIPU5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwV2NbyU7Z8fc%2Be7SukOFlKHKxzvIiE2mlKqmviPGkQIgHgDBaP3jL2Rj1fT9vEYtGjTbfXyxxmdc1y1Rs65pLx8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJTsuyQnUz03a8J3SrcA%2FOKFpqzkCjcqGoYBCGaYNKOFPxvMpgHEoomh7grl0AIeHAY5ovcRLV2eco3Y0gcQCeBQsrcBjzUfi6PZr%2BJ8rT%2Fcqt9eowmkf3khUE3v9jE3OoGmm%2BILNkw69cDHYMbl0RxkZmz8XVmJ0jkSnZKTq39lEQ11aXhTRDd82RLjJG8RbkW53uIR9to2%2FGwE61K3NEan6ErV8unJtL8te4%2F8tuk60LzrvfDjuoqauXfO%2Buj1Ptw22WHSj5gh8t9251GbTPeYp%2FFZbX9teikSepxN1Ww%2FPS%2FL07zKEWqsPOzGRYPVr7WIWbSGQQXmSbkkpe3FZn7Tg4oMR4L2EUb3ch89yIp%2BYrbYPva9FACXd5CLQeYJjoDtmXvUCIpiKpSc8%2FeaW4s56Osdrj0GHDgE4%2BicXbiZaE%2F5u%2FVNo8EXW0UopZW26eR%2FUvH7B6GWbIJpFDVuURTvWozesBFluU01VZ9CgbXOMrxUdFKLQJeda94EEbN8H%2Fq16lXgMRW9k2ciKSt87PIjGrgIJh8d4SWb3JHGubHPPM3HM0b%2FLcGWw1SWCBhAYDXyyedRvDl3%2Fb0XYtP0pfDUWVz%2BK2oWxHNHh6N37aYevjJQaRRxo5KBEi4D%2Frmye%2BGDl3re3JjnulxMLWpxMMGOqUBIx94eZg7u2q1tNz8pi3jUgS7tRMR0jwmmdiurbRUFIsMl84z59iTnH4AiKOC99Hc3YHyphNLcU0ol8gjropOzz0Pne9h9Z52o6L2O2n9Sof%2FZC5jDP40%2F%2FRMWvFFOwyS5KCwpri12PlQB94OmNtkzduozYluejFCA0ceJqSp51rELCMpYwefKoe%2FfW1j71qX4SVcZwiiqp9DwMkDEO%2Fl1%2F2QHTuy&X-Amz-Signature=51651ba59d849825d212c5e85b5fdd935c2ed98d39ac3010d4626705e88aa4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
