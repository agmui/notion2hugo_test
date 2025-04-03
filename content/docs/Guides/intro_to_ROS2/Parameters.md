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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQQZ4TL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDn4emM%2FOkcVoCu6C1rCPE0%2BVEKd9%2FH9lEDt6uFyUunAiEA%2FpIBVd%2F7NG1e4hPDFv66%2FMEuerJI%2FRWHapOtuwilBWEqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb2iVkY7PAsBAZ3nyrcAxzPez7JZBJspVCh33jOFk1Sjk41qMlbUadVGcltbZE8uawGbalGzEVPtrvbzwjF2Iaw9DNdwtsgdh88QJ37SxdwhkYBfHhRpCXU3ohLtnfhaehNGHfxOhQZVt4i0vSSjLbyEbjTj0scEYmB6yqOrCyYrUFWqEvzNEEDELiOpGpsZByf1M69gPshubmgBvII0GTV7oiZV63KA%2FDnL2B9c%2Fp1cglPg8fjOBNXzAvFrRswf7xyTrYLYJqXNCm1%2Fx7wX13t6w6SdcgdxSXnmrCNdRxMfh%2FLeMsK6gdTQahpOAs1bsZhFRLRwajyB6VYJGfYwMhf7kHu63OqZF%2BsA80v1W7G4qrQWRp36jm5cQF14o%2BgPV%2FPrpeqi2SeNQ3%2BLpkvroVNzIDgYY6RuQMSNhxNPEI2J3JZbEtIsEesZYGbQg2jGLbhqnxvInmMOeSUrTx5yPjn9zzG3wc0SwtqAufrdceHKMi%2FoJxav4QH2puv3RrRZnTKzCkM%2FNx3MJ%2BCCEXe%2B2fpj7rc79GMhWGrrNf74JttYNyKPS72T9VDi3rUX1BTAJBiAJy5AgO89IqYa0P4fCNFXTJEHTBoliwlgLsRAvxyThFds26SrOjGSzFx9YF82AqTG5KKjlrxHzdyMNqwub8GOqUBIALiwfYEXMsPiEEjmfsinUDkp%2FbUSaWJqINlHzfkNo2cgQFEkEAFEzcNvD2xPEZ1nhRtnWRCnqvVtQP24DvvoccYx0CeFY5FRfdsO2eLlriaU5i9fMp%2Bxd5DtlmaaAPxck0FRGB%2BVodOK2YnlSgnpIljJq5MrEI2spr30o7j%2FDiNs8kYoHyBQZ8OfBsHdj0ENLlQRk%2BnjcnIK02TE%2FQAfgl8F3hN&X-Amz-Signature=d211adfba777133263001245f5c6373eb697da899d5084c10bc66bb3bf114798&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
