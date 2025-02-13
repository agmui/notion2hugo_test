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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBV42T5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFc3imKHJy3PHs5DVh6bmrF9zCqFQQhnXXOOItb7QkGfAiBikOyK5cBP%2B8kyhv2jGm%2Byu3cmL7BciF0ICNN38x2xLiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgcyHezQQjXWpxGecKtwDO6CZK1cW69lSwChkhpv28KLOzsT9BC%2BefWQx8b8mbAn3BwjyIE2NGmu1brhh9nW3pdMdpSkOgvCe7v4gAhTu1XoDDKXmKsT4TgWH%2BlAr5zfrJ%2FRxSOYMSxjYhtu96uJt7ZyR4JDDNLnorumG0%2FRJcR%2BBrXRbTVTKl8TUG1uu1ZZwyUlTlXNDiEBAQ01JULgXiOvdGddJz7ETdISS5y%2FYq56KPfyIRXnev%2BGr8aJ9IokugEhaWedE1ZYLp7VCQQOhiauq8TSWGwdgOZ%2B2lhg815%2BK0KfX2bsmWUnm3Y3Q2cQjIajwp7QzI8zMRt1YnwRiR5G9RfBZYaM%2BQnwg0ve6%2FLpgd0RwsxLvPme7cM6kaj%2BlsWBi7HN6dMUgBcRM0iEZEtA9wqfoFghGHnY%2B4pyq2s1j19l779htF0%2Bn7DGuOY%2B85bi9En6X5Fm9KfJNLPq7ozH90vgefTScr%2BH5rj7bTm216H4yiogGGSNgf8yvZyveFO4DJzv0nuq7PdIpBL0XBhve3QZ11aLtq3lgsf4k3GD4NEt94GHw5jb2Af%2F6gLnWRE96IgM1TxTEUAUXkMiI9CsOM7gf38B3S3Lw659gotKXUm5p%2BK3uZBnsviymgUAsqFyaLfogI4W39pgwvpi1vQY6pgEdBWXIrOGbCx5e6j7gAOmp0Ey5ipQQQ9tC5CtprbyipakPOMZjX84l3O5%2FMQQz0%2Fji98o8H9ook46u4WWSrXkWJLW83O2HKOKtZdzwFaeXMzzJFxLjjet%2Bmd%2BdWJRbPsrwVHMZzdDCCzbkj2QquwEEntu%2BQgjarMUbE76olYu6BeTxIEGtpV1nH2sTT5CaMUdIs%2B1Zly%2F7AT%2F8q%2FAe6ALCfJVzxXEB&X-Amz-Signature=d72e3c8cead90ba5c0f315fabe3b539cbbef7504e3e0f1602c9ac3c535657c59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
