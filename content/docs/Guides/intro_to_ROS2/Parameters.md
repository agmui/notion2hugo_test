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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYLPYCD5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXxWMZ133e%2FTmUmr80yI5pPcQ560Iw1oYkIktWXRys5QIgL9oK3UHY%2FP0LZK0Wshv7A6Fd%2FOHYR%2B%2BPYP50N0Sei18q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKBMSraerGFTByxlXircAwB3XCC%2BS3Q6mx0TguJKOwmT8x%2BC%2BimIMWSIIje4fjzGkUP4mdZPRZLbYpjCkaRXyFOTH9Ysr9o1gYW8%2FwbSOiaR4nBmiqmProgcVa52rF%2Bo%2BeMpBTxdgmk%2F8mRgtLY6tVTurj07LdWVnQLfAkBqdLIPrHt2iT1mhcPFA6i5DApgw4jokp1EwZh6gAVsjWQNArQGVFKlPyn7oHl%2F%2FRZmmSvYSZaOjl0Ha%2BBd8Jwf3TogQuPsYtCRtq1DiOoKHHQIAhEfQC8oZxfC2tu4ZHqskoO0zP1g3W7yrzhHjNqVkMn78RYslKsi6WZf2WuJYr4FDIaz3go3KbtYbu7LfFu78H4h9T5Zqj2ZYJfhkJ%2BHagSDsVPGh3fixM1Z1dX48xqEuOVg6snl3gVYgm1S4WoU66%2BjSyvIP5GnOOgv6k4%2B%2B4eGLAtpANiON1SzclAAr%2FdQUeQ2QzrJ7Wz12uAHj97i1kJqJWBDvEtHs0FAHBOzmv0m%2F1O8XaHFAWGIZyAqtxa7s87u9mi49rJoWzF4AES05x61WJsw6PmBO%2BwkNCdfEXWCBJIgr3i0qgeDwqymM9uaL2kUYa3pk2o4cV8zRKTnAPb9p2NfT%2FjXGksopS6pjYgaYmPxbosYFUyxG5caMLPEi78GOqUBO4i2G32xG94tZgdpnBX4yHNnuPi8cSnX0i4J%2Fv08zET3M4g1w2%2FzJrkitse%2FTkauM7GLLTZR3Dt6IrHLDScYbYgZ2Hp7QfXIW3meVqSB9AqeILFE5guF2NfqwE2hOlNtYNDF%2B8GH3R33bpKwwP2p4l3uqch8GufkKeEX%2B5x9Hh5bLpNqA4cxFONBOtPHqbwnPZTYWWve2tQr90ImwwqmM4q3swkh&X-Amz-Signature=97bde703e6c75544f4bb954bc0bd26649a5aa7ab3fee58ffa1a8f3a56c9bf6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
