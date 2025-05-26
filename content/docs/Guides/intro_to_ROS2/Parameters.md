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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSEHZTCL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZduA38wlhWy%2BBfH1jCvACBio%2BJNtRt7QbRzeF7aa5UAiEAr35qHNcggvTEwEbA7ipFv6rv2kp44RRAOKtIohmbtesq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDECX8mNy0gsXli6aASrcA9IaKj1uES6t4y9e6zhBYMnGyj%2BBJPkigb0DJpBEYOHesrm0dHvhWkdxKa4a8ZbgQNiXuooFZnJ2MfA34ExHREvkuGEEUYFsycOmmZz85gdTNgf3NZfrQLs3ODj1IA0zRXLiTMkVnGm5U6RDQTF1ppdKnmkM6F7EtcUGUbVYQmXrBPumD8bOOGUhyJckAetUkNqxMV3JvsNL8V%2BgKY%2BieXyiM1gk47eTkL4Oj6jza%2BnUQFsyp0md4%2Bph0WtgVrFx0X%2FztNcWKPXapY2EGmaZKYCXe%2Brj2cYmp9RacQTHIfs9f451DRAT7RdMmKzXev3NH%2FIp%2BGUQ%2BcfziCmwAH1cVFUfim4JDYIAgYcGr2dt2ff%2FIQl3Wht5GRpAqDoLAurr45svhhkaACe19hpT5kJwk5BjPVjFTyGgFX1Lq%2BCsSGp27O3hdT6hxli6s4pl80VIFgD816Rg4xOGXkkXE2NhO%2F3f5iNfbLIUYo2pHGuPkZj0MI50YwqTClVqSrTdPHrkIFE2CSTo8TJefvhme%2FEEiW%2B7T%2FOMishnmKQgZAq7Zqfq83My9UXIXFflIqoNOjVuD9Qt9LpcYybb7oWdYBh%2FfjJBTPRKB4mlovS5n00FfzYFqpwu64j1Vs7JyZnlMKrQ0sEGOqUBjSUyUv43HGCgcPSZ7WK4PioYkE5L5KXWEqEjYtFImVNhTlzjE16AASNPPmxl%2BCau46Vgec0EFnsLhlXs47wXcPgdg%2BTlTxCqokkz0%2Bq2awusW7w7uA3S2Oa7dsQUhGU6Yc07XuSliixZiu%2BwQtlE3h%2BKZY4KoNv%2FH6PfO9dy6NRqIZN4z2ntFhp4Ie9dwYKvn9sT1cchUP63Sfz589t5KbsggbkN&X-Amz-Signature=ecd3c23ba0bacee96b61179c213c524534cdf88e07afec1c5cce597a3e3b257b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
