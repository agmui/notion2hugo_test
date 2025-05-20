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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PAAV7ES%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Kr3Ee0dVWew6%2BymVwMh1YL6bFuJGXUxMPVvAp4Ua4AIgGvK57SQRsNQmyR%2BfJ9zxzR8387Ivo0%2FFzx8TJU6GUGgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2s0vtYS5OGBS58UCrcAwly4Yi0fW8hbHwBUy7oUf8U8CsuiwOA8rM%2FpT6tJoLr6SyULeJ5ttXowSF3Junuw7LGf1aKIy4zSA5SodhKuZBCTYHiPPzM7kGSF2xM3yOzCdiPOQCRCByF1v3%2FD7HJ93dI9ztCvX6IKVspytAnMiH%2FWgafDC0ZcGRPxgDchVSM8gMkZp%2B1v9Wqwtp%2B0QxIbchqAAyolx3tnyezbRRQiC0lvZBGv6bgSL6w703VcG%2F%2FW2pv2k6pcSscUJzdM9inWFLRcc34j73QOXPX8l2aZ%2BBNNiFfi1DdU2IlWkTveq%2FDi75s2%2BAZYn0grlApW4%2BUoUdPA7D29WZPM%2BaBJ6LNYHgHwP4ZAzAFNsfilHXt28nUz9sgFk%2Ft9ef%2Feq8olHChjX%2BQ9hoUXBART3wuf6WGmUlZ8Gw9EM5WQZwv%2B%2FvuUebU%2BKz9bEzb5cIiLmOL59LCJqkZJ%2FGq1ED5nD5ylw%2BLJ1AZ8sTYIZ8sq5FiL%2BzuZLbMoppfvpkh0BC7vt%2F1sUHq42z%2Bg%2BhndgcNCqmU0bU%2FWJf9tgnr7NBT9lWZQwtnM5Kx8C3Pw13%2BaOf%2BKqAd8GJ6btyiE6j%2FoeK4ro1zd0ofcpKIUGnWJYRMU02KeJSHzGdVUuO9br1F%2BZ6D1gUtMJKtscEGOqUBNK1gHyZnivpBIOpGut4u1uMONjMY2LUAiUxXCLBiKrgWYSfKudi%2BJBFXeQoGQ5yYHzBh5O7rZretO0VuxOpREyE1tiiYbRmnBMz4UGsPtw4hLiXaRyYKM0y8Kly%2FJrTTyPUIbhk2%2BfQAB469mFP4z9uDs7A1x5Ep%2FHDJYsIiMI4GOfZn%2Bg5Kn9eJjQvBzLkfX52cRWMuxJp6xAKVV0YIgQHW7jW9&X-Amz-Signature=d20653b7d3619c612fe04a6578d65c75464ae04c57ed85a4d8a9cb70702e11eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
