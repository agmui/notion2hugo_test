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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KBOY56%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDP2jQMKv%2FMOEetWr8O6XK%2BzqMqlWfevJ7EhWQdyUlY6AIgHVCzmX5wkKCahKeT6s3tPElwbGM6zefIKDjIh6TwMgEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNn2iBWBwnbbvjQ3gyrcA38xEiRGdo1PjT9%2Fj3dvzVBfUy%2BKHFwoNBAqSl86gYPQKZIX5QHSx%2BpPZ7YZbaeA3nsyBkX2UMuNoyctDyIbFVpakANvBWlogy1YabTGHUqWHZBMdTv%2BwjMoNg5KIWNsTuOzNemcSb19XwkdOinawEt7UNMbb9LjqlcPco1GbJl9UDGdvWrSV%2Fu4%2BWWo3RKZ6phU5YZnxaXGxq%2BtIEoPy%2F6J1v1XiZE62jMZ3PMHnFuqlaWDWs3voaIC%2FNsocNeJ3Ta0cEbBGtkI6ihj%2B8Movg8tTKxNrkNnIAWPw8ci%2FPKoIxcYGGQzswCETNUZvy5ieBrPK0RoibvzD43C%2B%2FHpg8WOvLXcm%2Fp2B1CSEnOdC1p%2FG2kQOO8EPF4MVOgvFHOlm8mMUhDsWVL6mXq8LNcTxaPE73FGQtqC2u0bnWMfEFB9PntUC5n0WHRUVvuEG2mCEgE%2FiBQHIUYfd2bEBkdATF%2BCGp%2FEWgrfUixpPLl5sfsYRErTG2ricRHEnrJ7CGFIhRk92RYwbt6mNa41MetoNMmcNNLgbh5SYnl9JrTdA00fJSZUX%2BO7BveUJ1Pbtz9hamVKDnWvIYJvHyr0R7L5IRZb9oh2rfCz0X4JIuY6U3MfDZRtH2dYbalWqnKIMLntwb0GOqUBLTkeJ8R0mn1QobbGD1X8pe0KiBCE%2B7nnh71eRvjHD4BkLVFg1KLNhqKots5BuFbCuPy9B1KAMaRu%2BjUWb9cp62JmKO5Tr9L7OqYogYRbpuVN587EzmH%2B0kN0j4ETHDosNYdf2bed%2FEyF62bTCwZVaYy5YxlAeSpvHnNORhp%2B7B%2BZPz8r52u7cq9W%2Fr87Nlm0LNPAmrIoQ%2FUUjYHkLt0f%2BNg7A%2Bo3&X-Amz-Signature=d07f936471814ea4e53d75a512570365342566210b4463e56cfc61565fedf857&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
