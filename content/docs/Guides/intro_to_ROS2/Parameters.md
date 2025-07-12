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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWL6NE5%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKQy1a729ups%2BPCAtvzFMZmY0qHr3Z%2BvaXjadKfbDUxQIgGjFdcPz8soV49E48lwZD6OS1SgkQTxVbHejJ%2Bv2D1ZQqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE1JlnPSTGN3y4N7yrcA%2FHKWjaXP5eGobHWRVIpUd9tySMclEmE3P0NXBng1VImuUj69p%2FJ%2FPVFlGBmveYncgvWLVWfBrZasCSS9xxYVa7Xw%2FmQmwqPWNGpyRbnq4F8PRNeLoJZZ63VbiqO8P%2FBHR2nOg1XPP0O8f%2BFF4neN9tktniOvN6AwDSBNU9bVoayaSkngpJXVLtHglRqJoMTyrUR7kBQUJvwNFLd1axgZomol5b6sYK5oSihoLUleSYnh6hx3sBSwotK6pThCl56jF0hkJZJL3LUzsD5gkEsd1OmJdA1ux%2BkWt42k85ftva0TU6l665py15DKbnh0R7OKK84iTUnjgVjjhuUMtA6qfUTrrcavkp%2BBobcwJKtx6DJzOU7oZ9A6bjqo2MX9wGLus8zxdamAxt30MzVJlCAtIFesJInaDsULBCYHwon1mUJE6zBq26euiQPWuvLounPnojGOnktrKy%2BAaa1JVmNMmHQK4i2rxCKnpfbcSzfx7o1bPdtRLr26J23wY7jW%2B2zU70CxUAwQoRhQRmoXEnH2V6bqh11DT4SBYIXi19%2BLfwFzr%2FMSWzOGPm%2BwJQ27jt5bHsyB0pKCjT6CFVF4BG6W0uZTpyCFQ0PWiFmTh4O3uQzs4u5xxdP6rWJKTN0MOH8yMMGOqUByzLNNKrnH9r4vaWo7ZZzaHs5P3m4dcxK4JufQO1J%2FcsbXaT5q32ZN6bHZtegMWGkO6sNTpSbj7%2B8vQ8o2KPI5wbC84lYwcDqqVl%2BFzWljUB4%2Bemwsii0Frelu9tBMGJfxDKwrf28t6h6d4RxqBP524HvhEt6OpvsLyHmu8jk9bzw4wdhuRto2tEgSd2k0FGR2RzQtvn6%2FR4gcDx33npwicA0kMIE&X-Amz-Signature=0e9e9f78fa0fb90c2457a16977e1cc84218740cf9b6c2769ea477c399a4a9071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
