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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CSUMZRB%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPbIeuvJdABnDf0npQ9JylDF4aib%2BgnJzc7IQlaXDjaQIgDkgj3HwAQCaKyvPtBVOa37X8vrrPoKnCqvYSuG4WTVsq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDKySyQyyq32%2Fy7u0uyrcA%2FeOKHiHL29gL%2BfWHs5eZRY8h8Gc4QGYGrBqVnJyUEWEir4R8wLHePFVGzYH3YaLY1Ibav99FAw7%2Big%2ByfOOrf5nX%2FlMUBzEQAoeBCZRRO7Lb2NCI5L%2Ft78i43kZoht9cmOXr%2FsUhuiqHbhterVY8Z5LjKdrpalkSWm4erDmQQwZ1kP4EZJOKc0MNSDJguHNqg7bkZr%2FPTiz3T3bJ9eDitgdIwn3KRfPIsrrMqxuyCW%2BvHyrNfJJElmt36ZdAecOnilP5XHA4k23kzQa%2FWcUzvuuumlGPJzyJz4HoGCdRZTmVdu98NC6DUgrX7LC6cTFv7mDmOPOGPrR7RQ43Jf0J1GcvQKNYWA9Yq5r1e6FUxpDNUyBBiv13UddtNpRfXC4Sg2hhJeG%2FljvuwEtiNXeeibRlMWlifLqEIZ7dynisbnDiQ%2FIY6DdxTjuzbDAr4aVbODIxILfTCCQG2KIuushwBTgOwtdLuR9ltAnTz%2B0MIFmeMV%2Bofsyt0U8hhfZR86mES2o7IhzGozCc6SCxD9MeFgtFfU%2BrlnRfR9dh3kLU14FgkhgkBKJVP8LwCPAHBRgotRKJpM1XsuhcrL%2BG3S%2B9L8NSdhONXGXXjTUQP9TcMz%2FZPcAMobg8%2FH%2BHXVnMOyQ1cEGOqUBhunFQNhk6TsxKYVb%2BX1WeF%2BtQl6dG5k%2Fn1kAFtD%2F%2F6QLXTPdrM0k3y5%2BKbXc8irHTlrUMrP6hC%2FI2wfADHx8bBMmLcZVFfJyfi9qeNWdjtOq75UG8LUOVnGhL2GEnGpMUBG9qNZuEDYLnLUTSHtYPztey2UXCOvRmAo2NkcCmr2fSb96GXjEWkO%2Bdg0jxHQE7Bqit89mqb5HHLCaR8fjR94ZV1ti&X-Amz-Signature=51f468b608505aa39a48708d9ab44888ad76c1bc9f7e6d12caf98791801e601d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
