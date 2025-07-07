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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTG5GFR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAXF%2BBq4ybkUm5chi69FusVT7d1pjRiRnbUsBDqZM2l7AiEAimWkKblj4PKMGY55hWroedigM%2FRAZzZiPkt0o6izZuMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLeG%2FGzCw7ON8cy6pyrcAwYsxrLg5%2FJ5t%2B%2BAaC%2FZy9oute9%2FCfzpSYf10%2BT%2F%2B0JCqBFshm5QZ9knqQzj5CZOztXuAuj9DQykdzYmRL9Qlg%2FF20GmUcK5A8tt7667kYIqe5LBzR45CtBerUxNIZCVLqdfNauppOhxDtjCrAFN08aGI9DSSPoQTvHWB20OAc8e01DbgAv9rGxx3LJnkIvB0%2FW9hPVjo48%2BpZ%2Fj2GpDuMyxKnzNdNQS94MpaExBX2xx3q3YnNH37ja38XSzBi2T6ooHq1C%2FzAefWiHDLQ1JZHuXtCVl2%2B0Zw3ppm8F2YwxxmEvf%2BRxN1Y5Iek1sXahzfrcVcaCmpY3vGlzMV6Mx59W6TzJDWF4Pvlk6dJHo%2FTLbNaHpQEfTiif0SrlJB6QTwyxHkfUwkYw22ZOUfsqqgUcTje469juhpZKMvmkOKH5yPUKdEHgsBw4YDhAEhInA1HKBnAd38T8Nff3H%2FdPAyNaq8SLut%2BthP63hFgcjERfpVHoIWOqLf%2FZC%2BTISYLXDVuT25ZTFiZmvpXI4dA2S2Zly%2BsCstiDC6xU3dtQkqRCQB%2BCS3kBBIvPNnQRk25ohPr8fqhhLS%2BiBvTm45z0LU2LWJOC4%2FXpTsKqvAs0mMag8iZ4NkLii4C%2BT%2Fu8VMJCWsMMGOqUBrwvu1xLMKVsIvYV%2BJeckKjCllLeqfMfuai4X%2BTEK%2Frt5Ew9qmnwme7C6K9oOsaWsxJ0ThQvZShJTcy7iIUqwwavnr%2Fa2CbvnpcpZ5X1OcvWO4wzObhiFcAdcGppyubrZk4soLHco%2FU8sLO3LE%2B7DiQMp0I6NGrtcCgcdAuBc2e6Ooq967OIHsVF4M2AKUV9KYxi5HE6d7igSDx91RD78tYPXvk3j&X-Amz-Signature=70d4c4db6b39e93c4cb9a2aad6cc9ef4c35ff4f3c2d741b12fa53069c0cdaacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
