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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBI37N3D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAm0kZzIt9%2Br1YaEge7aXmgwJWavhv6EaU%2Fu3z%2BljrcJAiEAwEs54gJZMi8s7h2t1%2FoGLcAxjvdmg8jLw17tfzjjWIoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJubcOX4UcH00461fyrcA8QZAaLE1NM6xIWkfBUoRuGqQ4URAs1BiZJg8z9DEXpEdpspESu58cWBpYfmumj8903P0IiBx4RqX9PMKPlD9qQv3gG3bwfrY6b8kgtE1owUtKjLcTOdUSbr7hL8TaeSnH7vJOBYR98KW6xn6Pokx90ypRfSDZXtfggAwoOf0ST0zxCBs%2BULLziBk1dX2yzV85tPienPgRdCDd67s67tg4BgI8asUBOjj9Gh6T2jtsuDIqHB4EsIr%2FiHa4qbq%2FY1D3XX2QI3ForjhJZzcoEgHhmnyzqBL5mHJVtzo3UaHX%2FO6X1nTDIfhxX0Cye5wb7pZDFdAl08jDt6IZ2zSoVdrque5aAjnnSJk%2BzIczVh7dSPu4PgPMZFysm6WhJVo%2BQQ1324iza2Em3yrBpZAD06xNEUDbR%2Fv4UeqsfQCfFn1O%2FJpq2D7D1sZsNklGoiZ9NjPihofeuWU5ufXJ6e%2FuAuz%2B9A4bKZ0cj5zHsyS6TL%2BC9esTwdlAN7mI0YlyB8E%2Fu67jEli2cwqW1tMcwvIIAHvEBdumQ0zHLw28PFJhi77IsITt%2FJW%2BG0EoDEPPTPhHwm3GksBQvmEpZIbzTf13yd5qGd0LiMIib%2FemaW5fARMOl6yIBy%2FcFmk4e88VfqMI%2BDhcAGOqUBXrjL%2F4TvvaJsszf7vqwX0dZrykz9ojnHKS3qJVdxIW8XOfiirRuR0quArB%2BQ5lvm%2ByfjCECz493rDgtKXHOuj75%2BdThXoXcU01L%2FIzDI53j8%2BpXIQh%2Bf5F1kZRL3FcW9U%2BSKaaqo7FYwUXYjOV6vZljFKCMGUWkPuyMPSzz3TTlriU6wtTdNx0P9aBOiL2hueV9kGlZyTgRQpdC8vGIujNLkH9yt&X-Amz-Signature=a8c443156c8f3c3374fe652a41676ef945b459987c3160502605df63fb9e773f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
