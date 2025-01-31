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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VILR5ABB%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsYAjImNt715uQ7Ex7WmPMD4ouTTQrDBlnXZ8WpjcE7AIgLcFeWFzezI4RK7j0sdqGsfECy9%2B7ORJMZnTzM%2B0uzbwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9YdTVTrlHPgEDusSrcA8LY0hJ6jPxS94NHBDhQ%2BJKtdaMwR3ckB6UV4%2BwY0dE04yqaelHGNO5xIQZvP%2BgNC5HN516fjzyHn14IXmzfnmAO9QKabum2Gh5svk8rfanigPjkIz0u8ac1pnUcz8nGXc516aOVAzSHSS35YxA6lwgcDYq8D2I5crV7q53CzFHM%2FEEyLvbFQS8698e%2Fu6FeEN093OBR6Hc%2FhLOTCIkI96ij%2BqyiZVmEiXwt9%2FFPm17SkO%2BfzQS2czT30ewzzc4sJSPs24vd%2Fp%2Bw9OCTduQLGDkKVi3MoOIrXjhb79AKNAN%2BZ2kg0G7trT%2FhS8RLohq4fM1S2Ur7zExtUCTaWMJYhUUgzF01zrHRaoFrxrHuN0YaQbq%2FhV80O3W6OViKVXnFkQ1L4M8gGwP67MtG3K2zFWEwBU7gHS3%2B9P4DEPm94lOGC9DRTHqR33sFzmr%2BTSgFfJ7lAzrzB7dJ5Hkm0OLuazvxWLGy0TS6cdH3v1qy9F2x7ubmAguumMPPN6eatArryeQOR1gm4VY8%2BnP60M6cDjp9YEzdJa85IBnZSylN6M21S75AgSmPqsvzRwCpRCV%2FnWqAau466f1EJfkyjIFyiEF7ZwqMGXrMxMproxg3XX7U8tEUJHDYrAYvtDYjMJLj8bwGOqUBpS%2FlC3vgXybfnt2inm13p6K%2BT7rv5dH%2Fh3zPsB%2FW%2Bodw5GTWFPiVBorZLcpjRznb9WUGvZtQQucPuiuWCm3mVCB0581EH5%2Bi2wybpL0Iv8a0CciXn5BfwvG%2B3pp8MoW%2Bos0bukMxQ5kpV9uOfCDJg%2FXQfuqNykH0%2BmhZ5GT9ecRdSGYYyR6QDkSGm1k3Shawj6%2FUnOADu%2Fu14xnnNdIDhdohp8CW&X-Amz-Signature=5547fdf846fc28f323836e27e7de913eb37f54cffbd67b846a2daabf093c764b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
