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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLQK7QHC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDQJuOekQwDDBFoqVqOIUYCWmZhJcncrGiN7P9CpSAfcgIhAKv76Kd5gHlGlG%2FJ%2FUnjJjXHBS3CS02UR%2BFQgzADxmEIKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxSxTL2GD2ekZhAe8q3ANV3cPtuyiClCAlg9WTbtQuvYEQnRZFN66F0E6493rSdHLTrQp6GQmV4c4H%2FTpnIsel9L5avZQhpPvHGmeQ7b9I2Lf1kb4%2BtJcgOZuinLYcLmt6B9dvCVizm3Zhn6BDJKGhvw08U8F2lJ9H7%2B5d43Q%2FlV6D%2FVf%2B1uZ2%2F80rwOEQfY5Ss1k%2BL5y25uw6Y%2Bq3hbOb3lgiHDzdnQq18AvZY8102XerVa%2BdAWv94X%2BvJ6%2BwdRR9VhfBT4fLcjDASFQvyftZ9pc%2F3oWZHdx8yp6npr5kZE0cX7Sf23rrNQ9Dyevdc7sEiaYQUWxWy9j0bVOvrsLgmWSqHPcEWLDu0MkNMiHsEDKXPtc36%2Fb4FW1Lb2xxgWKibmcoSRwuoTX%2Bhvq2keyN9ZvNiMSXcIfGlR%2FTHd7m5YnCeOnw731lVxNQDJZYpWNGt%2BIV09vA2mWev1orThA1w%2BaJ65WtbgKhA4T6%2FZMfYLGgw9TXQapvowtGXwA7rSK9WKwJFrHJyIxdoxEpnLnW1LJp6eZwqSoiTs9kJ96H0Zptwl%2BysIQdilUB2TvME8kAL3ZIzbWGVHWBnxjfhsoJgjHratB%2BpsOEnsrow21dqw5iEv%2B1lreyv1kfKNxwrcyueHhRSfaaOVd3qjCtn6DEBjqkATJAKmegVgCeQmjKsGULuqTv4I9gzgTT9%2BTY1Sut1tR4rld3se1dsEHJ803dQN4nRZ3EbBUB%2B4Dl0u9qSTQ3H32X0tFB5M0IVpOKiPaVX79CwocXXDEpR%2BkNEL3fp4WcxV8ehfsfy5z09nmI%2FKSyzajmkNfLSwVqspdZ1JMP73%2BeztZYC%2BigsMq7MWQcawxT86TCYiGygVXrngNSvVDMYlPPaAGM&X-Amz-Signature=771e6b9d3a396bbba64cd62124276400f23854fb501cbdcf5fe35a4fb070c253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
