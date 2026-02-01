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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGQDKGMB%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeEiQqtlJdf%2FxImduxslWYz5N8Qp1Tbw6mY1zkLr0O0AiAam1xRFUfTDKeUf4sGw6JVqkLvBwC9Djsl4%2BHWUSc7eSqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIBiGD4YDu5pmeYNGKtwDz7ISRpe6kLTrq2LVo7YiJsSyCdWgPxWB5VXbxRPHpJ6RPpKDtcDKAWk67MWe6y3QgFY6P9FF8FtE9tKPhzqkxLhGC1kzhNQdKWZVx7cOyWvEUIDeJ9kPhXwernglurD3wQyAl7txgtb4S6JG1iLqmqjjQDFbtfofo6pSIA%2Fursx325TGTJ%2Bp3egePjtoeBK8257pf7SV0W%2BHQ6OYvI%2Fp6Z6zmuQFxnhTJEzkPLx1d2IXBczCE4PF7XXuJZhAlGBpex7Yr1ODjwNeL%2BEcQRLQ%2BtPq2IFtb97s7VPXmUfRKyQeg8D27KRSzg0TMscNaDLSz8CXvPVJ%2BxBEhEir7Y26VOlLjljc3%2FaG1R8o6iuHCjxNgnVH55sOkINePQsFOWU0mXZB5D12S1jsoL3NHmFb%2F3Qw%2BFacqDHD1z3MsXwjl2%2BUW0rQyODrWxDVTuV6meI8gbpaxHb7VXp%2B4O0eEZuntpKStcbGuYKNnx3tznH6cTVc1c%2BU21PS%2FUJ2DJjttJvwbA9l68ZkOmSns4vf9lqIy%2B8%2Bq8cMDR4c6KOo26D1ouN0xFDb%2B%2BaBMRG9SZolzAHHBxUVh4xIu25XnauMvT%2BUb7IStmS6ycnMm1WkW9Msr6LnwwmpHKRlieGpcWIwy%2FH5ywY6pgHiM%2BsjTRCcn4I7tQ2lUxPFH%2BUmJDmO1tL2dkYKhYCgD7ZPw%2FE54VzetduGAZd6A6tl1erbYSRMZabNfisX3kspxhFmw78v5GTl43s8h7zH%2FqEcDA1zWXZu2CQJbI1YewF3yjDE8Dl5n1r6ctQBAMUiaVlveUfFGGaOfF9pfsGcd5ZlI56oQXQZNYDhWcpDzwUxjWZT1b04AvX4O589F5qiXE5tf4QY&X-Amz-Signature=81a37de5c3c2dd9fa9ba5be5bfa2f2db4f3af3274c9734534e0e8b14c66a0c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
