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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO2IIKRK%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS5D7b45tFrOYV%2Bh8C2AZc0%2BpOoh17uC1gUg%2F6XWuHngIgIDttUv2TvG6Mqu1MrWVGa4lyBLTv9J0Baupo3PZwtEEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLFAK7BHYwSOgDA2sCrcAzQ7NiuIaYpYeBws0EzzgrwHGBjsWrOqvYcmwe56%2FzM54j1JrdmxIu0Wd2VTqjhLtNZWVdYgK8HzrcPQk69CKvhBBdcO2IZp4CrU7JlqDfzwbOfJDwTbyIH%2F02ZgnP6LRcd%2BD%2FT45OSnya84pRSNBTF9UPpbRSCtwhwmO80aswOVhatK%2F1idKhsDEQXmYn2w3W4F1Q4nejup1bD1NfZEtT%2BptaIBRPiYjJTVyRObs2a8T6DIgmvQo%2FbtnLEz%2BNDp668SH5EY%2FN2ykjaOzEtv59z2YS%2B%2FiTE2BpMc2J83pqaM1ILFMW68vLRop%2FOSb4hcm0XYjERsnk6dW5%2FzCQrahSR0pzuP4MNoNFva493%2BL3A0t0rxHSGUgVU8HUXXTd%2F0KmdhRHZRSIqHCDMqTkjz7F4PdMh9stbL5umXtQ3Be7wfron85MoF7BdRm%2FuqNWbbPJnpSHD0%2B75KOm2iNP3D0%2Bpyix%2Bh%2BzTse%2B6A0W%2BaPuxQpxjkLEpr6H91%2FqGN%2FwAzRWaxIB%2BVKSOfApckuLGQezrTnW9IvyaqZtaqMoqviD%2BVRSnhBFb02O9mpmonb9QyRHcJWF1P8mhWPSWKlfxq1VQukuIV1h4gC06hd10HfqVhjjEPMbB4z7oh%2BFISMJaL58AGOqUBalAGoV1iyzFMnLiviDOFDBvZkRZki0Pnkc%2FV4t9EMAEf%2BADFoqiF%2FWPi886DC9ErF8cDuKA5UJhDZLm1IJgi7XBccqD5vRvQtpoyyXImpIP6GlfaogNKTTSFTGlumAeaZbDw0i5dh12XO9T92x1izeeSeioHv6x9Tb2i%2BtanWMvcsSAQmFTIFt0xbT8KLNm1IpBN8%2BoRAHQv4XdTnzbX9YvZZ7eJ&X-Amz-Signature=7dc714b947347599c7a4a10331371abc383233c3cb3bed721a72a48b112b3f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
