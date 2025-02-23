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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZEO53E%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQsiiqLnpCyWviXmaBP%2B4MpSwaCxoKWjB6EgTpdY363AiEA8DIVDKoY43SSlZ5TapKIp53kWetBdhgmA2DBD2Pc46gqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoVjKOp6vTb%2FpcMqSrcA%2F7v5tIcBl6bZOHCXsO57va7hYrmvAiznECXuwNAhslKlKOaQ5nAplfeSJmZws038v943FbT%2Beip2ML%2BTr0Mgfz1R9%2FEngYVEZSjP2SWE0PJRS3UP5E4c4xWOpH37sSJzGwxtz02ZnhzGWR0M85NTp2oyNLKOUHoMlEJ4fpcfDnaaqx0J4cpp9uPZzCRY7Uvfcb4Gflhv8mH1W2nN9dIPuQoofr19XBEW%2BweKt7DEUzHeqiWcQ6WWqX5nz1NcUwf4GWKz8JlwC9bvFq4akRQUUPQfgRKj3qf8cYRnvrCH0xng8Hvf13eyUsMz2XxiZfshja8SGrpRk%2FoNc9aX74HPqzvU28HyAl9Az8IzUpM4M%2BdEAdsRH%2FYok8l7eAm9T0QqZ0sMZWPsrZzh71APoffzRPnAzejtSHtbhrOXK%2FAYIskTNPjk4L%2FK%2FjpEhRoCP852tL0XFUEBqP%2FApz1rlF0q2wb8gWyaQ%2FBOI9sZ0m0Z3WRudjZyOUCuekreAIkRcndD802HqU2iqz8wNWIIsUBT7Rsvl2ZAOikd4Z%2FUsGV1oTMwS%2FoU5X2nZFLy%2BBrF0ehl77t6yWjxwICfeqNvLoUtqx74arPzdKlFd6Vw8E0HYBgm8JaYZ2C0ZywO4HPMODI6r0GOqUB9yOIQ8rm8HKuRJ2oehGcis5tv7mtRztodHhJEZT3fOXXzOovkFu032chs0SdV7sXsvdYAWSNnzDXxwls0dqTbqTdbfFDXwQgfWwjyvA8WI95C0sCQh1xoGSE9sB9UzcI68bVsm306lbTogMIad0hobaJSX%2B%2BMkfo%2FdPSGI%2FIMdjoDOZ%2FlFTqu3W%2BXd6FlKC%2B6NaFiwh2ZCymlLx%2FuFhM9CbaohsG&X-Amz-Signature=d98282c26b714ef39501474575fbf68e03fb1d6f96ceda03cd2e1298d9601bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
