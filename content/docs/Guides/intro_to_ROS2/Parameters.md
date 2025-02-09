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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKAWV62%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLOnqXkVMb7q696nh39NimtKosq9VBiB13x%2BRY1mGm5AiAp8GBz91umN44HWVy9S%2BMlepm%2B6qCvX6ffo5agCkelwCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3G%2FrknvcakaYBvreKtwDPUc2nWHDqfR4S8RDWbT%2B0BfQ2kOpuqcKWS5gdguYUXNpE44l7CaP2ZXeLf%2BGHmj0yuwNhYvCkrM4YkwonTl7NvYIyU8MLj%2B1ScEk1FHNu8FPdwt39C6mnNSlASBdmaVPtvugg7uvOIZSQ9Kq%2Byyg2ABWU1CQmG%2FaeQTJE1QGa%2BKE7c8JM0UQdVKSm9PCH0aa92PB10A4axpRVbrlS65OnxdpRgSkw6zwBBFkuUsUTEBq6JCima1p6SEtz2CWlS1BoU2saZxIT8kDKbavXPuEktgwY0viLUVU4FESL21vQkyLGFHqKJWXMN3oFuFvUsEZBDs0tt44%2B5VMCSWKnEke9mBwE%2B4z6hNHwAjIL%2FvzRhfAJNBT4CUM%2FQ7LNyWJ8nsfnKRol6eVVQXXdPtw81wBf5a4V7yYGAZEr0YZHpUR1Mdf9a1sYowQS%2B8TQI8MExiHxUT%2BN%2FmOp3RbCYaPlCcMgcYXGWV4jQ1ASS5cgD5Vdu0N6oRz3HWhQLYAf2dhIPptzdyN0py%2FVkiSXkSKuhlwCwFeWoPniu1rVj6bClfxS%2BrIy3WspKz6VZB9lFfmzXXNsyHV%2B0oXsyliSRP5hrMrSC6j2yCKX%2BWdyaYhCEA67i00FbTmU%2B23CFPECFMwwNifvQY6pgHowHan3QeiaX3tM1u%2BYC%2Fs5vBiFf%2FOTxu04xhtnlqgM0ZqWOQNmP8WvMlzotXAQfNiDi2A8Te5E%2FvwGWmgCqe4An%2Fc0U9XYdqdx3J2P2tQx%2B6Ws0Kdr9OSsA5RJjRwCDfNSZCDx3vWRL%2B5xQxGO6CPgVKK%2Ft9%2F9R6ed0G8DWwmayHFE3BaCUHfe4rYUllBLEFTZFEK4PUGnaeOKxDL1Q%2B%2B0RovkdDq&X-Amz-Signature=11574e3e04df7a91e9a1b269e25900a40c0a30e3911cec051716c50564bbe7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
