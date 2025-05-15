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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337UQWMO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDSQOJoQCwbgJhI8UDhtAZkB4Ah88wOyc5DcOccthRYVAIgOXVFoA093yIDJFNisRRZL9z9WEkHY9xXhy7x%2Fad57Zkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNRHQdO0c6pg3JE%2FGircA6bpdj8zu2vDlsM%2FLG6WiHikB5SooY5HPKF3pR0czbsxpSkJJnsr8wrwUlXcbio9vnTcPNcxnLPjGhK6KrfSUfCxitvJ0Q06pAck11SZ0yH41kDCVhROrdjTtqn0Na%2Bj0eUsEgWWdPRdI%2FrLymzUJQKgxRC5%2BLjIsrmjmRF7v2rH2aSGd3NGo2nvpmFghMcXq3eW78AjcbVL8tUPD0FHNQ3uh%2Bdubv4r98ul51GrMc8hGqPLUo1dEL9gsaCmxhZTeNX6%2BmMCUU4kI2bTU%2FpOOju1dalD5FnudPjmN73Yg9F44i9008Gf7TZtmRfz5cp8EwvfTNIyTkAcSuaA%2Bw3ngdhmNGkXfg%2B5TI3IBgzKkmm%2FVSQ14UKJvotzX5xTh8uPT8nh%2FM3zf%2FyZ1TLsz6dsB3BgumNx2VrSF02kKBynvduLHo%2BQOzhADmbFXRlJj4xzauzUQcIiGsva6BRphanNtGNyXbK1qjFrJAagQ0cAJZy0oOsgzlrKJ5%2BltmhRjG4gEtvSKixodMCWajqWe4kzJ2ZoE6F0r534p9eAxUHOUyWXY31cKWvL4oYn40DTB%2BdJwipyL7mgY7lxw2UeG94EVJTtH2%2FqE838xuRjokD1eA30YIxPD2%2FWQOzJya%2BsMKfJmcEGOqUBbATBMXN11OzbZ%2BexoPHYs8HjQpy3lUvfrkGON3XgxQZRwLjjcizhVKRK%2BMj%2FzMck8m5YqdnuZS7eOH%2FODckT3azFOVArkd85r624stsLkOSz%2FSjU55I6U5QmqHDv8rnbs%2FsQoSA%2FNlPNL1A5YsRkAvQC0muK4cSkADg37MT32%2F%2B1sfbPc2V8uP0nUco6n6aZ%2FHR%2BxnW41Agx1IOkY36WlFZr21hx&X-Amz-Signature=62f13f8b25b6e0fe6c32d03ff619414857ca8b049d23d644ecb918a5bcfe817a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
