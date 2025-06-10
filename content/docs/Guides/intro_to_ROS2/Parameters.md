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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T7KWGD3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnPJVOW6ClQCziL50B8mLoDDfeG4%2Bp2IoiTBEGymS3iAiAHBX043QiLTGEZCijzYswQmbBfS5fQX5DwFh%2BC3maCtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhZNl7mGul5mhkPmiKtwD3eSfiV2UY0W2w1hfufaNOZ5zesIOq%2F1d4i1Sx2zvJphGtzhfKz%2B8tNDxOxp%2Bq6134pkxAuSgvLiGBsirIQUpfYk8AcGZ6dD22mTyZETA1Tq77Ba0UNRkOKnSQtmVuV%2FrmmqLLAR0E%2BePCcHENCOg0cksiK4mR%2FtZOiaGXUFVArQZWIN4%2Fu6pHIRmrM%2BlavTTZEMtqC8kl34dT8VKrh9g9ImRBTDIjtWEPmJnCLh7JIz0JkvZMgeDKg6ttzcJ%2BwqPc3EkIZx9eKv7nZW0aOyec5YK7r4NdcKNjSCQU5CAFI9mqRL2J3u1Sj03T9jvrNL6hhBdKz3hp6ls1QxeWGxugCCaCo%2B5zHsd4XQUjttVjf%2B03dIui1zqj6K%2Ba0CxC47%2BrgB%2B8B6MLB%2B4S4H2DLepBjk0SY%2BdD2TesnOXTVwbb69iPZuDQYI%2FzrsO6EwH%2BCVPL2O6Jut20QrhyRLuQRF56HVrdz%2F5V8a31np3Vs%2F1D0rKugTiIIZe17RKqN8s7jL3Gog0yUCiMzHerlEkc6lhK8mEzPjri9u6HlWx8VbHq5pr5a5Sfb%2BC%2Ftms4A2Q1GqDa4DiKfeCUWXVcJRCrHbUtF4CuZkjKzoIDbHjHAjWj6rbgTr1aY515VYjOK0w796fwgY6pgGauSvnkt1vfTn98RfMYYs%2BH8GsRZgk88wKmojCEB3VQs5SrjGtbNk4z%2FAeEsLyt56x6SkcQSUdt3k%2FpqwcZUdFMOhmBRmlpvDJNg30UUrgJFQ00TJKJ1BUouL%2FRdAGSuawQFB0aMTsyUJ6xittFhBeOGhYCOiWmndgDhchluk9u8pg12f9XWkjN3%2BXqVuMcxImAiyDYsqzF10Z4BZMAaF02hm12dpW&X-Amz-Signature=f69e9a80cae48dd006597a08a3899fb47999a8a2df8f12905bc6e13d169da23f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
