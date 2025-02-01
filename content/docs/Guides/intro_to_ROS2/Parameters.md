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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=8de89e91e3a4ca923f30eae2a85c27cf07fb772bab228e90b825f2102a785439&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
