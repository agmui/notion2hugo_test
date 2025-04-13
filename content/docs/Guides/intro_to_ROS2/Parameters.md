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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HKD5D5L%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIChyP6Y8jyn4x0dsFZCGvFJFPhLSolrbmg3RmJFP%2F2DwAiEA8HO4VVM0FRp8hxRZR1WvmKlOe4AJ4U%2BU0%2FFch95JauwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPy6cubVEgsNVlS0USrcA0VL00TilCHASeEWZJKDM9JFrLl%2Fo%2BYiXYq7YbbjeFxAQvNkMLv23iM79eH8skc3zRq2IcMiS9X57uZgpGxq9JGmQDy9351ET30vlTxdJqn0fsBEJD17UzUrW2eaWBSPg9MHRzbLf3S0ppEJf%2FXK2Y%2BNNgrCVeBugeonA6suE0uy3A2BOKA4q%2BjxOROYJnnFbpzGnXYwB3JY%2FR%2F3WoyQc116S2tLopxqwudb1w1obKlS5iLhUHGQaFKLrMoOf1wE4znJCkrm6%2Bl8JFOrZVKEBtiCiS%2BIdK9qEGQ0AbtDnE4qkYEndPxVAC%2BiLviscuEVwY586x4IpvWGll3IklXuScQpNh7DG1RuD7m5Se4zai7s2h3syNStzQjHgj1wtK7KGIjpDottzfZr%2Bfw%2FETTwmAgYfrPfEfVqBB8cp1sd8ved911vPmIiO1TKc3biaHu1yynGrvSeS28un5u49ciy81JMir5ATC4Il4CYFdd3zxxgUyoblnnQa%2F%2FZkUUR84%2BUbizL1KrrXgymDjEXjcKKaQl%2FlBS5sIYQTB%2B7IE4Ub4gR8l%2BCmtrl93IY4K3TvTY4BkCT0TYl6AxqCj%2F4RpbOrqLq6qpZlwT08GMrOmGMs7IdxURpmFrwkmlltZsSMPO97r8GOqUBjdMAOINB8e%2FY84f%2Fz8HndhI%2BeejJlUcaUOo6FVUmkZ8N%2BvM9B%2B72ho42fljTRTveUzUS4hkG5BI96%2BgH3eed%2FtVxAUWLKyKBT7Aoe%2FIPvLovjdD6NHXK6FLv5m7eXcpS7CTWcKo%2F%2FHtNYwAKkF09ATdrSMZHrDwn1VzChRr2T%2BeSCrSu0ujDKICrFGZPrC%2Fuv2y7MPN3WkDTsYmenKYwjXaWR95E&X-Amz-Signature=cd1e1a718fb92541c7e9e8b3191937d5f1566ca1196a337f638cc40dfe1b1d78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
