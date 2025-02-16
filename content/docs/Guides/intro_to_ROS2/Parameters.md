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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5A5AFMD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFKIwZlpnGvCbsIu403S6nw5uv5oHaG1fgEFDt6ld2XAAiEAykdTGfm4A3mgLcDVGZBydGvXYcSWxyIEOcLdJ6su93Iq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDMFtJMpv4ZT%2BoAXeCrcA7ewj9JoIvb1Nn9p1w9QQSSgzOS7%2FGnhNDeQJeAcmIsj4GLFtgvfu%2FiQrd9qEzIy10kRqTqaycyYUP2QKlSauoU%2BQ8JT3cXuccRtYi03y4CXe1A1TTOfERAI%2B5YJ1nONpTLPXHDVKF4ptYB%2ByKetBFPw9%2BG4vEaCeDvQzKiEYwrZlUtIYSm1rIhFujx%2FClaRS1jlWlOJFmJnxsB046KZQ8zGigBFxIYiUdTzTRIgs3uwKUGJYLrn4IjIV19HaNhsCiEiQssiccffUHuCyqq%2F4FcTBWYQC%2FwNFp7kvudvGr3ocPu5Vhg7J9LCvoVTSSKlcfpGBvHzbDmA1rJnCpm3mpEB2pmek6cEhmoXa1ag4%2BdRal80HrhTXP3BXVYbvwfP0sVGzWivQWvRBCugjOZClCIP2RTmNh9VSGD7WleMMxB40YKJpsPq8T41pxyBUFumC89FUfAffnOwQvvkiDoNVcMpkA7p8LmLLGlWR%2BNohjGNmLeN6o5yRCHG2MEDFZbVcdIy4IVOaygQSlLj4MltLGeBQXHs7d%2BmTCw73LjlgmivAvECxBFjv2VIajyRIs%2FoUPSSLXYWApCRz%2F8Sxi%2FhRYNPAH%2Bio8TCvaVYu9dEsfKZD3JKJEBH5qrKBSfhMO%2Bfx70GOqUBRk7j3u6s46Dp9yUs%2BBhSHD9VNCMuzKhdeN%2FUX9Fccl%2F3Kkcoz6g3WiqrxPj2f5tb5jPVAEs821TmPcCxINqGAG47NOEzAOq5ZS4LtJmcPPrMayr7pEP%2FwGY0CuJrSzMatH9L9ftzCYHVr61o415p9bVluMR5Bq0pi57u2GS%2F5SR3E44X%2FtiI6bC3avFtV9Y1wf9kehlW%2F%2F0ecBAXXlmtVKbYpkc3&X-Amz-Signature=8c10405ea0d4a124c9616661f4e9e70f23b3b119849104585d48211105d2c78f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
