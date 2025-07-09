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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSOBMVB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC5a4vBZMGsVAJOpJCR%2Bqj9mCeFnALJsMUalk%2B8WGZdgIgNRsHcBLL2yB2Ti6MUYs0sEf8vN2x7ZDDiIE%2BqEVFG7kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdIh1OBtTrgXBEknSrcA0g7rQBsutE9iwxH0XqFUCtPdAlyqBCVcFfBhYk10wf1urn7O%2Fs11gPO8CPfBbRLWcsGWN4UxGToi%2FqhOikB4wHi5UA657Wi%2BKypD812LhHuX22%2Bi5QrXCVqRCfaL%2FRgN3pipc5Gy7GdRGqQ57FjvK133kPnWPuTmhnsNnXfY13yVvwQjIKJO0gSBPwFtx2xKoBcXpVUB%2FxTToLTPjrzR4wrAvJ3KrPSnPAstsQoPwEONpdJMLEIaAKWSXWoLKqrX4cuEbsTIx0o57ZfGmp4ASmTQxzbMPFKptjLnoxjlxYp06KSzGoblWmTsJtSMVS7ELXKcgzixwvfuR0jiDxQUHx%2FMO2Ke%2FuVEX4nOK1Jk1n5tH0wWoBEzdvFOyn8UaxSR95SG%2BxyHly32E2aBUjc81k2%2BXyepazKuL0sZ4QL9UmVIbA5vH0aDyb0iz5x%2FseOnrhcCK%2B82FkKfKhGHNupYVP1W%2FEmbtA1ytOy%2F0b2driu2GHAqVdGZhnMkXMaHxHSuTvS%2BAu510m0No2zZBvKPZWXcxDJVbL6zQ56pZClnYYvCIaXjaZKShYabUrnxLyG0JDGDxsXF%2FpA4Ejh4ud4I7p7paGYrC7l7ExAKivA08I35Cu27%2BLNHX1iYf5oMOKXusMGOqUB%2FFOqsUQQCJhtCwVhYJGQfUdqNaKbL8LGYSl9icEtw%2BAJ%2B1tq6lvy0V8PaIcohbIkhpVfIbW%2BfMfkgHS6V2aJ6YPkDL1XPH12WJwRRthvE8ycs7wjqtbctViwY67pDyzL7RoYAo82bak%2BVpArTnqBw4kE01kLPuOT71caxfMbjbCeQPaMC1q%2F5o3fqDuMxe1FlP%2FhbNhTgndBTu1gdh0swXy1GdpK&X-Amz-Signature=28bd8267e1139abf51d77cf2151021e85042860c6d3a9e458459aa9206395759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
