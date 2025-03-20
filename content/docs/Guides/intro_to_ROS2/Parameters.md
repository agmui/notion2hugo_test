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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPZKA6Y%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIDlwhJ1o1KFkLogxPZBotBVVCTYKiblIjrz2EEjp42fAAiEA63wubhG8ypXGBOqqZYkc74Vgz%2Foge6vwxp8RoxXsGz0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNgl5BRdGTPu%2BgB0yrcA719yLFJ4mHVxt%2FsT9KEPpfwSqb85eclqWdZBcWRAErgt15VduzjbwK%2BXRWTiYmv44Dte5Pucbs11D4rlBr5aQecgO4SKhUIr95R7BZnwu77XVRwinm3N8GfH5b%2F8UXEx4pQWm8MJ8AZuGsapHDSNLiqhHxBH1KbK7e2%2FoHiu7ub1bvTsbS2I6CRvrwrtr53S1OYnu0TmFAE7zj4KKdm1N3POFoEdbozt52f%2F7mIV7Z9JY5CRKrJbDcV%2B6ca5G7u9vlucR%2FMStLW7UptLzZKrUUZvNMAULT5tTXUdA52WQHLq87g%2FxaCSGcPTNpWp8edE1h4k91Hx5oxzXEjMjCrspmvEhuK5nvI7L3hU%2BH3Yt7z6JCJbFQYChRKfW9IpT2kMQIQ2%2Bvac4BHsNbfkoya2ZCwplKRvh70y3nXZKsKeAJyRWTTTcP%2FEyygjLICsV6IPRD2VbboGzAlgwl7kYsiHuhd36AWtbXQJ%2Fia9m0657AUwkP4UP%2BakIVh94r2XX321WoKHHWEdsnRXlpmJInTwMtMnBoG%2Bi8NkAiSEbToCRJA7NLX0gBvfFV%2BIAtHPHmed7VlBti0vbHgLSFuR0rCzBUNoE04PtSSJaMYMS%2F23bKsavg1OKbkeMWj8B8UMN%2BG8r4GOqUB3RX1toybSAwN7sKtv%2FD6q4%2B0%2B692dZ9rNhtup0Os1QE2tkRgkTYkfTRaVfgKMqVqs7WK%2BDLeTjVczVI1AJjLE0vgMmG4O7xUmXO6k%2Fi%2BpxPxYGk1Ta0Z9FNGw9WD0T1XizxWnp1Ulw69Q0Dr63S5rVGtWPIBGXH35e9%2FX6IoB6jhLkDj7xUC5GuzumeQ9JZk7RfAy1unyLNyDdFvvUDhJbOahocG&X-Amz-Signature=c7430d50feb16ba2c59d058de08c873c804a7634da9e70de568f017a10cfc6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
