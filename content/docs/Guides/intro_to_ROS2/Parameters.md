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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW5Y4AH4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyaDlEUgGyaCOYzkmTnykrBKx1WU8Svnll8PI2Hpb9nAiEAuoUHNyPo6JMBnv2DMGBvQPlJOP2ARS6dQT1fpS3izxIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5oi7xWVjI%2B%2FKa7sircA0aa2t4Rh2tiSB%2B%2BlgaL%2F7dY0YFe1tglLnd81Ks3sBxOOXsVi1XfUxi3mgcPJVxNL%2B%2FW%2FqJlC0EPikNT4UYU8exSdjYqyput2WjnvB9sxj7j0D4d6%2BFvfRPyjtHpTlTw%2BjdJRmaY05lq6dJm5tBXD1gjSYSsKidBMfj38mvOIf5SlhmdRHPsaPGC%2Fbc4Vv47cbffGwuERAPIEmsqT%2FoJekporuL49TIkvRQ0OcK357L9CpBGGuKDao5B07vP1FspkoyAHvSp9Kac52%2BW0w3gEbKsiivTURhi9bWPqcGSDzxOH886mPaY1IIPLVwN7F9i5e0XSb%2FX7wM9xNNeJe8APaysOZ%2F6i40NDj1H3VYv43exxGzCOWD5gswHnNMtUf%2BunVKk9g%2BL8TEMTqQlTClr4j7m12XcAMbqbCqKc0pdAoKr1QO3SGthoLTE3QZTL9K%2BmD53A7QCHb0uXqNCUrNOpDKZy7E4ZfVc0oMzlLvanFQnIj1FuTn3K8AWT4ZJXQitrLi%2FNho3KfkM%2B40ek37TCV2dRRuc7fdd8trC1gyvkAda8czXwttBFcbsq6%2BC2t88qXFImrPfR%2Fg0V4c8zYi8janVlPZWh0h41E8VeCrZv8w19%2FqVbmykhr0c%2BDOQMI7%2B9cAGOqUB45CTag6ndSaIxG3HfV%2FVntHPAGxp7qcxukkviCV5qZ7TJ7HPNJyrOm6fvJ5kE8HA7HjKP8YA9pdgWOIkf%2Bw9EcuuzNTru0td89CaWGECAjZnDkEwUhvcLTyoUyD8MxVb9CPaM%2FSpN%2Bv1uEkICgs4D5Qye0hL2Q7%2FjD2TytZJiyUmB5mHSt9aPAvX3AxNKJpqeSTHQr9mu75oyfjCsbHfbqW%2FXAuu&X-Amz-Signature=65f023516ee2c288687ca6b05da56de7d5bd2f5aef8d1c3f4fb1d786c9e611fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
