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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BSOKNEO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCSU490eu5NT9SX%2BScqhroROw4%2FM2uObPQoA1VLkRu5CAIgEzFJG7m6vmakRAYqyBMXVh7C4EpkgpW1TxsJ%2FOkvq5gq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI%2F%2FTAtIQrpyHpRAoSrcA20QUHeduUbAoA%2FklBucadIlBl8uRIMDX5q%2BBdM%2FYdBn1DLIJ2qGH%2BICgvZIkhHgzTOkCQasGdVhSEDhORPqO9EHyFpHj%2FQgYUgsYX%2B%2B%2Bo6E1O6wsgRGd3x7INvxNDt%2BHe6bzSURBA6IBwZTMdr%2BdEOtNwWCYIHVMsyHEWR6fKk%2Fjf8I9SdeK%2BEXgnHBeLTZm8b9WcCsfcUuCOD3gFI5aks%2F7DDec0IISZIxx25WsaKU0WOb%2F1Zww2hX%2Bz0QefVcBCM58uV3PMdDw6hPnQHicRFmEe70igZE3%2FFN3crURWZpCY03CLdNQ%2BR0hHYaWTBHVYNFlwsFUUlTi0P9u0gtFEN15iJpaX0bVmTcBNi1Rb6lMlg9LvL1mLA%2FVCiQs7THj%2FGNt9j26IhODdHJXJ31nFB4eV%2BhmWMRRzAi8Eq9mTVT2O8WkgG0zKFlME0m2zoG5txTuQfeIb3j9QLbo6MAeNCjSKMexqt5VvGbX5Cz1MwEh7a5b2qPRW4hSVjQF4mx%2Bf9JYnrn9OTNNiuOFHhOHul%2BLLreUOX1cBCVvewQDM7oR%2BCLD4zMzRcH5FRLBIWjF85Qa%2FW%2BGE9pnsxPjWiEPpYD2q5Y6QMsurwvL0j9drs7wDVnJMmv6kNpQsu1MJHV1b8GOqUBlOmu8YWnMnfTbvBSk6KgRdTdWRM7F9LGXUYxCs6ZjAxYDFDAGuSB7CirAdL9yOLHOTTatqw6n4PzqTrfC4z9O8ZE9ATqiNeh7PsO0SKB%2Bum17CwwKQWvoD3bEthgN40tI1QDKcrs78Uteq2LEcE3MnxCqyvSy6PENlTlhvWlR2CsdeBrA%2F9gGujDbuInf5m93YUSwZH2PXKDpLZdWXeTk5Gk416Z&X-Amz-Signature=4f9bd4eeb6691ea0e2de698e33053706a8ea4a5b29fd1ab0b2c0579f57380a35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
