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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWGNB3J%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHrvHGiD77zcdJKOak0WIX05ksjTmUAK2RBH45slQMqEAiEA9g%2FKwC0XMR3JDAq3Z24XOitChhzn9%2BgZbGclmUP6ms4q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIItKa%2B%2FEN8LmuVlxSrcA50iW%2ButXmifKyygfQ2VS9wjh30vfL34tiumju4Px1TFZeoq%2Bnh81tz1xQLPTmVdQ3l2YABMZIkOJm8lvM3p3xsHWhQcNLk5Zxhry5XQA5MH1hsA5GW2KcG8MDOszhW2Qa%2FNH02KOGKdIbBBDIG645cVsttEfQrH3zjs%2B3Ub3iNLuUi%2BEXlQ9o30ikxDSD%2Fr0zXDNrDmgftG8RUmPBM3zDZ2lvML1fUpUc%2BK6vtgSQNGDZL2HNXkFYJ5gvKUf687nFBDGcA6c%2FXgG7i4DFCa%2FYf8rVFCzaTbsWAbpaqW%2BS%2FLF9MVMaH41rQR4UeZ4ivrRKcRrA3JJX9KqZgVuqcygWf88kbfxfJY7DcheyuORKAUkcpc1uCpbTFN%2FMRbFlBjgE4e6weFNkDvr9KpCwpMZHCUb0Kh8SdYHIwO803e19O58R6%2FMLtbAWBSLaFnajsh1hKHDSansjUteOnD2MiXW8QQYJLdLfnREY50448wIvWH7G%2Ffej4ATMv6eD4fp069rFdkMRLgi%2F6uVCczh2EDXt1GpfgBMdEasO6E09RrzqoYZ9GoQD1V4kHTXhjKUFJdtOa16DmiEmpCsdVQLz49eWdzAXxk8j6YKwPEEOjqT936SPDHz9j9i7YECMTRMLnYh8IGOqUBwD5z2E4XHGDSjpT1DcH5W0VHMyRLzgykTukI4Q78%2F%2BQZxqe57j1SClW%2Fnrk8G7BBmbz64O63OY1wEeO63xE8ZRg3qOQ9qBXTDRT1Xq87mA2lIatDhbcaMveU0iGMLMXFViUiqSzk%2FM98921SiXjk3RCHkAAyraFa3TBVwGSEUQoZlFjC9nGPkGMGsGIyuat35fnbyadzBsPqig2CA8VAzvBUJzgC&X-Amz-Signature=227b8098029a0465336fbe96ec2530a75764d02cfc9190983d363e6b8e9085d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
