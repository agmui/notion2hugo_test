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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FS2QXV%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIDNXt38b3pxH7aqUBXAyKA%2FDkQg6BV5HoBK0vN97oAm5AiAdD7q8B86%2Bb9jBMwh9xjpuVzApUCOGU5pdEdRbdwo9xCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMAtBlM1QVo40K2WURKtwD72FEvb6ag0FQdBFoLJsMlkahzBosxn2haRqPdd8JLSPZ%2FISjWsS%2BkU%2F%2FvtwKIuZPRwrWaFwrBsupgnH4p3W%2B0Pf0I%2B8w%2FIUBCcGcG%2FFMKbLRC8cnbXVtUV%2FjpBoYw7MyvTgLmhkDRYYSmp2YOI8X3kYyvsYEcIUh%2Fvjmp%2BLECyJwMzkb8Xvk4xuJzwQ%2F%2Frqz3DtUTUnCIPEiYg4bXYGT5Mci7PpKndSGMIURvb%2B14LiX7pdpLuY8gKK73D%2BKWwgQcVWcTbmmDw8MlnNTXKT8YzFtO2PI6kZPADe6cpLtQ%2BRJQ8pSy7H42q0PLsXPl0kQQBH1m1Q0hJ39nUPcgN1oTLuoIcm8ArzlId%2Bt76MACKJ4LCvJqIMF%2B9BJQQ8OywnEJ1VF8VmA54kWX%2F9mvrfiSufXZvkoitI9yBFUSihuJcc2xVZ36ic4L8YhMIdoTiP1vKdmPvg%2Fw8y2Rvfp0SEcKLKBMWCymNNreKmIsB0f%2BEfAQqW4Rk8Nn0i8ExqXEwdgzaMH9UZHZz0sDsokKzI5ceXPu0ZXhN18TVkgFLKBasu%2FJpldEFY9o7jlwGQ290eRyTfEYZa2yIMIXUDdXKjWYSyYc4Xv3b%2BnNaCvFG5fdAL3aOofMUM%2BuEB6vcMwvouAvgY6pgG6O4CxbMb5EasZt6mVmfH%2FixwQIBA0%2Ffo9ic%2FwOXYiCItImLcckXNGvq4cj9oolGorxsIi3VcF7AJ7gto83THc1gj%2BhCcFiS0hV8ygAz1%2F8%2BMezlfoXr74DmX2h44NXRBNiZuwrUdII7Bq95%2Fl5GUuNv91Z6ctrso9lFnjc8AjcDYK32koXXgOf9vli4EBVi%2B%2FSeKlDAzSzZrhrKFHo%2FoZSLRapBKj&X-Amz-Signature=1310be9d3ea56376d872c9e6ecb45a8e2ce06e38d5438d8aefbf08c93f62e9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
