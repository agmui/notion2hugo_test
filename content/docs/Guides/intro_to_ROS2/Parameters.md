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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCUPR5YS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDwL8p%2FHf9MmjRfsDy4nyUuGdwgN%2FjTs3KokJghRL8AZwIgUdsPdfG7NajJTBu08%2FVvZnYN4oiPIYilLngvNNKyFb8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJOe71n67tpxjQ%2FQiSrcA2mEq%2F7%2FNM%2Bxbw8OCHfBbxCVR%2FDFfTvrk80at2CYrLdBvJA0KyRt56zkw9ZzO%2FE3r36AYkXbzZkZNBdda2DeuE9NGKS0bLfOtmasmsKAI%2B4xUxpGL%2FFSbgwaU0nAQegXTDIZoB4B2d9e6n19t5JbxqrR8xsJtl07AlBeoKp2zIP0tetKpAIlX1felzPHbWMHWep90sUeC50IsG7adlzBeriFFmsDXKqYWWf558zOBvLjDbIBdjbahJl5lrK69%2BjqFE%2BTU25jWncrY7QzwkzQznIW3xPKW%2BzFkkq7aLxfq%2B0W6IWghEyU0q95B5dpOQIuw2rym2ZPpjvLvu4hXXhnjC2zrRKs%2BFPAuzSuPpsYbFv2GcURbyzgAWnqAgPMDUSBOs0gAJjJBLv6%2FSwRsuavEyRPVN%2B%2F49L5dkBPYvEHd3gomTUC7Toj%2Bxh%2F7mlO2vc13V7%2BI8GWBKRgezq54FLuQEoaVKqOVAyIBXs6cpuEIvWkvKqsV7iKen08p9DlxSzeX1JetTGzlO%2BvPmCwfDpefEBe6RDs6%2BB6zO35fe8Tu3%2F2LkhIckyD9NvPAnd9UQKoLgtcuzOlLIcsHwY4c5TZ1%2FLqJU1nQQbmfHfooTW0Dxp6jvgTZ7WglcQ76%2FD2MNjaptIGOqUBcR7pHt%2Fe5Y7aqb2oLBy7vSznWkg3xSmDWwD1LJ0khEE1i2hKULgVGx29y2gMrg2bTjAhh7C7Tl4FpHJM4iV%2FYVQ707Iyjm%2FyZf%2Fyr3jfFhXDHnHiGeoim3V92ENTC%2FY%2FtGL7%2BdtLapUiSLoetq5POCISvocE0mc3AwpDt7qmgt39HJCDzNw3xxuj0h5SHyOhPNmL18eN%2F351dDUkSWtxeRtlL2dq&X-Amz-Signature=8bda2d79ee8c45492dbadd8aacd47c5118de59856bc604b975a1273e4a65984f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
