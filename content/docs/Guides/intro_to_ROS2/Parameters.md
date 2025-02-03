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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGVEM2H%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8RoaLTL%2B%2Bws1J8q0ajvkwovSxAxOB4mQ5mRgQzyjdoQIgNZm98Egn%2FokoumayHbNz%2FuiDThiTWSMgj2sWVFZSIY4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDAXaPRluLiw24ziH3ircA78MA%2BQpGm%2FUyYnLPyNW5QsmYHrW39SkGnEu1GkHIp06A%2BsQplVd1RAQOcB77uMhu2r%2FpTEJlSmsevla4TBL3vkm4UbWWbL3esWXOnO1FdL3Go3Wu0YY06Q9orxQR9bu6xY9FyogEcuGIJVhJI2ouUBF%2FkF7yOQZBFvKXgjWiAlt7Ski8feyLIynqwvlz6QpTLIrIwgJRX53PYoXVmINxq%2Bz%2FtZoQKTrkWPwv289BXhRbj3DRRL1U8BwG2GjTW144g6ppbVyAZl4S%2BewacKLpuJZutjhpLtci3POTTY9Be%2BwUYV3amRv4x26gJeDqN%2B5Htud1qTwN7amzm49gvyIsxL2ExLWjiCRCthDh0mp0%2BY1ublPOTiEVW68W5ijrIomT045%2BDAzJ1vxkNVPMVniPwLnhaUgA1BabbxDdAU6EdxWpJwD8TGV0o7AZDKbRrGRhu%2FTbnlUNrIrnL0Fb1tttgI199oXUhCCgZQFYknZbFLT1yPmeJI5pmBLwG7VahBDwyKFGVOGMPfm9J0Kd%2Ff5y%2FlgqND9WSmnedJ3DiJqYcyDdu5wTL6oyF3kIAplToEBsDyfrDY%2BXhfZ2PXrnFnF7Wz%2FoUFHzK4d58aizvbsjDaTtIR65jKcjENc0O1uMKu3gr0GOqUB%2FgEIDO%2ByPMaRgC2Bts30sxC%2FqcsZ7HP4SrgEUdZAgWGuytHJyDjAfBcePImUqmJFsBaFkZKSHGPMQ2X0HIXqnshkbFC5d5XG8HIjKjKyVjpELGnW57Fc26kENTmiV1rW2Q3I3YuHXTB6qS23SYZcacmw61ORy6N0yDnVGRBTXABEu4WJAw5AtWtx8woeVuOAJ5DDiDVLv2DeT3yNeyGEKrO1spry&X-Amz-Signature=a02ffc9ac674c6b965721763676b9fbea9b161094c12b0df8bfb560bed320736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
