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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XLZJQPV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAywIiY5im6NTxgsSS7O4iQp%2FWAwFP055%2BmjwSqhXgEwIgSo01E5Au0Qrs2wxJQ%2FTINeV5J4zf2aWc1CBESOWhJh4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FIah7P7p%2BToeA8yCrcA4zP4JGGNfGEAl06lfgOMHVPVBZh8zes8FvhHj6Hh9qVWlk1JPO90VGLDdCuPugdpA8opuMRfWTOeoOOmI5oqThRvUT9QF2orx2gJj4lqLStKYE31KsU%2Fm9nl8QHc%2FSYGd4i2aPS2vSj%2FMan5owCwZdVkzIbScraE9KO49uPxB9s1Kyc%2FQFyjoMSS4ax1qCU3C5vHnjwIkLSkL1cWEvROxDS3w5oJBnyWnXVPUBwIc%2B3Bj5NGhcXEyn1z1omNX6a%2FuPadSZ0A9%2B5imBmGWFGPKhmg7HNsHoeBPLPUJ%2Ffh74BqPJoeV5d6LKUw00eXH1ClyEkPAdnMqf8Ye0SD7Ad7dECVExBn4UKQfVDNUJXDvI5l0YxXVU8fUtvtR7fJoMpHFPAxaRcuepNEYIQorBPElfKBmv9gLirlZZqPJ%2F9BBtw2nVbiSsIwhyN5%2Bz3wdutgqIFsRZP4OJGL1gSlo0vZyaU92YSTsNSzfV8Vmn10gpP%2BbYraCzaAE%2Fka%2BAk8ojiYfF%2BSaj7uNyuyYo%2BoAAHMzwpUHKHURDH7VEF7IgbAnskbZQYzlVKcOfe25KfcixCbfQoZxfupSgOWTfgQjlUWmYG4ZXO8WKDymMKFd8sAH2giBRELdbl9Qss%2BIWyMKbB1MIGOqUBnenpuQ4I05X%2FcrDswLIb2OQJJykf4z1FvRgxt%2FaQiuDhzahE0zzfrO83OL2y4wVAG7nCT37rg0BjBiKD2%2Bn1El6s0ISBWPOLMYBRML1WXvRj6JyghnqJkm0dxm4PPaRIXfI%2Bp61QwCtWBNsX634HzKIdlSEDgx2OUtCUFYWEZiIlIVXz9U5nJySPyVa4aXv%2FXwdNW%2FP0cbxy%2FDnealns0n8f7Rpg&X-Amz-Signature=ed3aa526c8935f05b6acaa112dda026f73f685586836a6ced5a3b87620b0a7a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
